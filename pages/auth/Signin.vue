<script setup lang="ts">
import { AuthType } from '~/types'

definePageMeta({
  layout: 'auth',
})
</script>

<template>
  <AppLogin :auth-type="AuthType.LOGIN">
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      ¿Aún no tienes una cuenta?
      <NuxtLink
        to="/auth/signup"
        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
      >
        Registrate
      </NuxtLink>
    </p>
  </AppLogin>
</template>

<style scoped></style>
