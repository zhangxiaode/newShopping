//index.js
const app = getApp()
// import ajax from "../../utils/ajax"
Page({
  data: {
    showShare: false,
    showNav: false,
    scrollTo: "",
    windowHeight: 0,
    currentNav: 1,
    navList: [
      {
        index: 1,
        name: "本店美食",
        anchor: "goodsList"
      },
      {
        index: 2,
        name: "会员详情",
        anchor: "personal"
      },
      {
        index: 3,
        name: "店铺详情",
        anchor: "shopDetail"
      }
    ],
    synopsis: {
      logo: "../../assets/logo.png",
      shopName: "春暖花开",
      shopDes: "51~100元 杭帮菜，粤菜",
      attention: 1
    },
    shopPlace: "浙江省杭州市西湖区西溪湿地公园慢生活街区",
    goodsList: [
      {
        disheId: "1",
        photo: "http://www.zhangxiaode.com/wxImgs/乌梅.jpg",
        goodsName: "椒麻鸡",
        goodsPrice: "38.00"
      },
      {
        disheId: "2",
        photo: "http://www.zhangxiaode.com/wxImgs/乌梅.jpg",
        goodsName: "椒麻鸡",
        goodsPrice: "48.00"
      },
      {
        disheId: "3",
        photo: "http://www.zhangxiaode.com/wxImgs/乌梅.jpg",
        goodsName: "椒麻鸡",
        goodsPrice: "68.00"
      },
      {
        disheId: "4",
        photo: "http://www.zhangxiaode.com/wxImgs/乌梅.jpg",
        goodsName: "椒麻鸡",
        goodsPrice: "18.00"
      }
    ],
    userInfo: {
      userName: "金风凝香",
      grade: 1,
      fraction: 268,
      needFrac: 1194
    },
    shopDetail: {
      shopPhoto: "http://www.zhangxiaode.com/wxImgs/乌梅.jpg",
      shopIntro: "餐厅坐落在仙境般的西溪湿地s生态公园,让顾客在品尝美味同时也可以欣赏西溪湿地的美丽景色",
      shopInfo: [
        {
          id: "hours",
          showArrow: false,
          arrowL: '营业时间',
          arrowR: '11:30~13:30 & 17:45~21:00',
          icon: '../../assets/timeIcon.svg'
        },
        {
          id: "place",
          showArrow: true,
          arrowL: '店铺地址',
          arrowR: '浙江省杭州市西湖区西溪湿地公园',
          icon: '../../assets/place.svg'
        },
        {
          id: "telephone",
          showArrow: false,
          arrowL: '联系电话',
          arrowR: '13111111111',
          icon: '../../assets/telIcon.svg'
        },
        {
          id: "tags",
          showArrow: false,
          arrowL: '特色标签',
          arrowR: '',
          icon: '../../assets/tagIcon.svg'
        }
      ],
      tagItems: ["老字号", "有景观台", "无线上网", "可以刷卡", "免费停车", "微信支付", "有露天位", "支付宝支付", "杭帮菜", "粤菜"]
    },
    evalStar: {
      flavor: 3.9,
      speed: 4.9,
      environmental: 5
    },
    evalsInfo: {
      evals: [
        {
          evalPhoto: "../../assets/item.jpg",
          evalName: "森娜",
          evalDate: "2018-10-20 11:00",
          assess: "好评",
          evalCont: "相当不错，环境不错，菜品一流"
        },
        {
          evalPhoto: "../../assets/item.jpg",
          evalName: "杰森",
          evalDate: "2018-10-20 11:00",
          assess: "差评",
          evalCont: "不好吃"
        }
      ],
      total: 80
    }
  },
  handleShare(event) {
    this.setData({
      showShare: event.currentTarget.dataset.share
    })
  },
  collect() {
    this.setData({
      "synopsis.attention": !this.data.synopsis.attention
    })
  },
  call() {
    wx.makePhoneCall({
      phoneNumber: '15057159482',
    })
  },
  goMap() {
    wx.openLocation({
      name: "亢亢点单",
      address: "杭州市西湖区骆家庄西苑二区",
      latitude: 30.285753,
      longitude: 120.091783,
      scale: 18
    })
  },
  goDetail(event) {
    wx.navigateTo({
      url: "/pages/detail/index?disheId=" + event.currentTarget.dataset.disheId
    })
  },
  goCarte() {
    wx.switchTab({
      url: "/pages/carte/index"
    })
  },
  goUserCenter() {
    wx.switchTab({
      url: "/pages/userCenter/index"
    })
  },
  goEvaluate() {
    wx.navigateTo({
      url: "/pages/evaluate/index"
    })
  },
  handleArrow(event) {
    if (event.currentTarget.dataset.info.id == "telephone") {
      this.call()
    } else if (event.currentTarget.dataset.info.id == "place") {
      this.goMap()
    }
  },
  toArray(num) {
    return new Array(Math.ceil(num))
  },
  scroll(event) {
    if(event.detail.scrollTop>=143){
      this.setData({showNav: true})
    } else {
      this.setData({showNav: false})
    }
  },
  changeAnchor(event) {
    this.setData({
      scrollTo: event.currentTarget.dataset.anchor,
      currentNav: event.currentTarget.dataset.index
    })
  },
  onShow() {
  },
  onHide() {
  },
  onLoad() {
    this.setData({
      windowHeight: wx.getSystemInfoSync().windowHeight
    })
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
