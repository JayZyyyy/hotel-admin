<template>
  <el-card class="box-card">
    <!-- 头部标题 -->
    <template #header>
      <div class="card-header">
        <span class="title">会员注册</span>
        <el-button class="button" text @click="changeType"
          >已是会员，登录</el-button
        >
      </div>
    </template>
    <!-- 注册表单 -->
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账户名" prop="account">
        <el-input
          v-model="ruleForm.account"
          autocomplete="off"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="tel">
        <el-input v-model="ruleForm.tel"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm(ruleForm)">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { checkAccount } from "@/api/index.js";

export default {
  data() {
    var checkTel = (rule, value, callback) => {
      let reg1 = /^1\d{10}$/;
      let reg2 = /^[0-9]{6,8}$/;
      let reg3 = /^(([0-9]{11})|([0-9]{3}\-[0-9]{8})|([0-9]{4}\-[0-9]{7}))$/;
      let reg4 = /^(([0-9]{8,13})|([0-9]{7,8}\-[0-9]{1,5}))$/;
      let reg5 =
        /^(([0-9]{12,16})|([0-9]{3}\-[0-9]{8}\-[0-9]{1,5})|([0-9]{4}\-[0-9]{7}\-[0-9]{1,5}))$/;
      if (
        reg1.test(value) ||
        reg2.test(value) ||
        reg3.test(value) ||
        reg4.test(value) ||
        reg5.test(value)
      ) {
        callback();
      } else {
        callback(new Error("手机号格式不正确"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        account: "",
        tel: "",
        password: "",
        checkPass: "",
      },
      rules: {
        account: [
          { required: true, trigger: "blur", message: "账户名不能为空" },
        ],
        tel: [
          { required: true, trigger: "blur", message: "请输入手机号" },
          { trigger: "blur", min: 6, max: 16, message: "格式不符" },
          { required: true, trigger: "blur", validator: checkTel },
        ],
        password: [
          { required: true, validator: validatePass, trigger: "blur" },
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    // 初步执行表单验证
    submitForm(registerForm) {
      this.$refs[registerForm].validate((valid) => {
        if (valid) {
          // 符合就调用注册用户
          this.registerAccount();
        } else {
          //不符合打印
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置
    resetForm(registerForm) {
      this.$refs[registerForm].resetFields();
    },
    // 已注册 跳回登录
    changeType() {
      this.$emit("event", 1);
    },
    // 注册用户
    registerAccount() {
      // 整理提交表单
      let form = {
        account: this.ruleForm.account,
        tel: this.ruleForm.tel,
        password: this.ruleForm.password,
      };
      // 提交注册表单并交由后台校验
      const submit = async (form) => {
        let result = await checkAccount(form);
        // 后台校验成功;
        if (result) {
          this.goHomeSearch();
        } else {
          //校验失败
          this.$alert("该用户名已被注册", "注册失败", {
            confirmButtonText: "确定",
            callback: (action) => {
              this.$message({
                type: "info",
                message: `action: ${action}`,
              });
            },
          });
        }
      };
      submit(form); //触发提交
    },
    goHomeSearch() {
      localStorage.setItem("account", this.account);
      localStorage.setItem("password", this.password);
      let location = { name: "homeSearch" };
      let query = { account: this.account, password: this.password };
      location.query = query;
      if (this.$route.params) {
        location.params = this.$route.params;
        this.$router.push(location);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.box-card {
  width: 440px;
  height: 360px;
  position: absolute;
  bottom: 20%;
  right: 15%;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 20px;
      color: #4c8df4;
    }
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
}
</style>