<template>
	<div class="index">
		<div class="headerBar">
			<div class="location"><img src="./location.png">北京</div>
			<div class="number"><img src="./logo.png">5000人</div>
		</div>
		<swipe v-model="index" style="text-align: center;">
		  <swipe-item><img src="../../../static/banner.png" alt=""></swipe-item>
		  <swipe-item><img src="../../../static/banner.png" alt=""></swipe-item>
		  <swipe-item><img src="../../../static/banner.png" alt=""></swipe-item>
		</swipe>
		<div class="classify clearfix">
			<input class="search" type="text" placeholder="搜索" align="center">
			<ul>
				<li>
					<img src="./7.png" alt="">
					<span>志愿团队</span>
				</li>
				<li>
					<img src="./8.png" alt="">
					<span>志愿项目</span>
				</li>
				<li>
					<img src="./3.png" alt="">
					<span>志愿保障</span>
				</li>
				<li>
					<img src="./6.png" alt="">
					<span>补录时长</span>
				</li>
				<li>
					<img src="./5.png" alt="">
					<span>志愿回馈</span>
				</li>
				<li>
					<img src="./2.png" alt="">
					<span>社区互动</span>
				</li>
				<li>
					<img src="./4.png" alt="">
					<span>志愿攻略</span>
				</li>
				<li>
					<img src="./1.png" alt="">
					<span>服务中心</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'c-swipe';
	export default {
	  	name: 'index',
	  	components:{
	  		Swipe,
	  		SwipeItem
	  	},
	 	data () {
		    return {
		    	index:0,
		    }
	  	},
	  	methods:{
	  		
	  	}
	}
</script>

<style scoped>
	@import '../../styles/swipe.css';
	.index{
		position: relative;
	}
	.headerBar{
		position: absolute;
		top: 0;left: 0;right: 0;
		background: rgba(255,255,255,0.2);
		padding:0.3rem 1rem;
		z-index: 10;
		display: flex;
	}
	.headerBar div{
		width: 50%;
		font-size: 1rem;
		color: #fff;
	}
	.number{
		text-align: right;
	}
	.number img{
		width: 1rem;
	    display: inline-block;
	    vertical-align: middle;
	    padding-right: 0.5rem;
	}
	.location img{
		width: 0.8rem;
	    display: inline-block;
	    vertical-align: middle;
	    padding-right: 0.5rem;
	}
	.classify{
		width: 88%;
		margin: 0 auto;
		text-align: center;
	}
	.classify ul li{
		width: 25%;
		float: left;
		color: #333;
		margin-bottom:0.5rem; 
	}
	.classify ul li img{
		width: 50%;
		margin: 0.2rem auto;
	}
	.search{
	    width: 80%;
	    border: 0; 
	    margin: 0 auto;
	    height: 2.5rem;
	    font-size: 1rem;
	}
	.search::-webkit-input-placeholder{
		color: #C9C9C9;
		text-align: center;
	}
</style>