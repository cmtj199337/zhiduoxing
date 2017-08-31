import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

//引入vue-resource模块
import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
require('swiper/dist/css/swiper.css')

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

import 'vue-event-calendar/dist/style.css' //1.1.10之后的版本，css被放在了单独的文件中，方便替换
import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, {locale: 'en',color: '#43B7B5'}) //可以设置语言，支持中文和英文
// Vue.http.options.emulateJSON = true;
// Vue.http.options.headers={
//     'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
// };
import Infiniteloading from 'vue-infinite-loading'
Vue.use(Infiniteloading)

import Qrcode from 'vue-qrcode';
Vue.use(Qrcode)

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'ir1SlQ9SPtO7x7j0Ha4cj1xTwNasLhAB'
})

import './config/validate.js'

// import wx from 'weixin-js-sdk'
// Vue.use(wx)

// import Easemob from 'easemob-websdk'
// // Vue.use(Easemob)
// require('easemob-websdk'); 

import Base from './styles/bace.css'
// import 'weui/dist/style/weui.min.css'

// Vue.http.options.emulateJSON = false;

//全局拦截器
Vue.http.interceptors.push((request, next)  =>{
    var token = localStorage.getItem('access_token'),
        userId = localStorage.getItem('userId');

    request.headers.set('Authorization','Bearer '+token);
    request.headers.set('userid',userId);
    
    next((response) => {
        return response
    });
});

Vue.config.productionTip = false;


router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});
// 全局导航钩子
router.beforeEach((to, from, next) => {
    let isLogin = localStorage.access_token
      // 判断该路由是否需要登录权限
      if (to.matched.some(record => record.meta.requiresAuth)) {
        //判断用户是否登录
        if (!isLogin) {
            next({
                path: '/index',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
      } else {
          next()
      }
})

function isEmptyObject(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

new Vue({
  el: '#app',
  router,
  store,
  // mounted(){
  //   const wx = require('weixin-js-sdk')
  //   // 配置微信 config信息
  //   let data = {
  //     noncestr: '',
  //     timestamp: +new Date(),
  //     url: window.location.href.split('#')[0],
  //     jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone']
  //   }
    
  //   this.$http.post('/api/private/getWeixinSet').then((response) => {
  //     let res = response.data
  //     // alert(res)
  //     wx.config({
  //       debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  //       appId: 'wx5111d3a733bc84f7', // 必填，公众号的唯一标识
  //       timestamp: res.data.timestamp, // 必填，生成签名的时间戳
  //       nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
  //       signature: res.data.signature, // 必填，签名，见附录1
  //       jsApiList: data.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  //     })
  //   })
  // },
  render: h => h(App)
})

