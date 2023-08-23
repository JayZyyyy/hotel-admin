<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <!-- div class="dropdown">
          <DropDown @scrollTo="scrollTo"></DropDown>
        </！div -->
        <div class="logo">
          <el-image style="width: 220px; height: 100px" :src="logo" fit="scale-down" />
        </div>
      </el-header>
      <el-main>
        <div class="carousel">
          <Carousel></Carousel>
        </div>
        <Detail></Detail>
      </el-main>
      <div class="picture">
        <PictureMask v-for="p in pictureList" :imgSrc="p.imgSrc" :maskSrc="p.maskSrc"></PictureMask>
      </div>
      <div class="book" id="about">
        <el-button plain size="large" auto-insert-space>
          <router-link to="/homeSearch">立即订购</router-link>
        </el-button>
      </div>
      <Aboutus></Aboutus>
    </el-container>
  </div>
</template>

<script setup>
import logo from '../assets/logo.png'
import { Aboutus, Carousel, Detail, DropDown, PictureMask } from '../components/Home/index.js'
import image4 from '../assets/4.png'
import image5 from '../assets/5.png'
import image6 from '../assets/6.png'
import image44 from '../assets/44.png'
import image55 from '../assets/55.png'
import image66 from '../assets/66.png'

const pictureList = [
  { imgSrc: image4, maskSrc: image44 },
  { imgSrc: image5, maskSrc: image55 },
  { imgSrc: image6, maskSrc: image66 }
]

const scrollTo = () => {
  window.scrollTo({
    top: 1500,
    behavior: 'smooth'
  })
}
</script>

<style scoped lang="less">
.el-header {
  display: flex;
  height: 65px;
  border-bottom: solid 1px grey;
  background-image: url(../assets/header-background.png);
  background-size: 120%;
  background-position: 10% 10%;

  .dropdown {
    width: 150px;
    height: 20px;
    margin-left: 80px;
    padding: 10px;
  }
  .logo {
    box-sizing: border-box;
    vertical-align: top;
    justify-content: center;
    margin-left: 25%;
    margin-top: -25px;
  }
}

.el-main {
  padding: 0;
}

.picture {
  width: 95%;
  height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}

.book {
  display: block;
  margin: 0 auto;
  padding-top: 20px;

  .el-button {
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 30px;
    color: black;
    font-size: 20px;
    letter-spacing: 1px;

    a {
      text-decoration: none;
    }
  }
}
</style>
