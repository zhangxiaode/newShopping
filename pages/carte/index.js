//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showMenu: false,
    orientate: 'berry',
    carteData: [
      {
        carteTitle: '肉类',
        carteList: [
          {
            photo: "aaa",
            name: "aaaa",
            price: 10
          },
          {
            photo: "bbb",
            name: "bbb",
            price: 20
          }
        ]
      }
    ]
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
  carteScroll() {

  },

  changePrice(event) {
    // var total = 0
    // app.globalData.cartList = []
    // app.globalData.cookList.map((item, index) => {
    //   item.cookBd.map((child, idx) => {
    //     if (child.num > 0) {
    //       total += child.price * child.num
    //       app.globalData.cartList.push(child)
    //     }
    //   })
    // })
    // this.setData({
    //   price: total,
    //   cartList: app.globalData.cartList
    // })
  },
  onLoad() {
  },
  onShow() {
    
  }
})
