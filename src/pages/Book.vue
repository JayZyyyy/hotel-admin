<template>
  <div class="book-hotel">
    <Header>
      <template v-slot:user><UserNav></UserNav></template>
    </Header>
    <div class="book-main">
      <div class="book-message">
        <div class="header-text">预订信息</div>
        <div class="book-date">
          <span>入住日期: </span>
          <el-input disabled v-model="startDate"></el-input>
          <span>离店日期: </span>
          <el-input disabled v-model="endDate"></el-input>
          <span>房间数量</span>
          <el-input disabled v-model="roomNum"></el-input>
        </div>

        <div class="book-detail-message">
          <div class="header-text">入住信息</div>
          <div class="book-info">
            <span>联系人: </span>
            <el-input v-model="name"></el-input>
            <span>手机号码: </span>
            <el-input v-model="tel"></el-input>
            <span>入住人数</span>
            <el-select v-model="numValue">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </div>
          <div class="id-card">
            身份证号:<el-input v-model="idCard" v-idCard></el-input
            ><span class="id-card-error" :style="errorStyle">身份证格式错误</span>
          </div>
          <div class="book-remark">备注: <el-input v-model="remarks" /></div>
        </div>
        <div class="remind">
          <b>取消政策: </b> {{ remindMessage1 }}
          <br />
          <b>温馨提示: </b> {{ remindMessage2 }}
        </div>
      </div>
      <div class="right-message">
        <div class="card-image">
          <img :src="room_image" alt="" />
        </div>
        <div class="card-name">{{ hotel_name }}</div>
        <div class="card-address">地址: {{ hotel_address }}</div>
        <el-divider border-style="dashed" />
        <div class="card_room">
          <span>入住房型</span>
          <div>
            <span class="left">{{ room_name }}</span>
            <span class="right">1间</span>
          </div>
          <span>价格名称</span>
          <div>
            <span class="left">{{ room_type }}</span>
          </div>
          <span>入住日期</span>
          <div>
            <span class="left">{{ startDate }}-{{ endDate }}</span>
            <span class="right">晚</span>
          </div>
          <span class="room-price-left">房费小计</span>
          <span class="room-price-right">¥{{ room_price }}</span>
        </div>
        <el-divider border-style="dashed" class="next-divider" />
        <div class="total-price">
          <span class="left">总金额</span>
          <span class="right">¥{{ room_price }}</span>
        </div>
        <el-button type="primary" class="submit-button" @click="submitOrder">提交订单</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import { useHotelStore } from '@/store/hotel.js'
import { ref, reactive } from 'vue'
import { useBookStore } from '../store/book'

const remindMessage1 = '预付房费后，入住前一天免费取消。入住当天取消，收取一晚房费作为罚金。'
const remindMessage2 =
  '酒店于住店当天15:00后办理入住，离店当天12:00前办理退房，入离日期以当地时间为准。如您在15:00前到达，可能需要等待方能入住。若超过酒店最多入住人数，则可能需要补差价或酒店拒绝入住，具体以酒店安排为准'

// 右边的数据
const bookStore = useBookStore()
const hotel_id = bookStore.hotel_id
const hotel_name = bookStore.hotel_name
const hotel_address = bookStore.hotel_address
const room_name = bookStore.room_name
const room_type = bookStore.room_type
const room_price = bookStore.room_price
const room_image = bookStore.room_image

const hotelStore = useHotelStore()
const startDate = hotelStore.startDate
const endDate = hotelStore.endDate
const roomNum = 1

const numValue = ref(0)
const options = [
  {
    value: '1',
    label: '1'
  },
  {
    value: '2',
    label: '2'
  },
  {
    value: '3',
    label: '3'
  }
]

const name = ref('')
const tel = ref('')
const idCard = ref('')
const remarks = ref('')

const orderMessage = reactive({
  startDate: startDate,
  endDate: endDate,
  hotelId: hotel_id,
  roomName: room_name,
  roomType: room_type,
  roomNum: roomNum,
  userNum: numValue,
  bookerId: idCard,
  bookerName: name,
  bookerTel: tel,
  remarks: remarks
  // sessionId
})

const submitOrder = () => {
  console.log(orderMessage)
}

