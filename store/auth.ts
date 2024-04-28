import { acceptHMRUpdate, defineStore } from 'pinia'
import type { User } from '@firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref<User>()
  const { $auth } = useNuxtApp()

  // Getters
  const hasAuthenticated = computed(() => user.value?.uid)

  // Actions
  function setUser(payload: User) {
    user.value = payload
  }

  return { user, hasAuthenticated, $auth, setUser }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
