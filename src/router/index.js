import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


//创建路由实例并配置路由映射
//path：'*'，redirect:'/home'    重定向到path是/home的映射
const router = new Router({
	routes:[{
		path: '/movie',component:require('../components/pages/movie.vue')
	},{
		path: '/pageLogin',component:require('../components/pages/login.vue')
	},{
		path: '/login',component:require('../components/login.vue')
	},{
		path: '/hello',component:require('../components/Hello.vue')
	},{
		path: '*',redirect:'/hello'
	}]
})


//输出router
export default router
