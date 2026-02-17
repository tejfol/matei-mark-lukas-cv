<template>
  <ul class="space-y-2">
    <li
      v-for="(item, i) in items"
      :key="i"
      class="flex items-start gap-2 text-base-content/80 text-sm"
    >
      <Icon
        name="lucide:check-circle"
        class="w-4 h-4 text-primary shrink-0 mt-0.5"
        aria-hidden
      />
      <span>{{ item }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>
