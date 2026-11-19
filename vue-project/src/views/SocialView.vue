<template>
  <div class="container-fluid responsive-page-padding h-100 overflow-auto">
    <div class="d-flex flex-column responsive-row-gap mx-auto" style="max-width: 1400px;">

      <!-- ================= [1번째 줄: Instagram 반응형 임베드] ================= -->
      <div class="row align-items-center g-3 g-md-4 border-bottom responsive-row-pb">
        <div class="col-12 col-md-3 col-lg-2 d-flex flex-column align-items-center justify-content-center">
          <a
            href="https://instagram.com/jhnkepler"
            target="_blank"
            rel="noopener noreferrer"
            class="btn border-0 p-0 d-flex flex-column align-items-center text-decoration-none sns-btn-hover"
          >
            <div class="sns-logo-box d-flex align-items-center justify-content-center mb-2">
              <img
                :src="iconInsta"
                alt="Instagram"
                class="w-100 h-100 object-fit-contain"
              />
            </div>
            <span class="fw-bold text-dark sns-handle-text">@JhnKepler</span>
          </a>
        </div>

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
        <div class="col-12 col-md-3 col-lg-2 d-flex flex-column align-items-center justify-content-center">
          <a
            href="https://youtube.com/@jhnkepler"
            target="_blank"
            rel="noopener noreferrer"
            class="btn border-0 p-0 d-flex flex-column align-items-center text-decoration-none sns-btn-hover"
          >
            <div class="sns-logo-box d-flex align-items-center justify-content-center mb-2">
              <img
                :src="iconYoutube"
                alt="YouTube"
                class="w-100 h-100 object-fit-contain"
              />
            </div>
            <span class="fw-bold text-dark sns-handle-text">@JhnKepler</span>
          </a>
        </div>

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

      <!-- ================= [유튜브 쇼츠 반응형 임베드] ================= -->
      <div class="row align-items-center g-3 g-md-4 border-bottom responsive-row-pb">
        <!-- 왼쪽: YouTube Shorts 반응형 로고 버튼 -->
        <div class="col-12 col-md-3 col-lg-2 d-flex flex-column align-items-center justify-content-center">
          <a
            href="https://youtube.com/shorts/@jhnkepler"
            target="_blank"
            rel="noopener noreferrer"
            class="btn border-0 p-0 d-flex flex-column align-items-center text-decoration-none sns-btn-hover"
          >
            <div class="sns-logo-box d-flex align-items-center justify-content-center mb-2">
              <img
                :src="iconYTShots"
                alt="YouTube Shorts"
                class="w-100 h-100 object-fit-contain"
              />
            </div>
            <span class="fw-bold text-dark sns-handle-text">Shorts</span>
          </a>
        </div>

        <!-- 오른쪽: YouTube Shorts 가로 스크롤 (9:16 세로 비율 유지) -->
        <div class="col-12 col-md-9 col-lg-10">
          <div class="d-flex gap-3 overflow-x-auto pb-3 horizontal-scroll">
            <div
              v-for="(shortId, index) in youtubeShorts"
              :key="'yts-' + index"
              class="yt-shorts-card flex-shrink-0 rounded-4 overflow-hidden shadow bg-black"
            >
              <iframe
                width="100%"
                height="100%"
                :src="`https://www.youtube.com/embed/${extractYouTubeId(shortId)}`"
                title="YouTube Shorts player"
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
        <div class="col-12 col-md-3 col-lg-2 d-flex flex-column align-items-center justify-content-center">
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            class="btn border-0 p-0 d-flex flex-column align-items-center text-decoration-none sns-btn-hover"
          >
            <div class="sns-logo-box d-flex align-items-center justify-content-center mb-2">
              <img
                :src="iconTiktok"
                alt="TikTok"
                class="w-100 h-100 object-fit-contain"
              />
            </div>
            <span class="fw-bold text-dark sns-handle-text">@JhnKepler</span>
          </a>
        </div>

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
import { ref }     from 'vue'
import iconInsta   from '@/components/icons/IconInsta.png'
import iconYoutube from '@/components/icons/IconYtube.png'
import iconTiktok  from '@/components/icons/IconTktok.png'
import iconYTShots from '@/components/icons/IconYTShots.png'

const instagramPosts = ref([
  'C_123456789',
  'C_987654321',
  'C_abcdefghi',
  'C_abcdefghi',
  'C_abcdefghi',
  'C_abcdefghi',
])

const youtubeVideos = ref([
  'CRZxBxi7WJg',
  'OEtjZin3PJ0',
  'SgCrZCRBBLc',
  'X7_0bJSePqw',
  
])

const tiktokVideos = ref([
  '7123456789012345678',
  '7234567890123456789',
  '7345678901234567890'
])

const youtubeShorts = ref([
  'azqZVLIxRYE', 
  'Dv69QKU9EYo',
  'U0lTdxncWo0',
  'QqC8CuNgJPE',
  'kOwY8nyOONA'

])

function extractYouTubeId(urlOrId) {
  if (!urlOrId) return ''
  const trimmed = urlOrId.trim()
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed
  }
  const match = trimmed.match(
    /(?:youtube\.com\/(?:watch\?.*v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  return match ? match[1] : trimmed
}
</script>

<style scoped>
.responsive-page-padding {
  padding: clamp(1.2rem, 3vw, 3rem) clamp(0.8rem, 2.5vw, 2rem);
}

.responsive-row-gap {
  gap: clamp(1.5rem, 3.5vw, 3rem);
}

.responsive-row-pb {
  padding-bottom: clamp(1.5rem, 3.5vw, 3rem);
}

.sns-logo-box {
  width     : clamp(64px, 7.5vw, 100px);
  height    : clamp(64px, 7.5vw, 100px);
  background: transparent;
  transition: transform 0.2s ease;
}

.sns-handle-text {
  font-size: clamp(0.95rem, 1.3vw, 1.25rem);
}

.sns-btn-hover:hover .sns-logo-box {
  transform: scale(1.06);
}

.ig-embed-card {
  width: clamp(230px, 26vw, 320px);
  height: clamp(300px, 34vw, 420px);
}

.yt-embed-card {
  width: clamp(270px, 38vw, 480px);
  aspect-ratio: 16 / 9;
}

.tt-embed-card {
  width: clamp(200px, 22vw, 280px);
  height: clamp(355px, 39vw, 495px);
}

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
.yt-shorts-card {
  width: clamp(200px, 22vw, 280px);
  aspect-ratio: 9 / 16;
}
</style>