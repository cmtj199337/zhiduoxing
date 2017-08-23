
<template>
	<div class="voluntaryGuarantee">
		<headerTip message="志愿保障" goBack="true"></headerTip>
		<swipe v-model="index" style="text-align: center;">
		  <swipe-item><img src="/static/bxbanner01.png" alt=""></swipe-item>
		  <swipe-item><img src="/static/bxbanner01.png" alt=""></swipe-item>
		  <swipe-item><img src="/static/bxbanner01.png" alt=""></swipe-item>
		</swipe>
		<div class="header">
			<ul>
			<li><img src="./bzcp.png"><p>保障产品</p></li>
			<li><img src="./bzjh.png"><p>保障计划</p></li>
			<li><img src="./bxgm.png"><p>保险购买</p></li>
			<li><img src="./lpfw.png"><p>理赔服务</p></li>
			</ul>
		</div>
		<div class="kong">
		</div>
		<div class="main" @click="toAddress({path: '/insuranceDetails'})">
		<div class="title">
		<img src="./bian.png"><span><b>推荐产品</b></span>
		</div>
		<div class="tu"><img src="./tu.png" ></div>
		<div class="biaoti">
		<p><span>产品标题</span><span class="m">￥50</span></p>
		<p class="jieshao">产品介绍产品介绍产品介绍产品介绍产品介绍产品</p>
		</div>
		</div>
		<div class="kong"></div>
		<div class="main" @click="toAddress({path: '/insuranceDetails'})">
		<div class="title">
		<img src="./bian.png"><span><b>保险产品</b></span>
		</div>
		<div class="tu"><img src="./tu2.png" ></div>
		<div class="biaoti">
		<p><span>产品标题</span><span class="m">￥50</span></p>
		<p class="jieshao">产品介绍产品介绍产品介绍产品介绍产品介绍产品</p>
		</div>
		</div>

	</div>
</template>
<script>
import { Swipe, SwipeItem } from 'c-swipe';
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'voluntaryGuarantee',
		components:{
			Swipe,
	  		SwipeItem,
	  		headerTip
	  	},
		data(){
			return {
				index:0,
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
@import '../../styles/swipe.css';
.voluntaryGuarantee{
	background: #fff;
}
p{
	font-size:0.85rem;
}
.header ul {
	display:flex;
}
.header ul li{
	width:25%;
	text-align: center;
	padding:0.8rem 0;
}
.header ul li img{
	width:45%;
	margin:0 auto;
}
.header ul li p{
	margin:0.4rem 0;
}
.kong{
	padding:0.4rem 0;
	background:#F5F5F5;
}
.title{
	padding:0.6rem 0;
}
.title img{
	width:1.8%;
	display:inline;
	vertical-align:middle;
}
.title span{
	font-size:0.85rem;
	margin-left:0.6rem;
}
.main .tu{
	margin:0 0.6rem;
}
.main .biaoti{
	margin:0.6rem 0.6rem;
}
.biaoti p{
	margin:0.3rem 0;
}
.biaoti .m{
	margin-left:75%;
	color:#FF9E14;
}
.biaoti .jieshao{
	color:#A1A1A1;
}

</style>