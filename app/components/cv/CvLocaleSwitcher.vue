<template>
  <div class="flex items-center gap-2 no-print">
    <button
      v-for="loc in locales"
      :key="loc.code"
      type="button"
      class="p-0.5 rounded cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
      :class="
        locale === loc.code &&
        'opacity-100 ring-1 ring-primary ring-offset-1 ring-offset-base-100'
      "
      :aria-label="`Switch to ${loc.name}`"
      @click="setLocale(loc.code)"
    >
      <NuxtImg
        :src="loc.flag"
        :alt="loc.name"
        class="h-3.5 w-5 object-cover rounded-[2px] block"
        width="20"
        height="14"
        aria-hidden
      />
    </button>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale, locales } = useCvLocale();
</script>
