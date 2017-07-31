<template>
  <div class="family">
   <headerTip message="志愿家庭" goBack="true" style="background: #FFFFFF"></headerTip><span class="h" @click="toAddress({path: '/addFamily'})">添加成员</span>

	<div class="t">
		<img src="./toux.png" alt="">
		<span class="text">
			<p><span style="font-size:16px">张北影</span></p> 
			<p ><span style="font-size:0.8rem;color:#CCCCCC">志愿时长</span> <span style="color:#77CBCA">1200</span><span>小时</span></p>
			<p><span style="font-size:0.8rem;color:#CCCCCC">身份证号</span><span>123125********8901</span></p>
		</span>
		<span class="item-check-btn list-btn">
			<svg class="icon icon-ok"></svg>
		</span>
	</div>

	<div class="t1">
		<img src="./toux1.png" alt="">
		<span class="text">
		<p><span style="font-size:16px">刘影</span></p> 
		<p ><span style="font-size:0.8rem;color:#CCCCCC">志愿时长</span> <span style="color:#77CBCA">1200</span><span>小时</span></p>
		<p><span style="font-size:0.8rem;color:#CCCCCC">身份证号</span><span>123125********8901</span></p>
		</span>
		<span class="item-check-btn list-btn">
			<svg class="icon icon-ok"></svg>
		</span>
	</div>

	<div class="t2">
		<img src="./toux1.png" alt="">
		<span class="text">
		<p><span style="font-size:16px">李桐</span></p> 
		<p ><span style="font-size:0.8rem;color:#CCCCCC">志愿时长</span> <span style="color:#77CBCA">1200</span><span>小时</span></p>
		<p><span style="font-size:0.8rem;color:#CCCCCC">身份证号</span><span>123125********8901</span></p>
		</span>
		<span class="item-check-btn list-btn">
			<svg class="icon icon-ok"></svg>
		</span>
	</div>
	<div class="t3">
		<p>确定</p>
	</div>

  </div>  
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'family',
	  	components:{
	  		headerTip
	  	}, 
	 	data () {
		    return {
		    	
		    }
	  	},
	  	methods:{
	  		toAddress(path){
                this.$router.push(path)
            }
	  	}
	}
</script>

<style scoped>
@import '../../styles/usertext.css';
.family{
	background: #F5F5F5;
	padding-bottom: 20%;
}
.h{
	margin-top: -2rem;
	margin-left: 19rem;
	position:absolute;
}

.t{
	padding: 0.5rem 0 0.5rem 3rem;
	display:flex;
	margin: 0.6rem 0.6rem 0.6rem 3.5rem;
	background: #FFFFFF;
	position:relative;
}
.t img{
	width:20%; 
	position:absolute;
 	top:14%; 
	left:-9%;
}
.t1{
	padding: 0.5rem 0 0.5rem 3rem;
	display:flex;
	margin: 0.6rem 0.6rem 0.6rem 3.5rem;
	background: #FFFFFF;
	position:relative;
}
.t1 img{
	width:20%; 
	position:absolute;
	top:14%; 
	left:-9%; 
}
.t2{
	padding: 0.5rem 0 0.5rem 3rem;
	display:flex;
	margin: 0.6rem 0.6rem 0.6rem 3.5rem;
	background: #FFFFFF;
	position:relative;
}
.t2 img{
	width:20%; 
	position:absolute;
	top:14%; 
	left:-9%; 
}
.t p{
	margin: 0.5rem 0;
}
.t1 p{
	margin: 0.5rem 0;
}
.t2 p{
	margin: 0.5rem 0;
}
.t3{
	margin: 4rem 0 0 0;
	text-align: center;
}

.t3 p{
	width: 12rem;
	color: #fff;
	background: #43B7B6;
	padding: 0.5rem 0;
	margin: 0 auto;
	border-radius: 0.4rem;
	border:none;
	appearance:none;
}
.list-btn{
    position: absolute;
    right: 1rem;
    top: 50%;
    margin-top: -0.5rem;
}
</style>