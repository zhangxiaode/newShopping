//index.js
const app = getApp()

Page({
  data: {
    myVip:{
      showArrow: true,
      arrowL: '我的会员卡',
      arrowR: '',
      icon: '../../assets/myVipIcon.svg'
    },
    coupon: {
      showArrow: true,
      arrowL: '我的优惠券',
      arrowR: '',
      icon: '../../assets/couponIcon.svg'
    },
    myOrder: {
      showArrow: true,
      arrowL: '我的订单',
      arrowR: '',
      icon: '../../assets/myOrderIcon.svg'
    },
    myPlace: {
      showArrow: true,
      arrowL: '收货地址管理',
      arrowR: '',
      icon: '../../assets/myPlaceIcon.svg'
    },
    activities: {
      showArrow: true,
      arrowL: '商家活动',
      arrowR: '积分商城',
      icon: '../../assets/activitiesIcon.svg'
    },
    personalInfo: {
      showArrow: true,
      arrowL: '个人信息',
      arrowR: '未设置',
      icon: '../../assets/persInfoIcon.svg'
    },
    myInfo: {
      nickName: "",
      avatarUrl: "",
      grade: 1,
      fraction: 268
    }
  },
  switchPage(event) {
    wx.navigateTo({
      url: event.currentTarget.dataset.url
    })
  },
  onLoad(){
    // wx.getUserInfo()
    // this.setData({
    //   nickName: res.userInfo.avatarUrl,
    //   avatarUrl: res.userInfo.nickName
    // })
    // wx.getSetting({
    //   success(res) {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
    //       wx.getUserInfo({
    //         success: function (res) {
    //           console.log(res.userInfo)
    //         }
    //       })
    //     }
    //   }
    // })
    // app.getSetting().then(res => {
    //   if (res.authSetting['scope.userInfo']) {
    //     app.getUserInfo(res => {
    //       console.log(res);
    //     }).catch(err => {
    //       console.log(err);
    //     })
    //   }
    // })
  },
  onShow() {
  }
})
