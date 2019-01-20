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
  onLoad() {
    setTimeout(()=>{
      wx.switchTab({
        url: '../index/index'
      })
    },1000)
  },
  onShow() {
    ajax({
      url: `/apis/findUser`,
      method: "get",
      data: {
      }
    }).then(res => {
      console.log(111, res)
    })
  }
})
