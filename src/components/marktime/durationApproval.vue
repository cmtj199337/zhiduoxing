<template>
	<div class="durationApproval">
		<headerTip message="补录时长" goBack="true"></headerTip>
		<div class="main">
		<div class="header">
			<ul>
			<li>
			<img src="./toux.png"  class="touxiang">
			<div class="m11">
			<div class="mm1"><h3>智多星项目</h3>
			<p style="width:100%;display:flex;">
			<span style="width:70%">志愿总时长<b style="color:#43B7B5">120小时</b></span><span style="width:40%;">报名人数<b style="color:#43B7B5">52人</b></span></p>
			</div>
			<div class="mm2">
			<span>
			<p class="end">已结束</p>
			</span>
			</div>
			</div>
			</li>
			</ul>
		</div>
		
		</div>
		<div class="header2">
		<ul>
		<li style="	margin-left:12%;">姓名</li>
		<li>补录时长</li>
		<li style="text-align:center;margin-right:1%">申请日期</li>
		</ul>
		<ul>
		<li class="hd"><img src="./tongg.png" class="tg"><img src="./toux1.png" class="tx"><p>联系人</p></li>
		<li>3小时</li>
		<li style="text-align:center;">2017/05/12</li>
		</ul>
		<ul>
		<li class="hd"><img src="./quan.png" class="tg"><img src="./toux1.png" class="tx"><p>联系人</p></li>
		<li>3小时</li>
		<li style="text-align:center;">2017/05/12</li>
		</ul>
		<ul>
		<li class="hd"><img src="./tongg.png" class="tg"><img src="./toux1.png" class="tx"><p>联系人</p></li>
		<li>3小时</li>
		<li style="text-align:center;">2017/05/12</li>
		</ul>
		<ul>
		<li class="hd"><img src="./quan.png" class="tg"><img src="./toux1.png" class="tx"><p>联系人</p></li>
		<li>3小时</li>
		<li style="text-align:center;">2017/05/12</li>
		</ul>
		</div>
		<div class="jieshu">
		<ul>
		<li><span style=""><img src="./butongg.png"></span><span>不通过</span></li>
		<li><span><img src="./tongg.png"></span><span>通过</span></li>
		</ul>
		</div>
		</div>
		</template>
		<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'durationApproval',
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
	padding:0.5rem 0;
}
.header{
	position:relative;
}
.header ul li{
	background:white;
	padding:0.8rem 0;
	border-radius:7px;
	margin:0rem 0.5rem 0 2.4rem;
	position:relative;

}
.header ul li .touxiang{
	width:4rem;
	height:4rem;
	position:absolute;
	left: -11%;
	top:12%;
}
.header ul li .m11{
	display:flex;
	margin-left:12%;

}
.header ul li .mm1{
	width:100%;
	text-align: center;
}
.header ul li .mm2{
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
	color:#E0E0E0;text-align:center;
	width:14%;
	font-size:0.6rem;
	right:5%;
	bottom:63%;
}
.header2 ul .hd{
	display:flex;
	width:40%;
}
.header2{
	background:white;

}
.header2 ul{
	display:flex;
	border-bottom:1px #F5F5F5 solid;


}
.header2 ul li{
	width:31%;
	padding:0.3rem;
	text-align:center;
	background:white;
	line-height:3rem;
}
.header2 ul li .tx{
	width:2.8rem;
	height:2.8rem;
	margin-left: 0.4rem;

}
.header2 ul li .tg{
	width:1.3rem;
	height:1.3rem;
	margin-top:10%;

}
.header2 ul li p{
	margin-left:0.4rem;
}
.jieshu{
	margin-top:12.5rem;
	border-top:3px #F5F5F5 solid;
}
.jieshu ul{
	display:flex;
}
.jieshu ul li{
	display:flex;
	width:50%;
	padding:1.2rem 0;
	border-right: 1px #F5F5F5 solid;

}
.jieshu ul li img{
	width:1rem;
	height:1rem;
	margin-left:80%;
}
.jieshu ul li span{
	width:50%;
}
</style>