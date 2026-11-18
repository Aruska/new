<template>
  <div class="container-fluid responsive-page-padding h-100 overflow-auto d-flex align-items-center">
    <div class="row g-4 w-100 mx-auto" style="max-width: 1300px;">
      
      <!-- ================= [왼쪽 영역: 1, 2, 3번] ================= -->
      <div class="col-12 col-md-6">
        <div class="position-relative w-100 rounded-4 overflow-hidden shadow bg-dark music-split-card d-flex flex-column align-items-center justify-content-center p-4">
          
          <!-- 1번: 배경 사진 (설명을 위한 사진) -->
          <img 
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80" 
            alt="Buy Album Background" 
            class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover bg-zoom"
            style="z-index: 0;"
          />
          
          <!-- 텍스트 및 버튼 가독성을 위한 어두운 오버레이 -->
          <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50" style="z-index: 1;"></div>

          <!-- 콘텐츠 컨테이너 (가장 위 레이어) -->
          <div class="position-relative d-flex flex-column align-items-center text-center w-100" style="z-index: 5;">
            
            <!-- 2번: 메인화면과 동일한 호버 효과를 가진 BUY ALBUM 버튼 (가장 위에 배치) -->
            <router-link 
              to="/album" 
              class="btn custom-rect-btn fw-bold text-white text-decoration-none mb-4"
              style="z-index: 10;"
            >
              BUY ALBUM
            </router-link>

            <!-- 3번: 설명 박스 영역 -->
            <div class="description-box rounded-3 p-3 p-md-4 text-white w-100" style="max-width: 420px; z-index: 5;">
              <p class="m-0 fw-medium">
                앙기모띠
                <br class="d-none d-sm-inline" />
                앙기모띠앙기모띠앙기모띠앙기모띠앙기모띠
              </p>
            </div>

          </div>

        </div>
      </div>

      <!-- ================= [오른쪽 영역: 4, 5, 6번] ================= -->
      <div class="col-12 col-md-6">
        <div class="position-relative w-100 rounded-4 overflow-hidden shadow bg-dark music-split-card d-flex flex-column align-items-center justify-content-center p-4">
          
          <!-- 4번: 배경 사진 (설명을 위한 사진) -->
          <img 
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80" 
            alt="Streaming Platforms Background" 
            class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover bg-zoom"
            style="z-index: 0;"
          />
          
          <!-- 어두운 오버레이 -->
          <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50" style="z-index: 1;"></div>

          <!-- 콘텐츠 컨테이너 (가장 위 레이어) -->
          <div class="position-relative d-flex flex-column align-items-center text-center w-100" style="z-index: 5;">
            
            <!-- 5번: 메인화면과 동일한 호버 효과를 가진 STREAMING PLATFORMS 버튼 (가장 위에 배치) -->
           <router-link 
              to="/stream" 
              class="btn custom-rect-btn fw-bold text-white text-decoration-none mb-4"
              style="z-index: 10;"
            >
              Streaming Platforms
            </router-link>

            <!-- 6번: 설명 박스 영역 -->
            <div class="description-box rounded-3 p-3 p-md-4 text-white w-100" style="max-width: 420px; z-index: 5;">
              <p class="m-0 fw-medium">
                앙기모띠앙기모띠앙기모띠앙기모띠앙기모띠
                <br class="d-none d-sm-inline" />
                앙기모띠앙기모띠앙기모띠앙기모띠앙기모띠앙기모띠
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
// 필요한 로직이나 동적 데이터 연결 시 작성
</script>

<style scoped>
/* 전체 페이지 여백 반응형 조정 */
.responsive-page-padding {
  padding: clamp(1rem, 3vw, 2.5rem);
}

/* 좌우 2분할 카드 높이 반응형 설정 */
.music-split-card {
  height: clamp(380px, 65vh, 620px);
}

/* 배경 이미지 호버 시 은은한 확대 효과 */
.bg-zoom {
  transition: transform 0.6s ease;
}

.music-split-card:hover .bg-zoom {
  transform: scale(1.04);
}

/* ⭐ [메인화면과 동일한 반응형 직사각형 투명/호버 버튼 스타일] */
.custom-rect-btn {
  width: clamp(170px, 22vw, 230px) !important;   /* 두 줄 텍스트도 여유 있게 들어가도록 너비 확보 */
  height: clamp(64px, 8.5vw, 80px) !important;   /* 직사각형 높이 */
  border-radius: 12px !important;                /* 약간 둥근 모서리 */
  background-color: transparent !important;      /* 평상시 투명 배경 */
  border: 2px solid transparent !important;      /* 평상시 투명 테두리 */
  color: #ffffff !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.25;
  font-size: clamp(0.9rem, 1.3vw, 1.1rem);
  transition: all 0.3s ease-in-out !important;
}

/* 마우스를 올렸을 때(Hover) 둥근 모서리 테두리와 배경이 나타남 */
.custom-rect-btn:hover {
  background-color: rgba(255, 255, 255, 0.2) !important;
  border-color: #ffffff !important;
  color: #ffffff !important;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
}

/* 3번, 6번: 하단 설명 박스 영역 (배경 사진 위에서도 글자가 잘 읽히도록 반투명 유리 효과 적용) */
.description-box {
  background-color: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  font-size: clamp(0.85rem, 1.1vw, 0.98rem);
  line-height: 1.5;
}
</style>