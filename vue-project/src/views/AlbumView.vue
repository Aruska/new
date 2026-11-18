<template>
  <!-- 1번: 전체 페이지를 감싸며 내부 스크롤을 처리하는 컨테이너 -->
  <div class="container-fluid responsive-page-padding h-100 overflow-auto">
    <div class="mx-auto pb-5" style="max-width: 1200px;">
      
      <!-- 상단 타이틀 (선택사항) -->
      <div class="text-center mb-5">
        <h2 class="fw-bold text-dark">Album Store</h2>
        <p class="text-muted">원하시는 앨범을 선택하고 결제를 진행하세요.</p>
      </div>

      <!-- 3열 그리드 시스템 (3X3, 3X4, 3X6 등 데이터가 늘어나도 아래로 자연스럽게 확장) -->
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-lg-5 justify-content-center">
        
        <div v-for="album in albumList" :key="album.id" class="col d-flex justify-content-center">
          <div class="card border-0 shadow-sm rounded-4 overflow-hidden bg-white w-100 album-card">
            
            <!-- 2번: 앨범 커버 이미지 또는 플레이스홀더 영역 -->
            <div class="position-relative bg-light album-image-wrapper d-flex align-items-center justify-content-center overflow-hidden">
              <img 
                :src="album.image" 
                :alt="album.title" 
                class="w-100 h-100 object-fit-cover album-img-zoom"
              />
              <span class="position-absolute top-0 start-0 m-3 badge bg-dark bg-opacity-75 rounded-pill px-3 py-2">
                {{ album.price }}
              </span>
            </div>

            <!-- 3번: 결제 버튼 영역 (클릭 시 결제 페이지로 이동) -->
            <div class="card-body p-3 bg-light border-top d-flex flex-column gap-2 text-center">
              <h5 class="fw-bold text-dark m-0 text-truncate">{{ album.title }}</h5>
              
              <!-- 결제 미정 상태이므로 추후 라우트나 결제 모달 함수로 연결 가능 -->
              <!-- <router-link 
                :to="{ path: '/checkout', query: { albumId: album.id } }" 
                class="btn btn-dark w-100 py-2 fw-semibold rounded-3 shadow-sm payment-btn"
              >
                결제
              </router-link> -->
               <button 
                type="button" 
                @click="handlePay(album)"
                class="btn btn-outline-secondary tour-buy-btn rounded-1 bg-light text-dark fw-medium"
                >
              Buy Now
            </button>
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
  추후 3X4, 3X6 등 앨범 개수가 늘어나거나 줄어들어도 아래 배열에 데이터를 추가하기만 하면 
  3열 그리드 형태로 자동으로 행이 늘어나며 스크롤됩니다.
*/
const albumList = ref([
  {
    id: 1,
    title: '앨범 1',
    price: '₩20,000',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: '앨범 2',
    price: '₩25,000',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: '앨범 3',
    price: '₩18,000',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: '앨범 4',
    price: '₩30,000',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: '앨범 5',
    price: '₩22,000',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    title: '앨범 6',
    price: '₩27,000',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80'
  },
  
  /* 
    추가로 앨범 7, 8, 9... 또는 3X4(총 12개), 3X6(총 18개) 형태로 늘리고 싶다면 
    여기에 객체를 계속 추가하시면 자동으로 레이아웃이 확장됩니다.
  */

  
])

const handlePay = (album) => {
  alert(`${album.title} Buy Now`)
}
</script>

<style scoped>
/* 전체 페이지 여백 반응형 설정 */
.responsive-page-padding {
  padding: clamp(1.5rem, 4vw, 3.5rem) clamp(1rem, 3vw, 2.5rem);
}

/* 개별 앨범 카드 최대 너비 제한 */
.album-card {
  max-width: 340px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.album-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
}

/* 2번: 앨범 이미지 영역 비율 설정 (정사각형 유지) */
.album-image-wrapper {
  aspect-ratio: 1 / 1;
}

.album-img-zoom {
  transition: transform 0.4s ease;
}

.album-card:hover .album-img-zoom {
  transform: scale(1.05);
}

/* 3번: 결제 버튼 스타일 */
.payment-btn {
  transition: background-color 0.2s ease;
}

.payment-btn:hover {
  background-color: #333 !important;
}
</style>