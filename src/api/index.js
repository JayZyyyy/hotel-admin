import axios from 'axios'
import router from './../router/index'

const toLogin = () => {
  ElMessage({
    message: '未登录/登录过期，请重新登录',
    type: 'warning'
  })
  setTimeout(() => {
    router.push('/login')
  }, 1000)
}
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
    if (code === 200) {
      return data
    } else if (code === 401) {
      toLogin()
    } else {
      throw new Error('接口数据获取失败')
    }
  })
}

export const bookRoom = orderMessage => {
  return axios.post('/api/book', orderMessage).then(res => {
    const { code, data } = res.data
    console.log(res)
    if (code === 200) {
      return res.data
    } else if (code === 401) {
      toLogin()
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
    } else if (code === 401) {
      toLogin()
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
    } else if (code === 401) {
      toLogin()
    } else {
      throw new Error('接口数据获取失败')
    }
  })
}

export const cancelRoom = (order_id, session_id) => {
  return axios.post(`/api/cancelRoom/${order_id}?session_id=${session_id}`).then(res => {
    const { code, data } = res.data
    if (code === 200) {
      return data
    } else if (code === 401) {
      toLogin()
    } else {
      throw new Error('接口数据获取失败')
    }
  })
}

export const updatePassword = (session_id, newPass) => {
  return axios.post(`/api/updatePassword/${session_id}`, newPass).then(res => {
    const { code, data } = res.data
    if (code === 200) {
      return code
    } else if (code === 401) {
      toLogin()
    } else {
      throw new Error('接口数据获取失败')
    }
  })
}

export const createHotel = (session_id, hotel_data) => {
  return axios.post(`/api/addHotel?session_id=${session_id}`, hotel_data).then(res => {
    const { code, data } = res.data
    if (code === 200) {
      return code
    } else if (code === 401) {
      toLogin()
    } else {
      throw new Error('接口数据获取失败')
    }
  })
}

export const deleteHotel = (session_id, hotel_id) => {
  return axios.get(`/api/deleteHotel/${hotel_id}?session_id=${session_id}`).then(res => {
    const { code, data } = res.data
    if (code === 200) {
      return code
    } else if (code === 401) {
      toLogin()
    } else {
      throw new Error('接口数据获取失败')
    }
  })
}

export const getHotelOrder = (session_id, hotel_id) => {
  return axios.get(`/api/getHotelOrders/${hotel_id}?session_id=${session_id}`).then(res => {
    const { code, data } = res.data
    if (code === 200) {
      return data.orders
    } else if (code === 401) {
      toLogin()
    } else {
      throw new Error(data.message)
    }
  })
}

export const getHotelDetail = session_id => {
  return axios.get(`/api/hotelDetail?session_id=${session_id}`).then(res => {
    const { code, data } = res.data
    if (code === 200) {
      return data.hotel
    } else if (code === 401) {
      toLogin()
    } else {
      throw new Error(data.message)
    }
  })
}

export const getMyHotel = session_id => {
  return axios.get(`/api/getMyHotel/${session_id}`).then(res => {
    const { code, data } = res.data
    if (code === 200) {
      return data.hotel
    } else if (code === 401) {
      toLogin()
    } else {
      throw new Error(data.message)
    }
  })
}

export const addMyRoom = (session_id, formData) => {
  return axios.get(`/api/addRoom/${session_id}`, formData).then(res => {
    const { code, data } = res.data
    console.log(res)
    if (code === 200) {
      return code
    } else if (code === 401) {
      toLogin()
    } else {
      throw new Error('接口数据获取失败')
    }
  })
}

export const updateRoom = formData => {
  return axios.post(`/api/updateRoom`, formData).then(res => {
    const { code, data } = res.data
    if (code === 200) {
      return code
    } else if (code === 401) {
      toLogin()
    } else {
      throw new Error('接口数据获取失败')
    }
  })
}
