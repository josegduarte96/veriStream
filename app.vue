<script setup lang="ts">
const { loading } = useMovies()
</script>

<template>
  <NuxtLoadingIndicator :height="10" />
  <main>
    <Loader v-if="loading" />
    <NuxtLayout>
      <NuxtPage />
      <UNotifications />
    </NuxtLayout>
  </main>
</template>
