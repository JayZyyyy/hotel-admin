<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>

<template>
  <div class="app-page">
    <el-config-provider :locale="zhCn">
      <router-view />
    </el-config-provider>
  </div>
</template>

<style scoped>
.app-page {
  width: 100%;
}
</style>
