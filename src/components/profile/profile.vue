<template>
	<div class="profile">
		<div class="bg">
			<img src="/static/bg@2x.png">
		</div>
		<div class="mm">
		<div class="info">
				<div class="info-left">
					<img class="photo" :src="voluInfo.headIcon">
					<!-- <img class="renz" src="./renzheng@2x.png"> -->
				</div>
				<div class="info-right">
					<p class="name">
						<span>{{voluInfo.nickName}}</span>
						<el-rate
						  v-model="caleStar"
						  disabled
						  text-color="#ff9900"
						  disabled-void-color="#fff"
						  text-template="{value}">
						</el-rate>
					</p>
					<p class="kouhao"><span>志愿口号</span><i>{{voluInfo.volunteSlogan}}</i></p>
				</div>
				</div>
				<div class="info2">
				<ul class="clearfix">
					<li @click="toAddress({path: '/bulletedList'})">
						<p><b>{{voluInfo.myTeam}}</b></p>
						<span>我的团队</span>
					</li>
					<li @click="toAddress({path: '/myProject'})">
						<p><b>{{voluInfo.myProject}}</b></p>
						<span>我的项目</span>
					</li>
					<li>
						<p><b>{{voluInfo.serviceHour}}</b></p>
						<span>志愿时长</span>
					</li>
					<li @click="toAddress({path: '/myStarcoin'})">
						<p><b>{{voluInfo.eMoneyBalance}}</b></p>
						<span>星币</span>
					</li>
				</ul>
				</div>
			</div>
		<div class="kong"></div>
		<div class="main">
			<section class="project">
				<ul>
					<li @click="toAddress({path: '/personal'})">
						<img class="icon" src="./gere.png">
						<span>个人资料</span>
						<img class="arrow" src="./you@2x.png">
					</li>
					<li @click="toAddress({path: './myCertificate'})">
						<img class="icon" src="./renzheng2.png">
						<span>我的证书</span>
						<img class="arrow" src="./you@2x.png">
					</li>
					<li @click="toAddress({path: '/myFamily'})">
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
					<li @click="toAddress({path: '/myFeedback'})">
						<img class="icon" src="./hk.png">
						<span>我的回馈</span>
						<img class="arrow" src="./you@2x.png">
					</li>
					<li @click="toAddress({path: '/insurancePolicy'})">
						<img class="icon" src="./bd.png">
						<span>我的保单</span>
						<img class="arrow" src="./you@2x.png">
					</li>
					<!-- <li @click="toAddress({path: '/service'})">
						<img class="icon" src="./fuwu.png">
						<span>服务中心</span>
						<img class="arrow" src="./you@2x.png">
					</li> -->
					<li @click="toAddress({path: '/modifypassword'})">
						<img class="icon" src="./lock.png" style="width: 5%;display: inline-block;
					padding:0 0.6rem 0 0.5rem;}">
						<span>修改密码</span>
						<img class="arrow" src="./you@2x.png">
					</li>
				</ul>
				<input class="logout" @click="logout()" type="button" value="退出登录">
			</section>
		</div>
		<footer class="foot">
	        <section @click="toAddress({path: '/index'})">
	            <img src="/static/footicon/shouye1.png">
	            <p>首页</p>
	        </section>
	        <section @click="toAddress({path: '/scan'})">
	            <img src="/static/footicon/qiandaodaka1.png">
	            <p>签到打卡</p>
	        </section>
	        <section class="check">
	            <img src="/static/footicon/geren2.png">
	            <p>个人中心</p>
	        </section>
	    </footer>
	</div>
</template>

<script>
	export default {
	  	name: 'profile',
	 	data () {
		    return {
		    	voluInfo:[],
		    	username:null,
		    	star:0
		    }
	  	},
	  	mounted(){
	  		this.profile();
	  	},
	  	computed:{
	  		caleStar(){
	  			if(this.voluInfo.serviceHour >= 100){
	  				return this.star = 1
	  			}else if(this.voluInfo.serviceHour >= 300){
	  				return this.star = 2
	  			}else if(this.voluInfo.serviceHour >= 600){
	  				return this.star = 3
	  			}else if(this.voluInfo.serviceHour >= 1000){
	  				return this.star = 4
	  			}else if(this.voluInfo.serviceHour >= 1500){
	  				return this.star = 5
	  			}else{
	  				return this.star = 0
	  			}
	  		}
	  	},
	  	methods:{
	  		toAddress(path){
                this.$router.push(path)
            },
            profile(){
            	var userId = localStorage.getItem('userId')

            	this.$http.get('/api/private/getVolunteerDetail',{
            		params:{
            			id:userId
            		}
            	}).then(response => {
            		let res = response.data
            		if(res.result == 0){
            			this.voluInfo = res.data
            		}
            	}) 
            },
            logout(){
            	localStorage.clear()
            	this.$router.push('/index')
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
		width: 100%;
		display:flex;
		margin-top:0.5rem;
		padding-bottom:0.5rem;

	}
	.info2{
		width:100%;
		border-top:1px #F5F5F5 solid;
		padding:0.5rem 0;
	}
	.info2 ul {
		display:flex; 
	}
	.el-rate{
		display: inline-block;
		padding-top: 0.3rem;
	}
	.info2 ul li{
		width:25%;
		text-align:center;
		
		margin-top:0.6rem;
		border-right: 1px #F5F5F5 solid;
	}
	.info2 ul li p{
		color:#43B7B5;
	}
	.info2 ul li span{
		color:#666666;
	}


	.kong{
		padding:2.8rem 0;
		background:#F5F5F5;
	}
	.info-left{
		width: 20%;
		position: relative;
		margin-left:5%;
	}
	.renz{
	    width: 1.2rem;
	    position: absolute;
	    right: 0;
	    bottom:12%;
	}
	.info-right{
		width:65%;
		padding: 0.5rem 0rem 0.5rem 1rem;
	}
	.name{
		font-size: 1rem;
		color: #535353;
		height: 2rem;
		line-height: 2rem;
		display: flex;
	}
	.name span{
		padding-right:0.5rem;
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
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
	.mm{
		position:absolute;
		background:white;
		width:90%;
		margin-left:5%;
		margin-top:-26%;
		padding:0.6rem 0;
	
	}
	.photo{
		width: 4.5rem;
		height: 4.5rem;
		border-radius: 50%;
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
	}
	.project ul li{
		padding: 0.8rem 0;
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
    .logout{
    	border: 0;
	    margin: 1rem auto 0;
	    color: #FFFFFF;
	    font-size: 1rem;
	    font-family: "\5FAE\8F6F\96C5\9ED1";
	    background: #43B7B6;
	    padding: 0.5rem 4rem;
	    border-radius: 4px;
		display: block;
    }
</style>