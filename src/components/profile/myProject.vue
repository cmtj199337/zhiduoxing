<template>
	<div class="myProject">
		<headerTip message="我的项目" goBack="true"></headerTip>
		<div class="sousuo">
			<input v-model="search" name="" placeholder="       搜索">
		<img src="./sou.png"><span>筛选<img src="./shaixuan.png"></span>
		</div>
		<div class="header">
			<ul>
				<li>全部</li>
				<li>待启动</li>
				<li>招募中</li>
				<li>进行中</li>
				<li>已结束</li>
			</ul>
		</div>
		<div class="project">
			<span class="xm1" @click="toAddress({path: '/myprojectDetails'})">
				<img src="./xiangm.png" >
				<img src="./teb2.png" >
				<img src="./quan.png" class="p1">
				<img src="./xin.png" class="p2">
				<img src="./quan.png" class="p3">
				<img src="./baoxian.png" class="p4">
				<ul class="te">
					<li>北京市朝阳区</li>
					<li style="text-align:center;">50/100</li>
					<li style="text-align:right;">待启动</li>
				</ul>
				<ul class="te2">
					<li>智多星项目名称</li>
					<li style="text-align:right;color:#666">2017/05/02-2017/05/02</li>
				</ul>
			</span>
			<span class="xm1">
				<img src="./xiangm.png" >
				<img src="./teb2.png" >
				<img src="./quan.png" class="p1">
				<img src="./xin2.png" class="p2">
				<img src="./quan.png" class="p3">
				<img src="./baoxian.png" class="p4">
				<ul class="te">
					<li>北京市朝阳区</li>
					<li style="text-align:center;">50/100</li>
					<li style="text-align:right;">待启动</li>
				</ul>
				<ul class="te2">
					<li>智多星项目名称</li>
					<li style="text-align:right;color:#666">2017/05/02-2017/05/02</li>
				</ul>
			</span>
		</div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'myProject',
		components:{
	  		headerTip
	  	},
		data(){
			return {
			}
		},
		methods:{
			toAddress(path){
                this.$router.push(path)
            }
		}
	}
</script>
<style scoped>
.sousuo{
	padding:0.8rem 0;
	position:relative; 
}
.sousuo span{
	color:#4BBAB8;
}
.sousuo input{
	border:none;
	border-radius:0.3rem;
	padding: 0.4rem 0;
	background:#F5F5F5;
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
.header ul{
	display:flex;
}
.header ul li{
	width:20%;
	text-align:center;
	padding-bottom:0.5rem;
}

.project{
	background:#F5F5F5;
	padding:0.2rem;
	
}
.project span{
	margin:0.4rem;
	display:inline-block;
	position:relative;
}
.te{
	display:flex;
	position:absolute;
	width:100%;
	bottom:23%;
	margin:0 0.5rem;

}
.te li{
	width: 32%;
	color:white
}
.te2{
	display:flex;
	position:absolute;
	width:100%;
	bottom:5%;

}
.te2 li{
	width: 44%;
	margin-left: 5%

}
.xm1{
	position:relative;
}
.p1{
	width:9%;
	position:absolute;
	top:6%;
	left:3%;

}
.p2{
	width:6%;
	position:absolute;
	top:10%;
	left:4.5%;
}
.p3{
	width:9%;
	position:absolute;
	top:6%;
	right:3%;
}
.p4{
	width:5%;
	position:absolute;
	top:10%;
	right:5%;
}
</style>