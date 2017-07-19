import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
		//外部接口测试
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
		//个人注册
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
		},
		{
			path: '/improve',
			component:require('../components/register/improve.vue')
		},
		//index 
		{
			path: '/index',
			component:require('../components/index/index.vue')
		},
		//签到打卡
		{
			path: '/scan',
			component:require('../components/scan/scan.vue')
		},
		//个人中心
		{
			path: '/profile',
			component:require('../components/profile/profile.vue')
		},
	]
})


//输出router
export default router