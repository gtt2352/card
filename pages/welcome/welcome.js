const app = getApp()
var config = require('../../config.js');
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
   
  },
  getUserInfo: function (e) {

   console.log(e.detail.userInfo)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
     
    })
    
    if (this.data.hasUserInfo && this.data.canIUse){
        var that = this
      console.log(wx.getStorageSync('openId'))
  wx.request({
    url: config.service.useradd, //仅为示例，并非真实的接口地址
    data: {
      openId: wx.getStorageSync('openId').openid,
      username: app.globalData.userInfo.nickName,
      picture: app.globalData.userInfo.avatarUrl
    },
    method: "POST",
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    //回调函数
    success(res) {

      
    }
  })
  
      // console.log(app.globalData.userInfo)
     wx.switchTab({

       url: "../popular/popular",
       success: function () {
         console.log("jump success")
       },
       fail: function () {
         console.log("jump failed")
       },
       complete: function () {
         console.log("jump complete")
       }
     });
   } 

  },

    onUnload: function (event) {
   
    },
    onHide: function (event) {
        console.log("page is hide")
    },
})