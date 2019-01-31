const app = getApp()
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: { 
    item: Object
  },
  data: {
    item:{}
  },
  attached() {
    this.dataInit()
  },
  methods: {
    dataInit(){
      this.setData({
        item: this.properties.item
      })
    }
  }
})
