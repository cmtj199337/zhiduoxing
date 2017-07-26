<template>
	<div class="PM">
		<headerTip message="项目管理" goBack="true"></headerTip>
			<div class="kong"></div>
			<div class="header">
				<ul>
					<li>待启动</li>
					<li>招募中</li>	
					<li>进行中</li>	
					<li>已结束</li>
				</ul>
			</div>
			<div class="main">
			<span>
			<img src="./banner@2x.png" >
			<img src="./teb2.png" >
			<img class="zz1" src="./quan@2x.png">
			<img class="zz2" src="./shouc@2x.png">
			<img class="zz3" src="./quan@2x.png">
			<ul class="te">
			<li class="cc1">北京市朝阳区</li>
			<li class="cc2">40/100</li>
			</ul>
			<ul class="te2">
			<li class="cc1">智多星项目名称</li>
			<li class="cc3">2017/05/02-2017/05/02</li>
			</ul>
			</span>
			</div>

			<div class="main1">
			<span>
			<img src="./banner@2x.png" >
			<img src="./teb2.png" >
			<img class="zz1" src="./quan@2x.png">
			<img class="zz4" src="./wdsc@2x.png">
			<img class="zz3" src="./quan@2x.png">
			<ul class="te">
			<li class="cc1">北京市朝阳区</li>
			<li class="cc2">40/100</li>
			</ul>
			<ul class="te2">
			<li class="cc1">智多星项目名称</li>
			<li class="cc3">2017/05/02-2017/05/02</li>
			</ul>
			</span>
			</div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{
		name:'recordVolunteerTime',
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
.header ul{
	display: flex;
}
.header ul li{
	width:50%;
	text-align:center;
	padding:0.5rem 0;
}
.main{
	background:#F5F5F5;
	padding:0.2rem;
	
}
.main span{
	margin:0.4rem;
	display:inline-block;
	position:relative;
}
.main1{
	background:#F5F5F5;
	padding:0.2rem;
	
}
.main1 span{
	margin:0.4rem;
	display:inline-block;
	position:relative;
}
.te{
	display:flex;
	position:absolute;
	width:100%;
	bottom:23%;

}
.te li{
	width: 50%;
	color:white
}
.te2{
	display:flex;
	position:absolute;
	width:100%;
	bottom:5%;

}
.te2 li{
	width:90%;

}
.zz1{
	position:absolute;width:8%;top:8%;left:5%;
}
.zz2{
	position:absolute;width:5%;top:12%;left:6.5%;
}
.zz3{
	position:absolute;width:8%;top:8%;right:5%;
}
.zz4{
	position:absolute;width:5%;top:12%;left:6.5%;
}
.cc1{
	text-align:left;
}
.cc2{
	text-align:right;
}
.cc3{
	text-align:right;
	color:#666
}
</style>