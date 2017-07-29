<template>
<div class="uncheckPend">
	<div class="main">
			<span>
			<img src="../banner@2x.png" >
			<img src="../teb2.png" >
			<ul class="te">
			<li class="cc1">志多星项目</li>
			</ul>
			<ul class="te1">
			<li class="cc1">北京市朝阳区</li>
			<li class="cc2">40/100</li>
			<li class="cc3">招募中</li>
			</ul>
			<ul class="te2">
			<li class="cc1">项目时间</li>
			<li class="cc4">2017/05/02-2017/05/02</li>
			</ul>
			</span>
	</div>
	<div class="main">
			<span>
			<img src="../banner@2x.png" >
			<img src="../teb2.png" >
			<ul class="te">
			<li class="cc1">志多星项目</li>
			</ul>
			<ul class="te1">
			<li class="cc1">北京市朝阳区</li>
			<li class="cc2">40/100</li>
			<li class="cc3">进行中</li>
			</ul>
			<ul class="te2">
			<li class="cc1">项目时间</li>
			<li class="cc4">2017/05/02-2017/05/02</li>
			</ul>
			</span>
	</div>
	<div class="main">
			<span>
			<img src="../banner@2x.png" >
			<img src="../teb2.png" >
			<ul class="te">
			<li class="cc1">志多星项目</li>
			</ul>
			<ul class="te1">
			<li class="cc1">北京市朝阳区</li>
			<li class="cc2">40/100</li>
			<li class="cc3">已结束</li>
			</ul>
			<ul class="te2">
			<li class="cc1">项目时间</li>
			<li class="cc4">2017/05/02-2017/05/02</li>
			</ul>
			</span>
	</div>
	<div class="main">
			<span>
			<img src="../banner@2x.png" >
			<img src="../teb2.png" >
			<ul class="te">
			<li class="cc1">志多星项目</li>
			</ul>
			<ul class="te1">
			<li class="cc1">北京市朝阳区</li>
			<li class="cc2">40/100</li>
			<li class="cc3">待启动</li>
			</ul>
			<ul class="te2">
			<li class="cc1">项目时间</li>
			<li class="cc4">2017/05/02-2017/05/02</li>
			</ul>
			</span>
	</div>
</div>
</template>
<script>
	export default{
		name:'uncheckPend',
	}
</script>
<style scoped>
.main{
	background:#F5F5F5;
	padding:0.2rem;
	
}
.main span{
	margin:0.4rem;
	display:inline-block;
	position:relative;
}
.te{
	position:absolute;
	width:100%;
	bottom:40%;

}
.te li{
	width: 50%;
	color:white
}
.te1{
	display:flex;
	position:absolute;
	width:100%;
	bottom:23%;

}
.te1 li{
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
.cc1{
	text-align:left;
}
.cc2{
	text-align:center;
}
.cc3{
	text-align:right;
}
.cc4{
	text-align:right;
	color:#666
}
</style>