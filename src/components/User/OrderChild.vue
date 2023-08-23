<template>
  <div class="order-child">
    <div class="header">
      <div>
        <span>订单号: </span> <span>{{ order.id }}</span>
      </div>
      <div>
        <span>预订日期: </span> <span>{{ dayjs(order.time).format('YYYY-MM-DD') }}</span>
      </div>
    </div>
    <div class="image">
      <img :src="order.room_image" alt="" />
    </div>
    <div class="info">
      <h2>{{ hotel_name }}</h2>
      <div class="first-div"><i>风格房: </i>{{ order.room_type }}</div>
      <div><i>入住日期: </i>{{ order.start_date }}</div>
      <div><i>离店日期: </i>{{ order.end_date }}</div>
      <div>
        <i>共{{ betweenDays(order.start_date, order.end_date) }}晚 </i>
      </div>
    </div>
    <div class="hotel-price">
      <div class="price">
        总价: ¥ <el-text tag="b">{{ order.price }}</el-text>
      </div>
      <div>
        <el-button type="info" size="default" disabled v-if="isCancel">已支付</el-button>
        <el-button type="warning" size="default" disabled v-else>已取消</el-button>
        <el-button type="primary" size="default" @click="cancelOrder" :disabled="!isCancel">取消订单</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from 'vue'
import { getOneHotel, cancelRoom } from '../../api'
import { betweenDays } from '@/utils/index.js'
import dayjs from 'dayjs'
import { ElMessage } from 'element-plus'

const props = defineProps({
  order: Object
})

const emit = defineEmits(['cancelUpdate'])

// buttonShow
const isCancel = ref(false)
const changeButton = () => {
  if (props.order.state === 0) {
    isCancel.value = true
  } else if (props.order.state === 3) {
    isCancel.value = false
  }
}
changeButton()

const hotel_name = ref('')
const hotel = async () => {
  const hotelDetail = await getOneHotel(props.order.hotel_id)
  hotel_name.value = hotelDetail.name
}
hotel()

const session_id = window.localStorage.getItem('session_id')
const cancelRes = ref('')
const cancelOrder = async () => {
  cancelRes.value = await cancelRoom(props.order.id, session_id)
  ElMessage({
    message: '取消成功',
    type: 'success'
  })
  emit('cancelUpdate')
}
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
