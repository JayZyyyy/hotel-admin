<template>
  <div>
    <!-- 头部 -->
    <Header></Header>
    <!-- 中部 -->
    <div class="center">
      <!-- 文字部分 -->
      <span class="characters">
        <ul>
          <li class="c-title">好速来会员生态体系</li>
          <li class="c-text">提供多样化会员权益和多元化增值服</li>
          <li class="c-text">持续提升会员出行全场景的消费体验</li>
        </ul>
      </span>
      <!-- 卡片组件 -->
      <LoginCard v-if="comType == 1" @event="handle"></LoginCard>
      <Register v-if="comType == 2" @event="handle"></Register>
    </div>
    <!-- <Register></Register> -->
    <!-- 底部 -->
    <Aboutus></Aboutus>
  </div>
</template>

<script>
import { Aboutus } from "../components/Home/index.js";
import Header from "../components/Header.vue";
import { LoginCard, Register } from "../components/Login/index.js";

export default {
  data() {
    return {
      comType: 1,
    };
  },
  methods: {
    handle(data) {
      // console.log(data);
      this.comType = data;
    },
  },
};
</script>

<style scoped lang="less">
// 中部
.center {
  font: 12px Arial, Verdana, "\5b8b\4f53";
  height: 600px;
  background-image: url(../assets/login-bc.avif);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  position: relative;

  // 文字部分
  .characters {
    display: inline-block;
    width: 600px;
    height: 170px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    color: #2c61b6;
    list-style: none;
    text-align: center;
    position: absolute;
    bottom: 35%;
    left: 15%;

    .c-title {
      font-size: 60px;
      font-weight: 900;
      height: 70px;
    }
    .c-text {
      font-size: 35px;
      font-weight: 900;
      height: 40px;
    }
  }
}
</style>