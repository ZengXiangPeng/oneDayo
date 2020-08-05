//index.js
const app = getApp()
const db = wx.cloud.database();
Page({
  data: {

  },

  onLoad: function() {
  
  },
  record:function(){
    wx.navigateTo({
      url: '../record/record',
    })
  },
  postImg:function(){ // 微信选择图片转换成地址
    let that= this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        that.postTwo(tempFilePaths)
      }
    })
  },
  postTwo:function(img){ //上传云数据库
    console.log(img)
    db.collection("record").add({
      data: {
        iconimg: img[0],
        name:'烟酒'
      },
      success: function (e) {
        console.log(e)
      },
  })
}
})
