<script setup lang="ts">

</script>

<template>
  <div class="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-white bg-opacity-0 z-50">
    <span class="loader mt-10" />
  </div>
</template>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #4a1f77;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  animation: pulse 1s linear infinite;
}

.loader:after {
  content: '';
  position: absolute;
  width: 48px;
  height: 48px;
  border: 5px solid #4a1f77;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: scaleUp 1s linear infinite;
}

@keyframes scaleUp {
  0% {
    transform: translate(-50%, -50%) scale(0)
  }
  60%, 100% {
    transform: translate(-50%, -50%) scale(1)
  }
}

@keyframes pulse {
  0%, 60%, 100% {
    transform: scale(1)
  }
  80% {
    transform: scale(1.2)
  }
}
</style>