const errorStyle = ref({
  display: 'none'
})
const isIdCardValid = value => {
  return /^[0-9]{17}([0-9]|X)$/i.test(value)
}
const vIdCard = {
  mounted(el, binding) {
    // 在 el-input 元素上监听 input 事件
    el.addEventListener('input', () => {
      // 将值传递给指令
      binding = idCard.value
      if (!isIdCardValid(binding)) {
        errorStyle.value.display = 'inline-block'
      } else {
        errorStyle.value.display = 'none'
      }
    })
  }
}
</script>

<style lang="less" scoped>
.book-hotel {
  background-color: #f7f7f7;
  .book-main {
    width: 68%;
    margin: auto;
    background-color: #fff;
    overflow: hidden;

    .book-message {
      width: 67%;
      height: 00px;
      margin-top: 40px;
      margin-left: 20px;
      color: black;

      .header-text {
        font-size: 20px;
        font-weight: 700;
        padding-left: 10px;
        line-height: 30px;
        vertical-align: bottom;
        border-left: solid 5px #4c8df4;
      }

      .book-date {
        display: flex;
        align-items: center;
        margin-top: 40px;
        color: black;
        font-size: 14px;
        font-weight: 700;

        span {
          display: inline-block;
          width: 80px;
          text-align: center;
          padding-left: 20px;
        }

        .el-input {
          width: 140px;
          height: 30px;
          padding-left: 10px;
        }

        .el-select {
          width: 120px;
          padding-left: 10px;
        }
      }

      .book-detail-message {
        margin-top: 40px;
        color: black;
        font-size: 14px;
        font-weight: 700;
        .book-info {
          display: flex;
          align-items: center;
          margin-top: 40px;

          span {
            display: inline-block;
            width: 80px;
            text-align: center;
            padding-left: 20px;
          }

          .el-input {
            width: 140px;
            height: 30px;
            padding-left: 10px;
          }

          .el-select {
            width: 120px;
            padding-left: 10px;
          }
        }
        .id-card {
          margin-left: 25px;
          margin-top: 20px;
          .el-input {
            width: 300px;
            height: 30px;
            padding-left: 20px;
          }
          .id-card-error {
            color: red;
          }
        }
        .book-remark {
          margin-left: 40px;
          margin-top: 20px;
          .el-input {
            width: 500px;
            height: 30px;
            padding-left: 30px;
          }
        }
      }
      .remind {
        width: 700px;
        height: 60px;
        margin-top: 80px;
        margin-left: 15px;
        color: black;
        line-height: 20px;
        background-color: #e0d6d6;
        opacity: 0.5;

        b {
          margin-left: 10px;
        }
      }
    }

    .right-message {
      width: 26%;
      height: 600px;
      float: right;
      border-left: 1.5px dashed grey;
      padding-left: 20px;
      color: black;

      .card-image {
        width: 90%;
        height: 180px;

        background-color: blanchedalmond;

        img {
          width: 100%;
          height: 180px;
        }
      }

      .card-name {
        font-size: 20px;
        font-weight: 400;
        margin-top: 20px;
      }
      .card-address {
        margin-top: 15px;
        font-size: 14px;
        font-weight: 400;
      }
      .el-divider {
        margin-top: 20px;
      }
      .card_room {
        span {
          display: block;
          color: #76777b;
          padding-top: 3px;
        }

        div {
          display: flex;
          justify-content: space-between;

          .left {
            font-size: 15px;
          }

          .right {
            font-size: 12px;
            padding-right: 15px;
          }
        }

        .room-price-left {
          float: left;
          margin-top: 13px;
        }
        .room-price-right {
          float: right;
          margin-top: 13px;
          margin-right: 10px;
          font-size: 16px;
        }
      }
      .next-divider {
        margin-top: 40px;
      }

      .total-price {
        display: flex;
        justify-content: space-between;
        position: relative;
        .left {
          font-size: 14px;
          font-weight: ;
        }

        .right {
          margin-right: 10px;
          font-size: 26px;
          color: #ff5643;
        }
      }

      .submit-button {
        width: 140px;
        position: absolute;
        margin-left: 50px;
        margin-top: 18px;
      }
    }
  }
}
</style>
