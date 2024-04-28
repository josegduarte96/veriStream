import { onAuthStateChanged } from '@firebase/auth'
import { useAuthStore } from '~/store/auth'

export default defineNuxtRouteMiddleware(() => {
  const store = useAuthStore()
  onAuthStateChanged(store.$auth, (existUser) => {
    if (!existUser)
      return navigateTo('/auth/signin')
    store.setUser(existUser)
  })
})
