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
      // 判断该路由是否需要登录权限
      if (to.meta.requireAuth) {
        // 通过vuex state获取当前的token是否存在
        // console.log(isEmptyObject(store.state.user))
        if(!isEmptyObject(store.state.user)) {   
            next();
        }
        else {
            next({
                path: '/index',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
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
  render: h => h(App)
})

