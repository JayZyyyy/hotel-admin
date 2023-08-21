<template>
  <div class="show-hotel">
    <div class="blank"></div>
    <div class="show-body">
      <div class="header">
        <div class="top-message">
          <b>查询到 </b>
          <b
            ><span>{{ count }}</span></b
          >
          <b> 家酒店</b>
        </div>
        <div class="sort-button">
          <el-dropdown>
            <div class="el-dropdown-link">排序方式:</div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item><a @click="() => changeSort('价格升序')">价格升序</a></el-dropdown-item>
                <el-dropdown-item><a @click="() => changeSort('价格降序')">价格降序</a></el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <div class="sortText">{{ sortWay }}</div>
        </div>
      </div>
      <div class="hotel-detail-show">
        <HotelDetail v-for="hotel of hotelList" :hotel="hotel" :key="hotel.id"></HotelDetail>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref, getCurrentInstance } from 'vue'
import HotelDetail from './HotelDetail.vue'
import { getHotel, getAllHotels } from '@/api/index.js'

const sortWay = ref('默认排序')
const changeSort = message => {
  sortWay.value = message
}

// 获取酒店信息
const count = ref(0)
let hotelList = ref([])
const getHotelList = async () => {
  hotelList.value = await getAllHotels()
  count.value = hotelList.value.length
}
onMounted(() => getHotelList())

// 获取全局的 vue 实例
let { proxy } = getCurrentInstance()
proxy?.$mitt.on('searchHotel', res => {
  hotelList.value = res
})
</script>

<style lang="less" scoped>
.show-hotel {
  width: 100%;
  padding-top: 5%;

  .show-body {
    width: 70%;
    margin: 0 auto;

    .header {
      background-color: rgba(189, 227, 239, 0.2);
      padding-left: 20px;
      padding-top: 2px;
      width: 200px;
      margin-left: 5%;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
      .top-message {
        span {
          color: #94c9ff;
        }
      }

      .sort-button {
        width: 150px;
        height: 30px;
        position: relative;
        margin-top: 5px;

        .el-dropdown {
          margin-top: 5px;
          padding-top: 5px;
          width: 70px;
          height: 20px;
          border: none;

          .el-dropdown-link .el-tooltip__trigger .el-tooltip__trigger {
            border: none;
          }
        }

        .sortText {
          display: inline-block;
          position: absolute;
          width: 80px;
          height: 20px;
          padding-top: 7px;
          font-size: 16px;
          font-weight: 700;
        }
      }
    }

    .hotel-detail-show {
      margin-top: 20px;
      max-height: 700px;
      overflow: scroll auto;
      overflow-x: hidden;
    }
  }
}
</style>
