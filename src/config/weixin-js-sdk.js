import Vue from 'vue'
import wx from 'weixin-js-sdk'

export default {
    created(){
        let param = {
            debug:true,
            url:'http://localhost:8081/productgroups',
            jsApiList: [
                'chooseWXPay',
                'checkJsApi'
        ]};
        wechatlib.queryJsConfig(param,(err,obj)=>{
            if(err){
                return this.$toast(err);
            }

            console.log('jsconfig ',obj);

            wx.config(obj);

            wx.ready(()=>{
              console.log('wx.ready');
            });

            wx.error(function(res){

                console.log('wx err',res);

              //可以更新签名
            });
        });
    }
}
Vue.use(wx)