<template>
  <!-- 1번: 전체 페이지 스크롤 컨테이너 -->
  <div class="container-fluid responsive-page-padding h-100 overflow-auto">
    <div class="mx-auto pb-5" style="max-width: 1400px;">
      
      <!-- 상단 타이틀 -->
      <div class="text-center mb-5">
        <h2 class="fw-bold text-dark">Videos</h2>
        <p class="text-muted">.</p>
      </div>

      <!-- 3열 그리드 시스템 (화면 크기에 맞춰 3x3, 3x4 등 자동 확장 및 반응형 정렬) -->
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-lg-5 justify-content-center">
        
        <div v-for="video in videoList" :key="video.id" class="col d-flex justify-content-center">
          <!-- 카드 전체 크기를 더 큼직하게 확장 -->
          <div class="card border-0 shadow-sm rounded-4 overflow-hidden bg-white w-100 video-card d-flex flex-column">
            
            <!-- 2번: 유튜브 영상을 감싸는 영역 (비디오 박스 크기를 대폭 확대하고 16:9 비율 유지) -->
            <div class="position-relative bg-black video-wrapper w-100">
              <iframe 
                width="100%" 
                height="100%" 
                :src="`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0&rel=0`" 
                :title="video.title" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
                class="position-absolute top-0 start-0 w-100 h-100"
              ></iframe>
            </div>

            <!-- 3번: 설명/제목 영역 (클릭 시 해당 유튜브 영상 링크로 이동) -->
            <div class="card-body p-3 p-md-4 bg-light border-top text-center">
              <a 
                :href="`https://www.youtube.com/watch?v=${video.youtubeId}`" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-decoration-none text-dark d-block title-link"
              >
                <h5 class="fw-bold mb-1 text-truncate video-title-text">{{ video.title }}</h5>
                <p class="small text-muted m-0 text-truncate video-desc-text">{{ video.description }}</p>
              </a>
            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

/* 
  💡 [확장성 관리]
  - 기본 3열 그리드로 배치되며, 영상을 더 추가하고 싶다면 아래 배열에 객체를 계속 추가하세요.
*/
const videoList = ref([
  {
    id: 1,
    title: '강남스타일 (GANGNAM STYLE) 뮤직비디오',
    description: 'PSY - GANGNAM STYLE MV',
    youtubeId: '9bZkp7q19f0'
  },
  {
    id: 2,
    title: 'THAT THAT (prod. & feat. SUGA of BTS)',
    description: 'PSY - THAT THAT MV',
    youtubeId: '8dJyioijVmQ'
  },
  {
    id: 3,
    title: 'New Face 뮤직비디오',
    description: 'PSY - New Face MV',
    youtubeId: 'OwJPwXjwWhg'
  },
  {
    id: 4,
    title: 'DADDY (feat. CL of 2NE1)',
    description: 'PSY - DADDY MV',
    youtubeId: 'FrG4TEcSuRg'
  },
  {
    id: 5,
    title: '나팔바지 (NAPAL BAJI)',
    description: 'PSY - NAPAL BAJI MV',
    youtubeId: 'tF27Tnt_btU'
  },
  {
    id: 6,
    title: 'HAPPEN (헤픈엔딩 cover / Live)',
    description: 'PSY Live Performance',
    youtubeId: 'X7_0bJSePqw'
  }
])
</script>

<style scoped>
/* 전체 페이지 여백 반응형 설정 */
.responsive-page-padding {
  padding: clamp(1.5rem, 4vw, 3.5rem) clamp(1rem, 3vw, 2.5rem);
}

/* ⭐ [핵심 반응형 비디오 카드 크기 확대] */
.video-card {
  max-width: clamp(320px, 32vw, 420px); /* 화면 크기에 따라 카드가 큼직하게 조절됨 */
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.video-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 .8rem 1.4rem rgba(0,0,0,.15) !important;
}

/* 2번: 비디오 영역 (16:9 와이드 비율을 유지하며 카드의 넓어진 폭에 맞춰 자동 확대/축소) */
.video-wrapper {
  aspect-ratio: 16 / 9;
}

/* 3번: 타이틀 및 설명 폰트 크기 반응형 조정 */
.video-title-text {
  font-size: clamp(0.95rem, 1.2vw, 1.15rem);
}

.video-desc-text {
  font-size: clamp(0.8rem, 1vw, 0.92rem);
}

.title-link {
  transition: color 0.2s ease;
}

.title-link:hover .fw-bold {
  color: #ff0000 !important;
}
</style>