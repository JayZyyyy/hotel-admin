<template>
  <div class="user-control">
    <el-container>
      <el-aside width="200px"
        ><el-menu default-active="2" class="el-menu-vertical-demo" @select="handleSelect">
          <el-menu-item index="order" v-bind:class="[isActive ? show : noShow]">
            <el-icon><Tickets /></el-icon>
            <span>我的订单</span>
          </el-menu-item>
          <el-menu-item index="userInfo" v-bind:class="[isActive ? show : noShow]">
            <el-icon><Message /></el-icon>
            <span>个人信息</span>
          </el-menu-item>
          <el-menu-item index="roomSet" v-bind:class="[isAdminActive ? show : noShow]">
            <el-icon><HomeFilled /></el-icon>
            <span>房型设计</span>
          </el-menu-item>
          <el-menu-item index="roomNum" v-bind:class="[isAdminActive ? show : noShow]">
            <el-icon><ZoomIn /></el-icon>
            <span>空房查询</span>
          </el-menu-item>
          <el-menu-item index="checkOut" v-bind:class="[isAdminActive ? show : noShow]">
            <el-icon><ZoomOut /></el-icon>
            <span>退房处理</span>
          </el-menu-item>
          <el-menu-item index="hotelSet" v-bind:class="[isRootActive ? show : noShow]">
            <el-icon><Setting /></el-icon>
            <span>酒店设置</span>
          </el-menu-item>
          <el-menu-item index="hotelSeel" v-bind:class="[isRootActive ? show : noShow]">
            <el-icon><PieChart /></el-icon>
            <span>营业状况</span>
          </el-menu-item>
          <el-menu-item index="passwordUpdate">
            <el-icon><setting /></el-icon>
            <span>修改密码</span>
          </el-menu-item>
        </el-menu></el-aside
      >
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const show = ref('show')
const noShow = ref('none')
const isActive = ref(false)
const isAdminActive = ref(false)
const isRootActive = ref(false)
const type = window.localStorage.getItem('user_role')
const typeNum = Number(type)
const authController = () => {
  if (typeNum === 2) {
    isActive.value = true
    isAdminActive.value = false
    isRootActive.value = false
  } else if (typeNum === 1) {
    isActive.value = false
    isAdminActive.value = true
    isRootActive.value = false
  } else {
    isActive.value = false
    isAdminActive.value = false
    isRootActive.value = true
  }
}
authController()

const router = useRouter()
const handleSelect = key => {
  router.push({
    name: key
  })
}
</script>

<style lang="less" scoped>
.user-control {
  width: 70%;
  height: 700px;
  margin: 0 auto;
  margin-top: 20px;
  background: white;
  .el-container {
    height: 100%;

    .none {
      display: none;
    }
    .show {
      display: block;
    }
    .el-main {
      height: 100%;
      width: 100%;
      padding: 10px;
      border: dotted 1px;
    }
  }
}
</style>
