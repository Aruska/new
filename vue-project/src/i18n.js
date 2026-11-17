import { computed, reactive } from 'vue'

const state = reactive({
  language: localStorage.getItem('language') || 'ko'
})

const translations = {
  ko: {
    languageButton: 'English',
    brand: 'Kuesar Company',
    leftButton1: '좌버튼1',
    leftButton2: '좌버튼2',
    leftButton3: '좌버튼3',
    rightButton1: '우버튼1',
    rightButton2: '우버튼2',
    rightButton3: '우버튼3',
    footerDescription: 'Kuesar Company',
    address: '주소: 서울시 어딘가 | 연락처: 010-0000-0000',
    homeTitle: '환영합니다.',
    homeDescription: '로그인이 성공적으로 완료되었습니다.',
    loginStatus: '로그인 상태',
    operating: '운영 중',
    login: '로그인',
    loginDescription: '계속하려면 계정 정보를 입력하세요.',
    email: '이메일',
    emailPlaceholder: 'name@example.com',
    password: '비밀번호',
    passwordPlaceholder: '비밀번호를 입력하세요',
    keepLogin: '로그인 유지',
    changePassword: '비밀번호 변경',
    noAccount: '아직 계정이 없으신가요?',
    signup: '회원가입',
    loggingIn: '로그인 중...',
    name: '이름',
    namePlaceholder: '이름을 입력하세요',
    signupDescription: '새 계정을 만들어 시작하세요.',
    passwordConfirm: '비밀번호 확인',
    passwordConfirmPlaceholder: '비밀번호를 다시 입력하세요',
    passwordMinPlaceholder: '4자 이상 입력하세요',
    agreeTerms: '이용약관에 동의합니다.',
    signingUp: '가입 처리 중...',
    hasAccount: '이미 계정이 있으신가요?',
    changePasswordDescription: '새로운 비밀번호를 설정하세요.',
    currentPassword: '현재 비밀번호',
    currentPasswordPlaceholder: '현재 비밀번호를 입력하세요',
    newPassword: '새 비밀번호',
    newPasswordPlaceholder: '4자 이상 입력하세요',
    newPasswordConfirm: '새 비밀번호 확인',
    newPasswordConfirmPlaceholder: '새 비밀번호를 다시 입력하세요',
    changing: '변경 중...',
    backToLogin: '로그인으로 돌아가기',
    requiredEmail: '이메일을 입력해주세요.',
    invalidEmail: '올바른 이메일 형식을 입력해주세요.',
    requiredPassword: '비밀번호를 입력해주세요.',
    passwordMin: '비밀번호는 4자 이상이어야 합니다.',
    loginSuccess: '로그인에 성공했습니다.',
    loginFailed: '이메일 또는 비밀번호가 올바르지 않습니다.',
    requiredName: '이름을 입력해주세요.',
    passwordMismatch: '비밀번호가 일치하지 않습니다.',
    termsRequired: '이용약관에 동의해주세요.',
    existingEmail: '이미 가입된 이메일입니다.',
    currentPasswordRequired: '현재 비밀번호를 입력해주세요.',
    newPasswordMin: '새 비밀번호는 4자 이상이어야 합니다.',
    newPasswordMismatch: '새 비밀번호가 일치하지 않습니다.',
    samePassword: '현재 비밀번호와 다른 비밀번호를 입력해주세요.',
    currentPasswordFailed: '이메일 또는 현재 비밀번호가 올바르지 않습니다.',
    passwordChanged: '비밀번호가 변경되었습니다. 로그인 화면으로 이동합니다.'
    ,testLogin: '로그인 테스트'
    ,testSignup: '회원가입 테스트'
    ,testChangePassword: '비밀번호 변경 테스트'
  },
  en: {
    languageButton: '한국어',
    brand: 'A',
    leftButton1: 'Left 1',
    leftButton2: 'Left 2',
    leftButton3: 'Left 3',
    rightButton1: 'Right 1',
    rightButton2: 'Right 2',
    rightButton3: 'Right 3',
    footerDescription: 'Vue 3 + Bootstrap 5 + Spring Boot Fullstack Architecture',
    address: 'Address: Somewhere in Seoul | Phone: 010-0000-0000',
    homeTitle: 'Welcome.',
    homeDescription: 'You have successfully logged in.',
    loginStatus: 'Logged in',
    operating: 'Active',
    login: 'Log in',
    loginDescription: 'Enter your account details to continue.',
    email: 'Email',
    emailPlaceholder: 'name@example.com',
    password: 'Password',
    passwordPlaceholder: 'Enter your password',
    keepLogin: 'Keep me logged in',
    changePassword: 'Change password',
    noAccount: "Don't have an account yet?",
    signup: 'Sign up',
    loggingIn: 'Logging in...',
    name: 'Name',
    namePlaceholder: 'Enter your name',
    signupDescription: 'Create a new account to get started.',
    passwordConfirm: 'Confirm password',
    passwordConfirmPlaceholder: 'Enter your password again',
    passwordMinPlaceholder: 'Enter at least 4 characters',
    agreeTerms: 'I agree to the terms of service.',
    signingUp: 'Signing up...',
    hasAccount: 'Already have an account?',
    changePasswordDescription: 'Set a new password for your account.',
    currentPassword: 'Current password',
    currentPasswordPlaceholder: 'Enter your current password',
    newPassword: 'New password',
    newPasswordPlaceholder: 'Enter at least 4 characters',
    newPasswordConfirm: 'Confirm new password',
    newPasswordConfirmPlaceholder: 'Enter the new password again',
    changing: 'Changing...',
    backToLogin: 'Back to login',
    requiredEmail: 'Please enter your email.',
    invalidEmail: 'Please enter a valid email address.',
    requiredPassword: 'Please enter your password.',
    passwordMin: 'Password must be at least 4 characters.',
    loginSuccess: 'Login successful.',
    loginFailed: 'The email or password is incorrect.',
    requiredName: 'Please enter your name.',
    passwordMismatch: 'The passwords do not match.',
    termsRequired: 'Please agree to the terms of service.',
    existingEmail: 'This email is already registered.',
    currentPasswordRequired: 'Please enter your current password.',
    newPasswordMin: 'The new password must be at least 4 characters.',
    newPasswordMismatch: 'The new passwords do not match.',
    samePassword: 'Please enter a password different from the current one.',
    currentPasswordFailed: 'The email or current password is incorrect.',
    passwordChanged: 'Password changed. Redirecting to the login screen.'
    ,testLogin: 'Test login'
    ,testSignup: 'Test sign up'
    ,testChangePassword: 'Test change password'
  }
}

export function useLanguage() {
  const language = computed(() => state.language)
  const t = (key) => translations[state.language][key] || key
  const toggleLanguage = () => {
    state.language = state.language === 'ko' ? 'en' : 'ko'
    localStorage.setItem('language', state.language)
  }

  return { language, t, toggleLanguage }
}
