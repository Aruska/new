<template>
  <div class="d-flex flex-column min-vh-100">
    
    <div class="container mt-4">
      <!-- 분리한 헤더 컴포넌트 배치 -->
      <Header />

      <!-- 본문 영역 -->
      <main class="flex-grow-1">
        <router-view></router-view>
      </main>
    </div>

    <!-- 분리한 푸터 컴포넌트 배치 -->
    <Footer />

  </div>
</template>

<script>
// 1. 컴포넌트 파일 가져오기
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  // 2. 현재 파일에서 사용할 컴포넌트 등록하기
  components: {
    Header,
    Footer
  }
}
</script>