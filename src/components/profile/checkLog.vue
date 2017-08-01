<template>
  <div class="checkLogistics">
   <headerTip message="我的回馈" goBack="true" style="background: #FFFFFF"></headerTip>
<div class="kong"></div>
	<div class="header">
		<div class="t">
			<img src="./list.png" alt="">
		</div>
		<div class="t1">
			<p><span class="t3">志愿者短T简约宽松男女同款</span></p> 
			<p ><span>兑换时间</span> <span>2017/06/02</span><span>12:00</span></p>
			<p class="t2"><span><img src="./xingbi.png" alt=""></span> <span class="t4">300</span><span class="t5">x1</span></p>
		</div>
	</div>
	<div class="kong"></div>
	<div class="text">
		<p class="t6">虚拟物品兑换详情</p>		
		<p class="xq">兑换详情兑换详情兑换详情兑换详情兑换详情兑换详情兑换详情兑换详情兑换详情兑换详情兑换详情兑换详情兑换详情兑换详情.</p>
	</div>

  </div>  
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'checkLogistics',
	  	components:{
	  		headerTip
	  	}, 
	 	data () {
		    return {
		    	
		    }
	  	},
	  	methods:{
	  		
	  	}
	}
</script>

<style scoped>
.header{
	background: #FFFFFF;

}
.kong{
	padding:0.3rem 0;
	background:#F5F5F5
}
.t img{
	left: 0.5rem;
	top: 5rem;
	position:absolute;
	width: 5.5rem;
	height: 5.5rem;
}
.t1{
	padding: 0.05rem 0 0.05rem 6.5rem;
	position:relative;
}
.t1 img{
	width: 0.8rem;
	height: 0.8rem;
}
.t2{
	display:flex;
}
.t1 p{
	margin: 1rem 0;
}
.text{
	
	 
	background: #FFFFFF;
}
.t3{
	font-size: 16px;
}
.t4{
	color: #4ABAB8;
}
.t5{
	margin-left: 12rem;
}
.t6{
	padding: 0.9rem 0 0.9rem 0.7rem;
	border-bottom:1px solid rgba(235,234,234,0.48);
}
.t7{	
	color: #4ABAB8;
	border-bottom:1px solid rgba(235,234,234,0.48);
}
.t7 p{
	padding: 0.4rem 0.1rem 0.4rem 3.5rem;
}
.t8{	
	border-bottom:1px solid rgba(235,234,234,0.48);
}
.t8 p{
	padding: 0.4rem 0.1rem 0.4rem 3.5rem;
}
.t14{	
	border-bottom:1px solid rgba(235,234,234,0.48);
}
.t14 p{
	padding: 0.4rem 0.1rem 0.4rem 3.5rem;
}
.t15{	
	border-bottom:1px solid rgba(235,234,234,0.48);
}
.t15 p{
	padding: 0.4rem 0.1rem 0.4rem 3.5rem;
}
.t9 img{
	top: 16rem;
	left: 1.5rem;
	position:absolute;
	width: 0.1rem;
	height: 11rem;
}
.t10 img{
	top: 15.6rem;
	left: 1.05rem;
	position:absolute;
	width: 1rem;
	height: 1rem;
}
.t11 img{
	top: 19.5rem;
	left: 1.3rem;
	position:absolute;
	width: 0.5rem;
	height: 0.5rem;
}
.t12 img{
	top: 23.1rem;
	left: 1.3rem;
	position:absolute;
	width: 0.5rem;
	height: 0.5rem;
}
.t13 img{
	top: 26.8rem;
	left: 1.3rem;
	position:absolute;
	width: 0.5rem;
	height: 0.5rem;
}
.text .xq{
	margin:0.6rem; 
	line-height:1.5rem;
	color:#B3B3B3;
}


</style>