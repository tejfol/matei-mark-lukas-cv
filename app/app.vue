<template>
  <div class="min-h-screen bg-base-200 font-sans antialiased">
    <NuxtRouteAnnouncer />

    <main class="container mx-auto px-4 py-8 max-w-3xl">
      <!-- Header -->
      <header class="text-center mb-10">
        <h1 class="text-3xl font-bold text-base-content">
          Your Name
        </h1>
        <p class="text-base-content/70 mt-1">
          Job title or short tagline
        </p>
        <p class="text-sm text-base-content/60 mt-2">
          email@example.com · +1 234 567 8900 · City, Country
        </p>
      </header>

      <!-- Experience -->
      <section class="mb-8">
        <h2 class="text-xl font-semibold border-b border-base-300 pb-2 mb-4">
          Experience
        </h2>
        <div class="space-y-6">
          <div>
            <h3 class="font-semibold text-base-content">
              Role · Company
            </h3>
            <p class="text-sm text-base-content/60">
              Date range · Location
            </p>
            <p class="mt-1 text-base-content/80 text-sm">
              Short description of responsibilities and achievements.
            </p>
          </div>
          <div>
            <h3 class="font-semibold text-base-content">
              Role · Company
            </h3>
            <p class="text-sm text-base-content/60">
              Date range · Location
            </p>
            <p class="mt-1 text-base-content/80 text-sm">
              Short description of responsibilities and achievements.
            </p>
          </div>
        </div>
      </section>

      <!-- Education -->
      <section class="mb-8">
        <h2 class="text-xl font-semibold border-b border-base-300 pb-2 mb-4">
          Education
        </h2>
        <div>
          <h3 class="font-semibold text-base-content">
            Degree · Institution
          </h3>
          <p class="text-sm text-base-content/60">
            Year · Location
          </p>
        </div>
      </section>

      <!-- Skills -->
      <section>
        <h2 class="text-xl font-semibold border-b border-base-300 pb-2 mb-4">
          Skills
        </h2>
        <p class="text-base-content/80 text-sm">
          Skill one, Skill two, Skill three, Skill four
        </p>
      </section>
    </main>
  </div>
</template>
