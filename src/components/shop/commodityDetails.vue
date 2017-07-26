<template>
	<div class="commodityDetails">
		<headerTip message="星币兑换详情" goBack="true"></headerTip>
		<swipe v-model="index" style="text-align: center;">
		  <swipe-item><img src="./banner.png" alt=""></swipe-item>
		  <swipe-item><img src="./banner.png" alt=""></swipe-item>
		  <swipe-item><img src="./banner.png" alt=""></swipe-item>
		</swipe>
		<div class="header">
		<p class="name">商品名称</p>
		<p class="price"><img src="./xingbi.png"><span>300</span></p>
		<p class="kucun">库存：<span>100</span></p>
		</div>
		<div class="jieshao">
			<p>当代文学里程碑之作，茅盾文学奖获奖作品。一部记录“民族的秘史”的长卷，一部渭河平原50年变迁的雄奇史诗，一轴中国农村斑斓多彩，触目惊心的长幅画卷。</p>
		</div>
		<div class="kong"></div>
		<div class="title">
		<p>支持方</p>
		</div>
		<div class="text">
		<p>志多星支持</p>
		</div>
		<div class="kong"></div>
		<div class="title">
		<p>兑换须知</p>
		</div>
		<div class="text">
		<p>兑换须知兑换须知兑换须知兑换须知兑换须知兑换须知兑换须知兑换须知兑换须知兑换须知兑换须知</p>	
		</div>
		<div class="kong"></div>
		<div class="title">
		<p>物流说明</p>
		</div>
		<div class="text">
		<p>物流说明物流说明物流说明物流说明物流说明物流说明物流说明物流说明物流说明</p>	
		</div>
		<div class="kong2"></div>
		<div class="end">
			<img src="./duihuan.png"><span>兑换</span>
		</div>

	</div>
</template>
<script>
	import { Swipe, SwipeItem } from 'c-swipe';
	import headerTip from '../../components/common/header/header.vue'
	export default{
		name:'commodityDetails',
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
@import '../../styles/swipe.css';
p{
	font-size:0.85rem;
}
.kong{
	padding:0.4rem;
	background:#F5F5F5;
}
.kong2{
	padding:0.4rem;
	background:#FBFBFB;
}
.header{
	display:flex;
	margin:0 0.6rem;
	padding:0.8rem 0;
	border-bottom:1px #EAEAEA solid;
}
.header p{
	width:20%;

}
.header .name{
	width:60%;
}
.header .price{
	display:flex;

}
.price img{
	width:1rem;
	height:1rem;
}
.price span{
	color:#6BC4C3;
	margin-left:0.6rem;
}
.kucun{
	color:#A7A7A7;
}
.jieshao p{
	color:#A7A7A7;
	margin:0.5rem;
	line-height:1.5rem;
}
.title{
	padding:0.7rem 0;
	margin:0 0.6rem;
	border-bottom:1px #EAEAEA solid;
}
.text{
	padding:0.7rem 0;
	margin:0 0.6rem;
	color:#6E6E6E;

}
.text p{
	font-size:0.7rem;
	line-height:1.2rem;
}
.end{
	position:relative;
}
.end span{
	position:absolute;
	left:45%;
	top:40%;
	color:#44B7B5; 
}
</style>