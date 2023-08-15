import axios from 'axios'

export const getHotel = () => {
  // mock接口
  return axios.get('http://127.0.0.1:4523/m1/2763977-0-default/searchHotel').then(response => {
    return response.data.data
  })
}

export const getOneHotel = id => {
  return axios.get('http://127.0.0.1:4523/m1/2763977-0-default/searchHotel/74').then(res => {
    const { code, data } = res.data
    if (code === 200) {
      return data
    } else {
      throw new Error('接口数据获取失败')
    }
  })
}
