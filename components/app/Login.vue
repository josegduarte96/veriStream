<script setup lang="ts">
import { type InferType, object, string } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
import type { AuthType } from '~/types'

const props = defineProps<{ authType: AuthType }>()
const schema = object({
  email: string().email('Correo inválido').required('Requerido'),
  password: string()
    .min(6, 'Tu contraseña debe tener un mínimo de 6 caracteres')
    .required('Requerido'),
})
type Schema = InferType<typeof schema>

const { authService, isLoading } = useAuth()

useHead({
  title: 'Bienvenido ',
})

const state = reactive({
  email: undefined,
  password: undefined,
})
const title = computed(() =>
  props.authType === 'LOGIN' ? 'Iniciar sesión' : 'Registrate',
)

async function onSubmit(event: FormSubmitEvent<Schema>) {
  await authService(event.data, props.authType)
}
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          class="w-36 h-8 mr-2"
          src="https://www.verifarma.com/wp-content/uploads/2020/09/icon-verifarma-1.svg"
          alt="logo"
        >
      </a>
      <div
        class="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div>
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
            >
              {{ title }}
            </h1>
            <UForm
              :schema="schema"
              :state="state"
              class="space-y-4 md:space-y-6"
              @submit="onSubmit"
            >
              <UFormGroup label="Correo" name="email">
                <UInput
                  id="email"
                  v-model="state.email"
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                />
              </UFormGroup>

              <UFormGroup label="Contraseña" name="password">
                <UInput
                  id="password"
                  v-model="state.password"
                  type="password"
                  name="password"
                  placeholder="****"
                />
              </UFormGroup>

              <UButton
                :disabled="isLoading"
                type="submit"
                class="w-full p-3 justify-center"
              >
                {{ title }}
              </UButton>
              <slot />
            </UForm>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
