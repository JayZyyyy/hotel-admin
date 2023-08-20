<template>
  <div class="order-child">
    <div class="header">
      <div><span>订单号: </span> <span>123123</span></div>
      <div><span>预订日期: </span> <span>12321312321</span></div>
    </div>
    <div class="image">
      <img src="picture" alt="" />
    </div>
    <div class="info">
      <h2>123</h2>
      <div class="first-div"><i>风格房 </i>123</div>
      <div><i>入住日期: </i>123</div>
      <div><i>离店日期: </i>123</div>
      <div><i>共x晚 </i>123</div>
    </div>
    <div class="hotel-price">
      <div class="price">总价: ¥ <el-text tag="b">123</el-text></div>
      <div>
        <el-button type="info" size="medium" disabled>已支付</el-button>
        <el-button type="primary" size="medium">取消订单</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  order: Object
})
</script>

<style scoped lang="less">
.order-child {
  position: relative;
  width: 100%;
  height: 190px;
  padding-bottom: 30px;
  margin-bottom: 10px;
  border-bottom: solid 1px #e6e7e7;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  .header {
    width: 100%;
    height: 20px;
    padding-top: 8px;
    padding-bottom: 5px;
    background-color: #ececec;
    color: black;

    div {
      display: inline-block;
      margin-left: 20px;
      span {
        padding: 5px 5px;
      }
    }
  }
  .image {
    display: inline-block;
    margin-top: 10px;

    img {
      width: 270px;
      height: 175px;
    }
  }
  .info {
    display: inline-block;
    position: absolute;
    width: 300px;
    margin-left: 20px;
    margin-top: 10px;

    h2 {
      margin-top: 10px;
      font-size: 20px;
      font-weight: 700;
    }

    div {
      padding-top: 3px;
      font-size: 10px;
      color: rgb(150, 155, 155);
    }

    .first-div {
      margin-top: 20px;
    }
  }

  .hotel-price {
    float: right;
    width: 100px;
    height: 50px;
    margin-top: 85px;
    margin-right: 100px;
    font-size: 14px;
    color: #ff5341;
    font: 1em sans-serif;

    .price {
      margin-left: 50px;
      .el-text {
        font-size: 24px;
        color: #ff5341;
      }
    }

    div {
      width: 200px;
      padding-top: 10px;
      .el-button {
        position: relative;
        background-color: white;
        color: rgb(107, 156, 176);
        width: 90px;
      }
    }
  }
}
</style>
