<template>
	<div class="informationFilling">
		<headerTip message="补录时长" goBack="true"></headerTip>
		<div class="main">
		<div class="header">
			<ul>
			<li>
			<img src="./toux1.png"  class="touxiang">
			<div class="m11">
			<div class="mm1"><h3>智多星项目</h3>
			<p style="width:100%;display:flex;"><span style="width:70%">志愿总时长<b style="color:#43B7B5">120小时</b></span><span style="width:40%;">报名人数<b style="color:#43B7B5">52人</b></span></p></div>
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
			<li><img src="./jia.png"><p style="position:absolute;left:41%;color:white;top:34%">加时长</p></li>
			<li><img src="./jian.png">减时长</li>
			</ul>
		</div>
		<div class="main2">
		<div class="header3">
		<p>补录时长</p><input type="text" name="" style="border:none;" placeholder="请输入小时数">
		</div>
		<div class="header4">
		<ul>
		<li>张里三</li>
		<li>马晓明</li>
		<li>张里三</li>
		<li>张里三</li>
		<li>马晓华</li>
		</ul>
		<ul>
		<li>张里三</li>
		<li>马晓明</li>
		<li>张里三</li>
		<li>张里三</li>
		<li>马晓华</li>
		</ul>
		<ul>
		<li>张里三</li>
		<li>马晓明</li>
		<li>张里三</li>
		<li>张里三</li>
		<li>马晓华</li>
		</ul>

		</div>
		</div>
		<div class="header5">
			<p>补录时长人员列表：<span style="color:#43B7B5">共计15人</span></p>
		</div>
		</div>
		<div class="jieshu">
		<p>确认</p>
		</div>
		</div>
	</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'informationFilling',
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
	height:37rem;
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
	width:14%;
	font-size:0.6rem;
	right:3%;
	bottom:63%;
}
.header2 ul{
	display:flex;
	margin:0.6rem 0;

}
.header2 ul li{
	width:50%;
	text-align: center;
	background:white;
	padding:0.9rem 0;
	position:relative;
}
.header2 ul li img{
	position:absolute;
	width:38%;
	top:26%;
	left:32%;
}
.main2{
	background:white;
}
.header3{
	display:flex;
	background:white;
	padding:0.4rem 0;
	margin:0 0.5rem;
	border-bottom:1px #F5F5F5 solid;

}
.header3 p{
	width:20%;
	margin-left:0.5rem;
	line-height:2rem;
}
.header3 input{
	width:70%;
	padding:0.5rem 0;
	
}
.header4{
	padding:0.5rem 0;
}
.header4 ul{
display:flex;
padding:0.6rem 0;
}
.header4 ul li{
width:20%;
text-align:center;
}
.header5{
	padding:0.6rem 0;
	margin:0 0.5rem;
}
.jieshu{
	padding:1rem 0;
	text-align: center;
}
.jieshu p{
	color:#43B7B6;
	font-size:1rem;
}

</style>