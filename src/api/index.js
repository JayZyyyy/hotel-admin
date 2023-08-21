import axios from 'axios'

export const getHotel = searchMessage => {
  return axios.post('/api/searchHotel', searchMessage).then(response => {
    return response.data.data
  })
}

// 获取所有酒店
export const getAllHotels = () => {
  // mock接口
  return axios.get('/api/getAllHotels').then(response => {
    return response.data.data
  })
}

// 跨域解决的请求
export const getOneHotel = id => {
  return axios.get(`/api/searchHotel/${id}`).then(res => {
    const { code, data } = res.data
    if (code === 200) {
      return data
    } else {
      throw new Error('接口数据获取失败')
    }
  })
}

export const getOrder = id => {
  return axios.get('/api/order/1').then(res => {
    const { code, data } = res.data
    if (code === 200) {
      return data.data
    } else {
      throw new Error('接口数据获取失败')
    }
  })
}
