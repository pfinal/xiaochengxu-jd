Page({
    data:{
        tabSelect:{
            all:"active", pay:"", take:""
        }
    },
    tapOrderList:function(event){
        //all pay take
        var type = event.target.dataset.type

        //切换选中效果
        var data={all:"", pay:"", take:"" };
        data[type] = "active";
        this.setData({tabSelect:data});
    }

})