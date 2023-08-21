<template>
  <div class="user-info">
    <div style="margin: 20px" />
    <el-form label-position="right" label-width="100px" :model="formLabelAlign" style="max-width: 460px">
      <el-form-item label="姓名">
        <el-input v-model="formLabelAlign.name" :disabled="disabled" />
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="formLabelAlign.region" :disabled="disabled" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="formLabelAlign.type" :disabled="disabled" />
      </el-form-item>
      <el-form-item label="生日">
        <el-input v-model="formLabelAlign.birthday" :disabled="disabled" />
      </el-form-item>
      <el-button type="info" @click="changeInfo" v-if="disabled">修改信息</el-button>
      <el-button type="primary" @click="updateInfo" v-else>更新信息</el-button>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const formLabelAlign = reactive({
  name: '1',
  region: '2',
  type: '3',
  birthday: '4'
})

const disabled = ref(true)

const changeInfo = () => {
  disabled.value = false
}
const updateInfo = () => {
  disabled.value = true
  console.log(formLabelAlign)
}
</script>

<style lang="less" scoped>
.el-button {
  margin-top: 4%;
  margin-left: 22%;
}
</style>
