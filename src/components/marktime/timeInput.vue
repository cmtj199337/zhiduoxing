<template>
	<div class="timeInput">
		<headerTip message="2016年6月1日" goBack="true"></headerTip>
		<div class="header">
			<ul>
			<li>
			<img src="./toux1.png"  class="touxiang">

			<p>智多星项目<span class="end">已结束</span></p>
			<p style="width:90%;display:flex;"><span style="width:50%">志愿总时长<b style="color:#43B7B5">120小时</b></span><span style="width:40%;margin-left:20%;">报名人数<b style="color:#43B7B5">52人</b></span></p>
			</li>
			</ul>
		</div>
		<div class="header2">
		<ul>
		<li>姓名</li>
		<li>志愿时长</li>	
		<li style="text-align:center;">打卡来源</li>		
		</ul>
		</div>
		<div class="title">
			<p>
				A
			</p>
		</div>
		<div class="header3">
		<ul>
		<li class="one"><img src="./xuanze.png" class="tg"><img src="./toux.png" class="tx"><p>联系人</p></li>
		<li>3小时</li>
		<li style="text-align:center;">补录时长</li>
		</ul>
		<ul>
		<li class="one"><img src="./weixuan.png" class="tg"><img src="./toux.png" class="tx"><p>联系人</p></li>
		<li>3小时</li>
		<li style="text-align:center;">补录时长</li>
		</ul>
	
		</div>
		<div class="title">
			<p>
				B
			</p>
		</div>
		<div class="header3">
		<ul>
		<li class="one"><img src="./xuanze.png" class="tg"><img src="./toux.png" class="tx"><p>联系人</p></li>
		<li>3小时</li>
		<li style="text-align:center;">补录时长</li>
		</ul>
		<ul>
		<li class="one"><img src="./weixuan.png" class="tg"><img src="./toux.png" class="tx"><p>联系人</p></li>
		<li>3小时</li>
		<li style="text-align:center;">补录时长</li>
		</ul>
	
		</div>
		<div class="title">
			<p>
				C
			</p>
		</div>
		<div class="header3">
		<ul>
		<li class="one"><img src="./xuanze.png" class="tg"><img src="./toux.png" class="tx"><p>联系人</p></li>
		<li>3小时</li>
		<li style="text-align:center;">补录时长</li>
		</ul>
		<ul>
		<li class="one"><img src="./weixuan.png" class="tg"><img src="./toux.png" class="tx"><p>联系人</p></li>
		<li>3小时</li>
		<li style="text-align:center;">补录时长</li>
		</ul>
	
		</div>
		<div class="title">
			<p>
				D
			</p>
		</div>
		<div class="header3">
		<ul>
		<li class="one"><img src="./xuanze.png" class="tg"><img src="./toux.png" class="tx"><p>联系人</p></li>
		<li>3小时</li>
		<li style="text-align:center;">补录时长</li>
		</ul>
		<ul>
		<li class="one"><img src="./weixuan.png" class="tg"><img src="./toux.png" class="tx"><p>联系人</p></li>
		<li>3小时</li>
		<li style="text-align:center;">补录时长</li>
		</ul>
	
		</div>
		<div class="ee"></div>
		<div class="foot">
			<ul>
			<li><p>共计：<span>30</span>人</p></li>
			<li class="right"><p>团队补录</p></li>
			</ul>
		</div>
			</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'timeInput',
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
.header{
	position:relative;
	padding:0.6rem 0;
	background:#F5F5F5;
}
.header ul li{
	background:white;
	padding:0.7rem 0;
	border-radius:7px;
	margin:0rem 0.5rem 0 2.4rem;
	position:relative;

}
.header ul li p{
	margin:0.6rem 0;
	margin-left:2.5rem;
}
.header ul li p .end{
	width:2rem;
	border:1px #D3D3D3 solid;
	color:#D3D3D3;
	border-radius: 5px;
	margin-left:50%; 
}
.header ul li .touxiang{
	width:5rem;
	height:5rem;
	position:absolute;
	left: -11%;
	top:5%;
}


.header2 ul {
	display:flex;
	background: white;
}

.header2 ul li{
	width:32%;
	text-align:center;
	padding:0.8rem 0;
	margin-left:2%;
}
.title{
	padding:0.6rem 0;
	margin-right:2rem;
	background:#F5F5F5;
}
.title p {
	margin-left:1rem;
}
.header3{
	background:white;

}
.header3 ul{
	display:flex;
	border-bottom:1px #F5F5F5 solid;


}
.header3 ul li{
	width:30%;
	padding:0.3rem;
	text-align:center;
	background:white;
	line-height:3rem;
}
.header3 ul .one{
	width:40%;
	display:flex;
}
.header3 ul li .tx{
	width:2.5rem;
	height:2.5rem;
	margin-left: 0.4rem;
	vertical-align: middle;

}
.header3 ul li .tg{
	width:1.1rem;
	height:1.1rem;
	margin-top:9%;

}
.header3 ul li p{
	margin-left:0.4rem;
}
.foot{
	position:fixed;
	bottom:0;
	width:100%;
	background:white;
}
.foot ul{
	display:flex;
}
.foot ul li{
	width:30%;
	padding:0.9rem 0;
	text-align:center;
	border-right:1px #F5F5F5 solid; 
}
.foot ul li p span{
	color:#43B7B5;
}
.foot ul .right{
	width:70%;
}
.foot ul .right p{
	color:#43B7B5;
}
.ee{
	height:3rem;
}
</style>