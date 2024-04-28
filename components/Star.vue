<script setup lang="ts">
defineProps({
  length: { type: Number, required: true },
  maxLength: { type: Number, default: 5 },
})
</script>

<template>
  <UIcon v-for="i in length" :key="i" class="bg-yellow-300 text-3xl" name="i-heroicons-star-solid" />
  <UIcon v-for="i in Number(maxLength - length)" :key="i" class="text-3xl" name="i-heroicons-star" />
</template>

<style scoped>

</style>
