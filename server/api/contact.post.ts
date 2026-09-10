import { Resend } from 'resend'
import { z } from 'zod'

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
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #4f46e5; margin-top: 0;">Nuevo mensaje desde tu Portafolio Web</h2>
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <p style="margin: 0 0 10px 0;"><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
          <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p style="margin: 0;"><strong>Fecha:</strong> ${new Date().toLocaleString('es-GT', { timeZone: 'America/Guatemala' })}</p>
        </div>
        <h3 style="color: #334155; margin-bottom: 10px;">Mensaje:</h3>
        <div style="white-space: pre-wrap; background-color: #ffffff; padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 15px;">
          ${escapeHtml(mensaje)}
        </div>
        <footer style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
          Portafolio de Ricardo Martín Quiché — Desarrollado con Nuxt 3 & Nitro
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
