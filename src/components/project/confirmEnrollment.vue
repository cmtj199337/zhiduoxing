
<template>
	<div class="confirmEnrollment">
		<headerTip message="我的项目" goBack="true"></headerTip>
		<div class="header">
			<ul>
			<li>
			<img src="./toux1.png"  class="touxiang">
			<div class="m11">
			<div class="mm1"><h3>智多星项目</h3>
			<p style="width:100%;display:flex;"><span style="width:70%">志愿总时长<b style="color:#43B7B5">120小时</b></span><span style="width:30%;">报名人数<b style="color:#43B7B5">52人</b></span></p></div>
			<div class="mm2">
			<span>
			<p class="end">已结束</p>
			</span>
			</div>
			</div>
			</li>
			</ul>
		</div>
		<div class="text">
		<p>联系人：<span>吴彦祖</span></p>
		</div>
		<div class="text">
		<p>联系人手机号：<span>12345678912</span></p>
		</div>
		<div class="text">
		<p>招募时间：<span>2017/05/10-2017/08/29</span></p>
		</div>
		<div class="text">
		<p>项目日期：<span>2017/05/10-2017/08/29每周一、二</span></p>
		</div>
		<div class="text">
		<p>服务时间：<span>08：00-18：00</span></p>
		</div>
		<div class="text">
		<p>单日志愿时长：<span>10小时</span></p>
		</div>
</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'confirmEnrollment',
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
.text{
	padding:0.9rem 0;
	margin:0 0.6rem;
	border-bottom:1px #EAEAEA solid;
}
.text span{
	color:#878787;
}
.text p{
	font-size:0.85rem;
}
.header{
	position:relative;
	background:#F3F3F3;
	padding:0.6rem 0;
}
.header ul li{
	background:white;
	padding:0.8rem 0;
	border-radius:7px;
	margin:0rem 0.5rem 0 2.4rem;
	position:relative;

}
.header ul li .touxiang{
	width:5rem;
	height:5rem;
	position:absolute;
	left: -11%;
	top:7%;
}
.header ul li .m11{
	display:flex;
	margin-left:12%;
	padding:0.2rem;
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
	width:12%;
	font-size:0.6rem;
	right:5%;
	bottom:60%;
}
</style>