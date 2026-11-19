<template>
  <div class="position-relative w-100 h-100 overflow-hidden bg-dark d-flex align-items-center justify-content-center">
    
    <!-- 1. 배경 유튜브 영상 영역 -->
    <div class="youtube-background-wrapper">
      <div id="yt-bg-player" class="youtube-iframe pointer-events-none"></div>
      <div class="position-absolute top-0 start-0 w-100 h-100" style="z-index: 1;"></div>
    </div>

    <!-- 영상 재생 전까지 가려주는 커버 -->
    <div 
      class="position-absolute top-0 start-0 w-100 h-100 bg-dark transition-fade pointer-events-none"
      :style="{ opacity: isPlaying ? 0 : 1, zIndex: 2 }"
    ></div>

    <!-- 어두운 오버레이 -->
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25 pointer-events-none" style="z-index: 3;"></div>

    <!-- 2. 십자 모양 버튼 영역 (가로로 긴 직사각형 배치를 위해 부모 컨테이너 크기 확장) -->
    <div class="position-relative d-flex flex-column align-items-center justify-content-center mx-auto" style="z-index: 4; width: 100%; max-width: 620px; height: 420px;">
      
      <!-- 상단 버튼 (Social Media) -->
      <router-link to="/social" class="btn custom-rect-btn fw-bold position-absolute top-0 start-50 translate-middle-x text-white text-decoration-none">
        SOCIAL MEDIA
      </router-link>

      <!-- 좌측 버튼 (Tour) -->
      <router-link to="/tour" class="btn custom-rect-btn fw-bold position-absolute start-0 top-50 translate-middle-y text-white text-decoration-none">
        TOUR
      </router-link>

      <!-- 중앙 버튼 (MUSIC) -->
      <router-link to="/music" class="btn custom-rect-btn fw-bold position-absolute top-50 start-50 translate-middle text-white text-decoration-none" style="z-index: 5;">
        MUSIC
      </router-link>

      <!-- 우측 버튼 (Videos) -->
      <router-link to="/video" class="btn custom-rect-btn fw-bold position-absolute end-0 top-50 translate-middle-y text-white text-decoration-none">
        VIDEO
      </router-link>

      <!-- 하단 버튼 (Store) -->
      <router-link to="/store" class="btn custom-rect-btn fw-bold position-absolute bottom-0 start-50 translate-middle-x text-white text-decoration-none">
        STORE
      </router-link>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useYoutubeBg } from '/src/components/composables/YtubeBg'

const videoId = ref('CRZxBxi7WJg')
const { isPlaying, setPlayer, clearPlayer } = useYoutubeBg()
let player = null

const initPlayer = () => {
  player = new window.YT.Player('yt-bg-player', {
    videoId: videoId.value,
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      loop: 1,
      playlist: videoId.value,
      playsinline: 1,
      rel: 0
    },
    events: {
      onReady: (event) => {
        setPlayer(event.target)
        event.target.mute()
        event.target.playVideo()
      },
      onStateChange: (event) => {
        // 1: 재생 중(PLAYING), 2: 일시정지(PAUSED), 0: 종료(ENDED)
        if (event.data === 1) {
          isPlaying.value = true
        } else if (event.data === 0) {
          event.target.playVideo()
        } else if (event.data === 2) {
          isPlaying.value = false
        }
      }
    }
  })
}

onMounted(() => {
  if (window.YT && window.YT.Player) {
    initPlayer()
  } else {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    window.onYouTubeIframeAPIReady = () => {
      initPlayer()
    }
  }
})

onUnmounted(() => {
  clearPlayer()
  if (player && player.destroy) {
    player.destroy()
  }
})
</script>

<style scoped>
.youtube-background-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

:deep(.youtube-iframe) {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120vw;
  height: 67.5vw;
  min-height: 120vh;
  min-width: 213.33vh;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.transition-fade {
  transition: opacity 0.6s ease-in-out;
}

.pointer-events-none {
  pointer-events: none !important;
}

/* ⭐ [핵심 반응형 직사각형 스타일] */
.custom-rect-btn {
  width: clamp(130px, 18vw, 160px) !important;
  height: clamp(50px, 7vw, 65px) !important;
  border-radius: 12px !important;
  background-color: transparent !important;
  border: 2px solid transparent !important;
  color: #ffffff !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: clamp(0.8rem, 1.2vw, 1rem);
  transition: all 0.3s ease-in-out !important;
  white-space: nowrap;
}

.custom-rect-btn:hover {
  background-color: rgba(255, 255, 255, 0.2) !important;
  border-color: #ffffff !important;
  color: #ffffff !important;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
}
</style>