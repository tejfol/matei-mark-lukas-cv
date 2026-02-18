<template>
  <nav
    class="cv-toc fixed right-6 top-1/2 -translate-y-1/2 hidden lg:block no-print w-44 z-20"
    aria-label="On this page"
  >
    <div class="rounded-lg border border-base-300 bg-base-100/95 backdrop-blur-sm shadow-lg overflow-hidden flex">
      <!-- Progress bar (vertical) -->
      <div
        class="w-1 shrink-0 bg-base-300 rounded-full overflow-hidden"
        role="progressbar"
        :aria-valuenow="Math.round(progress)"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Scroll progress"
      >
        <div
          class="w-full bg-primary transition-[height] duration-150 ease-out"
          :style="{ height: `${progress}%` }"
        />
      </div>
      <ul class="space-y-1 text-sm px-4 py-3 flex-1 min-w-0">
        <li v-for="item in items" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="block py-1 transition-colors"
            :class="activeId === item.id ? 'text-primary font-medium opacity-100' : 'text-base-content opacity-40 hover:opacity-70 hover:text-primary'"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    items: { id: string; label: string }[];
    activeId?: string | null;
    progress?: number;
  }>(),
  { activeId: null, progress: 0 }
);
</script>
