<template>
  <!-- 1번: 화면 상단 전체 너비를 차지하는 TOPBAR 영역 (하단 테두리 추가) -->
  <nav class="navbar navbar-light bg-light border-bottom sticky-top px-4 py-3">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      
      <!-- 4번: 좌측 버튼 영역 (와이어프레임 기준 버튼 4개 배치) -->
      <div class="d-flex align-items-center gap-2 flex-wrap" style="flex: 1;">
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
          <ul class="dropdown-menu dropdown-menu-start shadow-sm">
            <li><router-link class="dropdown-item" to="/social">SOCIAL</router-link></li>
            <li><router-link class="dropdown-item" to="/tour">TOUR</router-link></li>
            <li><router-link class="dropdown-item" to="/music">MUSIC</router-link></li>
            <li><router-link class="dropdown-item" to="/album">ALBUM</router-link></li>
            <li><router-link class="dropdown-item" to="/stream">STREAM</router-link></li>
            <li><router-link class="dropdown-item" to="/video">VIDEO</router-link></li>

            <!-- <li><router-link class="dropdown-item" to="/login">{{ t('testLogin') }}</router-link></li>
            <li><router-link class="dropdown-item" to="/signup">{{ t('testSignup') }}</router-link></li> -->
            <li><hr class="dropdown-divider"></li>
            <!-- <li><router-link class="dropdown-item" to="/change-password">{{ t('testChangePassword') }}</router-link></li> -->
          </ul>
        </div>
      </div>

      <!-- 2번: 중앙 웹사이트 메인 로고 영역 (flex를 빼고 내용물 크기만큼만 차지해 정중앙 정렬 유지) -->
      <div class="text-center px-3">
        <a
          :href="homeHref"
          class="navbar-brand m-0 fw-bold fs-3 text-dark tracking-wide"
          @click.prevent="handleLogoClick"
        >
          <!-- 💡 이미지 로고 사용 시 아래 span 대신 <img> 태그를 넣으시면 됩니다 -->
          <span>{{ t('brand') }}</span>
        </a>
      </div>

      <!-- 3번: 우측 버튼 영역 (재생/일시정지 + 언어변경) -->
      <div class="d-flex align-items-center justify-content-end gap-2 flex-wrap" style="flex: 1;">
        <button
          class="btn btn-outline-dark btn-sm"
          type="button"
          @click="togglePlayback"
        >
          {{ isPlaying ? '일시정지' : '재생' }}
        </button>

        <!-- 기존 언어 전환 버튼 -->
        <button class="btn btn-outline-primary btn-sm" type="button" @click="toggleLanguage">
          {{ t('languageButton') }}
        </button>
      </div>

    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLanguage } from '../locales/i18n'
import { useYoutubeBg } from '/src/components/composables/YtubeBg'

const route = useRoute()
const router = useRouter()
const { t, toggleLanguage } = useLanguage()
const { isPlaying, togglePlayback } = useYoutubeBg()

const homeHref = computed(() => router.resolve('/home').href)

const handleLogoClick = () => {
  if (route.path === '/home') {
    window.location.reload()
  } else {
    router.push('/home')
  }
}
</script>

<style scoped>
.tracking-wide {
  letter-spacing: 0.12em;
}
</style>