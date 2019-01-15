//index.js
//获取应用实例
const app = getApp()
import ajax from "../../utils/ajax"

Page({
  data: {
    showMenu: false
  },
  openMenus(event) {
    if (event.currentTarget.dataset.close) {
      this.setData({
        showMenu: false
      })
    } else {
      this.setData({
        showMenu: !this.data.showMenu
      })
    }
  },
  onLoad() {
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
  }
})
