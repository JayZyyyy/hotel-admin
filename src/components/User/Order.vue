<template>
  <div class="order-show">
    <OrderChild v-for="order in orderList.orders" :order="order" :key="order.order_id"></OrderChild>
  </div>
</template>

<script setup>
import OrderChild from './OrderChild.vue'
import { ref } from 'vue'
import { getOrder } from '@/api/index.js'

const session_id = window.localStorage.getItem('session_id')
const orderList = ref([])
const getOrderList = async () => {
  orderList.value = await getOrder(session_id)
  orderList.value.orders = orderList.value.orders.sort((a, b) => b.id - a.id)
}
getOrderList()
</script>

<style scoped lang="less">
.order-show {
  width: 100%;
  height: 100%;
}
</style>
