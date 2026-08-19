<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center bg-light p-3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow border-0 rounded-4">
            <div class="card-body p-4 p-md-5">
              <div class="text-center mb-4">
                <div class="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center fs-3 fw-bold p-3 mb-3">L</div>
                <h2 class="fw-bold mb-1">{{ t('signup') }}</h2>
                <p class="text-muted mb-0">{{ t('signupDescription') }}</p>
              </div>

              <form @submit.prevent="handleSignup" novalidate>
                <div class="mb-3">
                  <label for="name" class="form-label">{{ t('name') }}</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errorField === 'name' }"
                    :placeholder="t('namePlaceholder')"
                  />
                </div>

                <div class="mb-3">
                  <label for="signup-email" class="form-label">{{ t('email') }}</label>
                  <input
                    id="signup-email"
                    v-model="form.email"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': errorField === 'email' }"
                    :placeholder="t('emailPlaceholder')"
                  />
                </div>

                <div class="mb-3">
                  <label for="signup-password" class="form-label">{{ t('password') }}</label>
                  <input
                    id="signup-password"
                    v-model="form.password"
                    type="password"
                    class="form-control"
                    :class="{ 'is-invalid': errorField === 'password' }"
                    :placeholder="t('passwordMinPlaceholder')"
                  />
                </div>

                <div class="mb-3">
                  <label for="password-confirm" class="form-label">{{ t('passwordConfirm') }}</label>
                  <input
                    id="password-confirm"
                    v-model="form.passwordConfirm"
                    type="password"
                    class="form-control"
                    :class="{ 'is-invalid': errorField === 'passwordConfirm' }"
                    :placeholder="t('passwordConfirmPlaceholder')"
                  />
                </div>

                <div class="form-check mb-3">
                  <input
                    id="terms"
                    v-model="form.terms"
                    class="form-check-input"
                    :class="{ 'is-invalid': errorField === 'terms' }"
                    type="checkbox"
                  />
                  <label class="form-check-label small" for="terms">{{ t('agreeTerms') }}</label>
                </div>

                <div v-if="message" class="alert mb-3" :class="messageType === 'success' ? 'alert-success' : 'alert-danger'">
                  {{ message }}
                </div>

                <button type="submit" class="btn btn-primary w-100 fw-semibold" :disabled="isSubmitting">
                  {{ isSubmitting ? t('signingUp') : t('signup') }}
                </button>
              </form>

              <div class="text-center mt-4 small text-muted">
                {{ t('hasAccount') }}
                <router-link to="/login" class="text-decoration-none fw-semibold">{{ t('login') }}</router-link>
              </div>

              <div class="d-flex gap-2 justify-content-center mt-3">
                <router-link to="/" class="btn btn-sm btn-outline-secondary">{{ t('homeTitle') }}</router-link>
                <router-link to="/change-password" class="btn btn-sm btn-outline-primary">{{ t('testChangePassword') }}</router-link>
              </div>
            </div>
          </div>
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
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  terms: false
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

const handleSignup = () => {
  message.value = ''
  errorField.value = ''

  if (!form.name.trim()) return showError('name', t('requiredName'))
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return showError('email', t('invalidEmail'))
  if (form.password.length < 4) return showError('password', t('passwordMin'))
  if (form.password !== form.passwordConfirm) return showError('passwordConfirm', t('passwordMismatch'))
  if (!form.terms) return showError('terms', t('termsRequired'))

  const existingUser = JSON.parse(localStorage.getItem('registeredUser') || 'null')
  if (existingUser?.email === form.email) return showError('email', t('existingEmail'))

  isSubmitting.value = true
  localStorage.setItem('registeredUser', JSON.stringify({
    name: form.name.trim(),
    email: form.email,
    password: form.password
  }))

  setTimeout(() => {
    isSubmitting.value = false
    router.push('/')
  }, 500)
}
</script>
