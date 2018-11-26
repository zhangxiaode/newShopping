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
    cartNum: 1,
    changeLike: 1
  },
  changeLike() {
    this.setData({
      changeLike: this.data.changeLike == 1 ? 0 : 1
    })
  },
  handleFocus() {
    this.setData({
      numFocus: true
    })
  },
  changeNum(event) {
    this.setData({
      cartNum: parseInt(event.detail.value)
    })
  },
  numBlur() {
    this.setData({
      numFocus: false
    })
  },
  handleMinus() {
    if (this.data.cartNum > 0) {
      this.setData({
        cartNum: this.data.cartNum - 1
      })
    }
  },
  handlePlus() {
    if (this.data.cartNum < 999) {
      this.setData({
        cartNum: this.data.cartNum+1
      })
    }
  },
  onLoad() {
  },
  onShow() {
  }
})
