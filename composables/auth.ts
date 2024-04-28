import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@firebase/auth'
import type { FirebaseError } from '@firebase/util'
import { useAuthStore } from '~/store/auth'
import type { AuthPayload, AuthType, ErrorAuth } from '~/types'

const errorAuthCode: ErrorAuth = {
  'auth/email-already-in-use': 'El correo ya esta registrado',
  'auth/invalid-credential': 'Email o contraseña incorrecto',
}

export function useAuth() {
  const store = useAuthStore()
  const toast = useToast()
  const loading = ref<boolean>(false)

  async function authService(payload: AuthPayload, operation: AuthType) {
    const service = {
      LOGIN: signInWithEmailAndPassword,
      REGISTER: createUserWithEmailAndPassword,
    }
    try {
      loading.value = true
      const data = await service[operation](
        store.$auth,
        payload.email,
        payload.password,
      )
      store.user = data.user
      await useRouter().replace('/')
    }
    catch (e) {
      const err: FirebaseError = e as FirebaseError
      toast.add({
        title: 'Error',
        color: 'red',
        description: errorAuthCode[err.code],
      })
    }
    finally {
      loading.value = false
    }
  }

  async function logout() {
    await signOut(store.$auth)
    await navigateTo('/auth/signin')
  }

  return {
    authService,
    logout,
    hasAuthenticated: store.hasAuthenticated,
    isLoading: computed(() => loading.value),
  }
}
