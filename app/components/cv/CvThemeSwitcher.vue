<template>
  <button
    type="button"
    class="btn btn-ghost btn-sm btn-square no-print"
    :aria-label="theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'"
    @click="toggle"
  >
    <Icon
      :name="theme === 'light' ? 'lucide:sun' : 'lucide:moon'"
      class="w-5 h-5"
      aria-hidden
    />
  </button>
</template>

<script setup lang="ts">
const { theme, toggle } = useTheme()
</script>
