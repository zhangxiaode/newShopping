//index.js
const app = getApp()

Page({
  data: {
    orderData:{
      showArrow: true,
      arrowL: '我的订单',
      arrowR: '查看全部订单',
      icon: ''
    },
    aboutData:{
      showArrow: true,
      arrowL: '关于我们',
      arrowR: '',
      icon: '../../assets/info.svg'
    }
  },
  goAbout(){
    wx.navigateTo({
      url: '../about/index'
    })
  },
  goOrder(event){
    wx.navigateTo({
      url: '../order/index?index=' + event.currentTarget.dataset.index
    })
  },
  onLoad(){
  },
  onShow() {
    
  }
})
