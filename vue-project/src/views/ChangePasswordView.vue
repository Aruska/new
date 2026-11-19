<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center bg-light p-3">
    <div class="card shadow border-0 rounded-4 w-100" style="max-width: 420px">
      <div class="card-body p-4 p-md-5">
        <div class="text-center mb-4">
          <div class="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center fs-3 fw-bold p-3 mb-3">L</div>
          <h2 class="fw-bold mb-1">{{ t('changePassword') }}</h2>
          <p class="text-muted mb-0">{{ t('changePasswordDescription') }}</p>
        </div>

        <form @submit.prevent="handleChangePassword">
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
            <label for="current-password" class="form-label">{{ t('currentPassword') }}</label>
            <input
              id="current-password"
              v-model="form.currentPassword"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': errorField === 'currentPassword' }"
              :placeholder="t('currentPasswordPlaceholder')"
            />
          </div>

          <div class="mb-3">
            <label for="new-password" class="form-label">{{ t('newPassword') }}</label>
            <input
              id="new-password"
              v-model="form.newPassword"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': errorField === 'newPassword' }"
              :placeholder="t('newPasswordPlaceholder')"
            />
          </div>

          <div class="mb-3">
            <label for="confirm-password" class="form-label">{{ t('newPasswordConfirm') }}</label>
            <input
              id="confirm-password"
              v-model="form.confirmPassword"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': errorField === 'confirmPassword' }"
              :placeholder="t('newPasswordConfirmPlaceholder')"
            />
          </div>

          <div v-if="message" class="alert mb-3" :class="messageType === 'success' ? 'alert-success' : 'alert-danger'">
            {{ message }}
          </div>

          <button type="submit" class="btn btn-primary w-100 fw-semibold" :disabled="isSubmitting">
            {{ isSubmitting ? t('changing') : t('changePassword') }}
          </button>
        </form>

        <div class="text-center mt-4 small">
          <router-link to="/login" class="text-decoration-none">{{ t('backToLogin') }}</router-link>
        </div>

        <div class="d-flex gap-2 justify-content-center mt-3">
          <router-link to="/" class="btn btn-sm btn-outline-secondary">{{ t('homeTitle') }}</router-link>
          <router-link to="/signup" class="btn btn-sm btn-outline-primary">{{ t('testSignup') }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useLanguage } from '../locales/i18n'

const router = useRouter()
const { t } = useLanguage()
const form = reactive({
  email: '',
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})
const message = ref('')
const messageType = ref('success')
const errorField = ref('')
const isSubmitting = ref(false)

const showError = (field, text) => {
  errorField.value = field
  message.value = text
  messageType.value = 'error'
}

const handleChangePassword = () => {
  message.value = ''
  errorField.value = ''

  if (!form.email.trim()) return showError('email', t('requiredEmail'))
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return showError('email', t('invalidEmail'))
  if (!form.currentPassword) return showError('currentPassword', t('currentPasswordRequired'))
  if (form.newPassword.length < 4) return showError('newPassword', t('newPasswordMin'))
  if (form.newPassword !== form.confirmPassword) return showError('confirmPassword', t('newPasswordMismatch'))
  if (form.currentPassword === form.newPassword) return showError('newPassword', t('samePassword'))

  const registeredUser = JSON.parse(localStorage.getItem('registeredUser') || 'null')
  const currentUser = registeredUser || {
    email: 'admin@example.com',
    password: '1234'
  }

  if (form.email !== currentUser.email || form.currentPassword !== currentUser.password) {
    return showError('currentPassword', t('currentPasswordFailed'))
  }

  isSubmitting.value = true
  localStorage.setItem('registeredUser', JSON.stringify({
    ...currentUser,
    email: currentUser.email,
    password: form.newPassword
  }))
  localStorage.removeItem('savedEmail')

  setTimeout(() => {
    message.value = t('passwordChanged')
    messageType.value = 'success'
    isSubmitting.value = false
    setTimeout(() => router.push('/'), 700)
  }, 500)
}
</script>
