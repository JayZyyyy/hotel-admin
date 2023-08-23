<template>
  <div class="order-show">
    <OrderChild
      v-for="order in stateList"
      :order="order"
      :key="order.order_id"
      @cancel-update="getOrderList"
    ></OrderChild>
  </div>
</template>

<script setup>
import OrderChild from '../OrderChild.vue'
import { ref, computed } from 'vue'
import { getHotelOrder, getMyHotel } from '@/api/index.js'

const session_id = window.localStorage.getItem('session_id')
const orderList = ref([])
const stateList = ref([])
const hotel_id = ref(0)
const getOrderList = async () => {
  hotel_id.value = await getMyHotel(session_id)
  orderList.value = await getHotelOrder(session_id, hotel_id.value.id)
  stateList.value = orderList.value.filter(order => order.state === 0)
}
getOrderList()
</script>

<style scoped lang="less">
.order-show {
  width: 100%;
  height: 100%;
}
</style>
