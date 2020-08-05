// miniprogram/pages/login/login.js
let app = getApp();
const db = wx.cloud.database();
// const user = db.collection('user');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgi: 'url(../../images/logo.jpg)',
    userName: '',//账号  
    password: '',//密码
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  keyname: function (e) { //用户名
    this.setData({
      userName: e.detail.value
    })
  },
  keyword: function (e) { //密码
    this.setData({
      password: e.detail.value
    })
  },
  entStart: function () {//确定
    let that = this
    if(that.data.userName =='' ){
      wx.showToast({
        title: '用户名不能为空',
        icon: 'success',
        duration: 2000
      })
      return
    }
    if(that.data.password ==''){
      wx.showToast({
        title: '请输入密码',
        icon: 'success',
        duration: 2000
      })
      return
    }
    db.collection('user').get({
      success(res) {
        console.log(res.data)
        let msg = res.data
        console.log(msg.length)
        for(let i=0;i<msg.length;i++){
          if (that.data.userName == msg[i].id && that.data.password == msg[i].password) {
            wx.navigateTo({
              url: '../index/index',
            })
          }else{
            wx.showToast({
              title: '用户名密码错误',
              icon: 'success',
              duration: 2000
            })
          }
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})