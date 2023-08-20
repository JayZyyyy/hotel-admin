<template>
  <div class="search-box">
    <div class="box-top">
      <div class="target">
        <span class="text">目的地</span>
        <div class="city">
          <el-select v-model="valuePlace" class="m-2" placeholder="Select" size="large">
            <el-option-group v-for="group in options" :key="group.label" :label="group.label">
              <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value" />
            </el-option-group>
          </el-select>
        </div>
      </div>
      <div class="pick-date">
        <div class="date">
          <span class="startDate">入住时间</span>
          <span class="endDate">离店时间</span>
        </div>
        <el-date-picker
          v-model="dateArr"
          type="daterange"
          size="large"
          start-placeholder="入住日期"
          end-placeholder="离店日期"
        />
      </div>
      <div class="search-button">
        <el-button type="primary" :icon="Search" size="large" @click="searchHotel">搜索</el-button>
      </div>
    </div>
    <div class="bottom-box">
      <div class="input">
        <el-input v-model="keyInput" class="w-50 m-2" placeholder="关键字" :prefix-icon="Search" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useHotelStore } from '@/store/hotel.js'

const valuePlace = ref('')
const options = [
  {
    label: '国内',
    options: [
      {
        value: '上海',
        label: '上海'
      },
      {
        value: '北京',
        label: '北京'
      },
      {
        value: '广州',
        label: '广州'
      }
    ]
  },
  {
    label: '国外',
    options: [
      {
        value: '伊斯坦布尔',
        label: '伊斯坦布尔'
      },
      {
        value: '曼谷',
        label: '曼谷'
      },
      {
        value: '特拉维夫',
        label: '特拉维夫'
      }
    ]
  }
]

const dateArr = ref([])
let startTime = ref('')
let endTime = ref('')
watchEffect(() => {
  startTime.value = dateArr.value?.[0]
  endTime.value = dateArr.value?.[1]
})

const keyInput = ref('')

const hotelStore = useHotelStore()
const searchHotel = () => {
  if (startTime.value === undefined || endTime.value === undefined) {
    ElMessage({
      message: '需要先选择入住日期噢',
      type: 'warning'
    })
    return
  }
  hotelStore.changeDate(startTime.value, endTime.value)
}
</script>

<style scoped lang="less">
.search-box {
  width: 820px;
  height: 140px;
  position: absolute;
  background-color: white;
  margin: auto;
  left: 0;
  right: 0;
  top: 65%;
  opacity: 0.9;
  border: solid 1px silver;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);

  .box-top {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    padding-top: 8px;

    .target {
      color: #000;
      padding-left: 20px;

      .text {
        display: block;
        font-size: 16px;
        width: 50px;
        height: 20px;
      }

      .city {
        font-size: 24px;

        .el-select {
          border: none;
        }
      }
    }

    .pick-date {
      float: left;
      margin-left: 20px;

      .date {
        width: 100%px;
        text-align: center;
        color: #000;
        font-size: 16px;

        .startDate {
          padding: 60px;
        }

        .endDate {
          padding: 60px;
        }
      }
    }
    .search-button {
      width: 50px;
      margin-left: 30px;
      margin-top: 15px;
      padding-left: 20px;
      .el-button {
        width: 100px;
        font-size: 16px;
      }
    }
  }

  .bottom-box {
    width: 595px;
    height: 40px;
    margin-top: -15px;
    margin-left: 20px;

    .el-input {
      height: 37px;
      margin-top: 3px;
    }
  }
}

.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
</style>
