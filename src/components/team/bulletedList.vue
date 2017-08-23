<template>
	<div class="bulletedList">
		<headerTip message="团队列表" goBack="true"></headerTip>
		<div class="main2">
			<ul>
				<li v-for="item in list" @click="toAddress('teamPresentation',item.teamId)">
					<img :src="item.logo">
					<p class="hd">{{item.name}}</p>
					<p class="two">
						<span class="s1"><b>{{item.serHour}}</b>小时</span>
						<span class="s2"><b>{{item.voNum}}</b>人</span>
						<span class="s3">{{item.manager}}</span>
					</p>
					<p class="three">
						<span class="s5">志愿总时长</span>
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
				this.$http.get('/api/private/allTeamDetailList',{
					params:{
						id:userId
					}
				}).then( response =>{
					let res = response.data
					if(res.result == 0){
						this.list = res.data
					}
				})
			},
			 toAddress(url,item){
		    	this.$router.push({path:url,query:{teamId:item}})
		    },
		}
	}
</script>
<style scoped>
.bulletedList{
	background:white;
	height:100%;
}

.main2 ul li h3{
	margin-bottom: 0.8rem;
	margin-left:4rem;
}
.main2{
	background:#F5F5F5;
	padding: 0.2rem 0;
	position:relative;
}
.main2 ul li .hd{
	margin-bottom:0.5rem;
	font-size:1rem;
	margin-left:12%;
}
.main2 ul li p{
	margin:0.2rem 0;
	
}
.main2 ul li p span{

}
.main2 ul li{
	background:white;
	padding:0.3rem 0;
	border-radius:7px;
	top: 5%;
	position:relative;
	margin:0.3rem 3% 0.3rem 12%;  
}
.main2  ul li img{
	width:4rem;
	height:4rem;
	border-radius:2rem;
	position:absolute;
	left: -11%;
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
		display:flex;
	}
	.two{
		display:flex;
	}
	.two span{
		width:100%;
	}
	.three span{
		width:33%;
	}
	.three .s5{
	margin-left:12%;
	}

.two .s1{
		margin-left:12%;
	
	}
	.two .s1 b{
		color:#4FBAB9;
	}
	.two .s2 b{
		color:#4FBAB9;
	}

</style>