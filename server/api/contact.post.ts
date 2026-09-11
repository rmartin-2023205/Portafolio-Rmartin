import { Resend } from 'resend'
import { z } from 'zod'
import { defineEventHandler, readBody, createError, getRequestIP } from 'h3'

// Esquema de validación estricto con Zod
const contactSchema = z.object({
  nombre: z
    .string({ required_error: 'El nombre es obligatorio' })
    .trim()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre es demasiado largo'),
  email: z
    .string({ required_error: 'El email es obligatorio' })
    .trim()
    .email('El formato de correo electrónico no es válido'),
  mensaje: z
    .string({ required_error: 'El mensaje es obligatorio' })
    .trim()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(3000, 'El mensaje no puede exceder los 3000 caracteres'),
  website_hp: z.string().optional() // Honeypot antispam
})

// Control simple de rate limiting en memoria por IP (máximo 4 mensajes por IP cada 5 minutos)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const clientIp = getRequestIP(event, { xForwardedFor: true }) || 'anonymous'
  const now = Date.now()

  // Limpieza y verificación de rate limit
  const record = rateLimitMap.get(clientIp)
  if (record) {
    if (now > record.resetAt) {
      rateLimitMap.set(clientIp, { count: 1, resetAt: now + 5 * 60 * 1000 })
    } else if (record.count >= 4) {
      throw createError({
        statusCode: 429,
        statusMessage: 'Demasiadas solicitudes. Por favor espera unos minutos antes de volver a enviar.'
      })
    } else {
      record.count += 1
    }
  } else {
    rateLimitMap.set(clientIp, { count: 1, resetAt: now + 5 * 60 * 1000 })
  }

  // Lectura del cuerpo de la petición
  const body = await readBody(event)

  // Validación de datos
  const parseResult = contactSchema.safeParse(body)
  if (!parseResult.success) {
    const errorDetails = parseResult.error.errors.map((e) => e.message).join(', ')
    throw createError({
      statusCode: 400,
      statusMessage: errorDetails || 'Datos de formulario inválidos'
    })
  }

  const { nombre, email, mensaje, website_hp } = parseResult.data

  // Detección de bots por trampa Honeypot
  if (website_hp && website_hp.trim().length > 0) {
    console.warn(`[AntiSpam Honeypot activado] Mensaje descartado desde IP: ${clientIp}`)
    // Respondemos con éxito simulado para engañar al bot
    return {
      success: true,
      message: 'Mensaje procesado con éxito.'
    }
  }

  const apiKey = config.resendApiKey
  const recipient = config.contactEmailTo || 'martinricardo634@gmail.com'
  const sender = config.contactEmailFrom || 'Portafolio Ricardo Martín <onboarding@resend.dev>'

  // Si no hay API key configurada en .env, registrar en consola (Modo Dev / Simulación)
  if (!apiKey || apiKey === 're_tu_api_key_aqui' || !apiKey.startsWith('re_')) {
    console.info(`\n📧 [SIMULACIÓN LOCAL / DEV - CONTACT API]`)
    console.info(`De: ${nombre} (${email})`)
    console.info(`Para: ${recipient}`)
    console.info(`Mensaje: ${mensaje}`)
    console.info(`⚠️ Configura RESEND_API_KEY en tu archivo .env para envíos reales por Resend.\n`)

    return {
      success: true,
      message: 'Mensaje registrado con éxito (Simulación en entorno de desarrollo).',
      mode: 'development-simulation'
    }
  }

  // Envío real con Resend
  try {
    const resend = new Resend(apiKey)

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #09090b; max-width: 580px; margin: 0 auto; padding: 28px 24px; border: 1px solid #e5e7eb; border-top: 3px solid #ea580c; border-radius: 4px; background-color: #ffffff;">
        <div style="margin-bottom: 20px; border-bottom: 1px solid #e5e7eb; padding-bottom: 14px;">
          <span style="font-family: monospace; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; color: #ea580c; text-transform: uppercase;">CONTACT.SYS // PORTAFOLIO</span>
          <h2 style="font-size: 20px; font-weight: 800; color: #09090b; margin: 6px 0 0 0; letter-spacing: -0.02em;">Nuevo mensaje recibido</h2>
        </div>

        <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 4px; padding: 14px 16px; margin-bottom: 20px; font-size: 13px;">
          <p style="margin: 0 0 8px 0;"><strong style="color: #52525b; text-transform: uppercase; font-family: monospace; font-size: 11px;">Remitente:</strong> <span style="color: #09090b; font-weight: 600;">${escapeHtml(nombre)}</span></p>
          <p style="margin: 0 0 8px 0;"><strong style="color: #52525b; text-transform: uppercase; font-family: monospace; font-size: 11px;">Correo:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #ea580c; text-decoration: none; font-weight: 600;">${escapeHtml(email)}</a></p>
          <p style="margin: 0;"><strong style="color: #52525b; text-transform: uppercase; font-family: monospace; font-size: 11px;">Fecha / Hora:</strong> <span style="color: #52525b;">${new Date().toLocaleString('es-GT', { timeZone: 'America/Guatemala' })} (GMT-6)</span></p>
        </div>

        <div style="margin-bottom: 24px;">
          <span style="font-family: monospace; font-size: 11px; font-weight: 700; color: #52525b; text-transform: uppercase;">Contenido del mensaje:</span>
          <div style="white-space: pre-wrap; background-color: #ffffff; padding: 16px; border: 1px solid #e5e7eb; border-radius: 4px; font-size: 14px; color: #09090b; margin-top: 6px; line-height: 1.7;">
            ${escapeHtml(mensaje)}
          </div>
        </div>

        <div style="margin-bottom: 24px; text-align: center;">
          <a href="mailto:${escapeHtml(email)}?subject=Re: Consulta desde Portafolio Web" style="display: inline-block; background-color: #c2410c; color: #ffffff; padding: 10px 20px; font-size: 13px; font-weight: 600; text-decoration: none; border-radius: 4px;">
            Responder directamente a ${escapeHtml(nombre)}
          </a>
        </div>

        <footer style="padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 11px; color: #71717a; text-align: center; font-family: monospace;">
          Ricardo Martín Quiché — Portafolio Full Stack | Nuxt 3 & Nitro
        </footer>
      </div>
    `

    const response = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: email,
      subject: `[Portafolio] Nuevo mensaje de ${nombre}`,
      html: emailHtml
    })

    if (response.error) {
      console.error('[Resend Error]:', response.error)
      throw createError({
        statusCode: 500,
        statusMessage: `Error al enviar correo con Resend: ${response.error.message}`
      })
    }

    return {
      success: true,
      message: '¡Tu mensaje ha sido enviado correctamente! Ricardo Martín te responderá pronto.',
      id: response.data?.id
    }
  } catch (error: any) {
    console.error('[Contact API Server Error]:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Hubo un error interno en el servidor al enviar el mensaje.'
    })
  }
})

// Función auxiliar para sanitizar HTML
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
