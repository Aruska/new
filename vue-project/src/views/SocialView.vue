<template>
  <div class="container-fluid responsive-page-padding h-100 overflow-auto">
    <div class="d-flex flex-column responsive-row-gap mx-auto" style="max-width: 1400px;">

      <!-- ================= [1번째 줄: Instagram 반응형 임베드] ================= -->
      <div class="row align-items-center g-3 g-md-4 border-bottom responsive-row-pb">
        <!-- 왼쪽: Instagram 반응형 로고 버튼 -->
        <div class="col-12 col-md-3 col-lg-2 d-flex flex-column align-items-center justify-content-center">
          <a href="https://instagram.com" target="_blank" class="btn border-0 p-0 d-flex flex-column align-items-center text-decoration-none sns-btn-hover">
            <div class="sns-logo-box bg-gradient-instagram text-white rounded-4 shadow d-flex align-items-center justify-content-center mb-2">
              <span class="fw-bold sns-logo-text">IG</span>
            </div>
            <span class="fw-bold text-dark sns-handle-text">@JK</span>
          </a>
        </div>

        <!-- 오른쪽: Instagram 가로 스크롤 (화면 크기에 맞춰 카드 크기 자동 축소) -->
        <div class="col-12 col-md-9 col-lg-10">
          <div class="d-flex gap-3 overflow-x-auto pb-3 horizontal-scroll">
            <div 
              v-for="(postId, index) in instagramPosts" 
              :key="'ig-' + index" 
              class="ig-embed-card flex-shrink-0 rounded-3 overflow-hidden shadow-sm border bg-white"
            >
              <iframe 
                :src="`https://www.instagram.com/p/${postId}/embed`" 
                width="100%" 
                height="100%" 
                frameborder="0" 
                scrolling="no" 
                allowtransparency="true"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= [2번째 줄: YouTube 반응형 임베드] ================= -->
      <div class="row align-items-center g-3 g-md-4 border-bottom responsive-row-pb">
        <!-- 왼쪽: YouTube 반응형 로고 버튼 -->
        <div class="col-12 col-md-3 col-lg-2 d-flex flex-column align-items-center justify-content-center">
          <a href="https://youtube.com" target="_blank" class="btn border-0 p-0 d-flex flex-column align-items-center text-decoration-none sns-btn-hover">
            <div class="sns-logo-box bg-danger text-white rounded-4 shadow d-flex align-items-center justify-content-center mb-2">
              <span class="fw-bold sns-logo-text">▶</span>
            </div>
            <span class="fw-bold text-dark sns-handle-text">@JKTube</span>
          </a>
        </div>

        <!-- 오른쪽: YouTube 가로 스크롤 (16:9 비율 유지하며 화면 크기에 따라 자동 축소) -->
        <div class="col-12 col-md-9 col-lg-10">
          <div class="d-flex gap-3 gap-md-4 overflow-x-auto pb-3 horizontal-scroll">
            <div 
              v-for="(videoId, index) in youtubeVideos" 
              :key="'yt-' + index" 
              class="yt-embed-card flex-shrink-0 rounded-4 overflow-hidden shadow bg-black"
            >
              <iframe 
                width="100%" 
                height="100%" 
                :src="`https://www.youtube.com/embed/${videoId}`" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= [3번째 줄: TikTok 반응형 임베드] ================= -->
      <div class="row align-items-center g-3 g-md-4 responsive-row-pb">
        <!-- 왼쪽: TikTok 반응형 로고 버튼 -->
        <div class="col-12 col-md-3 col-lg-2 d-flex flex-column align-items-center justify-content-center">
          <a href="https://tiktok.com" target="_blank" class="btn border-0 p-0 d-flex flex-column align-items-center text-decoration-none sns-btn-hover">
            <div class="sns-logo-box bg-black text-white rounded-4 shadow d-flex align-items-center justify-content-center mb-2">
              <span class="fw-bold sns-logo-text">♪</span>
            </div>
            <span class="fw-bold text-dark sns-handle-text">@JKTictok</span>
          </a>
        </div>

        <!-- 오른쪽: TikTok 가로 스크롤 (9:16 숏폼 비율 유지하며 자동 축소) -->
        <div class="col-12 col-md-9 col-lg-10">
          <div class="d-flex gap-3 overflow-x-auto pb-3 horizontal-scroll">
            <div 
              v-for="(tiktokId, index) in tiktokVideos" 
              :key="'tt-' + index" 
              class="tt-embed-card flex-shrink-0 rounded-4 overflow-hidden shadow-sm bg-black"
            >
              <iframe 
                :src="`https://www.tiktok.com/embed/v2/${tiktokId}`" 
                width="100%" 
                height="100%" 
                frameborder="0" 
                allow="encrypted-media;"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const instagramPosts = ref([
  'C_123456789',
  'C_987654321',
  'C_abcdefghi',
  'C_abcdefghi',
  'C_abcdefghi',
  'C_abcdefghi',
])

const youtubeVideos = ref([
  'X7_0bJSePqw',
  'dQw4w9WgXcQ',
  'jfKfPfyJRdk'
])

const tiktokVideos = ref([
  '7123456789012345678',
  '7234567890123456789',
  '7345678901234567890'
])
</script>

<style scoped>
/* 전체 페이지 여백 및 행 간격 반응형 자동 조정 */
.responsive-page-padding {
  padding: clamp(1.2rem, 3vw, 3rem) clamp(0.8rem, 2.5vw, 2rem);
}

.responsive-row-gap {
  gap: clamp(1.5rem, 3.5vw, 3rem);
}

.responsive-row-pb {
  padding-bottom: clamp(1.5rem, 3.5vw, 3rem);
}

/* 왼쪽 SNS 로고 박스 & 텍스트 반응형 크기 (화면 줄어들수록 자동 축소) */
.sns-logo-box {
  width: clamp(64px, 7.5vw, 100px);
  height: clamp(64px, 7.5vw, 100px);
  transition: transform 0.2s ease;
}

.sns-logo-text {
  font-size: clamp(1.5rem, 2.5vw, 2.4rem);
}

.sns-handle-text {
  font-size: clamp(0.95rem, 1.3vw, 1.25rem);
}

.sns-btn-hover:hover .sns-logo-box {
  transform: scale(1.06);
}

/* [반응형 카드 1] Instagram: 화면 너비에 맞춰 너비/높이 자동 비례 축소 */
.ig-embed-card {
  width: clamp(230px, 26vw, 320px);
  height: clamp(300px, 34vw, 420px);
}

/* [반응형 카드 2] YouTube: 16:9 비율(aspect-ratio)을 유지하며 크게 자동 축소 */
.yt-embed-card {
  width: clamp(270px, 38vw, 480px);
  aspect-ratio: 16 / 9;
}

/* [반응형 카드 3] TikTok: 세로형 숏폼 비율을 유지하며 자동 축소 */
.tt-embed-card {
  width: clamp(200px, 22vw, 280px);
  height: clamp(355px, 39vw, 495px);
}

/* 인스타그램 그라데이션 */
.bg-gradient-instagram {
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
}

/* 가로 스크롤바 스타일 */
.horizontal-scroll::-webkit-scrollbar {
  height: 6px;
}

.horizontal-scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.horizontal-scroll::-webkit-scrollbar-thumb {
  background: #cccccc;
  border-radius: 10px;
}

.horizontal-scroll::-webkit-scrollbar-thumb:hover {
  background: #999999;
}
</style>