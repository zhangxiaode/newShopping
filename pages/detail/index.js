//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    goodsFlavor: {
      showArrow: true,
      arrowL: '请选择做法',
      arrowR: '',
      icon: ''
    },
    numFocus: false,
    cartNum: 1
  },
  handleFocus() {
    this.setData({
      numFocus: true
    })
  },
  numBlur() {
    this.setData({
      numFocus: true
    })
  },
  onLoad() {
  },
  onShow() {
  }
})
