<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <div
      v-for="(group, i) in groups"
      :key="i"
      class="rounded-lg bg-base-100/60 p-4 border border-base-300/60"
    >
      <h3 class="text-sm font-semibold text-base-content mb-2 flex items-center gap-2">
        <Icon
          name="lucide:layers"
          class="w-4 h-4 text-primary shrink-0"
          aria-hidden
        />
        {{ group.label }}
      </h3>
      <p class="text-sm text-base-content/80">
        {{ group.items.join(', ') }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  groups: { label: string; items: string[] }[]
}>()
</script>
