<script setup lang="ts"></script>

<template>
  <div
    class="text-white relative h-[240px] md:h-[400px] xl:h-[450px] w-100 bg-[length:100%_240px] bg-no-repeat md:bg-cover  bg-[url('https://the-movies-quasar.netlify.app/img/hero-image.db2fa1fd.png')]"
  >
    <div class="absolute z-20 bg-neutral-600 opacity-50 h-full w-full" />
    <div class="w-100 h-full flex items-end md:items-center">
      <div class="p-5 md:p-10 z-30">
        <div class="rounded-full bg-amber-300 p-4 w-auto inline-flex">
          <UIcon
            class="text-2xl md:text-4xl text-black"
            name="i-heroicons-film"
          />
        </div>
        <h2 class="mt-3 text-2xl md:text-4xl font-mono font-bold">
          VeriStream Database
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
