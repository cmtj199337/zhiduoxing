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
			path: '/goodlist',
			component:require('../components/register/goodlist.vue')
		},
		{
			path: '/improve',
			component:require('../components/register/improve.vue')
		},
		//团队注册
		{
			path: '/tregister',
			component:require('../components/register/tRegister.vue')
		},
		{
			path: '/tregisternext',
			component:require('../components/register/tRegisternext.vue')
		},
		{
			path: '/liaisonGroup',
			component:require('../components/register/liaisonGroup.vue')
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
		{
			path: '/personalDetails',
			component:require('../components/profile/personalDetails.vue')
		},
		//社区
		{
			path: '/communityInteraction',
			component:require('../components/community/communityInteraction.vue')
		},
		{
			path: '/communityDetails',
			component:require('../components/community/communityDetails.vue')
		},
		{
			path: '/myMessage',
			component:require('../components/community/myMessage.vue')
		},
		{
			path: '/release',
			component:require('../components/community/Release.vue')
		},
		//项目
		{
			path: '/projectDetails',
			component:require('../components/project/projectDetails.vue')
		},
		{
			path: '/voluntaryProjects',
			component:require('../components/project/voluntaryProjects.vue')
		},
		//志愿攻略
		{
			path: '/volunteerStrategy',
			component:require('../components/volunte/volunteerStrategy.vue')
		},
		{
			path: '/volunteerTeam',
			component:require('../components/volunte/volunteerTeam.vue')
		},
		//补录时长
		{
			path: '/makeupTime',
			component:require('../components/marktime/makeupTime.vue')
		},
		{
			path: '/makeupTimet',
			component:require('../components/marktime/makeupTimet.vue')
		},
		{
			path: '/durationTask',
			component:require('../components/marktime/durationTask.vue')
		},
		{
			path: '/durationTask2',
			component:require('../components/marktime/durationTask2.vue')
		},
		{
			path: '/makeupRecord',
			component:require('../components/marktime/makeupRecord.vue')
		},
		{
			path: '/informationFilling',
			component:require('../components/marktime/informationFilling.vue')
		},
		{
			path: '/durationApproval',
			component:require('../components/marktime/durationApproval.vue')
		}
	]
})


//输出router
export default router