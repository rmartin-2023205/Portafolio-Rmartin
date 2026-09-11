<script setup lang="ts">
interface Props {
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  showLabel: true,
  size: 'md'
})
</script>

<template>
  <div class="inline-flex items-center gap-2.5 group select-none">
    <!-- CAD Monogram Box -->
    <div
      class="relative flex items-center justify-center font-display font-bold text-swiss-text-primary dark:text-carbon-text-primary bg-swiss-ivory dark:bg-carbon-card border border-swiss-border dark:border-carbon-border rounded-xs transition-colors duration-200 group-hover:border-accent-light"
      :class="[
        size === 'sm' ? 'w-7 h-7 text-xs' : '',
        size === 'md' ? 'w-8 h-8 text-sm' : '',
        size === 'lg' ? 'w-10 h-10 text-base' : ''
      ]"
      aria-hidden="true"
    >
      <!-- CAD Corner Tick Mark (Top Right) -->
      <span
        class="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 border-t-2 border-r-2 border-accent-light pointer-events-none"
      ></span>

      <!-- CAD Micro Coordinate Mark (Bottom Left) -->
      <span
        class="absolute -bottom-[1px] -left-[1px] w-1 h-1 bg-swiss-border dark:bg-carbon-border pointer-events-none group-hover:bg-accent-light transition-colors"
      ></span>

      <!-- Monogram Characters -->
      <span class="tracking-tighter font-extrabold flex items-baseline">
        <span class="text-swiss-text-primary dark:text-carbon-text-primary">R</span>
        <span class="text-accent-light -ml-0.5">M</span>
      </span>
    </div>

    <!-- Optional Identity Text -->
    <div v-if="showLabel" class="flex flex-col text-left">
      <span class="font-display font-bold text-xs uppercase tracking-technical text-swiss-text-primary dark:text-carbon-text-primary">
        Ricardo Martín
      </span>
      <span class="font-sans text-[11px] text-swiss-text-secondary dark:text-carbon-text-secondary tracking-tight font-medium">
        Desarrollador Full Stack
      </span>
    </div>
  </div>
</template>
