<script setup lang="ts">
const { isDark } = useUtils()
const { logout } = useAuth()
const search = ref('')

function navigateTo() {
  if (search.value.length >= 4)
    useRouter().replace({ path: '/movie/search', query: { s: search.value } })
  else useRouter().replace('/')
}

const debounceSearch = useDebounceFn(navigateTo, 500)

watch(
  () => search.value,
  () => debounceSearch(),
)
</script>

<template>
  <header
    :class="isDark ? 'bg-[#0f172a]' : 'bg-black bg-opacity-40'"
    class="fixed flex top-0 z-50 p-3 w-full"
  >
    <UInput
      v-model="search"
      icon="i-heroicons-magnifying-glass-20-solid"
      size="md"
      class="self-start"
      placeholder="Busqueda..."
    />
    <div class="w-full flex justify-end gap-3">
      <UButton color="violet" label="Salir" to="/auth/signin" @click="logout" />
      <UButton
        :icon="
          isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
        "
        color="violet"
        variant="ghost"
        aria-label="Theme"
        @click="isDark = !isDark"
      />
    </div>
  </header>
</template>
