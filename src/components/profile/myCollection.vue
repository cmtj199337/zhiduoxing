<template>
	<div class="myCollection">
		<headerTip message="我的收藏" goBack="true"></headerTip>
		<div class="header">
		<ul>
		<li><router-link to="/myCollection/team"><span>团队</span></router-link></li>
		<li><router-link to="/myCollection/project"><span>项目</span></router-link></li>
		<li><router-link to="/myCollection/article"><span>文章</span></router-link></li>
		</ul>
		</div>
		<router-view></router-view>
		</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'myCollection',
		components:{
	  		headerTip
	  	},
		data(){
			return {
			}
		},

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
	padding:0.6rem 0;
}
.header ul li a{
	color:#333;
}
</style>