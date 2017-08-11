<template>
	<div class="detail">
		<div class="header2">
	      <h4 class="texttitle">
	      	<span>
	      		<img src="../t1.png">
	      	</span>团队信息
	      </h4>
	    </div>
		<div class="usertext">
			<span>名称：{{list.teamName}}</span>
		</div>
		<div class="usertext">
			<span>团队编号：{{list.teamId}}</span>
		</div>
		<div class="usertext">
			<span>团队口号：{{list.teamSlogan}}</span>
		</div>
		<div class="usertext">
			<span>上级团队：{{list.parentTeamName}}</span>
		</div>
		<div class="usertext">
			<span>团队总志愿时长：{{list.serverDuration}}小时</span>
		</div>
		<div class="usertext">
			<span>服务类别：{{list.serverType}}</span>
		</div>
		<div class="usertext">
			<span>团队类型：{{list.teamType}}</span>
		</div>
		<div class="usertext">
			<span>注册日期：{{list.registrationDate}}</span>
		</div>
		<div class="usertext">
			<span>团队管理员：{{list.teamManager}}</span>
		</div>
		<div class="usertext">
			<span>联系电话：{{list.contactNumber}}</span>
		</div>
		<div class="usertext">
			<span>团队地址地址：{{list.teamAddress}}</span>
		</div>
	    <div class="usertext">
	    	<p>团队成员列表：<span style="color:#43B7B5">{{list.volunteerNum}}人</span></p>
	    </div>

		<div class="touxiang">
			<img src="../touxiang1.png" class="img1" >
			<img src="../touxiang2.png" v-for="item in list.wXTeamVolunteerList">
		</div>
		<div class="kong2">
		</div>
		<footer class="foot">
			<span class="bm1"><img src="../shoucang.png">收藏</span>
			<span class="bm2"><img src="../fenxiang.png">分享</span>
			<span class="bm3"><img src="../baoming.png"><p class="bm">我要加入</p></span>
		</footer>
	</div>
</template>
<script>

	export default{

		name:'detail',
		components:{

	  	},
		data () {
		    return {
		    	list:[]		    
		    }
	  	},
	  	mounted(){
	  		this.getInfo()
	  	},
	  	methods:{
	  		getInfo(){
	  			let teamId = localStorage.getItem("userId");
	  			let userId = localStorage.getItem("userId");
	  			this.$http.get('api/public/getTeamDetail',{
	  				params:{
	  					teamId:teamId,
	  					userId:userId
	  				}
	  			}).then(response=>{
	  				let res = response.data
	  				console.log(res)
	  				if(res.result == 0){
	  					this.list = res.data
	  				}
	  			})
	  		}
	  	}

	}
</script>
<style scoped>
@import '../../../styles/usertext.css';
.usertext{
	margin:0rem 1rem;
	padding:0.8rem 0; 
	font-size: 0.8rem;
}
.detail{
	padding-bottom: 3rem;
}
.header{
	padding:0.4rem 0;
	background:#EAEAEA;
}
.header ul{
display:flex;
margin:0.1rem 0;
padding:0.5rem 0;
background:white;
text-align: center;
}
.header ul li{
width:33%;

}
.header ul p{
	color:#43B7B5;
}
	
 	.texttitle {
    font-size: 0.8rem;
    font-weight: normal;
    margin:0rem 1rem;
	padding:0.8rem 0; 
	border-bottom:1px #EAEAEA solid;
}
.kong2{
		background:#EAEAEA;
		padding: 0.3rem;
	}
.touxiang{
	position:relative;
	margin:0rem 1rem;
	padding:0.6rem 0; 

}
.touxiang .img1{
	margin-left:0.6rem;
}
.touxiang img{
	width:11%;
	display:inline;
	vertical-align: middle;
	margin-left:-1rem;
}
.foot{
	display:flex;
	text-align:center;
	width: 100%;
	position: fixed;
	bottom: 0;
	background: #fff;
}
.foot span{
	position:relative;
}
.bm1{
width:23%;
text-align:right;
margin:0.3rem 0; 

}
.bm2{
	width:23%;
	margin:0.3rem 0; 
}
.bm3{
	width:56%;
}
.bm3 img{
	width: 100%;
	height:100%;
}
.bm1 img{
	width:28%;
	margin-top:0.3rem;
	margin-left:70%;
}
.bm2 img{
	width:27%;
	margin-top:0.4rem;
	margin-left:38%;
}
.bm{
	color:white;
	position:absolute;
	top:39%;
	left:35%;
	font-size:0.9rem;
}
</style>