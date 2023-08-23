<template>
  <div class="room-set">
    <div class="top">
      <span class="span">房型设置</span>
      <el-button type="primary" plain @click="dialogFormVisible = true">添加房型</el-button>
    </div>
    <el-dialog v-model="dialogFormVisible" title="添加房型">
      <el-form :model="form">
        <el-form-item label="房间名称" :label-width="formLabelWidth">
          <el-input v-model="form.room_name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="房间简介" :label-width="formLabelWidth">
          <el-input v-model="form.room_intro" autocomplete="off"> </el-input>
        </el-form-item>
        <el-form-item label="房间图片" :label-width="formLabelWidth">
          <el-input v-model="form.room_image" autocomplete="off" placeholder="使用图片url"> </el-input>
        </el-form-item>
        <el-form-item label="房间类型" :label-width="formLabelWidth">
          <el-input v-model="form.room_type" autocomplete="off" placeholder="例如: 豪华大床房"> </el-input>
        </el-form-item>
        <el-form-item label="类型描述" :label-width="formLabelWidth">
          <el-input v-model="form.room_detail" autocomplete="off" placeholder="例如: 含早餐"> </el-input>
        </el-form-item>
        <el-form-item label="房间价格" :label-width="formLabelWidth">
          <el-input v-model.number="form.room_price" autocomplete="off"> </el-input>
        </el-form-item>
        <el-form-item label="容纳人数" :label-width="formLabelWidth">
          <el-input v-model.number="form.booker_num" autocomplete="off"> </el-input>
        </el-form-item>
        <el-form-item label="房间数量" :label-width="formLabelWidth">
          <el-input v-model.number="form.room_num" autocomplete="off"> </el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="addRoom"> 确认添加 </el-button>
        </span>
      </template>
    </el-dialog>
    <RoomHeader> </RoomHeader>
    <RoomInfo :roomDetail="room" v-for="room in roomDetail" :key="room.room_id">
      <template v-slot:button="slotProps">
        <el-col :span="3"
          ><div class="grid-content ep-bg-purple-light" />
          <el-button type="primary" @click="changeType(slotProps)">修改房型</el-button>
        </el-col>
      </template></RoomInfo
    >
    <el-dialog v-model="changeDialogFormVisible" title="修改房型" style="width: 500px">
      <el-form>
        <el-form-item label="房型名称" label-width="100px">
          <el-input v-model="newType" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="changeDialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="submitChange"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import RoomHeader from '../../HotelInfo/RoomHeader.vue'
import RoomInfo from '../../HotelInfo/RoomInfo.vue'

import { ref, reactive } from 'vue'
import { getOneHotel, getMyHotel, addMyRoom, updateRoom } from '@/api/index.js'
import { ElMessage } from 'element-plus'

const hotelDetail = ref({})
const roomDetail = ref([])
const session_id = window.localStorage.getItem('session_id')
const hotel_id = ref(0)
const getData = async () => {
  hotel_id.value = await getMyHotel(session_id)
  hotelDetail.value = await getOneHotel(hotel_id.value.id)
  roomDetail.value = hotelDetail.value.nameList
}
getData()
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
  room_name: '',
  room_intro: '',
  room_image: '',
  room_type: '',
  room_detail: '',
  room_price: 0,
  room_num: 0,
  booker_num: 0
})

const addRes = ref('')
const addRoom = async () => {
  dialogFormVisible.value = false
  addRes.value = await addMyRoom(session_id, form)
}

const changeDialogFormVisible = ref(false)
const newType = ref('')
const formData = reactive({})
const changeType = slotProps => {
  changeDialogFormVisible.value = true
  const { room_name, room_intro, room_price, room_type, room_detail, booker_num } = slotProps.roomDetail
  formData.room_name = room_name
  formData.room_intro = room_intro
  formData.room_attribution = [
    {
      room_price: room_price,
      room_detail: room_detail,
      bookerNum: booker_num,
      room_type: room_type,
      new_room_type: ''
    }
  ]
  formData.sessionId = session_id
}

const submitChange = async () => {
  changeDialogFormVisible.value = false
  formData.room_attribution[0].new_room_type = newType.value
  const res = await updateRoom(formData)
  if (res === 200) {
    ElMessage({
      message: '修改成功',
      type: 'success'
    })
  } else {
    ElMessage({
      message: '修改失败,请稍后重试~',
      type: 'warning'
    })
  }
}
</script>

<style lang="less">
.room-set {
  width: 100%;

  .top {
    display: flex;
    align-items: center;
    color: black;
    font-size: 16px;
    justify-content: space-between;

    .span {
      margin-left: 20px;
    }

    .el-button {
      padding: auto;
      margin-right: 20px;
    }
  }
}
</style>
