<template>
  <div class="hotel-detail-child">
    <div class="image">
      <img :src="picture" alt="" />
    </div>
    <div class="info">
      <h2 class="name">{{ name }}</h2>
      <div class="address"><i>地址: </i>{{ area }}</div>
      <div class="intro"><i>简介: </i>{{ intro }}</div>
      <div class="tag"><el-tag>经济型</el-tag> <el-tag>市中心</el-tag></div>
      <div class="hotel-price">
        ¥ <el-text tag="b">{{ price }}</el-text
        >起
      </div>
    </div>
    <div class="today">
      <div>今日营业情况</div>
      <div>入住房间: {{ roomCount }}</div>
      <div>入住人数: {{ consumer }}</div>
      <div>营业额(¥) : {{ totalMoney }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
  hotel: Object
})
const { id, name, area, intro, picture, price, roomCount, consumer, totalMoney } = props.hotel

// 路由跳转
const router = useRouter()
const route = useRoute()

const toHotelInfo = () => {
  router.push({
    name: 'HotelInfo',
    params: {
      id: id
    }
  })
}
</script>

<style scoped lang="less">
.hotel-detail-child {
  position: relative;
  width: 100%;
  height: 170px;
  background: #fffcf3;
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: solid 1px #e6e7e7;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);

  .image {
    display: inline-block;

    margin-left: 20px;
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
    background-color: #fffcf3;

    .name {
      width: 450px;
    }

    h2 {
      font-size: 20px;
      font-weight: 700;
    }
    .address {
      padding-top: 10px;
      font-size: 16px;

      i {
        font-weight: 500;
      }
    }

    .intro {
      padding-top: 5px;
      font-size: 12px;
      width: 350px;
      height: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      i {
        font-weight: 500;
        -webkit-line-clamp: 3;
      }
    }
    .tag {
      margin-left: -10px;
      .el-tag {
        margin-left: 10px;
        margin-top: 10px;
        padding-left: 10px;
        background-color: white;
        border: solid 1px skyblue;
      }
    }

    .hotel-price {
      width: 200px;
      height: 50px;
      font-size: 14px;
      color: #ff5341;
      font: 1em sans-serif;
      .el-text {
        font-size: 30px;
        color: #ff5341;
      }
    }
  }

  .today {
    float: right;
    width: 150px;
    margin-top: 9%;
    color: rgb(110, 110, 212);

    div {
      padding: 3px;
    }
  }
}

.my-content {
  background: #000;
}
</style>
