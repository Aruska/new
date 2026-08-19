<template>
  <div class="card p-5 bg-light shadow-sm border-0">
    <h2 class="fw-bold mb-3">{{ t('homeTitle') }}</h2>
    <p class="lead mb-4">{{ t('homeDescription') }}</p>
    <div class="d-flex gap-2 flex-wrap">
      <span class="badge bg-primary rounded-pill px-3 py-2">{{ t('loginStatus') }}</span>
      <span class="badge bg-success rounded-pill px-3 py-2">{{ t('operating') }}</span>
    </div>
    <div class="d-flex gap-2 flex-wrap mt-4">
      <router-link to="/login" class="btn btn-primary">{{ t('testLogin') }}</router-link>
      <router-link to="/signup" class="btn btn-outline-primary">{{ t('testSignup') }}</router-link>
      <router-link to="/change-password" class="btn btn-outline-secondary">{{ t('testChangePassword') }}</router-link>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../i18n'

const { t } = useLanguage()
</script>