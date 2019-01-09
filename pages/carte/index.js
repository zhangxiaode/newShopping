//index.js
//获取应用实例
const app = getApp()

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
  }
})
