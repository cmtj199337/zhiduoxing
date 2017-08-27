<template>
	<div class="index">
		<div class="headerBar">
			<div class="number"><img src="./logo.png"><span>5000人</span></div>
			<div class="denglu">
				<span v-if="userName">{{userName}}</span>
				<span v-else @click="toAddress({path: '/login'})">登录</span>
			</div>		
		</div>
		<swipe v-model="index" style="text-align: center;">
		  <swipe-item><img src="/static/banner.png" alt=""></swipe-item>
		  <swipe-item><img src="/static/banner.png" alt=""></swipe-item>
		  <swipe-item><img src="/static/banner.png" alt=""></swipe-item>
		</swipe>
		<img src="./zi.png" class="zi">
		<div class="classify clearfix">
			<div class="location"><p><img src="./weizhi.png">{{guessCity}}</p><input @click="toggle()" v-on:blur="changeCount()" class="search" type="text" placeholder="搜索" align="center"><img src="./sou.png" class="ss" v-show="isShow"></div>
			<ul>
				<!-- <li v-for="item in filtIcon">
					<router-link :to="item.url">
						<img :src="item.icon" alt="">
						<span>{{item.name}}</span>
					</router-link>
				</li> -->
				<li>
					<router-link to="volunteerTeam">
						<img src="./7.png" alt="">
						<span>志愿团队</span>
					</router-link>
				</li>
				<li>
					<router-link to="voluntaryProjects">
						<img src="./8.png" alt="">
						<span>志愿项目</span>
					</router-link>
				</li>
				<li>
					<router-link to="insurance">
						<img src="./3.png" alt="">
						<span>志愿保障</span>
					</router-link>
				</li>
				<li>
					<router-link to="makeupTime">
						<img src="./6.png" alt="">
						<span>补录时长</span>
					</router-link>
				</li>
				<li>
					<router-link to="shop">
						<img src="./5.png" alt="">
						<span>志愿回馈</span>
					</router-link>
				</li>
				<li>
					<router-link to="communityInteraction">
						<img src="./2.png" alt="">
						<span>社区互动</span>
					</router-link>
				</li>
				<li>
					<router-link to="volunteerStrategy">
						<img src="./4.png" alt="">
						<span>志愿攻略</span>
					</router-link>
				</li>
				<li>
					<router-link to="service">
						<img src="./1.png" alt="">
						<span>服务中心</span>
					</router-link>
				</li>
			</ul>
		</div>
		<!-- <swiper class="swiper"></swiper> -->
		<!-- <div class="shoplist title">
			<h5><i></i>猜你喜欢<span @click="toAddress({path: '/shop'})">更多</span></h5>
			<ul> -->
				<!-- <li v-for="item in filtShop">
					<img class="shop" :src="item.itemPicture">
					<p>{{item.itemName}}</p>
					<p><img class="star" src="./star.png"><span>{{item.itemPrice}}</span></p>
				</li> -->
				<!-- <li @click="toAddress({path: '/shopDetail'})">
					<img class="shop" src="/static/list1.png">
					<p>志愿者短T</p>
					<p><img class="star" src="./star.png"><span>300</span></p>
				</li>
				<li @click="toAddress({path: '/shopDetail'})">
					<img class="shop" src="/static/list1.png">
					<p>志愿者短T</p>
					<p><img class="star" src="./star.png"><span>300</span></p>
				</li>
				<li @click="toAddress({path: '/shopDetail'})">
					<img class="shop" src="/static/list1.png">
					<p>志愿者短T</p>
					<p><img class="star" src="./star.png"><span>300</span></p>
				</li>
			</ul>
		</div> -->
		<div class="article title">
			<h5><i></i>发现精彩<span @click="toAddress({path: '/volunteerStrategy'})">更多</span></h5>
			<ul>
				<!-- <li v-for="item in filtArticle">
					<div class="picture"><img src="/static/article1.png"></div>
					<div class="text">
						<h6>{{item.title}}</h6>
						<span>{{item.creatTime}}</span>
						<p>{{item.intro}}</p>
					</div>
				</li> -->
				<li @click="toAddress({path: '/servicesDetails'})">
					<div class="picture"><img src="/static/article1.png"></div>
					<div class="text">
						<h6>高原上的藏区小学</h6>
						<span>17/02/05</span>
						<p>文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本</p>
					</div>
				</li>
				<li @click="toAddress({path: '/servicesDetails'})">
					<div class="picture"><img src="/static/article2.png"></div>
					<div class="text">
						<h6>头上安装了一根线天线</h6>
						<span>17/02/05</span>
						<p>文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本</p>
					</div>
				</li>
			</ul>
		</div>
		<footer class="foot">
	        <section class="check">
	            <img src="/static/footicon/shouye2.png">
	            <p>首页</p>
	        </section>
	        <section @click="toAddress({path: '/scan'})">
	            <img src="/static/footicon/qiandaodaka1.png">
	            <p>签到打卡</p>
	        </section>
	        <section @click="toAddress({path: '/profile'})">
	            <img src="/static/footicon/geren1.png">
	            <p>个人中心</p>
	        </section>
	    </footer>
		<div class="loading" v-if="isLoading">
            <p><img src="/static/loading.gif" alt=""></p>
            <span>正在加载</span>
        </div>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'c-swipe';
	import Swiper from '../common/swiper.vue'
	export default {
	  	name: 'index',
	  	components:{
	  		Swipe,
	  		SwipeItem,
	  		Swiper
	  	},
	 	data () {
		    return {
		    	isLoading:false,
		    	index:0,
		    	iconList:[],
		    	shoplist:[],
		    	article:[],
		    	guessCity:'',
		    	isShow:true,
		    	userName:'',
		    	lnglat:''
		    }
	  	},
	  	mounted(){
	  		this.userName = localStorage.getItem('username')

	  		this.getLocation()
	  		// 获取当前城市
	        this.$http.get('http://api.map.baidu.com/geocoder/v2/?callback=renderOption&output=json&address=百度大厦&city=北京市&ak=E4vYNbh4LBcHlmzE9dmE5KVv2NMxvFBY').then(response => {
	            let res = response.data;
	            this.guessCity = res.name;
	        })
	  		// this.showList()
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
		    },
		    user(){
	  			return this.$store.state.user
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

	  					this.isLoading = false
	  				}
	  			})
	  		},
	  		getLocation(){
		        var geolocation = new BMap.Geolocation();
		        //弹出地理授权
		          geolocation.getCurrentPosition(function(r) {
		              	if(this.getStatus() == BMAP_STATUS_SUCCESS) {
		                  	// alert('定位成功');
		                  	// console.log(r.point);
		                 	this.lnglat = r.point.lng+','+r.point.lat
		              	}else{
		                  	alert("baidu return failed");
		              	}
		          },
		          //获取失败时候的回调
		          function(r) {
		              console.log(r);
		              alert('定位失败');
		              return {
		                  //设置高精度
		                  enableHighAccuracy: true
		              }
		          });
		    },
	  		toAddress(path){
                this.$router.push(path)
            },
            toggle(){
            	this.isShow=false
            },
            changeCount(){
            	this.isShow=true
            }
	  	}
	}
