<template>
	<div class="index">
		<div class="headerBar">
			<div class="location"><img src="./location.png">北京</div>
			<div class="number"><img src="./logo.png">5000人</div>
		</div>
		<swipe v-model="index" style="text-align: center;">
		  <swipe-item><img src="/static/banner.png" alt=""></swipe-item>
		  <swipe-item><img src="/static/banner.png" alt=""></swipe-item>
		  <swipe-item><img src="/static/banner.png" alt=""></swipe-item>
		</swipe>
		<div class="classify clearfix">
			<input class="search" type="search" placeholder="搜索" align="center">
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
		<div class="shoplist title">
			<h5><i></i>猜你喜欢<span>更多</span></h5>
			<ul>
				<li>
					<img class="shop" src="/static/list1.png">
					<p>志愿者短T</p>
					<p><img class="star" src="./star.png"><span>300</span></p>
				</li>
				<li>
					<img src="/static/list1.png">
					<p>环保帆布包</p>
					<span></span>
				</li>
				<li>
					<img src="/static/list1.png">
					<p>手帐本</p>
					<span></span>
				</li>
			</ul>
		</div>
		<div class="article title">
			<h5><i></i>发现精彩<span>更多</span></h5>
			<ul>
				<li>
					<div class="picture"><img src="/static/article1.png"></div>
					<div class="text">
						<h6>高原上的藏区小学</h6>
						<span>17/02/05</span>
						<p>四川甘孜州岛稻城县地处青藏高原东南部，全县以藏族为先啊放假啊舒服</p>
					</div>
				</li>
				<li>
					<div class="picture"><img src="/static/article2.png"></div>
					<div class="text">
						<h6>在自己头上按了一根天线</h6>
						<span>17/02/05</span>
						<p>四川甘孜州岛稻城县地处青藏高原东南部，全县以藏族为先啊放假啊舒服</p>
					</div>
				</li>
			</ul>
		</div>
		<foot-bar></foot-bar>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'c-swipe';
	import footBar from '../common/footer/footer.vue'

	export default {
	  	name: 'index',
	  	components:{
	  		Swipe,
	  		SwipeItem,
	  		footBar
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
		padding-bottom: 15%;
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
		margin: -0.8rem auto 0 auto;
		text-align: center;
		background: #fff;
		position: relative;
		border-radius: 0.3rem;
		box-shadow:0px 5px 10px #ebeaea; 
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
	    margin: 0.5rem auto;
	    height: 2.5rem;
	    font-size: 1rem;
	    text-align: center;
	    color: #C9C9C9;
	}
	.search::-webkit-input-placeholder{
		color: #C9C9C9;
		text-align: center;
	}
	.shoplist{
		width: 100%;
		margin-top:2rem; 
	}
	.title h5{
		font-size: 1rem;
		line-height: 1;
		font-weight: normal;
	}
	.title h5 i{
		width: 0.5rem;
		height: 0.9rem;
		background: #43B7B6;
		display: inline-block;
		margin-right: 0.4rem;
	}
	.title h5 span{
		font-weight: normal;
		float: right;
		color: #43B7B6;
		padding-right: 1rem
	}
	.shoplist ul{
		display: flex;
		padding: 1rem 0;
	}
	.shoplist ul li{
		width: 33.33%;
	}
	.shoplist ul li p{
		font-size: 0.85rem;
		text-align: center;
		margin-top: 0.3rem;
	}
	.star{
		width: 1rem;
		display: inline-block;
		padding-right: 0.5rem;
		vertical-align: text-bottom;
	}
	.shoplist ul li span{
		font-size: 0.85rem;
	}
	.article{

	}
	.article ul{
		
	}
	.article ul li{
		display: flex;
		padding: 1rem;
		border-bottom: 1px solid #E5E5E5;
	}
	.picture{
		width: 40%;
		padding-right: 0.5rem;
	}
	.text{
		width: 60%;
	}
	.text h6{
		width: 100%;
		font-size: 1.1rem;
		font-weight: normal;
		line-height: 1;
		overflow: hidden;
		white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.text span{
		font-size: 0.85rem;
		color: #999;
		display: inline-block;
		padding: 0.5rem 0;
		line-height: 1;
	}
	.text p{
		font-size: 0.85rem;
		color: #999;
		line-height: 1.5;
	    display: -webkit-box;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	}
</style>