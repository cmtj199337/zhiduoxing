<template>
	<div class="project">
		<span class="xm1" v-for="item in projectList">
			<img src="../xiangm.png" >
			<img src="../teb2.png" >
			<img src="../quan.png" class="p1">
			<img src="../xin.png" class="p2">
			<img src="../quan.png" class="p3">
			<img src="../baoxian.png" class="p4">
			<ul class="te">
				<li class="hd">{{item.projectAddress}}</li>
				<li style="margin-left:0.5rem;">50/100</li>
				<li style="text-align:right;">待启动</li>
			</ul>
			<ul class="te2">
				<li>{{item.projectName}}</li>
				<li style="text-align:right;color:#666">{{item.projectTime}}</li>
			</ul>
		</span>
		<span class="xm1">
			<img src="../xiangm.png" >
			<img src="../teb2.png" >
			<img src="../quan.png" class="p1">
			<img src="../xin2.png" class="p2">
			<img src="../quan.png" class="p3">
			<img src="../baoxian.png" class="p4">
			<ul class="te">
				<li>北京市朝阳区</li>
				<li style="margin-left:0.5rem;">50/100</li>
				<li style="text-align:right;" >待启动</li>
			</ul>
			<ul class="te2">
				<li>智多星项目名称</li>
				<li style="text-align:right;color:#666">2017/05/02-2017/05/02</li>
			</ul>
		</span>
	</div>
</template>
<script>
	export default{
		name:'project',
		data(){
			return {
				projectList:[]
			}
		},
		mounted(){
			this.getList();
		},
		methods:{
			getList(){
				var userId = localStorage.getItem('userId')
				
				this.$http.get('/api/private/getProjectByCollect',{
					params:{
						id:userId
					}
				}).then(response =>{
					let res = response.data
					if(res.result == 0){
						this.projectList = res.data
					}
				})
			}
		}
	}
</script>
<style scoped>
.project{
	background:#F5F5F5;
	padding:0.2rem;
	
}
.project span{
	margin:0.4rem;
	display:inline-block;
	position:relative;
}
.te{
	display:flex;
	position:absolute;
	width:100%;
	bottom:23%;
	margin:0rem;

}
.te .hd{
	text-align:center;
}
.te li{
	width:32%;
	color:white;
	text-align:center;
}
.te2{
	display:flex;
	position:absolute;
	width:100%;
	bottom:5%;

}
.te2 li{
	width: 45%;
	margin-left:3%

}
.xm1{
	position:relative;
}
.p1{
	width:9%;
	position:absolute;
	top:6%;
	left:3%;

}
.p2{
	width:6%;
	position:absolute;
	top:10%;
	left:4.5%;
}
.p3{
	width:9%;
	position:absolute;
	top:6%;
	right:3%;
}
.p4{
	width:5%;
	position:absolute;
	top:10%;
	right:5%;
}
	
</style>