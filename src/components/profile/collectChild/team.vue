<template>
<div class="team">
	<ul>
		<li v-for="item in teamlist">
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
</template>
<script>
	export default{

		name:'team',
		data(){
			return {
				teamlist:[]
			}
		},
		mounted(){
			this.getList()
		},
		methods:{
			getList(){
				var userId = localStorage.getItem('userId')
				
				this.$http.get('/api/private/getTeamByCollect',{
					params:{
						id:userId
					}
				}).then(response =>{
					let res = response.data
					if(res.result == 0){
						this.teamlist = res.data
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
.team{
	background:#F1F1F1;
	padding: 0.6rem 0;
	position:relative;
	height:100%;

}
.team ul li .hd{
	margin-bottom:0.5rem;
	font-size:1rem;
	margin-left:15%;
}
.team ul li p{
	margin:0.2rem 0;
	
}
.team ul li p span{
	margin-left:12%;
}
.team ul li{
	background:white;
	padding:0.5rem 0;
	border-radius:7px;
	margin-left:15%;
	margin-right: 2%;
	top: 5%;
	position:relative;
}
.team  ul li img{
	width:5.1rem;
	height:5.1rem;
	position:absolute;
	left: -12%;
	top:9%;
}
.team ul li .m1{
	display:flex;
	margin-left:12%;
}
.team ul li .mm1{
	width:33%;
	text-align: center;
}
.team ul li h3{
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