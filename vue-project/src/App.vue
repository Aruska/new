<template>
  <!-- 1. vh-100과 overflow-hidden으로 전체 창을 고정하여 스크롤 원천 차단 -->
  <div class="d-flex flex-column vh-100 bg-white overflow-hidden">
    
    <!-- [헤더 영역] showTopBar가 true일 때만 상단 고정 (flex-shrink-0으로 찌그러짐 방지) -->
    <header v-if="showTopBar" class="flex-shrink-0 w-100 bg-white">
      <Header />
    </header>

    <!-- [메인 콘텐츠 영역] 남은 공간을 채우고, 내부 내용이 많을 때만 여기서 스크롤 처리 (overflow-auto) -->
    <main class="flex-grow-1 overflow-auto bg-light bg-opacity-50">
      <router-view></router-view>
    </main>

    <!-- [푸터 영역] showTopBar가 true일 때만 하단 고정 (flex-shrink-0으로 찌그러짐 방지) -->
    <footer v-if="showTopBar" class="flex-shrink-0 w-100 bg-white">
      <Footer />
    </footer>

  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    const route = useRoute()

    const showTopBar = computed(() => !['login', 'signup', 'change-password'].includes(route.name))

    return {
      showTopBar
    }
  }
}
</script>