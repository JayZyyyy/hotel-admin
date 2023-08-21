<template>
  <div class="hotel-info">
    <Header
      ><template v-slot:user><UserNav></UserNav></template
    ></Header>
    <HotelDetailShow :hotelDetail="hotelDetail"></HotelDetailShow>
    <DateShow></DateShow>
    <div class="detail-show">
      <RoomHeader></RoomHeader>
      <RoomInfo :roomDetail="room" v-for="room in roomDetail" :key="room.name">
        <template v-slot:button="slotProps">
          <el-col :span="4"
            ><div class="grid-content ep-bg-purple-light" />
            <el-button :type="buttonType" :disabled="disabled" @click="toBookPage(slotProps)">{{ showText }}</el-button>
          </el-col>
        </template></RoomInfo
      >
    </div>
    <Aboutus></Aboutus>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import { HotelDetailShow, DateShow, RoomInfo, RoomHeader } from '../components/HotelInfo/'
import { Aboutus } from '../components/Home'
import { ref } from 'vue'
import { getOneHotel } from '@/api/index.js'
import { useRouter, useRoute } from 'vue-router'
import { useBookStore } from '@/store/book.js'

const hotelDetail = ref({})
const roomDetail = ref([])
const route = useRoute()
const bookStore = useBookStore()
const getData = async () => {
  hotelDetail.value = await getOneHotel(route.params.id)
  roomDetail.value = hotelDetail.value.nameList
  bookStore.addHotelDetail(Number(route.params.id), hotelDetail.value.name, hotelDetail.value.address)
}
getData()

// button 插槽逻辑
const disabled = ref(false)
const showText = ref('立即预订')
const buttonType = ref('primary')
// const changeDisabled = () => {
//   if (props.rowData.room_num > 0) {
//     disabled.value = true
//     showText.value = '房间已满'
//     buttonType.value = 'warning'
//   } else {
//     disabled.value = false
//     showText.value = '立即预订'
//     buttonType.value = 'primary'
//   }
// }
// changeDisabled()

const router = useRouter()
const toBookPage = slotProps => {
  const { room_name, room_type, room_price, room_image } = slotProps.roomDetail
  bookStore.addRoomDetail(room_name, room_type, room_price, room_image)
  router.push({
    name: 'book'
  })
}
</script>

<style scoped lang="less">
.hotel-info {
  background-color: #f7f7f7;

  .detail-show {
    width: 69%;
    margin-left: 15%;
  }
}
</style>
