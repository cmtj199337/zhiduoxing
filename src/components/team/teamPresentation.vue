<template>
	<div class="teamPresentation">
		<headerTip message="团队详情" goBack="true"></headerTip>
<swipe v-model="index" style="text-align: center;">
		  <swipe-item><img src="./banner.png" alt=""></swipe-item>
		  <swipe-item><img src="./banner.png" alt=""></swipe-item>
		  <swipe-item><img src="./banner.png" alt=""></swipe-item>
		</swipe>
		<div class="header">
		<ul>
		<li><p>团队介绍</p></li>
		<li>团队项目</li>
		<li>团队社区</li>
		</ul>
		</div>
		<div class="detail">
		<div class="header2">
          <h4 class="texttitle"><span><img src="./t1.png"></span>团队信息</h4>
        </div>
		<div class="usertext">
		<span>名称：志多星团队</span>
		</div>
		<div class="usertext">
		<span>团队编号：123</span>
		</div>
		<div class="usertext">
		<span>团队口号：倡导无私奉献新风尚。</span>
		</div>
		<div class="usertext">
		<span>团队总志愿时长：720小时</span>
		</div>
		<div class="usertext">
		<span>服务类别：关爱服务</span>
		</div>
		<div class="usertext">
		<span>团队类型：党政机关</span>
		</div>
		<div class="usertext">
		<span>注册日期：2017/5/10</span>
		</div>
		<div class="usertext">
		<span>团队管理员：吴彦祖</span>
		</div>
		<div class="usertext">
		<span>联系电话：12345678912</span>
		</div>
		<div class="usertext">
		<span>团队地址地址：北京朝阳市四惠东</span>
		</div>
        <div class="usertext">
        <p>团队成员列表：<span style="color:#43B7B5">200人</span></p>
        </div>
 
		<div class="touxiang">
			<img src="./touxiang1.png" class="img1">
			<img src="./touxiang2.png">
			<img src="./touxiang3.png">
			<img src="./touxiang4.png">
			<img src="./touxiang1.png">
			<img src="./touxiang2.png">
			<img src="./touxiang3.png">
			<img src="./touxiang4.png">
			<img src="./touxiang2.png">
			<img src="./touxiang3.png">
			<img src="./touxiang4.png">
		</div>
		<div class="kong2">
		</div>
		<footer class="foot">
			<span class="bm1"><img src="./shoucang.png">收藏</span>
			<span class="bm2"><img src="./fenxiang.png">分享</span>
			<span class="bm3"><img src="./baoming.png"><p class="bm">我要加入</p></span>
		</footer>
		</div>
		</div>
		</template>
		<script>
	import { Swipe, SwipeItem } from 'c-swipe';
	import headerTip from '../../components/common/header/header.vue'

	export default{

		name:'teamPresentation',
		components:{
			Swipe,
	  		SwipeItem,
	  		headerTip

	  	},
		data () {
		    return {
		    	index:0,
		    }
	  	}  	

	}
</script>
<style scoped>
@import '../../styles/usertext.css';
@import '../../styles/swipe.css';
.usertext{
	margin:0rem 1rem;
	padding:0.8rem 0; 
	font-size: 0.8rem;
}
.detail{

}
.header{
	padding:0.4rem 0;
	background:#EAEAEA;
}
.header ul{
display:flex;
margin:0.1rem 0;
padding:0.5rem 0;
background:white;
text-align: center;
}
.header ul li{
width:33%;

}
.header ul p{
	color:#43B7B5;
}
	
 	.texttitle {
    font-size: 0.8rem;
    font-weight: normal;
    margin:0rem 1rem;
	padding:0.8rem 0; 
	border-bottom:1px #EAEAEA solid;
}
.kong2{
		background:#EAEAEA;
		padding: 0.3rem;
	}
.touxiang{
	position:relative;
	margin:0rem 1rem;
	padding:0.6rem 0; 

}
.touxiang .img1{
	margin-left:0.6rem;
}
.touxiang img{
	width:11%;
	display:inline;
	vertical-align: middle;
	margin-left:-1rem;
}
.foot{
	display:flex;
	text-align:center; 
}
.foot span{
	position:relative;
}
.bm1{
width:23%;
text-align:right;
margin:0.3rem 0; 

}
.bm2{
	width:23%;
	margin:0.3rem 0; 
}
.bm3{
	width:56%;
}
.bm3 img{
	width: 100%;
	height:100%;
}
.bm1 img{
	width:28%;
	margin-top:0.3rem;
	margin-left:70%;
}
.bm2 img{
	width:27%;
	margin-top:0.4rem;
	margin-left:38%;
}
.bm{
	color:white;
	position:absolute;
	top:39%;
	left:35%;
	font-size:0.9rem;
}
</style>