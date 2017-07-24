<template>
	<div class="index">
		<div class="headerBar">
			<div class="location"><img src="./location.png">{{guessCity}}</div>
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
				<li v-for="item in filtIcon">
					<router-link :to="item.url">
						<img :src="item.icon" alt="">
						<span>{{item.name}}</span>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="shoplist title">
			<h5><i></i>猜你喜欢<span>更多</span></h5>
			<ul>
				<li v-for="item in filtShop">
					<img class="shop" :src="item.itemPicture">
					<p>{{item.itemName}}</p>
					<p><img class="star" src="./star.png"><span>{{item.itemPrice}}</span></p>
				</li>
			</ul>
		</div>
		<div class="article title">
			<h5><i></i>发现精彩<span>更多</span></h5>
			<ul>
				<li v-for="item in filtArticle">
					<div class="picture"><img src="/static/article1.png"></div>
					<div class="text">
						<h6>{{item.title}}</h6>
						<span>{{item.creatTime}}</span>
						<p>{{item.intro}}</p>
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
		    	iconList:[],
		    	shoplist:[],
		    	article:[],
		    	guessCity:'',				//当前定位城市
		    }
	  	},
	  	mounted(){
	  		// 获取当前城市
	        this.$http.get('http://cangdu.org:8001/v1/cities?type=guess').then(response => {
	            let res = response.data;
	            this.guessCity = res.name;
	        })
	  		this.showList()
	  	},
	  	computed:{
		    filtIcon() {
		      	return this.iconList.slice(0,8)
		    },
		    filtShop(){
				return this.shoplist.slice(0,3)
		    },
		    filtArticle(){
				return this.article.slice(0,2)
		    }
		},
	  	methods:{
	  		showList(){
	  			this.$http.get('/api/public/homePage').then(response => {
	  				let res = response.data
	  				if(res.result == 0){
	  					let data = res.data
	  					this.iconList = data.menu
	  					this.shoplist = data.goods
	  					this.article = data.strategy
	  				}
	  			})
	  			this.justify_location()
	  		}
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
	    vertical-align: text-top;
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
		margin-bottom:0.5rem;
	}
	.classify ul li a{
		color: #333;
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
		justify-content: space-between;
	}
	.shoplist ul li{
		width: 30%;
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