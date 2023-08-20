import { defineStore } from 'pinia'
import { dateToLocale, betweenDays } from '@/utils/index.js'

export const useHotelStore = defineStore('hotel', {
  state: () => {
    return {
      startDate: '',
      endDate: ''
    }
  },
  getters: {
    days() {
      return betweenDays(this.startDate, this.endDate)
    }
  },
  actions: {
    changeDate(startDate, endDate) {
      this.startDate = dateToLocale(startDate)
      this.endDate = dateToLocale(endDate)
    },
    changeStartDate(start) {
      this.startDate = dateToLocale(start)
    },
    changeEndDate(end) {
      this.endDate = dateToLocale(end)
    }
  },
  persist: {
    enabled: true //开启数据持久化
  }
})
