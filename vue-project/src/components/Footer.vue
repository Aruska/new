<template>
  <footer class="bg-light text-center text-secondary py-4 mt-auto border-top">
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-md-start mb-2 mb-md-0">
          <span class="fw-bold text-dark">My Web Project</span>
          <p class="small mb-0 mt-1">{{ t('footerDescription') }}</p>
        </div>
        <div class="col-md-6 text-md-end">
          <p class="small mb-0">© 2026 Code Center. All rights reserved.</p>
          <span class="small text-muted">{{ t('address') }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLanguage } from '../i18n'

const { t } = useLanguage()
</script>