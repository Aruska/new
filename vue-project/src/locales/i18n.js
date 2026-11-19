import { computed, reactive } from 'vue'
import ko from '/src/locales/ko.js'
import en from '/src/locales/en.js'

const state = reactive({
  language: localStorage.getItem('language') || 'ko'
})

const translations = {
  ko,
  en
}

export function useLanguage() {
  const language = computed(() => state.language)
  const t = (key) => translations[state.language]?.[key] ?? translations.ko[key] ?? key
  const toggleLanguage = () => {
    state.language = state.language === 'ko' ? 'en' : 'ko'
    localStorage.setItem('language', state.language)
  }

  return { language, t, toggleLanguage }
}