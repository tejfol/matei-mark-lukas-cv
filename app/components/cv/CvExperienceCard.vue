<template>
  <div
    class="group pl-4 border-l-2 border-primary/30 hover:border-primary/50 transition-colors"
  >
    <div class="flex items-start gap-3">
      <div
        class="shrink-0 rounded-lg bg-base-200 flex items-center justify-center size-11 ring-1 ring-base-300"
      >
        <img
          v-if="companyLogo"
          :src="companyLogo"
          :alt="`${company} logo`"
          class="size-8 object-contain"
          loading="lazy"
        />
        <Icon
          v-else
          name="lucide:briefcase"
          class="w-4 h-4 text-base-content/70"
          aria-hidden
        />
      </div>
      <div class="min-w-0 flex-1">
        <h3 class="font-semibold text-base-content">
          {{ role }}
        </h3>
        <p class="text-sm text-base-content/60">
          {{ company }}{{ companySubline ? ` · ${companySubline}` : "" }}
        </p>
        <p class="text-sm text-base-content/50">
          {{ period }}
        </p>
        <ul
          class="mt-2 list-disc list-inside text-base-content/80 text-sm space-y-1"
        >
          <li v-for="(bullet, i) in bullets" :key="i">
            {{ bullet }}
          </li>
        </ul>
        <div v-if="selectedProjects?.length" class="mt-3">
          <p
            class="text-xs font-medium text-base-content/60 uppercase tracking-wide mb-1"
          >
            {{ selectedProjectsLabel }}
          </p>
          <p class="text-sm text-base-content/80">
            {{ (selectedProjects || []).join(", ") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    role: string;
    company: string;
    companySubline?: string;
    companyLogo?: string;
    period: string;
    bullets: string[];
    selectedProjects?: string[];
    selectedProjectsLabel?: string;
  }>(),
  { selectedProjectsLabel: "Selected projects" },
);
</script>
