<template>
	<div class="bulletedList">
		<headerTip message="团队列表" goBack="true"></headerTip>
		<div class="main2">
			<ul>
				<li v-for="item in list" @click="toAddress({path: '/teamDetails'})">
					<img :src="item.teamIcon">
					<p class="hd">{{item.teamName}}</p>
					<p class="two">
						<span class="s1"><b>{{item.serverDuration}}</b>小时</span>
						<span class="s2"><b>{{item.teamMember}}</b>人</span>
						<span class="s3">{{item.teamManager}}</span>
					</p>
					<p class="three">
						<span>志愿总时长</span>
						<span>团队人数</span>
						<span>团队管理员</span>
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{
		name:'projectList',
		components:{
	  		headerTip
	  	},
		data(){
			return {
				list:[]
			}
		},
		mounted(){
			this.teamList()
		},
		methods:{
			teamList(){
				var userId = localStorage.getItem('userId')
				this.$http.get('api/public/getMyTeam',{
					params:{
						id:userId
					}
				}).then( response =>{
					let res = response.data
					if(res.result == 0){
						this.list = res.data
					}
				})
			}
		}
	}
</script>
<style scoped>

.mm1 p{
	color:#BCBCBC;
}
.main2 ul li h3{
	margin-bottom: 0.8rem;
	margin-left:4rem;
}
.main2{
	background:#F1F1F1;
	padding: 0.2rem 0;
	position:relative;
}
.main2 ul li .hd{
	margin-bottom:0.5rem;
	font-size:1rem;
	margin-left:15%;
}
.main2 ul li p{
	margin:0.2rem 0;
	
}
.main2 ul li p span{
	margin-left:12%;
}
.main2 ul li{
	background:white;
	padding:0.5rem 0;
	border-radius:7px;
	top: 5%;
	position:relative;
	margin:0.6rem 3% 0.2rem 12%;  
}
.main2  ul li img{
	width:5.1rem;
	height:5.1rem;
	position:absolute;
	left: -13%;
	top:9%;
}
.main2 ul li .m1{
	display:flex;
	margin-left:12%;
}
.main2 ul li .mm1{
	width:33%;
	text-align: center;
}
.main2 ul li h3{
margin-bottom: 0.8rem;
margin-left:4rem;
}
	.three{
		color:#999999;
	}
.two .s1{
		margin-left:15%;
		

	}
	.two .s2{
		margin-left:18%;
		
	}
	.two .s1 b{
		color:#4FBAB9;
	}
	.two .s2 b{
		color:#4FBAB9;
	}

	.two .s3{
		margin-left:18%;
	}
</style>