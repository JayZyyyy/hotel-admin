import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://43.156.9.217:8080/', // 将此处的后端IP和端口替换为实际的后端地址
        changeOrigin: true,
        selfHandleResponse: true,
        configure: (proxy, _options) => {
          proxy.on('proxyRes', (proxyRes, req, res) => {
            res.removeHeader('Access-Control-Allow-Origin')
            res.removeHeader('access-control-allow-origin')
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('content-type', 'application/json')
            proxyRes.pipe(res)
          })
        },
        rewrite: path => path.replace(/^\/api/, '') // 如果后端API的路径有前缀，可以在此处进行修改
      }
    }
  }
})
