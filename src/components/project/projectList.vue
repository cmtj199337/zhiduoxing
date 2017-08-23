<template>
	<div class="projectList">
		<headerTip message="项目列表" goBack="true"></headerTip>
		<div class="project">
			<span class="xm1" v-for="item in list">
				<a href="javascript:;" @click="toAddress('myprojectDetails',item.proId)">
					<div class="bg">
						<img src="./banner.png">
						<ul class="name"><li>{{item.proName}}</li></ul>
						<ul class="info">
							<li>{{item.provinceName}}{{item.cityName}}</li>
							<li>{{item.planNum}}/{{item.actualNum}}</li>
							<li>{{item.proStatus}}</li>
						</ul>
			
					</div>
					<ul class="te2 clearfix">
						<li>项目时间</li>
						<li style="text-align:right;color:#666">{{item.startDate}}-{{item.endDate}}</li>
					</ul>
				</a>
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
				this.$http.get('/api/private/allProjectDetailList').then(response=>{
					let res=response.data
					if(res.result==0){
						this.list=res.data
					}
				})
			},
			toAddress(url,item){
		    	this.$router.push({path:url,query:{projectId:item}})
		    }

		}

	}
</script>
<style scoped>
.project span{
    width: 96%;
    margin: 2%;
    display: inline-block;
    position: relative;
    box-shadow: 0px 1px 3px #ccc;
    border-radius: 0.4rem;
}
.bg{
	width: 100%;
	height: 8.6rem;
	position: relative;
}
.bg .name{
	position:absolute;
	bottom:1.5rem;
	left:0.5rem;
	color:white;
}
.bg img{
	border-top-left-radius:0.3rem;
	border-top-right-radius:0.3rem;
	height:100%;
}
.xm1 a{color: #000;}
.info{
	width: 96%;
	position: absolute;
	bottom: 0.2rem;
	color: #fff;
	display: flex;
	padding: 0 2%;
	justify-content:space-between;
}
.te2{
	padding:0.6rem 2%;
	background: #fff;
	border-radius: 0.3rem
}
.te2 li{
	width: 50%;
	float: left;
	line-height: 1;
}
.icon{
	width: 100%;
	position: absolute;
	top: 9%;
}
.icon dd:first-child{
	position: absolute;
	left:3%;
	width: 2rem;
	height:2rem;
	border-radius: 50%;
	background: rgba(0,0,0,0.3)
}
.icon dd:last-child{
	position: absolute;
	right:3%;
	width: 2rem;
	height:2rem;
	border-radius: 50%;
	background: rgba(0,0,0,0.3)
}
.icon dd img{
	width: 1.2rem;
    margin: 0 auto;
    margin-top: 0.4rem;
}
.active{
	color: #43B7B5;
    border-bottom: 3px solid #43B7B5;
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