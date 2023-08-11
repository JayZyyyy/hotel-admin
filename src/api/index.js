import axios from 'axios'

export const getHotel = () => {
  // mock接口
  axios.get('http://127.0.0.1:4523/m1/2763977-0-default/searchHotel').then(response => {
    console.log(response.data)
  })
}
