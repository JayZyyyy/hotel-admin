import { defineStore } from 'pinia'

export const useBookStore = defineStore('book', {
  state: () => {
    return {
      hotel_id: 0,
      hotel_name: '',
      hotel_address: '',
      room_name: '',
      room_type: '',
      room_price: '',
      room_image: ''
    }
  },
  getters: {},
  actions: {
    addHotelDetail(id, name, address) {
      this.hotel_id = id
      this.hotel_name = name
      this.hotel_address = address
    },
    addRoomDetail(name, type, price, image) {
      this.room_name = name
      this.room_type = type
      this.room_price = price
      this.room_image = image
    }
  },
  persist: {
    enabled: true //开启数据持久化
  }
})
