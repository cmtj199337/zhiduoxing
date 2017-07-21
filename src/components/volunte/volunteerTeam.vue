<template>
	<div class="volunteerTeam">
		<headerTip message="志愿团队" goBack="true"></headerTip>
		<div class="sousuo">
			<input v-model="search" name="" placeholder="       搜索">
		<img src="./sou.png"><span>筛选<img src="./shaixuan.png"></span>
		</div>
		<div class="mm">
			<ul>
				<li>
					<img src="./zt.png">
					<h3>北京西站地区志愿服务</h3>
					<div class="m1">
						<div class="mm1"><span><i>120</i>小时</span><p>志愿总时长</p></div>
						<div class="mm1"><span><i>200</i>人</span><p>团队人数</p></div>
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

		name:'volunteerTeam',
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
@import '../../styles/usertext.css';
.sousuo{
	padding:0.8rem 0;
	position:relative; 
}
	
.sousuo input{
	border:none;
	border-radius:0.2rem;
	padding: 0.4rem 0;
	background:rgba(238, 238, 244, 0.5);
	margin-left:2%;
	margin-right: 2%;
	width:80%;
}
.sousuo p{
	margin-right:5%; 
}
.sousuo img{
	width: 4%;
	position: absolute;
	top:38%;
	left:3%;
}
.sousuo span img{
	width: 4%;
	position: absolute;
	top:38%;
	left:93%;
}
.mm{
	background:rgba(238, 238, 244, 0.5);
	padding: 0.6rem 0;
	position:relative;
}
.mm ul li{
	background:white;
	padding:0.5rem 0;
	border-radius:7px;
	margin-left:15%;
	margin-right: 2%;
	top: 5%;
}
.mm ul li img{
	width:5rem;
	height:5rem;
	position:absolute;
	left: 2%;
	top:14%;
}
.mm ul li .m1{
	display:flex;
	margin-left:12%;
}
.mm ul li .mm1{
	width:33%;
	text-align: center;
}
.m1 p{
	color: #B5B5B5;
	font-size: 0.8rem
}
.m1 i{
	color: #43B7B6;
}
.mm ul li h3{
margin-bottom: 0.8rem;
margin-left:4rem;
}
</style>