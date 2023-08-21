import { createApp } from 'vue'
import './index.css'
import 'animate.css'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import axios from 'axios'
import VueAxios from 'vue-axios'
import mitt from 'mitt'
import progressive from 'progressive-image/dist/vue' // 渐进式

const pinia = createPinia()
pinia.use(piniaPluginPersist)

const app = createApp(App)
app.config.globalProperties.$mitt = new mitt()

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
app.use(VueAxios, axios)
app.use(router)
app.use(pinia)
app.use(progressive, {
  removePreview: true,
  scale: true
})


app.mount('#app')
