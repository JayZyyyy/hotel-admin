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
    // 暂时不判断200
    if (code === 200) {
      return data
    } else {
      throw new Error('接口数据获取失败')
    }
  })
}

export const checkAccountAndRegister = formData => {
  return axios.post('/api/register', formData).then(res => {
    const { code, data } = res.data
    // 因为mock返回的code很随机这里先不判断等于200
    if (res.data) {
      return res.data
    } else {
      throw new Error('提交失败')
    }
  })
}

export const tryLogin = formData => {
  return axios.post('/api/login', formData).then(res => {
    if (res.data) {
      return res.data
    } else {
      throw new Error('Network error')
    }
  })
}
export const getOrder = id => {
  return axios.get(`/api/order/${id}`).then(res => {
    const { code, data } = res.data
    console.log(data)
    if (code === 200) {
      return data
    } else {
      throw new Error('接口数据获取失败')
    }
  })
}

export const bookRoom = orderMessage => {
  return axios.post('/api/book', orderMessage).then(res => {
    const { code, data } = res.data
    if (code === 200) {
      return res.data
    } else {
      throw new Error('接口数据获取失败')
    }
  })
}

export const updateUserInfo = (id, updateInfo) => {
  return axios.post(`/api/updateUserInfo/${id}`, updateInfo).then(res => {
    const { code, data } = res.data
    if (code === 200) {
      return data
    } else {
      throw new Error('接口数据获取失败')
    }
  })
}

export const getUserInfo = id => {
  return axios.get(`/api/user/${id}`).then(res => {
    const { code, data } = res.data
    if (code === 200) {
      return data.user
    } else {
      throw new Error('接口数据获取失败')
    }
  })
}
