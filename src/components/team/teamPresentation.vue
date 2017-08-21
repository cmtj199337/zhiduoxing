<template>
	<div class="teamPresentation">
		<headerTip message="团队详情" goBack="true"></headerTip>
		<swipe v-model="index" style="text-align: center;">
		  <swipe-item><img src="./banner.png" alt=""></swipe-item>
		  <swipe-item><img src="./banner.png" alt=""></swipe-item>
		  <swipe-item><img src="./banner.png" alt=""></swipe-item>
		</swipe>
		<div class="header">
			<ul>
				<li v-for="(item,index) in tabs">
					<span :class="{active: index == iscur }" @click="toggle(item.view,index)">{{item.type}}</span>
				</li>
			</ul>
		</div>
		<component :is='currentView' keep-alive></component>
	</div>
</template>
<script>
	import { Swipe, SwipeItem } from 'c-swipe';
	import headerTip from '../../components/common/header/header.vue'
	import Detail from '../../components/team/teamChild/detail.vue'
	import Project from '../../components/team/teamChild/project.vue'
	import Community from '../../components/team/teamChild/community.vue'


	export default{

		name:'teamPresentation',
		components:{
			Swipe,
	  		SwipeItem,
	  		headerTip,
	  		Detail,
	  		Project,
	  		Community
	  	},
		data () {
		    return {
		    	index:0,
		    	iscur:0,
                currentView:'Detail',
                tabs:[
				 	{type: '团队介绍',view: 'Detail'},  
				 	{type: '团队项目',view: 'Project'},
				 	{type: '团队社区',view: 'Community'}
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
@import '../../styles/usertext.css';
@import '../../styles/swipe.css';
.usertext{
	margin:0rem 1rem;
	padding:0.8rem 0; 
	font-size: 0.8rem;
}
.detail{
	padding-bottom: 3rem;
}
.header{
	padding:0.4rem 0;
	background:#EAEAEA;
}
.header ul{
display:flex;
margin:0.1rem 0;
padding:0.5rem 0 0 0;
background:white;
text-align: center;
}
.header ul li{
width:33%;

}
.header ul p{
	color:#43B7B5;
}
.header ul li span{
	display: inline-block;
	padding-bottom: 0.4rem;
}
.active{
	color:#43B7B5;
	border-bottom: 3px solid #43B7B5;
}
	
.texttitle {
    font-size: 0.8rem;
    font-weight: normal;
    margin:0rem 1rem;
	padding:0.8rem 0; 
	border-bottom:1px #EAEAEA solid;
}
.kong2{
		background:#EAEAEA;
		padding: 0.3rem;
	}
.touxiang{
	position:relative;
	margin:0rem 1rem;
	padding:0.6rem 0; 

}
.touxiang .img1{
	margin-left:0.6rem;
}
.touxiang img{
	width:11%;
	display:inline;
	vertical-align: middle;
	margin-left:-1rem;
}
.foot{
	display:flex;
	text-align:center;
	width: 100%;
	position: fixed;
	bottom: 0;
	background: #fff;
}
.foot span{
	position:relative;
}
.bm1{
width:23%;
text-align:right;
margin:0.3rem 0; 

}
.bm2{
	width:23%;
	margin:0.3rem 0; 
}
.bm3{
	width:56%;
}
.bm3 img{
	width: 100%;
	height:100%;
}
.bm1 img{
	width:28%;
	margin-top:0.3rem;
	margin-left:70%;
}
.bm2 img{
	width:27%;
	margin-top:0.4rem;
	margin-left:38%;
}
.bm{
	color:white;
	position:absolute;
	top:39%;
	left:35%;
	font-size:0.9rem;
}
</style>