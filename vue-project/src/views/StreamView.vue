<template>
  <!-- 1번: 전체 페이지를 감싸며 내부 스크롤을 처리하는 컨테이너 -->
  <div class="container-fluid responsive-page-padding h-100 overflow-auto">
    <div class="mx-auto pb-5" style="max-width: 1200px;">
      
      <!-- 상단 타이틀 -->
      <div class="text-center mb-5">
        <h2 class="fw-bold text-dark">Streaming Platforms</h2>
        <p class="text-muted">.</p>
      </div>

      <!-- 3열 그리드 시스템 (3x3, 3x4, 3x6 등 데이터 확장성 보장) -->
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-lg-5 justify-content-center">
        
        <div v-for="platform in platformList" :key="platform.id" class="col d-flex justify-content-center">
          <!-- 카드 전체를 누르거나 링크로 이동하도록 설정 (결제 버튼 없음) -->
          <a 
            :href="platform.artistUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="card border-0 shadow-sm rounded-4 overflow-hidden bg-white w-100 text-decoration-none platform-card d-flex flex-column align-items-center p-4 text-center"
          >
            <!-- 플랫폼 아이콘 이미지 영역 (정사각형 규격 유지) -->
            <div class="platform-image-wrapper rounded-3 overflow-hidden bg-light mb-3 d-flex align-items-center justify-content-center w-100 p-3">
              <img 
                :src="platform.icon" 
                :alt="platform.name" 
                class="w-100 h-100 object-fit-contain platform-img-zoom"
              />
            </div>

            <!-- 플랫폼 이름 및 아티스트 안내 -->
            <div class="w-100">
              <h5 class="fw-bold text-dark mb-1">{{ platform.name }}</h5>
              <!-- <span class="small text-muted">Artist: {{ platform.artistName }}</span> -->
            </div>
          </a>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

/* 
  💡 [확장성 및 가수 정보 관리]
  - 기본 3x3 형태로 시작하며, 추후 플랫폼이 추가되면 객체를 계속 추가하세요.
  - 'artistName'과 'artistUrl'을 통해 가수 정보(예: 싸이)를 언제든지 쉽게 변경할 수 있습니다.
*/
const platformList = ref([
  {
    id: 1,
    name       : 'Spotify',
    artistName : '',
    artistUrl  : 'https://open.spotify.com/artist/4d3bwQIq6hO0xaSduNVx4p?si=Zxvw0JrjQXmQTWrCKUeylA',
    icon       : '/src/components/icons/IconSpotify.png'
  },
  {
    id: 2,
    name: 'YouTube Music',
    artistName: '',
    // artistUrl: 'https://music.youtube.com/@jhnkepler', 
    artistUrl: 'https://www.youtube.com/@jhnkepler', 
    icon: '/src/components/icons/IconYTMusic.png'
  },
  {
    id: 3,
    name: 'Apple Music',
    artistName: '',
    artistUrl: 'https://music.apple.com/us/artist/jhn-kepler/1602023577', 
    icon: '/src/components/icons/IconAppleMusic.png'
  },
  {
    id: 4,
    name: 'Amazon Music',
    artistName: '',
    artistUrl: 'https://music.amazon.com/artists/B09V7RJVCX/jhn-kepler?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_NRsO98m1vXQ5VXailcmFBh6B5', 
    icon: '/src/components/icons/IconAmazonMusic.png'
  },
  {
    id: 5,
    name: 'TIDAL',
    artistName: '',
    artistUrl: 'https://tidal.com/artist/31100112/',
    icon: '/src/components/icons/IconTIDAL.png'
  },
  {
    id: 6,
    name: 'SoundCloud',
    artistName: '',
    artistUrl: 'https://soundcloud.com/keplersfourthlaw',
    icon: '/src/components/icons/IconSoundCloud.png'
  }
  /* 
    추가 플랫폼(예: 3x4, 3x6 등)이 필요할 경우 아래에 객체를 계속 추가하시면 
    그리드가 자동으로 아래로 확장됩니다[cite: 6].
  */
])
</script>

<style scoped>
/* 전체 페이지 여백 반응형 설정 */
.responsive-page-padding {
  padding: clamp(1.5rem, 4vw, 3.5rem) clamp(1rem, 3vw, 2.5rem);
}

/* 개별 플랫폼 카드 최대 너비 제한 및 호버 효과 */
.platform-card {
  max-width: 340px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
}

.platform-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 .7rem 1.2rem rgba(0,0,0,.12) !important;
}

/* 아이콘 이미지 영역 정사각형 비율 유지 */
.platform-image-wrapper {
  aspect-ratio: 1 / 1;
  max-height: 180px;
}

.platform-img-zoom {
  transition: transform 0.4s ease;
}

.platform-card:hover .platform-img-zoom {
  transform: scale(1.08);
}
</style>