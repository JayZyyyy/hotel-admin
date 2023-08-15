<template>
  <div>
    <div class="about">
      <img :src="aboutus" alt="" />
    </div>
  </div>
  <div class="message">
    <el-row>
      <el-col :span="8"
        ><div class="grid-content ep-bg-purple" />
        姓名: Jay Zhang</el-col
      >
      <el-col :span="8"
        ><div class="grid-content ep-bg-purple-light" />
        传真: +10086 114514</el-col
      >
      <el-col :span="8"
        ><div class="grid-content ep-bg-purple" />
        管理委员会</el-col
      >
    </el-row>
    <el-row>
      <el-col :span="8"
        ><div class="grid-content ep-bg-purple" />
        地址: 广东省广州市天河区</el-col
      >
      <el-col :span="8"
        ><div class="grid-content ep-bg-purple-light" />
        电话: +86 11451412314</el-col
      >
      <el-col :span="8"
        ><div class="grid-content ep-bg-purple" />
        培煜温柔懒懒（主席）</el-col
      >
    </el-row>
  </div>
</template>

<script setup>
import aboutus from '@/assets/aboutus.png'
</script>

<style scoped lang="less">
.about {
  margin: 10px auto;
  margin-top: 30px;
  text-align: center;

  .img {
    display: block;
  }
  img {
    width: 200px;
  }
}

.message {
  margin: 0 auto;
  width: 50%;
  padding-left: 100px;

  .el-row {
    padding: 5px 10px;
    color: black;
    font-size: medium;
  }
}
</style>
