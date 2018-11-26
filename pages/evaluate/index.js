//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    windowHeight: 0,
    evalData: [
      {
        evalPhoto: "/assets/item.jpg",
        evalName: "张三",
        assess: 2,
        evalCont: "吃的好饱啊，赞赞赞",
        evalDate: "2018-11-13 19:30"
      },
      {
        evalPhoto: "/assets/item.jpg",
        evalName: "李四",
        assess: 2,
        evalCont: "真好吃，色香味俱全，下次还来",
        evalDate: "2018-11-13 19:30"
      },
      {
        evalPhoto: "/assets/item.jpg",
        evalName: "王二",
        assess: 2,
        evalCont: "很不错，风景很好",
        evalDate: "2018-11-13 19:30"
      },
      {
        evalPhoto: "/assets/item.jpg",
        evalName: "马五",
        assess: 1,
        evalCont: "味道还可以，价格有点儿贵",
        evalDate: "2018-11-13 19:30"
      },
      {
        evalPhoto: "/assets/item.jpg",
        evalName: "赵六",
        assess: 0,
        evalCont: "一般般吧，价格有点儿贵哦",
        evalDate: "2018-11-13 19:30"
      }
    ],
    showMore: false
  },
  getMore() {
    if(thid.data.showMore) {
      var evalData = this.data.evalData;
      // evalData.push({
      //   evalPhoto: "/assets/item.jpg",
      //   evalName: "王二",
      //   assess: 2,
      //   evalCont: "很不错，风景很好",
      //   evalDate: "2018-11-13 19:30"
      // })
      this.setData({
        evalData
      })
    }
  },
  onLoad() {
    this.setData({
      windowHeight: wx.getSystemInfoSync().windowHeight
    })
  },
  onShow() {
  }
})
