<template>
  <div class="room-info">
    <div class="room-img">
      <div class="image">
        <img :src="roomDetail.room_image" />
      </div>
      <div class="room-name">
        {{ roomDetail.name }}
        <span><el-tooltip :content="roomDetail.room_intro" placement="top"> 详情 </el-tooltip></span>
      </div>
    </div>

    <div class="room-type">
      <RoomRow v-for="row in roomList" :rowData="row" :key="row.room_id">
        <template v-slot:button>
          <slot name="button"></slot>
        </template>
      </RoomRow>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import RoomRow from './RoomRow.vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  roomDetail: Object
})
const roomList = props.roomDetail.roomList
</script>

<style scoped lang="less">
.room-info {
  width: 100%;
  height: 170px;
  background-color: #d9ecff;
  border-top: solid 2px white;
  display: flex;

  .room-img {
    position: relative;
    width: 190px;
    height: 130px;
    margin-left: 10px;
    padding-top: 10px;

    img {
      width: 190px;
      height: 130px;
    }

    .room-name {
      position: absolute;
      top: 140px;
      display: flex;
      justify-content: space-between;
      width: 190px;
      height: 20px;
      margin-top: 5px;
      color: black;
      font-size: 16px;
      font-weight: 600;

      span {
        font-size: 14px;
        color: rgb(248, 88, 88);
      }
    }
  }

  .room-type {
    display: inline-block;
    width: 80%;
    height: 160px;
    margin-left: 10px;
    overflow: hidden;
  }
}
</style>
