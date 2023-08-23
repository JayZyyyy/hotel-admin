<template>
  <div class="user-pages">
    <Header>
      <template v-slot:user><UserNav></UserNav></template>
    </Header>
    <div class="user-bg">
      <div class="user-tab">
        <div class="user-welcome">{{ name }} ,您好</div>
        <div class="tabs">
          <div>
            <span class="number">0</span>
            <span>待支付</span>
          </div>
          <div class="middle-box">
            <span class="number">{{ countState0 }}</span>
            <span>待入住</span>
          </div>
          <div>
            <span class="number">0</span>
            <span>优惠券</span>
          </div>
        </div>
        <div class="user-middle">
          <span>会员等级: <i>蓝卡</i></span>
          <span>会员积分: <i>100</i></span>
          <span>有效期至: <i>2025-08-31</i></span>
        </div>
      </div>
    </div>
    <User></User>
    <Aboutus></Aboutus>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import { User } from '../components/User'
import { Aboutus } from '../components/Home'
import UserNav from '../components/UserNav.vue'
import { ref } from 'vue'
import { getOrder } from '@/api/index.js'

const name = window.localStorage.getItem('user_name')

const session_id = window.localStorage.getItem('session_id')
const orderList = ref([])
const countState0 = ref(0)
const getOrderList = async () => {
  orderList.value = await getOrder(session_id)
  countState0.value = orderList.value.orders.reduce((pre, order) => (order.state === 0 ? pre + 1 : pre), 0)
  console.log(countState0.value)
}
getOrderList()
</script>

<style lang="less" scoped>
.user-pages {
  width: 100%;
  background: #f7f7f7;
  .user-bg {
    height: 400px;
    background-image: url('../assets/user-bg.png');
    background-size: cover;
    background-position: 50% 30%;
    opacity: 0.9;
    overflow: hidden;

    .user-tab {
      width: 17%;
      height: 58%;
      margin-left: 8%;
      margin-top: 3%;
      background-color: rgba(192, 185, 185, 0.7);
      color: aliceblue;
      .user-welcome {
        padding-top: 20px;
        padding-left: 20px;
        font-size: 20px;
      }

      .tabs {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;

        div {
          display: flex;
          flex-direction: column;
          align-items: center;

          .number {
            color: rgb(76, 76, 237);
            font-weight: 700;
          }
        }
      }

      .user-middle {
        display: flex;
        flex-direction: column;
        margin-top: 10px;

        span {
          padding-top: 5%;
          padding-left: 10%;

          i {
            color: rgb(76, 76, 237);
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>
