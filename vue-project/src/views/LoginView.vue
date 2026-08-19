<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center bg-light p-3">
    <div class="card shadow border-0 rounded-4 w-100">
      <div class="card-body p-4 p-md-5">
        <div class="text-center mb-4">
          <div class="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center fs-3 fw-bold p-3 mb-3">L</div>
          <h2 class="fw-bold mb-1">{{ t('login') }}</h2>
          <p class="text-muted mb-0">{{ t('loginDescription') }}</p>
        </div>

        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="email" class="form-label">{{ t('email') }}</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errorField === 'email' }"
              :placeholder="t('emailPlaceholder')"
            />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">{{ t('password') }}</label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': errorField === 'password' }"
              :placeholder="t('passwordPlaceholder')"
            />
          </div>

          <div class="d-flex justify-content-between align-items-center mb-3 small text-muted">
            <div class="form-check">
              <input v-model="form.remember" class="form-check-input" type="checkbox" id="remember" />
              <label class="form-check-label" for="remember">{{ t('keepLogin') }}</label>
            </div>
            <router-link to="/change-password" class="text-decoration-none">{{ t('changePassword') }}</router-link>
          </div>

          <div v-if="message" class="alert mb-3" :class="messageType === 'success' ? 'alert-success' : 'alert-danger'">
            {{ message }}
          </div>

          <button type="submit" class="btn btn-primary w-100 fw-semibold" :disabled="isSubmitting">
            {{ isSubmitting ? t('loggingIn') : t('login') }}
          </button>
        </form>

        <div class="text-center mt-4 small text-muted">
          {{ t('noAccount') }}
          <router-link to="/signup" class="text-decoration-none fw-semibold">{{ t('signup') }}</router-link>
        </div>

        <div class="d-flex gap-2 justify-content-center mt-3">
          <router-link to="/" class="btn btn-sm btn-outline-secondary">{{ t('homeTitle') }}</router-link>
          <router-link to="/change-password" class="btn btn-sm btn-outline-primary">{{ t('testChangePassword') }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useLanguage } from '../i18n'

const router = useRouter()
const { t } = useLanguage()

const form = reactive({
  email: '',
  password: '',
  remember: false
})

const message = ref('')
const messageType = ref('success')
const errorField = ref('')
const isSubmitting = ref(false)

const savedEmail = localStorage.getItem('savedEmail')
if (savedEmail) {
  form.email = savedEmail
  form.remember = true
}

const handleLogin = () => {
  message.value = ''
  errorField.value = ''

  if (!form.email.trim()) {
    errorField.value = 'email'
    message.value = t('requiredEmail')
    messageType.value = 'error'
    return
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errorField.value = 'email'
    message.value = t('invalidEmail')
    messageType.value = 'error'
    return
  }

  if (!form.password.trim()) {
    errorField.value = 'password'
    message.value = t('requiredPassword')
    messageType.value = 'error'
    return
  }

  if (form.password.length < 4) {
    errorField.value = 'password'
    message.value = t('passwordMin')
    messageType.value = 'error'
    return
  }

  const registeredUser = JSON.parse(localStorage.getItem('registeredUser') || 'null')
  const validUser = registeredUser || {
    email: 'admin@example.com',
    password: '1234'
  }

  isSubmitting.value = true

  setTimeout(() => {
    if (form.email === validUser.email && form.password === validUser.password) {
      if (form.remember) {
        localStorage.setItem('savedEmail', form.email)
      } else {
        localStorage.removeItem('savedEmail')
      }

      message.value = t('loginSuccess')
      messageType.value = 'success'
      isSubmitting.value = false

      router.push('/home')
    } else {
      errorField.value = 'password'
      message.value = t('loginFailed')
      messageType.value = 'error'
      isSubmitting.value = false
    }
  }, 500)
}
</script>