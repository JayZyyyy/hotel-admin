<template>
  <!-- 登录卡片 -->
  <el-card class="box-card">
    <!-- 卡片头部标题 -->
    <div slot="header" class="clearfix">
      <span>会员账户登录</span>
    </div>
    <!-- 卡片内登录表单 -->
    <el-form ref="Loginform" :model="Loginform" label-width="80px" class="form">
      <el-form-item label="用户名">
        <el-input v-model="Loginform.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          v-model="Loginform.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox
          v-model="Loginform.privacyPolicy"
          name="privacyPolicy"
          class="policy"
        >
          <template v-slot>
            勾选即视为您已阅读并同意我们的
            <a href="#">《好速来会员预订官网服务协议》</a>、
            <a href="#">《好速来会员预订官网隐私政策》</a>、
            <a href="#">《好速来会员服务协议》</a>和
            <a href="#">《好速来会员服务隐私政策》</a>，
            进而通过手机号码登录好速来会员预订官网和享用好速来会员服务
          </template>
        </el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="login-button"
          >登录</el-button
        >
      </el-form-item>
      <el-form-item class="register-link">
        享更多特权，
        <a href="#" @click="changeType">免费注册</a>
      </el-form-item>
    </el-form>
  </el-card>
</template>


<script>
export default {
  data() {
    return {
      Loginform: {
        account: "",
        pass: "",
        privacyPolicy: false,
      },
    };
  },
  methods: {
    onSubmit() {
      if (
        this.Loginform.account &&
        this.Loginform.pass &&
        this.Loginform.privacyPolicy
      ) {
        console.log("submit!");
      } else {
        let mes1 = "";
        let mes2 = "";
        let mes3 = "";
        let mes = "";
        if (!this.Loginform.account) mes1 = "用户名";
        if (!this.Loginform.pass) mes2 = "密码";
        if (!this.Loginform.privacyPolicy) mes3 = "勾选同意协议";
        mes = "请输入" + mes1 +" " + mes2 +" " + mes3;
        // alert(mes)
        this.$alert(mes, "错误提示", {
          confirmButtonText: "确定",
          callback: (action) => {
            this.$message({
              type: "info",
              message: `action: ${action}`,
            });
          },
        });
      }
    },
    changeType() {
      this.$emit("event", 2);
    },
  },
};
</script>


<style lang="less" scoped>
/* // 登录卡片 */
.box-card {
  width: 440px;
  height: 360px;
  position: absolute;
  bottom: 20%;
  right: 15%;

  // 卡片头部
  .clearfix {
    font-size: 20px;
    color: #4c8df4;
    margin: 10px auto;
    text-align: center;
    &:before,
    &:after {
      display: table;
      content: "";
    }
    &:after {
      clear: both;
    }
  }

  // 卡片内登录表单
  .form {
    width: 360px;
    padding-top: 10px;
    margin-left: 0px;
    margin-bottom: 18px;

    // 协议文字
    .policy {
      white-space: normal;
      height: 70px;
      font-size: 12px;

      & a {
        color: #4c8df4;
      }
    }
    // 登录按钮
    .login-button {
      width: 100%;
      font-size: 20px;
    }
    // 注册链接
    .register-link a {
      color: #4c8df4;
    }
  }
}
</style>