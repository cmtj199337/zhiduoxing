import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
	routes:[
		{
			path: '*',
			redirect:'/index'
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
		{
			path: '/myStarcoin',
			component:require('../components/profile/myStarcoin.vue')
		},
		{
			path: '/myProject',
			component:require('../components/profile/myProject.vue')
		},
		{
			path: '/myNews',
			component:require('../components/profile/myNews.vue')
		},
		{
			path: '/insurancePolicy',
			component:require('../components/profile/insurancePolicy.vue'),
			redirect:'/insurancePolicy/alreadyPaid',
			children:[
				{
					path: '/insurancePolicy/alreadyPaid',
					component:require('../components/profile/child/alreadyPaid.vue'),
				},
				{
					path: '/insurancePolicy/unpaid',
					component:require('../components/profile/child/unpaid.vue'),
				}
			]
		},
		{
			path: '/myCollection',
			component:require('../components/profile/myCollection.vue'),
			redirect:'/myCollection/team',
			children:[
				{
					path: '/myCollection/article',
					component:require('../components/profile/collectChild/article.vue'),
				},
				{
					path: '/myCollection/project',
					component:require('../components/profile/collectChild/project.vue'),
				},
				{
					path: '/myCollection/team',
					component:require('../components/profile/collectChild/team.vue'),
				}
			]
		},
		{
			path: '/myprojectDetails',
			component:require('../components/profile/projectDetails.vue'),
			redirect:'/myprojectDetails/detail',
			children:[
				{
					path: '/myprojectDetails/detail',
					component:require('../components/profile/detailChild/detail.vue')
				},
				{
					path: '/myprojectDetails/introduce',
					component:require('../components/profile/detailChild/introduce.vue')
				},
				{
					path: '/myprojectDetails/community',
					component:require('../components/profile/detailChild/community.vue')
				},
			]
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
			path: '/project',
			component:require('../components/project/project.vue')
		},
		{
			path: '/confirmEnrollment',
			component:require('../components/project/confirmEnrollment.vue')
		},
		
		{
			path: '/voluntaryProjects',
			component:require('../components/project/voluntaryProjects.vue')
		},
		{
			path: '/signList',
			component:require('../components/project/signList.vue')
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
		},
		// 团队中心
		{
			path: '/teamcenter',
			component:require('../components/team/teamcenter.vue')
		},
		{
			path: '/allTeam',
			component:require('../components/team/allTeamChecked.vue')
		},
		{
			path: '/juniorTeamManagement',
			component:require('../components/team/juniorTeamManagement.vue')
		},
		//子团队管理
		{
			path: '/juniorTeamProject',
			component:require('../components/team/juniorTeamProject.vue'),
			redirect:'/juniorTeamProject/uncheckPending',
			children:[
				{
					path: '/juniorTeamProject/uncheckPending',
					component:require('../components/team/junior/uncheckPending.vue'),
				},
				{
					path: '/juniorTeamProject/checkPending',
					component:require('../components/team/junior/checkPending.vue'),
				}
			]
		},
		{
			path: '/myPolicy',
			component:require('../components/team/myPolicy.vue'),
			redirect:'/myPolicy/alreadyPaid',
			children:[
				{
					path: '/myPolicy/alreadyPaid',
					component:require('../components/team/child/alreadyPaid.vue'),
				},
				{
					path: '/myPolicy/unpaid',
					component:require('../components/team/child/unpaid.vue'),
				}
			]
		},
		{
			path: '/createTeam',
			component:require('../components/team/setUpTeam.vue')
		},
		{
			path: '/sendProject',
			component:require('../components/team/publishProject.vue')
		},
		{
			path: '/itemdetail',
			component:require('../components/team/ltemdetail.vue')
		},
		{
			path: '/teamdetail',
			component:require('../components/team/teamdetail.vue')
		},
		{
			path: '/teamIntroduction',
			component:require('../components/team/teamIntroduction.vue')
		},
		{
			path: '/pendingVolunteer',
			component:require('../components/team/pendingVolunteer.vue')
		},
		{
			path: '/personalData',
			component:require('../components/team/personalData.vue')
		},
		{
			path: '/teammanage',
			component:require('../components/team/teammanage.vue')
		},
		{
			path: '/teamPresentation',
			component:require('../components/team/teamPresentation.vue')
		},
		{
			path: '/teamVolunteer',
			component:require('../components/team/teamVolunteer.vue')
		},
		{
			path: '/detailsOfTheTeam',
			component:require('../components/team/detailsOfTheTeam.vue')
		},
		{
			path: '/personnelList',
			component:require('../components/team/personnelList.vue')
		},
		{
			path: '/volunteerList',
			component:require('../components/team/volunteerList.vue')
		},
		{
			path: '/recordVolunteerTime',
			component:require('../components/team/recordVolunteerTime.vue')
		},
		{
			path: '/useHelp',
			component:require('../components/team/useHelp.vue')
		},
		//城市选择
		{
			path: '/city',
			component:require('../components/city/city.vue')
		},
		//心语心愿
		{
			path: '/shop',
			component:require('../components/shop/voluntaryFeedback.vue')
		},
		{
			path: '/shopDetail',
			component:require('../components/shop/commodityDetails.vue')
		},
		{
			path: '/deliveryAddress',
			component:require('../components/shop/deliveryAddress.vue')
		},
		{
			path: '/offerLove',
			component:require('../components/shop/offerLove.vue')
		},
		{
			path: '/offerLovedetails',
			component:require('../components/shop/offerLovedetails.vue')
		},
		//保险
		{
			path: '/insurance',
			component:require('../components/insurance/voluntaryGuarantee.vue')
		},
		{
			path: '/insuranceDetails',
			component:require('../components/insurance/insuranceDetails.vue')
		},
		//服务中心
		{
			path: '/service',
			component:require('../components/service/service.vue')
		},
		{
			path: '/servicesDetails',
			component:require('../components/service/servicesDetails.vue')
		}
	]
})


//输出router
export default router