<template>
	<div class="recordVolunteerTime">
		<headerTip message="补录志愿时长记录" goBack="true"></headerTip>
			<div class="header1">
				<ul>

					<li>姓名</li>
					<li>志愿时长</li>	
					<li style="text-align:right;">打卡来源</li>		
				</ul>
			</div>
		<div class="kong"></div>
		<div class="header2">
			<div class="head"><span class="xx1" ></span style="margin-left:1.6rem;">2016年6月1日</div>
			<ul>
				<span class="box1"><img src="./renzheng@2x.png"></span>
				<li class="cc"><img src="./tou2@2x.png" ><p>联系人</p></li>
				<li><p>3小时</p></li>
				<li><p class="zz1">补录成功</p></li>
			</ul>	
			<ul>
				<li class="cc"><img src="./tou2@2x.png" ><p>联系人</p></li>
				<li><p>3小时</p></li>
				<li><p class="zz2">补录失败</p></li>
			</ul>	
		</div>
		<div class="kong"></div>
		<div class="header3">
			<div class="head"><span class="xx1" ></span style="margin-left:1.6rem;">2016年6月1日</div>
			<ul>
				<span class="box2"><img src="./renzheng@2x.png"></span>
				<li class="cc"><img src="./tou2@2x.png" ><p>联系人</p></li>
				<li><p>3小时</p></li>
				<li><p class="zz3">审批中</p></li>
			</ul>	
			<ul>
				<span class="box3"><img src="./renzheng@2x.png"></span>
				<li class="cc"><img src="./tou2@2x.png"><p>联系人</p></li>
				<li><p>3小时</p></li>
				<li><p class="zz2">补录失败</p></li>
			</ul>	
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
.header1 ul{
	display: flex;
}
.header1 ul li{
	width:32%;
	text-align:center;
	padding:0.5rem 0;

}
.kong{
	height:0.8rem;
	background:#0000001a;
}
.head{
	position:relative;
	padding:0.6rem 0;
}
.cc{
	display:flex;
}
.xx1{
	width:0.3rem;
	height:1.0rem;
	background:#80d5e1;
	position:absolute;
	margin-left:-2.1%;
	top:27%;
}
.header2{
	margin:0 0.5rem;
}
.header2 ul{
	display:flex;
	border-bottom:1px #0000001a solid; 

}
.header2 ul li{
	width:32%;
	text-align:center;
	padding:0.5rem 0;

}
.header2 ul li img{
	width:2.5rem;
	height:2.5rem;

}
.header2 ul li p{
	line-height:2.2rem;
	margin-left: 0.6rem;

}
.header3{
	margin:0 0.5rem;
}
.header3 ul{
	display:flex;
	border-bottom:1px #0000001a solid; 

}
.header3 ul li{
	width:32%;
	text-align:center;
	padding:0.5rem 0;

}
.header3 ul li img{
	width:2.5rem;
	height:2.5rem;

}
.header3 ul li p{
	line-height:2.2rem;
	margin-left: 0.6rem;

}
.zz1{
	color:#B6B6B6;
	text-align:right;
}
.zz2{
	color:#ff9f18;
	text-align:right;
}
.zz3{
	color:#80d5e1;
	text-align:right;
}
.box1 img{ position:absolute; width:1rem; height:1rem; left:2rem; top:10.5rem}
.box2 img{ position:absolute; width:1rem; height:1rem; left:2rem; top:21rem}
.box3 img{ position:absolute; width:1rem; height:1rem; left:2rem; top:24.5rem}
</style>