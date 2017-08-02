<template>
	<div class="myCollection">
		<headerTip message="我的收藏" goBack="true"></headerTip>
		<div class="header">
		<ul>
			<li v-for="(item,index) in tabs">
			<span :class="{active:index == iscur }" @click="toggle(item.view,index)">{{item.type}}</span>
			</li>
		</ul>
		</div>
		<component :is='currentView' keep-alive></component>
		</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	import Team from '../../components/profile/collectChild/team.vue'
	import Project from '../../components/profile/collectChild/project.vue'
	import Articlel from '../../components/profile/collectChild/article.vue'

	export default{
		name:'myCollection',
		components:{
	  		headerTip,
	  		Team,
	  		Project,
	  		Articlel
	  	},
		data(){
			return {
				iscur:0,
                currentView:'Team',
                tabs:[
				 	{type: '团队',view: 'Team'},  
				 	{type: '项目',view: 'Project'},
				 	{type: '文章',view: 'Articlel'}
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
	color:#43B7B5 !important;
	border-bottom: 3px solid #43B7B5;
}
.myCollection{
	height:100%;
}
.header{
	padding:0;
}
.header ul{
	display:flex;
	padding:0;
}
.header ul li{
	width:33%;
	text-align: center;
	padding:0.7rem 0;
	padding-bottom:0; 
}
.header ul li a{
	color:#333;
}
.header ul li span{
	display: inline-block;
	padding-bottom: 0.4rem;
}
.active{
	color: #43B7B5;
    border-bottom: 3px solid #43B7B5;
}
</style>