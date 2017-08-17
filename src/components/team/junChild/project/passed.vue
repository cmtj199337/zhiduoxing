<template>
<div class="pass">
	<div class="main" v-for="item in list">
		<router-link :to="{path:'pDetail',query:{projectId:item.projectId}}">
			<span>
				<img src="./banner@2x.png" >
				<img src="./teb2.png" >
				<ul class="te">
				<li class="cc1">{{item.projectName}}</li>
				</ul>
				<ul class="te1">
				<li class="cc1">{{item.projectAddress}}</li>
				<li class="cc2">{{item.yotNum}}/{{item.honNum}}</li>
				<li class="cc3">{{item.projectStatus}}</li>
				</ul>
				<ul class="te2">
				<li class="cc1">项目时间</li>
				<li class="cc4">{{item.projectTime}}</li>
				</ul>
			</span>
		</router-link>
	</div>
</div>
</template>
<script>
	export default{
		name:'pass',
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.listView(2)
			})
		},
		methods:{
			listView(status){
				this.$http.get('/api/private/getLowTeamPList',{
					params:{
						projectStatus:status
					}
				}).then( response => {
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
.main{
	background:#F5F5F5;
	padding:0.2rem;
	
}
.main a{
	color: #000;
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