<template>
	<div class="makeupRecord">
		<headerTip message="补录时长" goBack="true"></headerTip>
		<div class="main">
		<div class="header">
			<ul>
			<li>
			<img src="./toux1.png"  class="touxiang">
			<div class="m11">
			<div class="mm1"><h3>志多星项目</h3>
			<p>2017/05/20-2017/5/20</p></div>
			<div class="mm2">
			<span>
			<p class="end">已结束</p>
			</span>
			</div>
			</div>
			</li>
			</ul>
		</div>
		<div class="header2">
		<ul>
		<li>姓名</li>
		<li>志愿时长</li>	
		<li style="text-align:right;">打卡来源</li>		
		</ul>
		</div>
		<div class="header3">
		<span style="width:0.5rem;height:1.5rem;background:#43B7B5;"></span><p style="margin-left:0.5rem;">2016年5月5日</p>
		</div>
		<div class="header4">
		<ul>
		<li style="display:flex;"><img src="./toux.png" style="width:2.5rem;height:2.5rem;"><p style="margin-left:1rem">联系人</p></li>
		<li>3小时</li>
		<li style="text-align:right;">补录时长</li>
		</ul>	
		<ul>
		<li style="display:flex;"><img src="./toux.png" style="width:2.5rem;height:2.5rem;"><p style="margin-left:1rem">联系人</p></li>
		<li>3小时</li>
		<li style="text-align:right;">补录时长</li>
		</ul>	
		</div>
		<div class="header3">
		<span style="width:0.5rem;height:1.5rem;background:#43B7B5;"></span><p style="margin-left:0.5rem;">2016年5月5日</p>
		</div>
		<div class="header4">
		<ul>
		<li style="display:flex;"><img src="./toux.png" style="width:2.5rem;height:2.5rem;"><p style="margin-left:1rem">联系人</p></li>
		<li>3小时</li>
		<li style="text-align:right;">补录时长</li>
		</ul>	
		<ul>
		<li style="display:flex;position:relative;"><img src="./toux.png" style="width:2.5rem;height:2.5rem;">
		<img src="./renzheng.png" style="position:absolute;width:13%;top:55%;left:27%;">
		<p style="margin-left:1rem">联系人</p></li>
		<li>3小时</li>
		<li style="text-align:right;">补录时长</li>
		</ul>	
		</div>
		</div>
	</div>
	</template>
	<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'makeupRecord',
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
.main{
	background: #F5F5F5;
	padding:0.6rem 0;
}
.header{
	position:relative;
}
.header ul li{
	background:white;
	padding:0.8rem 0;
	border-radius:7px;
	margin:0.6rem 0.6rem 0 2.4rem;
	position:relative;

}
.header ul li .touxiang{
	width:5rem;
	height:5rem;
	position:absolute;
	left: -11%;
	top:8%;
}
.header ul li .m11{
	display:flex;
	margin-left:12%;
	padding:0.2rem;
}
.header ul li .mm1{
	width:70%;
	text-align: center;
}
.header ul li .mm2{
	width:31%;
	text-align: center;
	display:relative;

}
.header ul li h3{
	margin-bottom: 0.8rem;
	width:200px;
	text-align:left;
	overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mm1 p{
	text-align:left;
	margin-left:0;
	color:#AFAFAF;
	margin-top:1.2rem;
}
.mm2 img{
	position:absolute;
}
.end{
	position:absolute;
	border-radius:5px;
	border:1px #E0E0E0 solid;
	color:#E0E0E0;
	text-align:center;
	width:14%;
	font-size:0.6rem;
	right:3%;
	bottom:60%;
}
.header2 ul {
	display:flex;
	background: white;
	margin-top:0.5rem;
}

.header2 ul li{
	width:32%;
	text-align:center;
	padding:0.6rem 0;
}
.header3 img {
	width: 1.8%;
	height:1rem;
}
.header3{
	vertical-align:middle;
	display:flex;
	padding:0.8rem 0;
	border-bottom:1px #F5F5F5 solid;
	font-size:1.1rem;
	background:white;
	margin-top: 0.6rem;
	
}
.header4{
	background:white;

}
.header4 ul{
	display:flex;
	background:white;
	margin:0 0.5rem;
	border-bottom:1px #F5F5F5 solid;
}
.header4 ul li{
	width:32%;
	text-align:center;
	vertical-align:middle;
	line-height:2.5rem;
	padding:0.5rem;
	

}
</style>