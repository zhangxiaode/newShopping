//index.js
//获取应用实例
const app = getApp()
import ajax from "../../utils/ajax"
import { getUserInfo, login } from '../../utils/index.js'

Page({
  data: {
  },
  login() {
    login().then(res => {
      getUserInfo().then(data => {
        ajax({
          url: `/apis/login`,
          method: "get",
          data: {
            code: res.code,
            encryptedData: data.encryptedData,
            iv: data.iv
          }
        }).then(response => {
          console.log(222, response)
        })
      })
    })
  },
  login2() {
    ajax({
      url: `/apis/login2`,
      method: "post",
      data: {
        code: "aaaa"
      }
    }).then(res => {
      console.log(111, res)
    })
  },
  onLoad() {
    // setTimeout(()=>{
    //   wx.switchTab({
    //     url: '../index/index'
    //   })
    // },1000)
  },
  onShow() {
    
  }
})
