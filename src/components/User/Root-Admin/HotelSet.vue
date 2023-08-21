<template>
  <div class="hotel-set">
    <div class="top">
      <span class="span">酒店设置</span>
      <el-button type="primary" plain>添加酒店</el-button>
    </div>
    <div class="hotel-detail-show">
      <HotelSetChild v-for="hotel of hotelList" :hotel="hotel" :key="hotel.id"></HotelSetChild>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HotelSetChild from './HotelSetChild.vue'

import { getHotel } from '@/api/index.js'

// 获取酒店信息
let hotelList = ref([])
const getHotelList = async () => {
  hotelList.value = await getHotel()
  console.log(hotelList.value)
}

onMounted(() => getHotelList())
</script>

<style lang="less" scoped>
.hotel-set {
  width: 100%;

  .top {
    display: flex;
    align-items: center;
    color: black;
    font-size: 16px;
    justify-content: space-between;
    margin-bottom: 10px;

    .span {
      margin-left: 20px;
    }

    .el-button {
      padding: auto;
      margin-right: 20px;
    }
  }

  .hotel-detail-show {
  }
}
</style>
