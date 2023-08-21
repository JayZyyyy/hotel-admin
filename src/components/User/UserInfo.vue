<template>
  <div class="user-info">
    <div style="margin: 20px" />
    <el-form label-position="right" label-width="100px" :model="formLabelAlign" style="max-width: 460px">
      <el-form-item label="姓名">
        <el-input v-model="formLabelAlign.name" :disabled="disabled" />
      </el-form-item>
      <el-form-item label="手机号" class="tel-input">
        <el-input
          v-model="formLabelAlign.tel"
          :disabled="disabled"
          @input="handleInput"
          placeholder="请输入手机号"
          class="tel-input"
        />
        <span v-if="isPhoneNumberValid" style="width: 140px; display: inline-block; color: blue">手机号格式正确</span>
        <span v-else style="width: 140px; display: inline-block; color: tomato">手机号格式不正确</span>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="formLabelAlign.email" :disabled="disabled" @input="handleInputEmail" />
        <p v-if="isEmailValid" style="width: 140px; display: inline-block; color: blue">邮箱格式正确</p>
        <p v-else style="width: 140px; display: inline-block; color: tomato">邮箱格式不正确</p>
      </el-form-item>
      <el-form-item label="生日">
        <el-date-picker
          v-model="formLabelAlign.birthday"
          type="date"
          value-format="YYYY-MM-DD"
          placeholder="选择你的生日"
          :disabled="disabled"
        />
      </el-form-item>
      <el-button type="info" @click="changeInfo" v-if="disabled">修改信息</el-button>
      <el-button type="primary" @click="updateInfo" v-else>更新信息</el-button>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed, onMounted } from 'vue'
import { updateUserInfo, getUserInfo } from '../../api'
import { ElMessage } from 'element-plus'

const session_id = window.localStorage.getItem('session_id')

let formLabelAlign = reactive({
  name: '',
  tel: '',
  email: '',
  birthday: ''
})

const disabled = ref(true)

const changeInfo = () => {
  disabled.value = false
}

const message = ref({
  message: ''
})

const updateInfo = async () => {
  message.value = await updateUserInfo(session_id, formLabelAlign)
  if (message.value.message == 'Success.') {
    ElMessage({
      message: '更新信息成功',
      type: 'success'
    })
  } else {
    ElMessage({
      message: '更新信息失败，请重试!',
      type: 'warning'
    })
  }
  disabled.value = true
}

// 验证手机号
const handleInput = value => {
  formLabelAlign.tel = value // 更新手机号
}
const isPhoneNumberValid = computed(() => {
  const regex = /^[1][3-9]\d{9}$/ // 以1开头，第二位为3-9，后面跟9位数字
  return regex.test(formLabelAlign.tel)
})

// 验证邮箱
const handleInputEmail = value => {
  formLabelAlign.email = value // 更新邮箱
}

const isEmailValid = computed(() => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ // 基本的邮箱验证正则表达式
  return regex.test(formLabelAlign.email)
})

const res = ref({
  account: '',
  tel: '',
  email: '',
  birthday: ''
})
const getInfo = async () => {
  res.value = await getUserInfo(session_id)
  formLabelAlign.name = res.value.account
  formLabelAlign.tel = res.value.tel
  formLabelAlign.email = res.value.email
  formLabelAlign.birthday = res.value.birthday
}
getInfo()
</script>

<style lang="less" scoped>
.el-button {
  margin-top: 4%;
  margin-left: 22%;
}
</style>
