<template>
	<div class="teamIntroduction">
		<headerTip message="团队详情" goBack="true"></headerTip>
		<swipe v-model="index" style="text-align:center;">
		 	<swipe-item><img src="./banner@2x.png" alt=""></swipe-item>
		 	<swipe-item><img src="./banner@2x.png" alt=""></swipe-item>
		 	<swipe-item><img src="./banner@2x.png" alt=""></swipe-item>
		</swipe>
		<div class="kong"></div>

		<div class="header1">
        	<h4 class="texttitle"><span><img src="./zil@2x.png"></span>团队信息</h4>
    	</div>
		<div class="usertext">
			<span>名称：{{info.teamName}}</span>
		</div>
		<div class="usertext">
			<span>团队编号：{{info.teamId}}</span>
		</div>
		<div class="usertext">
			<span>团队口号：{{info.teamSlogan}}</span>
		</div>
		<div class="usertext">
			<span>上级团队：{{info.parentTeamName}}</span>
		</div>
		<div class="usertext">
			<span>团队总志愿时长：{{info.serverDuration}}</span>
		</div>
		<div class="usertext">
			<span>服务类别：{{info.serverType}}</span>
		</div>
		<div class="usertext">
			<span>团队类型：{{info.teamType}}</span>
		</div>
		<div class="usertext">
			<span>注册日期：{{info.registrationDate}}</span>
		</div>
		<div class="usertext">
			<span>团队管理员：{{info.teamManager}}</span>
		</div>
		<div class="usertext">
			<span>联系电话：{{info.contactNumber}}</span>
		</div>
		<div class="usertext">
			<span>团队地址：{{info.teamAddress}}</span>
		</div>
		
        <div class="end">
			<ul>
				<li @click="assess(2)"><span><img src="./tongg@2x.png">审核通过</span></li>
				<li @click="assess(3)"><span><img src="./butongg@2x.png">审核不通过</span></li>
			</ul>
		</div>
	</div>
</template>
<script>
import{ Swipe,SwipeItem}from'c-swipe';
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'teamIntroduction',
		components:{
			Swipe,
			SwipeItem,
	  		headerTip
	  	},
		data(){
			return {
				index:0,
				info:[]
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.getInfo()
			})
		},
		methods:{
			getInfo(){
				this.$http.get('/api/public/getTeamDetail',{
					params:{
						teamId:this.$route.query.teamId
					}
				}).then( response => {
					let res = response.data
					if(res.result == 0){
						this.info = res.data
					}
				})
			},
			assess(way){
				this.$http.get('/api/private/updateTeamStatus',{
					params:{
						status:way,
						teamIds:this.info.teamId
					}
				}).then( response => {
					let res = response.data
					if(res.result == 0){
						this.$message.success("审核成功")
					}
				})
			}
		}
	}
</script>
<style scoped>
@import '../../styles/usertext.css';
@import '../../styles/swipe.css';
span{
	font-size:0.85rem;
}
.usertext input{
		margin: 0;
		width: 100%;
	}
.usertext{
	margin:0 0.6rem;
	padding:0.6rem 0;
	line-height:1.8rem;
}
.header1{
    border-bottom: 1px rgba(238, 238, 244, 0.5) solid;
}
.header2{
    border-bottom: 1px rgba(238, 238, 244, 0.5) solid;
}
.header  span p{
		font-size: 1.2rem;
	}
.usertext a{
	border: 0;
	width: 100%;
	height: 2.5rem;
	line-height: 2.5rem;
	font-size: 1rem;
	display: inline-block;
	color: #333;
	text-indent: 0;
	position: relative;
	}
.kong{
	background:#f6f6f9;
	padding: 0.4rem;
	}
	
.usertextend textarea{
	border: none; 
	padding: 2.5rem 0;
	width: 100%;

	}
.next{
	border:none;
	border-radius:7px;
	background: #43b7b6;
	color: white;
	font-size: 1.2rem;
	width:60%;
	height:2rem;
	}
.end{
	width: 100%;
	position: fixed;
	bottom: 0;
	display: block;
	background: #fff;
}
.end ul {
	display:flex;
}
.end ul li{
	width:50%;
	text-align:center;
	border-right:1px #0000001a solid;
	border-bottom :1px #0000001a solid;
	padding:0.7rem 0;
	font-size:0.85rem;

}
.end ul li span img{
	width:13%;
	display:inline;
	vertical-align:middle;
	margin-right:0.3rem;
}
.teamIntroduction{
	padding-bottom:20%;
}
</style>