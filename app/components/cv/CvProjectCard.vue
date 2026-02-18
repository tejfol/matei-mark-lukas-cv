<template>
  <a
    :href="fullUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="flex flex-col rounded-lg border border-base-300 overflow-hidden bg-base-100 hover:border-primary/40 hover:shadow-md transition-all w-full max-w-[180px] no-print"
    :aria-label="`Open ${displayName} in new tab`"
  >
    <div class="aspect-video bg-base-200 relative shrink-0">
      <img
        v-if="imageUrl"
        :src="imageUrl"
        :alt="`${displayName} preview`"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center text-base-content/40"
      >
        <Icon name="lucide:external-link" class="w-8 h-8" aria-hidden />
      </div>
    </div>
    <span class="p-2 text-xs font-medium text-base-content/80 truncate">
      {{ displayName }}
    </span>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  url: string;
}>();

const fullUrl = computed(() =>
  props.url.startsWith("http") ? props.url : `https://${props.url}`
);

const displayName = computed(() => {
  try {
    const u = new URL(fullUrl.value);
    return u.hostname.replace(/^www\./, "");
  } catch {
    return props.url;
  }
});

const imageUrl = ref<string | null>(null);

onMounted(() => {
  const apiUrl = `https://api.microlink.io?url=${encodeURIComponent(fullUrl.value)}&screenshot=true`;
  $fetch<{ data?: { image?: { url?: string } } }>(apiUrl)
    .then((res) => {
      const url = res.data?.image?.url;
      if (url) imageUrl.value = url;
    })
    .catch(() => {
      // Keep placeholder if fetch fails (rate limit, CORS, etc.)
    });
});
</script>
