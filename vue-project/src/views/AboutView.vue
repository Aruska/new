<template>
  <div class="login-shell">
    <div class="card shadow-lg border-0 login-card">
      <div class="card-body p-4 p-md-5">
        <div class="text-center mb-4">
          <div class="logo-badge">L</div>
          <h2 class="fw-bold mb-1">로그인</h2>
          <p class="text-muted mb-0">계속하려면 계정 정보를 입력하세요.</p>
        </div>

        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="email" class="form-label">이메일</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errorField === 'email' }"
              placeholder="name@example.com"
            />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">비밀번호</label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': errorField === 'password' }"
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          <div class="d-flex justify-content-between align-items-center mb-3 small text-muted">
            <div class="form-check">
              <input v-model="form.remember" class="form-check-input" type="checkbox" id="remember" />
              <label class="form-check-label" for="remember">로그인 유지</label>
            </div>
            <a href="#" class="text-decoration-none">비밀번호 찾기</a>
          </div>

          <div v-if="message" class="alert mb-3" :class="messageType === 'success' ? 'alert-success' : 'alert-danger'">
            {{ message }}
          </div>

          <button type="submit" class="btn btn-primary w-100 py-2 fw-semibold" :disabled="isSubmitting">
            {{ isSubmitting ? '로그인 중...' : '로그인' }}
          </button>
        </form>

        <div class="text-center mt-4 small text-muted">
          아직 계정이 없으신가요?
          <a href="#" class="text-decoration-none fw-semibold">회원가입</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

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
    message.value = '이메일을 입력해주세요.'
    messageType.value = 'error'
    return
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errorField.value = 'email'
    message.value = '올바른 이메일 형식을 입력해주세요.'
    messageType.value = 'error'
    return
  }

  if (!form.password.trim()) {
    errorField.value = 'password'
    message.value = '비밀번호를 입력해주세요.'
    messageType.value = 'error'
    return
  }

  if (form.password.length < 4) {
    errorField.value = 'password'
    message.value = '비밀번호는 4자 이상이어야 합니다.'
    messageType.value = 'error'
    return
  }

  const validEmail = 'admin@example.com'
  const validPassword = '1234'

  isSubmitting.value = true

  setTimeout(() => {
    if (form.email === validEmail && form.password === validPassword) {
      if (form.remember) {
        localStorage.setItem('savedEmail', form.email)
      } else {
        localStorage.removeItem('savedEmail')
      }

      message.value = '로그인에 성공했습니다.'
      messageType.value = 'success'
      isSubmitting.value = false

      router.push('/home')
    } else {
      errorField.value = 'password'
      message.value = '이메일 또는 비밀번호가 올바르지 않습니다.'
      messageType.value = 'error'
      isSubmitting.value = false
    }
  }, 500)
}
</script>

<style scoped>
.login-shell {
  min-height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
  background: linear-gradient(135deg, #f5f7ff 0%, #eef4ff 100%);
}

.login-card {
  width: 100%;
  max-width: 420px;
  border-radius: 18px;
}

.logo-badge {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0d6efd 0%, #6ea8fe 100%);
  color: white;
  font-size: 1.6rem;
  font-weight: 700;
  box-shadow: 0 10px 25px rgba(13, 110, 253, 0.2);
}

.form-control {
  height: 48px;
  border-radius: 10px;
}

.btn {
  border-radius: 10px;
}

.alert {
  border-radius: 10px;
}
</style>