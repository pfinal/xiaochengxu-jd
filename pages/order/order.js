
var app = getApp();

function loadOrder(type,callback){
    wx.request({
      url: app.apiBaseUrl + "order/" +type,
      data: {},
      method: 'GET',
      success: function(res){
        callback(res.data)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
}

Page({
    data:{
        tabSelect:{
            all:"active", pay:"", take:""
        },
        orderList:[]
    },

    onLoad:function(){
        var _this = this;
        loadOrder("all",function(data){
            _this.setData({orderList:data})
        })
    },

    tapOrderList:function(event){

        //all、pay、take
        var type = event.target.dataset.type

        //切换选中效果
        var data={all:"", pay:"", take:""};
        data[type] = "active";
        this.setData({tabSelect:data});

        var _this = this;

        loadOrder(type,function(data){
            _this.setData({orderList:data})
        })

    },

    comfirmOrder:function(event){

        var orderId = event.target.dataset.orderid;
        var _this = this;
       
        wx.request({
          url: app.apiBaseUrl + 'order/comfirm/'+orderId,
          data: {},
          method: 'POST', 
          success: function(res){
            if(res.data === true){
            
                wx.showToast({
                    title: '确认成功',
                    icon: 'success',
                    duration: 2000
                })

                //修改订单状态
                _this.data.orderList[orderId]['status'] = '已签收'
                _this.setData({orderList:_this.data.orderList})
            }

          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })

    }

})