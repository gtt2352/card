var app = getApp();
Page({
  data: {
    // text:"这是一个页面"
    array: ["中国", "美国", "巴西", "日本"],
    toast1Hidden: true,
    modalHidden: true,
    modalHidden2: true,
    notice_str: '',
    index: 0
  },
  toast1Change: function (e) {
    this.setData({ toast1Hidden: true });
  },
  //弹出确认框
  modalTap: function (e) {
    this.setData({
      modalHidden: false
    })
  },
  confirm_one: function (e) {
    console.log(e);
    this.setData({
      modalHidden: true,
      toast1Hidden: false,
      notice_str: '提交成功'
    });
  },
  cancel_one: function (e) {
    console.log(e);
    this.setData({
      modalHidden: true,
      toast1Hidden: false,
      notice_str: '取消成功'
    });
  },
  //弹出提示框
  modalTap2: function (e) {
    this.setData({
      modalHidden2: false
    })
  },
  modalChange2: function (e) {
    this.setData({
      modalHidden2: true
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value;
    
   
     wx.request({
       url: 'https://www.gtt2352.xyz/index/index/kaquan',
       data: formData,
       header: {
         'Content-Type': 'application/json'
       },
       success: function (res) {
         console.log(res.data.nonce_str);
        console.log(typeof(res.data));
         //that.modalTap();
         wx.addCard({
           cardList: [
             {
               cardId: 'pm0YrwNwdCfDdCzphMHpct_DH5to',
               
               cardExt: '{"code": "","nonce_str":"' + res.data.nonce_str+'", "openid": "", "timestamp": "' + res.data.timestamp + '", "signature":"' + res.data.signature +'"}'
             }
           ],
           success(res) {
             console.log(res.cardList) // 卡券添加结果
           }
         })
       }
     })
  
  },
  formReset: function () {
    console.log('form发生了reset事件');
    this.modalTap2();
  }
})
