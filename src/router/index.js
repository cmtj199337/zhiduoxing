import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


//创建路由实例并配置路由映射
//path：'*'，redirect:'/home'    重定向到path是/home的映射
const router = new Router({
	routes:[
		{
			path: '*',
			redirect:'/login'
		},
		//common 用户协议
		{
			path:'/agreement',
			component:require('../components/common/Agreement.vue')
		},
		{
			path: '/movie',
			component:require('../components/movie.vue')
		},
		{
			path: '/login',
			component:require('../components/login/login.vue')
		},
		{
			path: '/hello',
			component:require('../components/Hello.vue')
		},
		{
			path: '/forgetpass',
			component:require('../components/login/forgetpass.vue')
		},
		{
			path: '/main',
			meta:{
				//添加该字段，表示进入这个路由是需要登录的
				requireAuth: true,
			},
			component:require('../components/main.vue')
		},
		{
			path: '/register',
			component:require('../components/register/register.vue')
		},
		{
			path: '/iregister',
			component:require('../components/register/iRegister.vue')
		},
		{
			path: '/tregister',
			component:require('../components/register/tRegister.vue')
		},
		{
			path: '/goodlist',
			component:require('../components/register/goodlist.vue')
		}
	]
})


//输出router
export default router
