<template>
  <!-- 1번: 전체 메인 콘텐츠 스크롤 영역 -->
  <div class="container-fluid responsive-page-padding h-100 overflow-auto">
    <div class="mx-auto" style="max-width: 1100px;">
      
      <!-- 3열 그리드 시스템 (PC: 3열, 태블릿: 2열, 모바일: 1열 자동 반응형) -->
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 g-lg-5 justify-content-center">
        
        <div v-for="tour in tourList" :key="tour.id" class="col d-flex justify-content-center">
          <div class="tour-item-card d-flex flex-column align-items-center text-center w-100">
            
            <!-- 2번: 정사각형 이미지 영역 (aspect-ratio: 1/1로 어떤 화면 크기에서도 정사각형 유지) -->
            <div class="tour-image-wrapper rounded-3 overflow-hidden shadow-sm mb-3 bg-light w-100">
              <img 
                :src="tour.image" 
                :alt="tour.city" 
                class="w-100 h-100 object-fit-cover tour-img-zoom"
                loading="lazy"
              />
            </div>

            <!-- 3번: 도시 이름 -->
            <h3 class="tour-city-title fw-normal text-secondary mb-3">{{ tour.city }}</h3>

            <!-- 4번: Buy Now 버튼 -->
            <button 
              type="button" 
              @click="handleBuyTicket(tour)"
              class="btn btn-outline-secondary tour-buy-btn rounded-1 bg-light text-dark fw-medium"
            >
              Buy Now
            </button>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 미국 주요 도시 데이터 목록 (Unsplash 무료 고화질 이미지 URL 적용)
const tourList = ref([
  {
    id: 1,
    city: 'New York',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    city: 'Boston',
    image: 'https://images.unsplash.com/photo-1501979376754-2ff867a4f659?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    city: 'Chicago',
    image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    city: 'Los Angeles',
    image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    city: 'San Francisco',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    city: 'Seattle',
    image: 'https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&w=600&q=80'
  }
])

// Buy Now 클릭 시 실행될 함수
const handleBuyTicket = (tour) => {
  alert(`${tour.city} 투어 티켓 예매 페이지로 이동합니다.`)
}
</script>

<style scoped>
/* 전체 여백 반응형 조정 */
.responsive-page-padding {
  padding: clamp(1.5rem, 4vw, 3.5rem) clamp(1rem, 3vw, 2.5rem);
}

/* 개별 카드 최대 너비 제한 (와이어프레임 비율 유지) */
.tour-item-card {
  max-width: 240px;
}

/* 2번: 정사각형 비율 강제 고정 및 호버 애니메이션 */
.tour-image-wrapper {
  aspect-ratio: 1 / 1;
}

.tour-img-zoom {
  transition: transform 0.35s ease;
}

.tour-item-card:hover .tour-img-zoom {
  transform: scale(1.06);
}

/* 3번: 도시명 반응형 폰트 크기 */
.tour-city-title {
  font-size: clamp(1.25rem, 2vw, 1.65rem);
  letter-spacing: -0.01em;
}

/* 4번: Buy Now 버튼 규격 및 반응형 크기 */
.tour-buy-btn {
  width: clamp(130px, 14vw, 165px);
  padding: clamp(0.45rem, 0.8vw, 0.6rem) 1rem;
  font-size: clamp(0.85rem, 1.1vw, 0.95rem);
  border-color: #adb5bd;
  transition: all 0.2s ease;
}

.tour-buy-btn:hover {
  background-color: #212529 !important;
  border-color: #212529 !important;
  color: #ffffff !important;
}
</style>