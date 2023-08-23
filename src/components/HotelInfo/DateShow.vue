<template>
  <div class="hotel-info-date">
    <span>入住日期</span>
    <el-date-picker
      v-model="startDate"
      type="date"
      :editable="editable"
      :clearable="clearable"
      :disabled-date="disabledStart"
    />
    <span>离店日期</span>
    <el-date-picker
      v-model="endDate"
      type="date"
      :editable="editable"
      :clearable="clearable"
      :disabled-date="disabledEnd"
    />
    <span class="days"
      >共<span class="day-count"> {{ days }}</span
      >晚</span
    >
    <el-button type="primary" @click="changeTime">确认修改</el-button>
  </div>
</template>

<script setup>
import { useHotelStore } from '@/store/hotel.js'
import { ref, watch } from 'vue'
import { betweenDays } from '@/utils/index.js'

// 控制组件样式
const editable = ref(false)
const clearable = ref(false)
const disabledStart = time => {
  const today = new Date()
  return time.getTime() < today.getTime()
}
const disabledEnd = time => {
  return time.getTime() < new Date(startDate.value).getTime()
}

const hotelStore = useHotelStore()
const startDate = ref('')
const endDate = ref('')
const days = ref(0)

// 数据初始化
startDate.value = hotelStore.startDate
endDate.value = hotelStore.endDate
days.value = hotelStore.days

watch(
  () => startDate.value,
  newValue => {
    days.value = betweenDays(newValue, endDate.value)
  }
)
watch(
  () => endDate.value,
  newValue => {
    days.value = betweenDays(startDate.value, newValue)
  }
)

const changeTime = () => {
  hotelStore.changeStartDate(startDate.value)
  hotelStore.changeEndDate(endDate.value)
}
</script>

<style lang="less" scoped>
.hotel-info-date {
  width: 70%;
  margin-left: 10%;
  display: flex;
  justify-content: center;
  margin-top: 25px;

  span {
    padding: 6px 20px;
    font-size: 20px;
  }
  .days {
    font-size: 16px;
    padding-top: 10px;

    .day-count {
      font-size: 18px;
      color: blue;
      padding: 0 10px;
    }
  }

  .el-button {
    margin-left: 20px;
  }
}
</style>
