<template>
  <footer class="bg-light text-center text-secondary py-4 mt-auto border-top">
    <div class="container-fluid px-5">
      <div class="row align-items-center">
        <div class="col-md-6 text-md-start mb-2 mb-md-0">
          <span class="fw-bold text-dark">Kuasar</span>
          <p class="small mb-0 mt-1">{{ t('cmpyDscrpt') }}</p>
        </div>
        <div class="col-md-6 text-md-end">
          <p class="small mb-0">© 2027 KeesungKim Main Project. All rights reserved.</p>
          <span class="small text-muted">{{ t('addr') }} | </span>
          <span class="small text-muted">{{ t('cntctNo') }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLanguage } from '../locales/i18n'

const { t } = useLanguage()
</script>