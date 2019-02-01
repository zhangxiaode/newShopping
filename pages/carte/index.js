//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showMenu: false,
    orientate: '',
    menuIndex: 0,
    carteData: [{
        carteTitle: '特色菜',
        id: 'special',
        carteList: [{
            disheId: "1",
            photo: "http://www.zhangxiaode.com/wxImgs/乌梅.jpg",
            name: "宫保鸡丁",
            price: 70,
            star: 5
          },
          {
            disheId: "2",
            photo: "http://www.zhangxiaode.com/wxImgs/乌梅.jpg",
            name: "糖醋里脊",
            price: 35,
            star: 3
          }
        ]
      },
      {
        carteTitle: '冷菜',
        id: "cold",
        carteList: [{
            disheId: "2",
            photo: "http://www.zhangxiaode.com/wxImgs/乌梅.jpg",
            name: "桂花山药",
            price: 23,
            star: 0
          },
          {
            disheId: "4",
            photo: "http://www.zhangxiaode.com/wxImgs/乌梅.jpg",
            name: "拍黄瓜",
            price: 12,
            star: 0
          },
          {
            disheId: "5",
            photo: "http://www.zhangxiaode.com/wxImgs/乌梅.jpg",
            name: "剁椒鱼头",
            price: 4,
            star: 0
          }
        ]
      },
      {
        carteTitle: '冷菜2',
        id: "cold2",
        carteList: [{
          disheId: "22",
          photo: "http://www.zhangxiaode.com/wxImgs/乌梅.jpg",
          name: "桂花山药",
          price: 23,
          star: 0
        }, ]
      },
      {
        carteTitle: '热菜',
        id: "hot",
        carteList: [{
            disheId: "6",
            photo: "http://www.zhangxiaode.com/wxImgs/乌梅.jpg",
            name: "蚂蚁上树",
            price: 12,
            star: 0
          },
          {
            disheId: "7",
            photo: "http://www.zhangxiaode.com/wxImgs/乌梅.jpg",
            name: "剁椒鱼头",
            price: 4,
            star: 0
          },
          {
            disheId: "8",
            photo: "http://www.zhangxiaode.com/wxImgs/乌梅.jpg",
            name: "剁椒鱼头",
            price: 4,
            star: 0
          },
          {
            disheId: "9",
            photo: "http://www.zhangxiaode.com/wxImgs/乌梅.jpg",
            name: "剁椒鱼头",
            price: 4,
            star: 0
          }
        ]
      }
    ],
    scrollData:[]
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
  changeMenu(event) {
    this.setData({
      showMenu: false,
      orientate: event.currentTarget.dataset.id,
      menuIndex: event.currentTarget.dataset.index
    })
  },
  goDetail(event) {
    wx.navigateTo({
      url: "/pages/detail/index?disheId=" + event.currentTarget.dataset.disheId
    })
  },
  carteScroll(event) {
    this.data.scrollData.map((item, index) => {
      if (index < this.data.scrollData.length - 1) {
        if (event.detail.scrollTop > item.scrollTop && event.detail.scrollTop < this.data.scrollData[index + 1].scrollTop) {
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
  goTrolley() {
    wx.navigateTo({
      url: "/pages/trolley/index"
    })
  },
  onLoad() {},
  onShow() {
    var query = wx.createSelectorQuery()
    query.selectAll('.carteBox').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec((res) => {
      var scrollData = []
      res[0].map((item, index) => {
        scrollData.push({
          scrollTop: item.top,
          id: item.id
        })
      })
      this.setData({
        scrollData
      })
    })
  }
})