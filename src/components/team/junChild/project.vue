<template>
	<div class="project">
		<headerTip message="下级团队项目" goBack="true"></headerTip>
		<div class="header">
			<ul>
				<li v-for="(item,index) in tabs">
					<span :class="{active: index == iscur }" @click="toggle(item.view,index)">{{item.type}}</span>
				</li>
			</ul>
		</div>
		<div class="kong"></div>
		<component :is='currentView' keep-alive></component>
	</div>
</template>
<script>
	import headerTip from '../../../components/common/header/header.vue'
	import UncheckPend from '../../../components/team/junChild/project/unpending.vue'
	import CheckPend from '../../../components/team/junChild/project/pending.vue'
	import Passed from '../../../components/team/junChild/project/passed.vue'
	export default{
		name:'project',
		components:{
	  		headerTip,
	  		UncheckPend,
	  		CheckPend,
	  		Passed
	  	},
		data(){
			return {
				iscur:0,
                currentView:'UncheckPend',
                tabs:[
				 	{type: '待审核',view: 'UncheckPend'},  
				 	{type: '已通过',view: 'CheckPend'},
				 	{type: '未通过',view: 'Passed'}
				],
			}
		},
		methods:{
			toggle(v,index) {
		    	this.iscur = index;
		    	this.currentView = v
		    }
		}
	}
</script>
<style scoped>
span{
	font-size:0.85rem;
	}
.router-link-active{
	padding-bottom: 0.4rem;
	color: #43B7B5 !important;
	border-bottom: 3px solid #43B7B5;
}
.header ul li a {
	color:#333;
}
.kong{
	padding: 0.4rem 0;
	background: #F5F5F5;
}
.header{
	padding: 0.4rem 0;
}
.header ul{
	display: flex;
	margin:0.1rem 0;
	padding: 0.2rem 0;
	background: white;
	text-align: center;
}
.header ul li{
	width: 50%;
}
.header ul li span{
	display: inline-block;
	padding-bottom: 0.4rem;
}
.active{
	color:#43B7B5;
	border-bottom: 3px solid #43B7B5;
}
</style>