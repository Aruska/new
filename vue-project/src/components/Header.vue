<template>
  <!-- 1번: 화면 상단 전체 너비를 차지하는 TOPBAR 영역 (하단 테두리 추가) -->
  <nav class="navbar navbar-light bg-light border-bottom sticky-top px-4 py-3">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      
      <!-- 4번: 좌측 버튼 영역 (와이어프레임 기준 버튼 4개 배치) -->
      <div class="d-flex align-items-center gap-2 flex-wrap" style="flex: 1;">
        <button class="btn btn-outline-dark btn-sm">{{ t('leftButton1') }}</button>
        <button class="btn btn-outline-dark btn-sm">{{ t('leftButton2') }}</button>
        <button class="btn btn-outline-dark btn-sm">{{ t('leftButton3') }}</button>
        <button class="btn btn-outline-dark btn-sm">{{ t('leftButton4') }}</button>
      </div>

      <!-- 2번: 중앙 웹사이트 메인 로고 영역 (flex를 빼고 내용물 크기만큼만 차지해 정중앙 정렬 유지) -->
      <div class="text-center px-3">
        <router-link to="/" class="navbar-brand m-0 fw-bold fs-3 text-dark tracking-wide">
          <!-- 💡 이미지 로고 사용 시 아래 span 대신 <img> 태그를 넣으시면 됩니다 -->
          <span>{{ t('brand') }}</span>
        </router-link>
      </div>

      <!-- 3번: 우측 버튼 영역 (버튼 3개 + 언어변경 + 와이어프레임의 '...' 더보기 버튼) -->
      <div class="d-flex align-items-center justify-content-end gap-2 flex-wrap" style="flex: 1;">
        <button class="btn btn-outline-dark btn-sm">{{ t('rightButton1') }}</button>
        <button class="btn btn-outline-dark btn-sm">{{ t('rightButton2') }}</button>
        <button class="btn btn-outline-dark btn-sm">{{ t('rightButton3') }}</button>
        
        <!-- 기존 언어 전환 버튼 -->
        <button class="btn btn-outline-primary btn-sm" type="button" @click="toggleLanguage">
          {{ t('languageButton') }}
        </button>

        <!-- 와이어프레임 우측 끝 '...' 버튼 (추가 메뉴/드롭다운용) -->
        <div class="dropdown">
          <button 
            class="btn btn-light btn-sm border-0 fw-bold px-2" 
            type="button" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
            title="더보기"
          >
            •••
          </button>
          <ul class="dropdown-menu dropdown-menu-end shadow-sm">
            <li><router-link class="dropdown-item" to="/login">{{ t('testLogin') }}</router-link></li>
            <li><router-link class="dropdown-item" to="/signup">{{ t('testSignup') }}</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link class="dropdown-item" to="/change-password">{{ t('testChangePassword') }}</router-link></li>
          </ul>
        </div>
      </div>

    </div>
  </nav>
</template>

<script setup>
import { useLanguage } from '../i18n'

const { t, toggleLanguage } = useLanguage()
</script>

<style scoped>
.tracking-wide {
  letter-spacing: 0.12em;
}
</style>