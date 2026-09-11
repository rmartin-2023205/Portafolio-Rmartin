<script setup lang="ts">
import { ref } from 'vue'
import { Eye, ExternalLink, Image as ImageIcon } from 'lucide-vue-next'

interface Props {
  imageUrl?: string
  title: string
  projectId: string
  tags?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  imageUrl: '',
  tags: () => []
})

const imageError = ref(false)
</script>

<template>
  <div class="relative w-full aspect-[16/10] bg-swiss-ivory dark:bg-carbon-surface border-b border-swiss-border dark:border-carbon-border overflow-hidden select-none">
    <!-- Top Technical Viewport Bar -->
    <div class="px-3 py-1.5 bg-swiss-bg dark:bg-carbon-card border-b border-swiss-border/80 dark:border-carbon-border/80 flex items-center justify-between text-[10px] font-mono text-swiss-text-muted dark:text-carbon-text-muted">
      <div class="flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-none bg-accent-light/80"></span>
        <span class="truncate max-w-[180px]">preview://{{ projectId }}.dev</span>
      </div>
      <span class="uppercase tracking-technical text-[9px] text-accent-light font-semibold">16:10 CAD</span>
    </div>

    <!-- Case A: Real Image Provided and Loaded -->
    <img
      v-if="imageUrl && !imageError"
      :src="imageUrl"
      :alt="`Captura de pantalla de ${title}`"
      class="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
      loading="lazy"
      @error="imageError = true"
    />

    <!-- Case B: Styled Swiss Technical Blueprint Placeholder -->
    <div
      v-else
      class="w-full h-full flex flex-col items-center justify-center p-4 bg-cad-grid relative text-center"
    >
      <!-- CAD Blueprint Corner Markers -->
      <span class="absolute top-2 left-2 w-2 h-2 border-t border-l border-swiss-border dark:border-carbon-border"></span>
      <span class="absolute top-2 right-2 w-2 h-2 border-t border-r border-swiss-border dark:border-carbon-border"></span>
      <span class="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-swiss-border dark:border-carbon-border"></span>
      <span class="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-swiss-border dark:border-carbon-border"></span>

      <!-- Wireframe UI Skeleton (Subtle) -->
      <div class="w-4/5 h-20 border border-dashed border-swiss-border dark:border-carbon-border rounded-xs p-2 flex flex-col gap-1.5 opacity-60 mb-2">
        <div class="h-2.5 w-1/3 bg-swiss-border dark:bg-carbon-border rounded-none"></div>
        <div class="grid grid-cols-3 gap-1.5 flex-1">
          <div class="bg-swiss-border/50 dark:bg-carbon-border/50 rounded-none"></div>
          <div class="bg-swiss-border/50 dark:bg-carbon-border/50 rounded-none"></div>
          <div class="bg-swiss-border/50 dark:bg-carbon-border/50 rounded-none"></div>
        </div>
      </div>

      <!-- State Indicator Pill -->
      <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-swiss-bg dark:bg-carbon-card border border-swiss-border dark:border-carbon-border text-[11px] font-mono text-swiss-text-secondary dark:text-carbon-text-secondary shadow-swiss-xs">
        <ImageIcon :size="12" class="text-accent-light" />
        <span class="font-semibold text-swiss-text-primary dark:text-carbon-text-primary">Captura próximamente</span>
      </div>
      <p class="font-mono text-[9px] text-swiss-text-muted dark:text-carbon-text-muted mt-1.5">
        Asset: /public/projects/{{ projectId }}.png
      </p>
    </div>
  </div>
</template>
