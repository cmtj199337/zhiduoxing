<template>
	<div class="teamcenter">
	<div style="height:2rem;"></div>
	<!-- 头部 -->
	<img class="topimge" :src="list.logo" >
		<div class="topview">
		<div>xxx</div>
			<!-- <img src="./logo.png" > -->
			<p style="font-size: 1rem">{{list.name}}</p>
			<div>
				<p><span class="count">{{list.serHour}}</span>小时</p>
				<p class="title">志愿总时长</p>
			</div>
			<div>
				<p><span class="count">{{list.voNum}}</span>人</p>
				<p class="title">团队人数</p>
			</div>
			<div>
				<p>{{list.manager}}</p>
				<p class="title">团队管理</p>
			</div>
			<hr>
			<div style="width: 80%;text-align:left;">
				<span>团队口号:</span>
				<span>{{list.slogan}}</span>
			</div>
		</div>

		<!-- 栏目列表 -->
		<div class="column">
			<ul>
				<li @click="toAddress({path: '/detailsOfTheTeam'})">
					<img class="icon" src="/static/067/jbxx.png">
					<span>基本信息</span>
				</li>
				<hr>
				<li @click="toAddress({path: '/teammanage'})">
					<img class="icon" src="./sz.png">
					<span>团队管理</span>
				</li>
				<hr>
				<li @click="toAddress({path: '/myPolicy'})">
					<img class="icon" src="./tdbd.png">
					<span>团队保单</span>
				</li>
			</ul>
		</div>

		<div class="column">
			<ul>
				<li @click="toAddress({path:'./juniorTeamManagement'})">
					<img class="icon" src="./gl.png">
					<span>下一级团队管理</span>
				</li>
				<hr>
				<li @click="toAddress({path: '/allTeam'})">
					<img class="icon" src="./qb.png">
					<span>全层级团队查看</span>
				</li>
				<hr>
				<li>
					<router-link :to="{path:'/tregister',query:{from:1}}">
						<img class="icon" src="./td.png">
						<span>创建团队</span>
					</router-link>
				</li>
				<hr>
				<li>
					<router-link :to="{path:'sendProject',query:{teamId:list.teamId}}">
						<img class="icon" src="./cjxm.png">
						<span>创建项目</span>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="column">
			<ul>
				<li style="border:none;" @click="toAddress({path: '/modifyPassword'})">
					<img class="icon" src="./lock.png" style="width: 5%;display: inline-block;
					padding:0 0.6rem 0 0.5rem;}">
					<span>修改密码</span>
				</li>
				<hr>
				<li style="border:none;" @click="toAddress({path: '/useHelp'})">
					<img class="icon" src="./sybz.png">
					<span>使用帮助</span>
				</li>
			</ul>
		</div>
		<input class="logout" @click="logout()" type="button" value="退出登录">
		<footer class="foot">
	        <section @click="toAddress({path: '/teamIndex'})">
	            <img src="/static/footicon/shouye1.png">
	            <p>首页</p>
	        </section>
	        <section class="check" >
	            <img src="/static/footicon/team01.png">
	            <p>团队中心</p>
	        </section>
	    </footer>
	</div>
</template>

<script>
	export default {
	  	name: 'teamcenter',
	 	data () {
		    return {
		    	list:[]
		    }
	  	}, 
	  	mounted(){
            	this.getInfo()
	        },
	  	methods: {
        	toAddress(path){
                this.$router.push(path)
            },
           
            getInfo(){
            	let teamId = localStorage.getItem('userId')
            	this.$http.get('/api/private/detail',{
            		params:{
            			id:teamId
            		}
            	}).then(response=>{
            		let res=response.data
            		if(res.result == 0){
            			this.list = res.data
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
hr{
		height: 1px;
		border:none;
		background-color: #F2F2F2;
		margin:auto 1.5rem;
	}
	/*头部*/
.teamcenter{
	background-color: #F5F5F5;
	/*position: relative;*/
	width: 100%;
	/*height: 1000px;*/
	padding-bottom: 20%;
}
.topview{
	width: 90%;
	margin-left: 5%;
	background-color: #fff;
	border-radius: 0.5rem;
	text-align: center;
	/*position: relative;*/
	/*margin-top: 4rem;*/
	margin-top: -3rem;  
	box-shadow: 0px 0px 1rem #EFEFEF;
}
.topimge{
	width: 6rem;
	height: 6rem;
	/*top: 50px;*/
	margin:auto;
	position: relative;
	border-radius:3rem;
}
/*.topview img{
	width: 6rem;
	height: 6rem;
	top: 50px;
	margin:auto;
	position: relative;
}*/
.topview div{
	display: inline-block;
	width: 30%;
	margin:1rem auto;


} 
.topview p{
	font-size: 0.85rem;
}
.title{
	color: #AFAFAF;
}

.count{
	color: #54B9B7;
}

/*栏目列表*/
.column{
	margin:0.6rem 0;
	background-color: #fff;
	font-size: 1rem;
}
.column ul li a{
	color: #000;
	display: block;
}
.icon{
		width: 6%;
		display: inline-block;
		padding:0 0.6rem 0 0.5rem;
}
.column ul li span{
		vertical-align: middle;
}
.column ul li{
		padding: 1rem 0;
		margin: auto 0.8rem;
		/*border-bottom: 1px solid #ececec;*/
		position: relative;
}
.column img{
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
        width: 50%;
        text-align: center;
        color: #cbcbcb;
        float: left;
    }
    .foot section img{
        width: 18%;
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