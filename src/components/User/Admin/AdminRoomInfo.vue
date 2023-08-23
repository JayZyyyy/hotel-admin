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
      <RoomRow v-for="row in categorizedData" :rowData="row" :key="row.room_id">
        <template v-slot:button>
          <el-col :span="4"
            ><div class="grid-content ep-bg-purple-light" />
            <el-text style="color: blue">{{ getCountValue(row) }}</el-text>
          </el-col>
        </template>
      </RoomRow>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, reactive, computed } from 'vue'
import RoomRow from '../../HotelInfo/RoomRow.vue'
import { getHotelOrder, getMyHotel } from '@/api/index.js'

const props = defineProps({
  roomDetail: Object
})
const roomList = props.roomDetail.roomList

const session_id = window.localStorage.getItem('session_id')

const counts = reactive({})
const orderList = ref([])
const hotel_id = ref(0)
const idList = ref([])

const getData = async () => {
  hotel_id.value = await getMyHotel(session_id)
  orderList.value = await getHotelOrder(session_id, hotel_id.value.id)
  orderList.value.forEach(item => {
    idList.value.push(item.room_id)
  })
}

const groupedData = async () => {
  await getData()
  roomList.forEach(obj => {
    if (!idList.value.includes(obj.room_id)) {
      const key = `${obj.room_name}-${obj.room_type}`
      if (!counts[key]) {
        counts[key] = {
          room_name: obj.room_name,
          room_type: obj.room_type,
          count: 1
        }
      } else {
        counts[key].count++
      }
    } else {
    }
  })
  console.log(counts)
}
groupedData()

const getCountValue = row => {
  const key = `${row.room_name}-${row.room_type}`
  return computed(() => {
    const countData = counts[key]
    return countData ? countData.count : 0
  })
}

const categorizedData = ref([])
const objectsEqual = (obj1, obj2) => {
  const str1 = JSON.stringify(obj1)
  const str2 = JSON.stringify(obj2)
  return str1 === str2
}
const func = () => {
  const newData = roomList.map(item => {
    const { room_id, ...rest } = item
    return rest
  })
  categorizedData.value = newData.reduce((pre, item) => {
    if (pre.length === 0) {
      pre.push(item)
      return pre
    }
    pre.forEach(obj1 => {
      if (objectsEqual(obj1, item)) {
      } else {
        pre.push(item)
      }
    })
    return pre
  }, [])
}
func()
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
