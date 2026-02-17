<template>
  <div class="space-y-4">
    <div
      v-for="(entry, i) in entries"
      :key="i"
      class="flex items-start gap-3"
    >
      <div class="mt-0.5 shrink-0 rounded-lg bg-base-300/80 p-2">
        <Icon
          name="lucide:graduation-cap"
          class="w-4 h-4 text-base-content/70"
          aria-hidden
        />
      </div>
      <div>
        <h3 class="font-semibold text-base-content text-sm">
          {{ entry.degree }}
        </h3>
        <p class="text-sm text-base-content/60">
          {{ entry.institution }} · {{ entry.year }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  entries: { degree: string; institution: string; year: string }[]
}>()
</script>
