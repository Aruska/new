<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light container rounded mb-4 px-3">
    <!-- 전체를 좌, 중, 우 3개의 영역으로 균등 분배하는 컨테이너 -->
    <div class="d-flex justify-content-between align-items-center w-100">
      
      <!-- [1] 좌측 영역: 버튼 3개 -->
      <div class="d-flex gap-2" style="flex: 1; justify-content: flex-start;">
        <button class="btn btn-outline-secondary btn-sm">{{ t('leftButton1') }}</button>
        <button class="btn btn-outline-secondary btn-sm">{{ t('leftButton2') }}</button>
        <button class="btn btn-outline-secondary btn-sm">{{ t('leftButton3') }}</button>
      </div>

      <!-- [2] 중앙 영역: 아이콘 (텍스트나 로고) -->
      <div class="text-center" style="flex: 1;">
        <a class="navbar-brand m-0" href="#">
          <!-- 💡 나중에 Bootstrap Icons나 이미지를 여기에 넣으시면 됩니다 -->
          <span class="fs-4">{{ t('brand') }}</span>
        </a>
      </div>

      <!-- [3] 우측 영역: 버튼 3개 -->
      <div class="d-flex gap-2" style="flex: 1; justify-content: flex-end;">
        <button class="btn btn-primary btn-sm">{{ t('rightButton1') }}</button>
        <button class="btn btn-primary btn-sm">{{ t('rightButton2') }}</button>
        <button class="btn btn-primary btn-sm">{{ t('rightButton3') }}</button>
        <button class="btn btn-outline-primary btn-sm" type="button" @click="toggleLanguage">
          {{ t('languageButton') }}
        </button>
      </div>

    </div>
  </nav>
</template>

<script setup>
import { useLanguage } from '../i18n'

const { t, toggleLanguage } = useLanguage()
</script>