<template>
	<div class="profile">
		<div class="bg">
			<img src="/static/bg@2x.png">
			<section class="info">
				<div class="info-left">
					<img class="photo" src="./toux@2x.png">
					<img class="renz" src="./renzheng@2x.png">
				</div>
				<div class="info-right">
					<p class="name"><span>彭笑笑</span><i></i><i></i><i></i><i></i><i></i></p>
					<p class="kouhao"><span>志愿口号</span><i>将志愿服务进行到底。</i></p>
				</div>
			</section>
		</div>
		<div class="main">
			<section class="mine">
				<ul class="clearfix">
					<li>
						<p>20</p>
						<span>我的团队</span>
					</li>
					<li>
						<p>100</p>
						<span>我的项目</span>
					</li>
					<li>
						<p>20</p>
						<span>志愿时长</span>
					</li>
					<li>
						<p>20</p>
						<span>星币</span>
					</li>
				</ul>
			</section>
			<section class="project">
				<ul>
					<li @click="toAddress({path: '/personalDetails'})">
						<img class="icon" src="./gere.png">
						<span>个人资料</span>
						<img class="arrow" src="./you@2x.png">
					</li>
					<li>
						<img class="icon" src="./jiat.png">
						<span>我的家庭</span>
						<img class="arrow" src="./you@2x.png">
					</li>
					<li @click="toAddress({path: '/myNews'})">
						<img class="icon" src="./xx.png">
						<span>我的消息</span>
						<img class="arrow" src="./you@2x.png">
					</li>
					<li @click="toAddress({path: '/myCollection'})">
						<img class="icon" src="./sc.png">
						<span>我的收藏</span>
						<img class="arrow" src="./you@2x.png">
					</li>
					<li>
						<img class="icon" src="./hk.png">
						<span>我的回馈</span>
						<img class="arrow" src="./you@2x.png">
					</li>
					<li @click="toAddress({path: '/insurancePolicy'})">
						<img class="icon" src="./bd.png">
						<span>我的保单</span>
						<img class="arrow" src="./you@2x.png">
					</li>
					<li>
						<img class="icon" src="./fuwu.png">
						<span>服务中心</span>
						<img class="arrow" src="./you@2x.png">
					</li>
				</ul>
			</section>
		</div>
		<foot-bar></foot-bar>
	</div>
</template>

<script>
	import footBar from '../common/footer/footer.vue'

	export default {
	  	name: 'profile',
	  	components:{
	  		footBar
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
	.main{
	    margin: 0 auto;
	    background: #fff;
	    position: relative;
	    padding-bottom: 15%;
	}
	.bg{position: relative;}
	.info{
		width: 90%;
		display: flex;
		background: #fff;
    	padding: 3% 0 3% 3%;
		border-bottom: 1px solid #ececec;
		position: absolute;
		bottom: 0;
		right: 0;left: 0;
		margin: auto;
	}
	.info .info-left{
		width: 20%;
		position: relative;
	}
	.renz{
	    width: 1.2rem;
	    position: absolute;
	    right: 0;
	    bottom: 5%;
	}
	.info-right{
		padding: 0.5rem 0rem 0.5rem 1rem;
	}
	.name{
		font-size: 1rem;
		color: #535353;
		height: 2rem;
		line-height: 2rem;
	}
	.name span{
		padding-right:0.5rem;
	}
	.name i{
		width: 1rem;height: 1rem;
		display: inline-block;
		background: url("./xx@2x.png") no-repeat;
		background-size: cover;
		vertical-align: text-top;
		margin-right: 0.2rem;
	}
	.kouhao{
		font-size: 0.7rem;
		color: #333;
		height: 2rem;
		line-height: 2rem;
		
	}
	.kouhao span{
		padding-right:0.5rem; 
	}
	.mine{
		padding:6%;
	}
	.mine ul{
		display: flex;
	}
	.mine ul li{
		width: 25%;
		text-align: center;
		border-left: 1px solid #ececec;
	}
	.mine ul li:first-child{
		border:none;
	}
	.mine ul li p{
		color: #43B7B6;
		font-size: 1.2rem;
		padding-bottom: 0.2rem;
	}
	.mine ul li span{
		color: #949494;
		font-size: 0.85rem
	}
	.project{
		width: 90%;
		margin: 0 auto;
		font-size: 1rem;
		color: #3B3B3B;
		margin-top: 1rem;
	}
	.project ul li{
		padding: 1rem 0;
		border-bottom: 1px solid #ececec;
		position: relative;
	}
	.project img{
		vertical-align: middle;
	}
	.icon{
		width: 6%;
		display: inline-block;
		padding:0 0.6rem 0 0.5rem;
	}
	.arrow{
		width: 3%;
		display: inline-block;
		position: absolute;
		right: 0;
		top: 1.2rem;
	}
	.project ul li span{
		vertical-align: middle;
	}
</style>