<template>
  <div class="hotel-detail-child">
    <div class="image">
      <img :src="picture" alt="" />
    </div>
    <div class="info">
      <h2>{{ name }}</h2>
      <div class="address"><i>地址: </i>{{ address }}</div>
      <div class="intro"><i>简介: </i>{{ intro }}</div>
      <div class="tel"><i>电话: </i>{{ tel }}</div>
    </div>
    <el-button type="primary" size="large" class="deleteButton" @click="deleteButton">删除酒店</el-button>
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { deleteHotel } from '@/api/index.js'

const props = defineProps({
  hotel: Object
})
const { id, name, address, intro, picture, tel } = props.hotel
const price = ref(99)

const emit = defineEmits(['updateHotel'])

const session_id = window.localStorage.getItem('session_id')
const res = ref('')
const deleteButton = async () => {
  res.value = await deleteHotel(session_id, id)
  if (res.value === 200) {
    ElMessage({
      message: '删除成功',
      type: 'success'
    })
    emit('updateHotel')
  } else {
    ElMessage({
      message: '删除失败，请重试~',
      type: 'warning'
    })
  }
}
</script>

<style scoped lang="less">
.hotel-detail-child {
  position: relative;
  width: 100%;
  height: 200px;
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
    width: 280px;
    margin-left: 20px;
    margin-top: 10px;
    background-color: #fffcf3;

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

    .tel {
      padding-top: 10px;
      font-size: 16px;

      i {
        font-weight: 500;
      }
    }

    .intro {
      padding-top: 10px;
      font-size: 16px;
      width: 500px;

      i {
        font-weight: 500;
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
      width: 90px;
      height: 40px;
      font-size: 14px;
      color: #ff5341;
      font: 1em sans-serif;
      .el-text {
        font-size: 30px;
        color: #ff5341;
      }
    }
  }

  .updateButton {
    position: absolute;
    float: right;
    background-color: white;
    color: rgb(107, 156, 176);
    right: 20px;
    width: 100px;
    top: 100px;
  }

  .deleteButton {
    position: absolute;
    float: right;
    background-color: white;
    color: rgb(107, 156, 176);
    right: 20px;
    width: 100px;
    top: 150px;
  }
}

.my-content {
  background: #000;
}
</style>
