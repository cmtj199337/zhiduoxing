import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

//引入vue-resource模块
import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import './config/validate.js'

import Base from './styles/bace.css'
// import 'weui/dist/style/weui.min.css'

Vue.config.productionTip = false;

// 全局导航钩子
router.beforeEach((to, from, next) => {
     // 判断该路由是否需要登录权限
     if (to.meta.requireAuth) {
        // 通过vuex state获取当前的token是否存在
        //console.log(isEmptyObject(store.state.user))
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
        next();
    }
})

function isEmptyObject(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}
//设置cookie,增加到vue实例方便全局调用
//vue全局调用的理由是，有些组件所用到的接口可能需要session验证，session从cookie获取
//当然，如果session保存到vuex的话除外
Vue.prototype.setCookie = (c_name, value, expiredays) => {
  var exdate = new Date();　　　　
  exdate.setDate(exdate.getDate() + expiredays);　　　　
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

//获取cookie、
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return (arr[2]);
  else
    return null;
}
Vue.prototype.getCookie = getCookie;

//删除cookie
Vue.prototype.delCookie =(name) => {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

