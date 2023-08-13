import { createApp } from 'vue'
import './index.css'
import 'animate.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import progressive from 'progressive-image/dist/vue' // 渐进式

const pinia = createPinia()

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.use(pinia)
app.use(progressive, {
  removePreview: true,
  scale: true
})
app.use(ElementPlus)
app.mount('#app')
