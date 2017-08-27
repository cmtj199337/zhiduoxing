<template>
<div class="myCertificate">
<headerTip message="我的证书" goBack="true"></headerTip>
<img src="./bgg.png" class="bg">
<div class="main">
	<p class="header">志多星注册志愿服务证书<img src="./chenggong.png"></p>
	<p ><img :src="info.volunteerLogo" class="header2"></p>
	<p style="color:#2C2C2C">{{info.nickName}}</p>
	<p class="number">证书编号：{{info.volunteerNo}}</p>
	<p>{{info.registerDate | formatDate}}</p>
	<p>注册成为志多星志愿者</p>
	<p class="number">截止{{info.nowDate | formatDate}}</p>
	<ul class="header3">
		<li>累计服务次数</li>
		<li>累计服务时长</li>
	</ul>
	<ul class="header4">
		<li>{{info.serverTimes}}次</li>
		<li>{{info.serverTime}}小时</li>
	</ul>
	<p class="end">认证机构：和众泽益志愿者服务中心<img src="./yinzhang.png"></p>
</div>
</div>	
</template>
<script>
import headerTip from '../../components/common/header/header.vue'

export default{
	name:'myCertificate',
	components:{
		headerTip
	},
	data(){
		return{
			info:[]
		}
	},
	filters:{
	    formatDate(value){
	      	return value.substr(0,4)+'年'+value.substr(4,2)+'月'+value.substr(6,2)+'日'
	    }
  	},
	mounted(){
		this.$nextTick(function(){
			this.getInfo()
		})
	},
	methods:{
		getInfo(){
			this.$http.post('/api/private/getMyCertificate').then(response => {
				let res = response.data
				if(res.result == 0){
					this.info = res.data
				}
			})
		}
	}
}
</script>

<style scoped>
.myCertificate{
	background:#43B7B5;
	height:100%;
	width:100%;
	position:relative;
}
.bg{
	width:90%;
	height:80%;
	margin:7% auto; 
}
.main{
	position:absolute;
	width:100%;
	height:65%;
	top:20%;

}
.main p{
	text-align:center;
	color:#666666;
}
.main .header{
	color:#43B7B5;
	font-size:1rem;

	margin:4%  0;
	position:relative; 
}
.header2{
	width:15%;
	margin:3% auto; 
	border-radius: 50%;
}
.header img{
	position:absolute;
	width:20%;
	right:21%;
	top:-40%;
}
.number{
	margin:3% 0; 
}
.header3{
	display:flex;
	width:60%;
	margin:0 auto;
}
.header3 li{
	width:50%;
	text-align:center;
	margin:3% 0; 
}
.header4{
	display:flex;
	width:60%;
	margin:0 auto;
}
.header4 li{
	width:50%;
	text-align:center;
	font-size:1.2rem;
	color:#43B7B5;
	font-weight:550;
}
.main .end{
	color:#CBCBCB;
	font-size:0.75rem;
	margin-top:10%;
	margin-bottom:8%;
	position:relative;
}
.end img{
	width:19%;
	right:18%;
	bottom:-190%;
	position:absolute;
}

	
</style>
