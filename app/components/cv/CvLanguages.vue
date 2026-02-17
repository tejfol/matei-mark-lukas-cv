<template>
  <div class="flex flex-wrap gap-3">
    <div
      v-for="(lang, i) in languages"
      :key="i"
      class="inline-flex items-center gap-2 rounded-lg bg-base-100/60 px-3 py-2 border border-base-300/60"
    >
      <Icon
        name="lucide:languages"
        class="w-4 h-4 text-primary shrink-0"
        aria-hidden
      />
      <span class="text-sm font-medium text-base-content">{{ lang.name }}</span>
      <span class="text-xs text-base-content/60">— {{ lang.level }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  languages: { name: string; level: string }[]
}>()
</script>
