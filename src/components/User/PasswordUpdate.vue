<template>
  <div class="update-password">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="当前密码" prop="oldPassword">
        <el-input v-model="ruleForm.oldPassword"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input type="password" v-model="ruleForm.newPassword" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPassword">
        <el-input type="password" v-model="ruleForm.checkPassword" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { updatePassword } from '@/api/index.js'
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPassword')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.newPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        newPassword: '',
        checkPassword: '',
        oldPassword: ''
      },
      rules: {
        newPassword: [{ validator: validatePass, trigger: 'blur' }],
        checkPassword: [{ validator: validatePass2, trigger: 'blur' }]
      },
      session_id: window.localStorage.getItem('session_id')
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        const newPass = {
          oldPassword: this.ruleForm.oldPassword,
          newPassword: this.ruleForm.newPassword
        }
        console.log(newPass)
        if (valid) {
          const res = await updatePassword(this.session_id, newPass)
          if (res === 200) {
            ElMessage({
              message: '修改密码成功.',
              type: 'success'
            })
            this.resetForm('ruleForm')
          } else {
            ElMessage({
              message: '修改密码失败，请稍后再试.',
              type: 'warning'
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.update-password {
  margin-top: 5%;
  .el-input {
    width: 300px;
  }
}
</style>
