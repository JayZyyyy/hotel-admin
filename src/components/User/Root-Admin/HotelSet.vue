<template>
  <div class="hotel-set">
    <div class="top">
      <span class="span">酒店设置</span>
      <el-button type="primary" plain @click="dialogFormVisible = true">添加酒店</el-button>
    </div>
    <div class="hotel-detail-show">
      <HotelSetChild
        v-for="hotel of hotelList"
        :hotel="hotel"
        :key="hotel.id"
        @update-hotel="getHotelList"
      ></HotelSetChild>
    </div>

    <el-dialog v-model="dialogFormVisible" title="添加酒店">
      <el-form :model="form">
        <el-form-item label="酒店名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="酒店地址" :label-width="formLabelWidth">
          <el-select v-model="form.area" placeholder="选择酒店地址">
            <el-option label="广州" value="广州" />
            <el-option label="上海" value="上海" />
            <el-option label="北京" value="北京" />
          </el-select>
        </el-form-item>
        <el-form-item label="酒店地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off" />
        </el-form-item>
        <el-form-item label="酒店简介" :label-width="formLabelWidth">
          <el-input v-model="form.intro" autocomplete="off" />
        </el-form-item>
        <el-form-item label="酒店电话" :label-width="formLabelWidth">
          <el-input v-model="form.tel" autocomplete="off" />
        </el-form-item>
        <el-form-item label="酒店图片" :label-width="formLabelWidth">
          <el-input v-model="form.picture" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="addHotel"> 确定创建 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import HotelSetChild from './HotelSetChild.vue'

import { getAllHotels, createHotel } from '@/api/index.js'
import { ElMessage } from 'element-plus'

// 获取酒店信息
let hotelList = ref([])
const getHotelList = async () => {
  hotelList.value = await getAllHotels()
}

onMounted(() => getHotelList())

const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const form = reactive({
  name: '',
  address: '',
  intro: '',
  tel: '',
  area: '',
  picture: ''
})

const session_id = window.localStorage.getItem('session_id')
const res = ref('')
const addHotel = async () => {
  res.value = await createHotel(session_id, form)
  if (res.value === 200) {
    ElMessage({
      message: '添加成功',
      type: 'success'
    })
    getHotelList()
  } else {
    ElMessage({
      message: '添加失败，请重试~',
      type: 'warning'
    })
  }
  dialogFormVisible.value = false
}
</script>

<style lang="less" scoped>
.hotel-set {
  width: 100%;

  .top {
    display: flex;
    align-items: center;
    color: black;
    font-size: 16px;
    justify-content: space-between;
    margin-bottom: 10px;

    .span {
      margin-left: 20px;
    }

    .el-button {
      padding: auto;
      margin-right: 20px;
    }
  }

  .hotel-detail-show {
  }
}

.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}

.upload-demo {
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
}
</style>
