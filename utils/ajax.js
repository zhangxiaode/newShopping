// const baseUrl = 'https://wx.zxdkxl.com'
// const baseUrl = 'http://10.100.4.64:9090'
const baseUrl = 'http://192.168.5.102:9090'

export default ({url, method = 'GET', data = {}}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      header: {
        'content-type': 'application/json'
      },
      data: data,
      method: method,
      success: (res) => {
        resolve(res.data)
        // if(res.data.code==0){
        //   resolve(res)
        // }else{
        //   wx.showLoading(res.data.message)
        //   setTimeout(() => {
        //     wx.hideLoading()
        //   }, 3000)
        // }
      },
      fail: (err) => {
        // wx.showLoading({
        //   title: '网络错误!'
        // })
        // setTimeout(() => {
        //   wx.hideLoading()
        // }, 3000)
        reject(err)
      }
    })
  })
}