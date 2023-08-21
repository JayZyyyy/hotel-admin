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
    // 暂时不判断200
    if (code) {
      return data
    } else {
      throw new Error('接口数据获取失败')
    }
  })
}

export const checkAccount = formData => {
  return axios.post('/api/register',formData).then(res => {
    const { code, data } = res.data
    // 因为mock返回的code很随机这里先不判断等于200
    if(code === 200) {
      return 1
    } else {
      throw new Error('提交失败')
    }
  })
}