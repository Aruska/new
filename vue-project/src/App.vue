<template>
  <div class="d-flex flex-column min-vh-100">
    <div v-if="showTopBar" class="container mt-4">
      <Header />

      <main class="flex-grow-1">
        <router-view></router-view>
      </main>
    </div>

    <template v-else>
      <main class="flex-grow-1">
        <router-view></router-view>
      </main>
    </template>

    <Footer v-if="showTopBar" />
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

    const showTopBar = computed(() => route.name !== 'login')

    return {
      showTopBar
    }
  }
}
</script>