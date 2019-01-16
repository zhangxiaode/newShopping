//index.js
//获取应用实例
const app = getApp()
import ajax from "../../utils/ajax"

Page({
  data: {
  },
  getUserInfo() {
    wx.login({
      success(res) {
        console.log(res)
        ajax({
          url: `/apis/login`,
          method: "get",
          data: {
            code: res.code
          }
        }).then(response => {
          console.log(222, response)
        })
      }
    })
  },
  onLoad() {
    // setTimeout(()=>{
    //   wx.switchTab({
    //     url: '../index/index'
    //   })
    // },1000)
    wx.getUserInfo({
      success(res) {
        console.log(res)
        // const nickName = res.userInfo.nickName
        // const avatarUrl = res.userInfo.avatarUrl //头像
        // const gender = res.userInfo.gender // 性别 0：未知、1：男、2：女
        // const country = res.userInfo.country
        // const province = res.userInfo.province
        // const city = res.userInfo.city
        // const language = res.userInfo.language
      }
    })
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
