<template>
  <div class="homeSearch">
    <Header></Header>
    <div class="img-bg">
      <el-image :src="backgroundImage" alt="" fit="contain" />
    </div>
    <div class="search-box">
      <SearchBox></SearchBox>
      <ShowHotel></ShowHotel>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import { SearchBox, ShowHotel } from '../components/HomeSearch/index.js'
import backgroundImage from '../assets/chuang.png'
</script>

<style lang="less" scoped>
.homeSearch {
  width: 100%;
  overflow: hidden;
  .img-bg {
    width: 100%;
    height: 520px;
  }

  .search-box {
  }
}
</style>
