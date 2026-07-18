// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 작성하신 router.js 파일을 가져옵니다.

// Bootstrap 디자인 및 기능 가져오기
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// 1. 먼저 createApp으로 Vue 앱 인스턴스를 생성하여 'app' 변수에 담습니다.
const app = createApp(App)

// 2. 생성된 app 인스턴스에 라우터를 장착(use)합니다.
app.use(router)

// 3. 마지막으로 html 파일의 #app 자리에 화면을 띄웁니다.
app.mount('#app')