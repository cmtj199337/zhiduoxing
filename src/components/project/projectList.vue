<template>
	<div class="projectList">
		<headerTip message="项目列表" goBack="true"></headerTip>
		<div class="main" v-for="item in list">
			<span>
			<img :src="item.picUrl" class="bg">
			<img src="./teb2.png" class="bg2">
			<ul class="te">
			<li class="cc1">{{item.proName}}</li>
			</ul>
			<ul class="te1">
			<li class="cc1">{{item.provinceName}}{{item.cityName}}</li>
			<li class="cc2">{{item.planNum}}/{{item.actualNum}}</li>
			<li class="cc3">招募中</li>
			</ul>
			<ul class="te2">
			<li class="cc1">项目时间</li>
			<li class="cc4">{{item.startDate}}-{{item.endDate}}</li>
			</ul>
			</span>
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
			this.getInfo()
		},
		methods:{
			getInfo(){
				let userId=localStorage.getItem('userId')
				this.$http.get('/api/private/allProjectDetailList',{
					params:{
						id:userId
					}
				}).then(response=>{
					let res=response.data
					if(res.result==0){
						this.list=res.data
					}
				})
			}
		}

	}
</script>
<style scoped>
.bg{
	height:8rem;
	border-top-left-radius:0.3rem;
	border-top-right-radius:0.3rem;
}
.bg2{
	border-bottom-left-radius:0.3rem;
	border-bottom-right-radius:0.3rem;
}
.main{
	background:#F5F5F5;
	padding:0.2rem;
	
}
.main span{
	margin:0.4rem;
	display:inline-block;
	position:relative;
}
.te{
	position:absolute;
	width:100%;
	bottom:40%;

}
.te li{
	width: 50%;
	color:white
}
.te1{
	display:flex;
	position:absolute;
	width:100%;
	bottom:23%;

}
.te1 li{
	width: 50%;
	color:white
}
.te2{
	display:flex;
	position:absolute;
	width:100%;
	bottom:5%;

}
.te2 li{
	width:90%;

}
.cc1{
	text-align:left;
}
.cc2{
	text-align:center;
}
.cc3{
	text-align:right;
}
.cc4{
	text-align:right;
	color:#666
}
</style>