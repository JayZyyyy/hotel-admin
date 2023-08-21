<template>
  <div class="room-set">
    <RoomHeader> </RoomHeader>
    <RoomInfo :roomDetail="room" v-for="room in roomDetail" :key="room.room_id">
      <template v-slot:button>
        <el-col :span="4"
          ><div class="grid-content ep-bg-purple-light" />
          <el-text>空房数量</el-text>
        </el-col>
      </template></RoomInfo
    >
  </div>
</template>

<script setup>
import RoomHeader from '../../HotelInfo/RoomHeader.vue'
import RoomInfo from '../../HotelInfo/RoomInfo.vue'

import { ref } from 'vue'
import { getOneHotel } from '@/api/index.js'

const hotelDetail = ref({})
const roomDetail = ref([])
const getData = async () => {
  hotelDetail.value = await getOneHotel()
  roomDetail.value = hotelDetail.value.nameList
}
getData()
</script>

<style lang="less">
.room-set {
  width: 100%;

  .top {
    display: flex;
    align-items: center;
    color: black;
    font-size: 16px;
    justify-content: space-between;

    .span {
      margin-left: 20px;
    }

    .el-button {
      padding: auto;
      margin-right: 20px;
    }
  }
}
</style>
