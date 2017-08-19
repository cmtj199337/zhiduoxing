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
			path: '/modifyPassword',
			component:require('../components/login/modifyPassword.vue')
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
			component:require('../components/index/index.vue'),
		},
		{
			path: '/teamIndex',
			component:require('../components/index/indexItem.vue')
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
			component:require('../components/profile/insurancePolicy.vue')
		},
		{
			path: '/myCollection',
			component:require('../components/profile/myCollection.vue')
		},
		{
			path: '/myprojectDetails',
			component:require('../components/profile/projectDetails.vue')
		},
		{
			path: '/myFamily',
			component:require('../components/profile/myFamily.vue')
		},
		{
			path: '/addFamily',
			component:require('../components/profile/addFamily.vue')
		},
		{
			path: '/checkLogistics',
			component:require('../components/profile/checkLogistics.vue')
		},
		{
			path: '/checkLog',
			component:require('../components/profile/checkLog.vue')
		},
		{
			path: '/myFeedback',
			component:require('../components/profile/myFeedback.vue')
		},
		{
			path: '/myCertificate',
			component:require('../components/profile/myCertificate.vue')
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
		{
			path: '/projectList',
			component:require('../components/project/projectList.vue')
		},
		{
			path: '/projectQrCode',
			component:require('../components/project/projectQrCode.vue')
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
		{
			path: '/familys',
			component:require('../components/volunte/family.vue')
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
			path: '/informationFill',
			component:require('../components/marktime/informationFill.vue')
		},
		{
			path: '/durationApproval',
			component:require('../components/marktime/durationApproval.vue')
		},
		{
			path: '/timeInput',
			component:require('../components/marktime/timeInput.vue')
		},
		{
			path: '/personalLength',
			name:'personal',
			component:require('../components/marktime/personalLength.vue')
		},
		// 团队中心
		{
			path: '/teamcenter',
			component:require('../components/team/teamcenter.vue')
		},
		{
			path: '/Servicetype',
			component:require('../components/volunte/vteamchild/Servicetype.vue')
		},
		{
			path: '/Teamtype',
			component:require('../components/volunte/vteamchild/Teamtype.vue')
		},
		{
			path: '/Area',
			component:require('../components/volunte/vteamchild/Area.vue')
		},
		{
			path: '/allTeam',
			component:require('../components/team/allTeamChecked.vue')
		},
		//下级团队管理
		{
			path: '/juniorTeamManagement',
			component:require('../components/team/juniorTeamManagement.vue')
		},
		//团队-下级
		{
			path: '/juniorteam',
			component:require('../components/team/junChild/team.vue')
		},
		{
			path: '/modifiteam',
			component:require('../components/team/junChild/team/modifiteam.vue')
		},
		//项目-下级
		{
			path: '/juniorproject',
			component:require('../components/team/junChild/project.vue')
		},
		//志愿者-下级
		{
			path: '/juniorvolunteer',
			component:require('../components/team/junChild/volunteer.vue')
		},
		//下级团队项目
		{
			path: '/juniorTeamProject',
			component:require('../components/team/juniorTeamProject.vue')
		},
		{
			path: '/pDetail',
			component:require('../components/team/projectDetail/projectDetail.vue')
		},
		{
			path: '/myPolicy',
			component:require('../components/team/myPolicy.vue')
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
		// {
		// 	path: '/teamdetail',
		// 	component:require('../components/team/teamdetail.vue')
		// },
		//待审核团队-下级
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
		//本团队管理
		{
			path: '/teammanage',
			component:require('../components/team/teammanage.vue')
		},
		//项目
		{
			path: '/teammanage/project',
			component:require('../components/team/manageSelf/project')
		},
		//志愿者
		{
			path: '/teammanage/volunteer',
			component:require('../components/team/manageSelf/volunteer'),
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
		{
			path: '/bulletedList',
			component:require('../components/team/bulletedList.vue')
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
		{
			path: '/perfact',
			component:require('../components/insurance/perfect.vue')
		},
		//服务中心
		{
			path: '/service',
			component:require('../components/service/service.vue')
		},
		{
			path: '/servicesDetails',
			component:require('../components/service/servicesDetails.vue')
		},
		{
			path: '/detailsProblem',
			component:require('../components/service/detailsProblem.vue')
		},
		{
			path: '/platformIntroduction',
			component:require('../components/service/platformIntroduction.vue')
		},
		{
			path: '/feedback',
			component:require('../components/service/feedback.vue')
		},
		//项目周期
		{
			path: '/during',
			component:require('../components/during/projectCycle.vue')
		},
		//临时
		{
			path: '/ser1',
			component:require('../components/aaaaaaa/ser.vue')
		},
		{
			path: '/im',
			component:require('../components/Im/im.vue')
		},
	],
	mode:'hash'
})


//输出router
export default router