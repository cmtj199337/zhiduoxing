<template>
	<div class="bulletedList">
		<headerTip message="团队列表" goBack="true"></headerTip>
		<div class="main2">
			<ul>
				<li @click="toAddress({path: '/teamDetails'})">
					<img src="./logo.png">
					<h3>北京西站地区志愿服务</h3>
					<div class="m1">
						<div class="mm1"><span>120小时</span><p>志愿总时长</p></div>
						<div class="mm1"><span>智多星</span><p>团队管理员</p></div>
					</div>
				</li>
				<li @click="toAddress({path: '/teamDetails'})">
					<img src="./logo.png">
					<h3>北京西站地区志愿服务</h3>
					<div class="m1">
						<div class="mm1"><span>120小时</span><p>志愿总时长</p></div>
						<div class="mm1"><span>智多星</span><p>团队管理员</p></div>
					</div>
				</li>
				<li @click="toAddress({path: '/teamDetails'})">
					<img src="./logo.png">
					<h3>北京西站地区志愿服务</h3>
					<div class="m1">
						<div class="mm1"><span>120小时</span><p>志愿总时长</p></div>
						<div class="mm1"><span>智多星</span><p>团队管理员</p></div>
					</div>
				</li>
				<li @click="toAddress({path: '/teamDetails'})">
					<img src="./logo.png">
					<h3>北京西站地区志愿服务</h3>
					<div class="m1">
						<div class="mm1"><span>120小时</span><p>志愿总时长</p></div>
						<div class="mm1"><span>智多星</span><p>团队管理员</p></div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{
		name:'projectList',
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
.main2{
	background:#F5F5F5;
	padding: 0.6rem 0;
	position:relative;
}
.main2 ul{
	margin:0.2rem 0;
}
.main2 ul li{
	background:white;
	padding:0.5rem 0;
	border-radius:7px;
	margin-left:15%;
	margin-right: 2%;
	top: 5%;
	position: relative;
	margin-bottom:0.6rem; 
}
.main2 ul li:last-child{
	margin-bottom:0; 
}
.main2 ul li img{
    width: 5rem;
    height: 5rem;
    position: absolute;
    left: -2.5rem;
    top: 5%;
}
.main2 ul li .m1{
	display:flex;
	margin-left:12%;
}
.main2 ul li .mm1{
	width:50%;
	margin-left:10%
}
.mm1 p{
	color:#BCBCBC;
}
.main2 ul li h3{
	margin-bottom: 0.8rem;
	margin-left:4rem;
}
</style>