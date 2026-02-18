<template>
  <header class="text-center mb-10">
    <div class="inline-flex items-center justify-center gap-3 mb-2">
      <h1 class="text-3xl font-bold text-base-content inline-block font-mono">
        {{ name.slice(0, visibleCount) }}<span
          v-show="!reducedMotion"
          class="cursor"
          aria-hidden
        >|</span>
      </h1>
    </div>
    <p class="text-lg font-medium text-primary">
      {{ title }}
    </p>
    <div
      class="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-base-content/70"
    >
      <span class="inline-flex items-center gap-1.5">
        <Icon name="lucide:map-pin" class="w-4 h-4 shrink-0" aria-hidden />
        <span>{{ location }}</span>
      </span>
      <a
        :href="`mailto:${email}`"
        class="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
        :aria-label="`Email: ${email}`"
      >
        <Icon name="lucide:mail" class="w-4 h-4 shrink-0" aria-hidden />
        <span>{{ email }}</span>
      </a>
      <a
        :href="linkedIn"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
        aria-label="LinkedIn profile"
      >
        <Icon
          name="simple-icons:linkedin"
          class="w-4 h-4 shrink-0"
          aria-hidden
        />
        <span>LinkedIn</span>
      </a>
    </div>
    <div class="mt-3 flex items-center justify-center gap-2 no-print">
      <CvLocaleSwitcher />
      <CvThemeSwitcher />
    </div>
  </header>
</template>

<script setup lang="ts">
import gsap from 'gsap';

const props = defineProps<{
  name: string;
  title: string;
  location: string;
  email: string;
  linkedIn: string;
}>();

const visibleCount = ref(0);
const reducedMotion = ref(false);

onMounted(() => {
  const len = props.name.length;
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reducedMotion.value = true;
    visibleCount.value = len;
    return;
  }
  const obj = { count: 0 };
  gsap.to(obj, {
    count: len,
    duration: len * 0.08,
    ease: 'none',
    onUpdate: () => {
      visibleCount.value = Math.round(obj.count);
    },
  });
});
</script>

<style scoped>
.cursor {
  opacity: 1;
  animation: blink 1.1s step-end infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}
</style>
