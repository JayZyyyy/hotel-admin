<template>
  <div class="room-set">
    <RoomHeader>
      <template #default>
        <span> 剩余数量 </span>
      </template></RoomHeader
    >
    <RoomInfo :roomDetail="room" v-for="room in roomDetail" :key="room.room_id"></RoomInfo>
  </div>
</template>

<script setup>
import RoomHeader from '../../HotelInfo/RoomHeader.vue'
import RoomInfo from './AdminRoomInfo.vue'

import { ref } from 'vue'
import { getOneHotel, getMyHotel } from '@/api/index.js'

const hotelDetail = ref({})
const roomDetail = ref([])
const session_id = window.localStorage.getItem('session_id')
const hotel_id = ref(0)
const getData = async () => {
  hotel_id.value = await getMyHotel(session_id)
  hotelDetail.value = await getOneHotel(hotel_id.value.id)
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
