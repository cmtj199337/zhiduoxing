import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

//引入vue-resource模块
import VueResource from 'vue-resource'
Vue.use(VueResource)

import Base from './styles/bace.css'

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
                path: '/login',
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

