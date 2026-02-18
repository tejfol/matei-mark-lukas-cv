<template>
  <section :id="sectionId" class="mb-8 scroll-mt-24">
    <h2 class="text-xl font-bold border-b-2 border-primary/20 pb-2 mb-4 flex items-center gap-2">
      <Icon
        :name="icon"
        class="w-5 h-5 text-primary shrink-0"
        aria-hidden
      />
      {{ title }}
    </h2>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  icon: string
  sectionId?: string
}>()
</script>
