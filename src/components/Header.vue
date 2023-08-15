<template>
  <div class="public-header">
    <div class="logo">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="tab">
      <button @click="toHome">
        <i><House /></i>
        <span>官网首页</span>
      </button>
      <button>
        <i><Goods /></i>我的订单
      </button>
      <button>
        <i><Phone /></i>联系我们
      </button>
    </div>
  </div>
</template>

<script setup>
import router from '../router'

const toHome = () => {
  router.push('/home')
}
</script>

<style lang="less" scoped>
.public-header {
  width: 100%;
  height: 65px;
  background-color: whitesmoke;
  display: flex;
  justify-content: space-between;

  .logo {
    width: 200px;
    height: 100px;
    flex: 2;

    img {
      width: 200px;
      height: 100px;
      margin-top: -23px;
      margin-left: 200px;
    }
  }

  .tab {
    display: flex;
    flex: 4.5;

    button {
      padding: 20px;
      color: black;
      background-color: whitesmoke;
      font-size: 22px;
      margin-left: 20px;
      cursor: pointer;

      i {
        display: inline-block;
        width: 20px;
        height: 20px;
        padding-right: 6px;
        margin-right: 2px;
        vertical-align: middle;
      }
    }
  }
}
</style>
