<template>
  <div class="order-show">
    <OrderChild v-for="order in orderList" :order="order" :key="order.order_id"></OrderChild>
  </div>
</template>

<script setup>
import OrderChild from './OrderChild.vue'
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getOrder } from '@/api/index.js'

const route = useRoute()
const userId = route.params.id
const getData = async () =>
  await new Promise(resolve => {
    getOrder(userId).then(res => {
      return resolve(res)
    })
  })
let orderList = ref([])
onMounted(async () => {
  await getData().then(res => {
    orderList.value = res
  })
})
</script>

<style scoped lang="less">
.order-show {
  width: 100%;
  height: 100%;
}
</style>
