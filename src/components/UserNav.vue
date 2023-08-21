<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <span class="name">{{ name }}</span>
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="toUserInfo">个人信息</el-dropdown-item>
        <el-dropdown-item @click="toUserOrder">我的订单</el-dropdown-item>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = window.localStorage.getItem('user_name')

const router = useRouter()
const logout = () => {
  window.localStorage.clear()
  router.push({ name: 'login' })
}

const session_id = window.localStorage.getItem('session_id')
const toUserInfo = () => {
  router.push(`/user/${session_id}/userInfo`)
}

const toUserOrder = () => {
  router.push(`/user/${session_id}/order`)
}
</script>
<style scoped lang="less">
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
