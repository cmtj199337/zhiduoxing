<template>
  <div class="personalLength">
   <headerTip message="补录时长" goBack="true"></headerTip>
	<div class="main">
	<div class="header">
<img src="./logo.png">
		<p>团中央网络影视中心第五团支部 <span class="ac">进行中</span></p> 
		<p><span style="font-size:0.3rem;color:#CCCCCC">志愿总时长</span> <span style="color:#77CBCA">120</span>小时</p>
	</div>
	</div>

	<div class="texts">
		<div class="t1"><p>日期</p>         <p>志愿时长</p>    <p>状态</p></div>
		<div class="t1"><p>2017/02/04</p>     <p>3小时</p>     <p>打卡签到</p></div>
		<div class="t1"><p>2017/02/04</p>     <p>3小时</p>     <p>打卡签到</p></div>
		<div class="t1"><p>2017/02/04</p>     <p>3小时</p>     <p style="color:#FFAA3D">补时失败</p></div>
		<div class="t1"><p>2017/02/04</p>     <p>3小时</p>     <p style="color:#77CBCA">审批中</p></div>
		<div class="t1"><p>2017/02/04</p>     <p>3小时</p>     <p>打卡签到</p></div>
		<div class="t1"><p>2017/02/04</p>     <p>3小时</p>     <p>打卡签到</p></div>
		<div class="t1"><p>2017/02/04</p>     <p>3小时</p>     <p>打卡签到</p></div>
		<div style="padding:1.5rem;"></div>

	</div>
	<div class="t"><p>补录时长</p></div>

  
  <div class="overlay" v-show="isShow">
		<div>
			<img src="./tan.png" alt="" style="left:10%;width:82%;top:30%">
			<img src="./ku.png" alt="" style="left:16%;width:15%;top:31%">
			<div class="t2">
				<p class="false">补时失败</p>
				<p><span>2017年2月2日</span><span style="margin-left:0.8rem">3小时</span></p>
				<p class="b1">驳回理由：补录时间多了1小时</p>
				<p class="b2">重新提交时长申请</p>
			</div>
		</div> 
		</div></div> 
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'personalLength',
	  	components:{
	  		headerTip
	  	}, 
	 	data () {
		    return {
		    	isShow:false
		    }
	  	},
	  	methods:{
	  		
	  	}
	}
</script>

<style scoped>
p{
	font-size:0.85rem;
}
.main{
	background:#F5F5F5;
	padding:0.2rem 0;
}
.header{
	margin: 0.6rem 0.6rem 0.6rem 2rem;
	background:white;
	position:relative;
	border-radius:5px;
	padding:0.55rem 0;
}
.header p .ac{
	border:1px  #46B8B7 solid;
	border-radius:5px;
	color:#46B8B7;
	margin-left:0.5rem;
}
.header p{
	margin:0.6rem 0;
	margin-left:2.7rem;
}
.t1{
	display:flex;
	padding:0.2rem 0;
	border-bottom:1px solid rgba(235,234,234,0.48);
}
.t1 p{
	width:33.3%;
	text-align:center;
	color: #757575;
}
h1 {text-align:center;}
.header img{
	width:24%; 
	position:absolute;
	top:1.5%; 
	left:-10%; 
}
.texts{
	background: #FFFFFF;
	font-size:16px;
	margin:0 0.8rem;
}
.texts p{
	margin:0.7rem 0;
			
}
.t p{
	color:#4CBAB8; 
	font-size:16px;
	text-align:center; 

}
.t{
	background: #FFFFFF;	
	padding:1.2rem 0;
	line-height:1.2rem;
	position:fixed;
	width:100%;
	bottom:0;
	border-top:3px #F6F6F6 solid;
}
.overlay{
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left:0;
	background: rgba(0,0,0,0.5);
}
.overlay img{
	width:22%; 
	position:absolute;
	top:10%; 
	left:-10%; 
}
.t2{
	margin-top:15rem;
	position:relative;
	text-align:center;
	height:5rem;
}
.t2 p{
	margin: 0.5rem;
}
.t2 .false{
	margin-top:0.6rem;
	font-size:1rem;
}
.t2 .b1{
	margin-top:0.8rem;
	color:#B5B5B5;
}
.t2 .b2{
	color:#B5B5B5;
}
    	    			

    </style>