</script>

<style scoped>
	@import '../../styles/swipe.css';
	.zi{
		position:absolute;
		top:12%;
		width:62%;
		left:0;
		right: 0;
		margin: auto;
	}
	.ss{
		position:absolute;
		width:4.5%;
		top:35%;
		right:42%;
	}
	.index{
		position: relative;
		padding-bottom: 15%;
		background: #f5f5f5;
	}
	.headerBar{
		position: absolute;
		top: 0;left: 0;right: 0;
		background: rgba(255,255,255,0.2);
		padding:0 1rem;
		z-index: 10;
		display: flex;
		height: 2rem;
		line-height: 2rem;
	}
	.headerBar div span{
		font-size:1.1rem;
		display: inline-block;
		width: 4rem;
	}
	.headerBar div{
		width: 50%;
		font-size: 1rem;
		color: #fff;
	}
	.number{
		text-align: left;
	}
	.number img{
		width: 1rem;
	    display: inline-block;
	    vertical-align: text-top;
	    padding-right: 0.5rem;
	}
	.denglu{
		text-align: right;
	}
	.location{
		display:flex;	
		position:relative;

	}
	.location p{
		width:32%;
		margin: 0.5rem auto;
	    height: 2rem;
	    line-height:2rem;
	    font-size: 0.85rem;
	    margin-left:0.2rem;
	    text-align:center;
	    overflow:hidden;
	    text-overflow: ellipsis;
		white-space: nowrap;
		color: #333;
	}
	.location p img{
		width: 1rem;
	    display: inline;
	    vertical-align:middle;
	    padding-right: 0.2rem;
	    margin-left:0.1rem;
	    padding-bottom:0.4rem;
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
	    width:65%;
	    border: 0; 
	    margin: 0.5rem auto;
	    height: 2rem;
	    font-size: 1rem;
	    text-align: center;
	    color: #C9C9C9;
	    background: #f5f5f5;
	    margin-right:3%;
	    border-radius: 0.3rem;
	}
	.search::-webkit-input-placeholder{
		color: #C9C9C9;
		text-align: center;
	}
	.shoplist{
		width: 100%;
		margin-top:0.5rem;
		padding-top: 1rem;
	}
	.title{
		background: #fff;
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
		margin-top: 0.5rem;
		padding-top: 1rem;
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
	.loading{
	    position: absolute;
	    width:4.4rem;
	    height: 4.4rem;
	    border-radius: 5px;
	    text-align: center;
	    background: rgba(0,0,0,.5);
	    padding: 0.6rem 0;
	    box-sizing:border-box;
	    bottom: 30%;
	    left:50%;
	    margin-left: -2.2rem;
	  }
	  .loading p{
	      width:50%;
	      margin: 0 auto;
	  }
	  .loading p>img{
	      width: 100%;
	  }
	  .loading span{
	    color: #fff;
	    font-size: 0.65rem;
	  }
	.foot{
        width: 100%;
        height: 2.5rem;
        max-width: 720px;
        padding: 0.3rem 0;
        position: fixed;
        bottom: 0;
        background: #fff;
        box-shadow: 0px 5px 10px #000;
        z-index: 10;
    }
    .foot section{
        width: 33.33%;
        text-align: center;
        color: #cbcbcb;
        float: left;
    }
    .foot section img{
        width: 25%;
        margin: 0 auto;
    }
    .check{
        color: #43B7B6 !important;
    }
    .swiper{
    	margin-top: 0.8rem;
    }
</style>