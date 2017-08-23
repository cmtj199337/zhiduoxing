<template>
  <div class="personalLength">
   <headerTip message="补录时长" goBack="true"></headerTip>
	<div class="main">
		<div class="header">
			<img :src="info.projectIcon">
			<p>
				<span class="tit">{{info.projectName}}</span>
				<span v-if="info.projectStatus == '已结束'" class="passed">{{info.projectStatus}}</span>
				<span v-else-if="info.projectStatus == '进行中'" class="being">{{info.projectStatus}}</span>
			</p> 
			<p><span style="font-size:0.8rem;color:#CCCCCC">志愿总时长</span>
				<span style="color:#77CBCA">{{info.serverDuration}}</span>小时</p>
		</div>
	</div>
	<div class="texts">
		<h4><span>日期</span><span>志愿时长</span><span>状态</span></h4>
		<ul>
			<li v-for="item in list">
				<p>{{item.signInDate}}</p>
				<p>{{item.serverTime}}</p>
				<p v-if="item.status == 0" style="color: rgb(119, 203, 202)">补时审批</p>
				<p v-else-if="item.status == 1">补时成功</p>
				<p v-else-if="item.status == 2" style="color: rgb(255, 170, 61)">补时失败</p>
				<p v-else-if="item.status == 3">打卡签到</p>
			</li>
		</ul>
	</div>
	<div class="t"><p><router-link :to="{path:'informationFill',query:{projectId:projectId}}">补录时长</router-link></p></div>
	<!-- 弹框 -->
	<div class="overlay" v-show="isShow"></div>
	<div class="pop_up" v-show="isShow">
		<img src="./ku.png">
		<h5>补时失败</h5>
		<p><span>2017年2月2日</span>3小时</p>
		<i>驳回理由：补录时间多了一小时，重新提交时长申请</i>
	</div> 	
  </div> 
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'personalLength',
	  	components:{
	  		headerTip
	  	}, 
	 	data () {
		    return {
		    	isShow:false,
		    	info:[],
		    	list:[],
				projectId:''
		    }
	  	},
	  	mounted(){
	  		this.getList()
	  	},
	  	methods:{
			toAddress(path){
                this.$router.push(path)
            },
            getList(){
            	this.$http.get('/api/private/getRecord',{
            		params:{
            			projectId:this.$route.query.projectId
            		}
            	}).then( response =>{
            		let res = response.data
            		if(res.result == 0){
            			this.info = res.data
            			this.list = res.data.wxatRecordDetailDtoList

						this.projectId = res.data.projectId
            		}
            	})
            }
		}
	}
</script>

<style scoped>
p{
	font-size:0.85rem;
}
.main{
	background:#F5F5F5;
	padding:0.2rem 0;
}
.header{
	margin: 0.6rem 0.6rem 0.6rem 2rem;
	background:white;
	position:relative;
	border-radius:5px;
	padding:0.55rem 0;
}
.header p .ac{
	border:1px  #46B8B7 solid;
	border-radius:5px;
	color:#46B8B7;
	margin-left:0.5rem;
}
.header p{
	margin:0.6rem 0;
	margin-left:2.7rem;
}
.t1{
	display:flex;
	padding:0.2rem 0;
	border-bottom:1px solid rgba(235,234,234,0.48);
}
.t1 p{
	width:33.3%;
	text-align:center;
	color: #757575;
}
.tit{
	width: 70%;
	display: inline-block;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
h1 {text-align:center;}
.header img{
	width:3.5rem;
	height:3.5rem;
	border-radius:50%; 
	position:absolute;
	top:11.5%; 
	left:-2rem; 
}
.texts{
	background: #FFFFFF;
	padding:0 0.8rem;
}
.texts h4{
	font-weight: normal;
	font-size: 0.85rem;
	color: #757575;
	height: 3rem;
	line-height: 3rem;
	border-bottom: 1px solid #f5f5f5;
}
.texts h4 span{
	width: 33.33%;
	display: inline-block;
	text-align: center;
}
.texts ul li{
	font-size: 0.85rem;
	color: #757575;
	height: 3rem;
	line-height: 3rem;
	border-bottom: 1px solid #f5f5f5;
	display: flex;
}
.texts ul li p{
	width: 33.33%;
	display: inline-block;
	text-align: center;
}
.ing{color: #77CBCA}
.fail{color:#FFAA3D;}

.t p{
	text-align:center; 
}
.t a{
	color:#4CBAB8; 
	font-size:1rem;
}
.t{
	background: #FFFFFF;	
	padding:1.2rem 0;
	line-height:1.2rem;
	position:fixed;
	width:100%;
	bottom:0;
	border-top:3px #F6F6F6 solid;
}
.overlay{
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left:0;
	background: rgba(0,0,0,0.5);
}
.pop_up{
	width: 20rem;
	position: fixed;
	top: 30%;
	left: 0;
	right: 0;
	margin: auto;
	z-index: 11;
	background: #fff;
	border-radius: 0.4rem;
	padding: 1rem;
	text-align: center;
}
.pop_up img{
	width:3rem;
	border:0.5rem solid #fff;
	border-radius: 50%;
	position: absolute;
	top: -1.5rem;
}
.pop_up h5{
	font-size: 1.2rem;
	font-weight: normal;
}
.pop_up p{
	font-size: 1rem;
	margin:0.5rem 0 1rem 0;
}
.pop_up i{
	color: gray;
	font-size: 1rem;
	width: 76%;
	display: inline-block;
	margin: 0 auto;
}
.being{
	position: absolute;
    top: 19%;
    right: 3%;
    font-size: 0.6rem;
    color: rgb(70, 184, 183);
    border: 1px solid rgb(70, 184, 183);
    border-radius: 0.2rem;
    padding: 0 0.2rem;
}
.passed{
	position: absolute;
    top: 19%;
    right:3%;
    font-size: 0.6rem;
    color: #e5e5e5;
    border: 1px solid #e5e5e5;
    border-radius: 0.2rem;
    padding: 0 0.2rem;
}
</style>

