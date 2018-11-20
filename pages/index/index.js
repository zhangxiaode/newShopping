//index.js
const app = getApp()
// import ajax from "../../utils/ajax"
Page({
  data: {
    shopInfo: [
      {
        showArrow: false,
        arrowL: '营业时间',
        arrowR: '11:30~13:30 & 17:45~21:00',
        icon: '../../assets/timeIcon.svg'
      },
      {
        showArrow: true,
        arrowL: '店铺地址',
        arrowR: '浙江省杭州市西湖区西溪湿地公园',
        icon: '../../assets/place.svg'
      },
      {
        showArrow: false,
        arrowL: '联系电话',
        arrowR: '13111111111',
        icon: '../../assets/telIcon.svg'
      },
      {
        showArrow: false,
        arrowL: '特色标签',
        arrowR: '',
        icon: '../../assets/tagIcon.svg'
      }
    ]
  },
  goAbout() {
    wx.navigateTo({
      url: '../about/index'
    })
  },
  changePrice(event) {
    var total = 0
    app.globalData.cartList = []
    app.globalData.cookList.map((item,index) => {
      item.cookBd.map((child, idx) => {
        if (child.num > 0) {
          total += child.price * child.num
          app.globalData.cartList.push(child)
        }
      })
    })
    this.setData({
      price:total,
      cartList: app.globalData.cartList
    })
  },
  handleMinus(event) {
    var total = 0
    let item = event.currentTarget.dataset.item
    item.num--
    app.globalData.cookList.map((element, index) => {
      element.cookBd.map((child, idx) => {
        if (child.id === item.id) {
          child.num = item.num
        }
        if (child.num > 0) {
          total += child.price * child.num
        }
      })
    })
    app.globalData.cartList.map((element, index) => {
      if (element.id === item.id) {
        element.num = item.num
        if (element.num <=0){
          app.globalData.cartList.splice(index,1)
        }
      }
    })
    this.setData({
      price: total,
      cookList: app.globalData.cookList,
      cartList: app.globalData.cartList
    })
  },
  handlePlus(event) {
    var total = 0
    let item = event.currentTarget.dataset.item
    item.num++
    app.globalData.cookList.map((element, index) => {
      element.cookBd.map((child, idx) => {
        if (child.id === item.id) {
          child.num = item.num
        }
        if (child.num > 0) {
          total += child.price * child.num
        }
      })
    })
    app.globalData.cartList.map((element, index) => {
      if (element.id === item.id) {
        element.num = item.num
      }
    })
    this.setData({
      price: total,
      cookList: app.globalData.cookList,
      cartList: app.globalData.cartList
    })
  },
  changeIndex(event) {
    this.setData({
      menuIndex: event.currentTarget.dataset.index,
      orientate: event.currentTarget.dataset.id
    })
  },
  handleCart() {
    this.setData({
      showList: !this.data.showList
    })
  },
  goPay(event){
    wx.showModal({
      title: '订单提交',
      content: '确定提交',
      success: function (res) {
        if (res.confirm) {
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 2000
          })
        } else if (res.cancel) {
        }
      }
    })
  },
  scrollCook(event){
    this.data.scrollData.map((item,index)=>{
      if (index < this.data.scrollData.length - 1){
        if (event.detail.scrollTop > item.scrollTop && event.detail.scrollTop < this.data.scrollData[index+1].scrollTop) {
          this.setData({
            menuIndex: index
          })
        }
      } else {
        if (event.detail.scrollTop > item.scrollTop) {
          this.setData({
            menuIndex: index
          })
        }
      }
    })
  },
  onShow() {
    var query = wx.createSelectorQuery()
    query.selectAll('.cookWrap').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec((res) => {
      var scrollData = []
      res[0].map((item,index) => {
        scrollData.push({
          scrollTop: item.top,
          id: item.id
        })
      })
      this.setData({
        scrollData
      })
    })
  },
  onHide() {
  },
  onLoad() {
    /*ajax({
      url: `/endpoint/login/captcha.jpg`,
      method: "get",
      data: {
      }
    }).then(res=>{
      // console.log(111,res)
    })*/
  }
})
