<template>
  <div class="room-row">
    <el-row>
      <el-col :span="6"
        ><div class="grid-content ep-bg-purple" />
        {{ rowData.room_type }}</el-col
      >
      <el-col :span="3"
        ><div class="grid-content ep-bg-purple-light" />
        含早餐</el-col
      >
      <el-col :span="4"
        ><div class="grid-content ep-bg-purple" />
        <el-tooltip class="box-item" effect="light" placement="top">
          <template #content>{{ tips1 }}<br />{{ tips2 }} </template>
          <i>限时取消</i>
        </el-tooltip></el-col
      >
      <el-col :span="3"
        ><div class="grid-content ep-bg-purple-light" />
        <el-icon><Avatar /></el-icon>
        × {{ rowData.booker_num }}</el-col
      >
      <el-col :span="4"
        ><div class="grid-content ep-bg-purple" />
        <span class="symbol">¥</span>
        <span class="room-price">{{ rowData.room_price }}</span></el-col
      >
      <slot name="button" :roomDetail="roomDetail"></slot>
    </el-row>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
  rowData: Object
})

const roomDetail = ref({
  room_name: props.rowData.room_name,
  room_type: props.rowData.room_type,
  room_price: props.rowData.room_price,
  room_image: props.rowData.room_image,
  room_detail: props.rowData.room_detail,
  room_intro: props.rowData.room_intro,
  booker_num: props.rowData.booker_num
})

const tips1 = '预付房费后，入住日期当天前，免费取消。'
const tips2 = '入住日期当天取消，收取1晚房费作为罚金。'
</script>

<style lang="less" scoped>
.room-row {
  text-align: center;
  margin-top: 7px;
  color: rgb(125, 125, 125);
  font: 1.2em sans-serif;
  line-height: 30px;

  .el-row {
    .el-col {
      i {
        text-decoration: underline;
      }

      .el-button {
      }

      .room-price {
        color: tomato;
        font-size: 20px;
      }

      .symbol {
        color: tomato;
        padding-right: 2px;
      }
    }
  }
}
</style>
