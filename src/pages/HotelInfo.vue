<template>
  <div class="hotel-info">
    <Header></Header>
    <div class="hotel-detail-info">
      <!-- <img src="" alt="" /> -->
      <div class="img"></div>
      <div class="hotel-detail-message">
        <div class="hotel-name">
          <el-text tag="b" size="large">{{ hotelDetail.name }}</el-text>
        </div>
        <div class="hotel-address-tel">
          <p>地址 : {{ hotelDetail.address }}</p>
          <p>电话 : {{ hotelDetail.tel }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getOneHotel } from '../api/index.js'
import Header from '../components/Header.vue'

const hotelDetail = ref({})
const getData = async () => {
  hotelDetail.value = await getOneHotel()
  console.log(hotelDetail.value)
}
getData()
</script>

<style scoped lang="less">
.hotel-info {
  .hotel-detail-info {
    width: 75%;
    height: 380px;
    margin: 0 auto;

    .img {
      position: absolute;
      width: 480px;
      height: 350px;
      background: skyblue;
      margin-top: 13px;
      margin-left: 20px;
    }

    .hotel-detail-message {
      position: absolute;
      width: 580px;
      height: 300px;
      left: 740px;
      margin-top: 30px;
      color: black;
      font-weight: 700;

      .hotel-name {
        padding-top: 20px;
        .el-text {
          font-size: 26px;
        }
      }

      .hotel-address-tel {
        margin-top: 15px;

        p {
          font-size: 16px;
          padding-top: 10px;
        }
      }
    }
  }
}
</style>
