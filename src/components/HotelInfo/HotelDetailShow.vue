<template>
  <div class="hotel-detail-info">
    <!-- <img src="" alt="" /> -->
    <div class="img">
      <el-image style="width: 100%; height: 100%" :src="hotelDetail.image" fit="fill" />
    </div>
    <div class="hotel-detail-message">
      <div class="hotel-name">
        <el-text tag="b" size="large">{{ hotelDetail.name }}</el-text>
      </div>
      <div class="hotel-address-tel">
        <p>地址 : {{ hotelDetail.address }}</p>
        <p>电话 : {{ hotelDetail.tel }}</p>
      </div>
      <el-divider border-style="dashed" />
      <div class="hotel-intro">
        <p>
          简介 :
          <span>{{ hotelDetail.intro }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  hotelDetail: Object
})
</script>

<style lang="less" scoped>
.hotel-detail-info {
  width: 75%;
  height: 380px;
  margin: 0 auto;
  display: flex;

  .img {
    width: 480px;
    height: 350px;
    background: skyblue;
    margin-top: 13px;
    margin-left: 20px;
    flex: 1;
  }

  .hotel-detail-message {
    width: 500px;
    height: 300px;
    left: 740px;
    margin-top: 30px;
    color: black;
    font-weight: 700;
    padding-left: 60px;
    flex: 1.5;

    .hotel-name {
      padding-top: 25px;
      .el-text {
        font-size: 26px;
      }
    }

    .hotel-address-tel {
      margin-top: 20px;

      p {
        font-size: 16px;
        padding-top: 10px;
      }
    }

    .hotel-intro {
      padding-top: 5px;
      width: 90%;
      font-size: 16px;
      line-height: 20px;

      span {
        font-weight: normal;
      }
    }
  }
}
</style>
