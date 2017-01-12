//index.js

var app = getApp()

Page({
    data:{
        ticketList:[]
    },
    onLoad:function(){
        var _this = this;

        wx.showToast({
            title: '加载中',
            icon: 'loading',
            duration: 10000
        })

        wx.request({
          url: app.apiBaseUrl +  "ticket",
          data: {},
          method: 'GET',
          success: function(res){
              console.log(res.data)
             _this.setData({ticketList:res.data})
          },
          complete: function() {
            wx.hideToast()
          }
        })

    }
})
