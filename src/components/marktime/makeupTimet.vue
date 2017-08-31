<template>
	<div class="makeupTimet">
		<headerTip message="时长记录" goBack="true"></headerTip>
		<div class="header">
			<span style="width:10%;margin-left:0.5rem"><img src="./td.png"></span><span style="text-align:left">团队项目</span>
		</div>	
		<div class="main">
			<div class="m1">
				<ul>
					<li v-for="item in list">
						<img :src="item.projectIcon" class="touxiang">
						<div class="text">
							<h3>{{item.projectName}}</h3>
							<p v-if="item.projectStatus == '已结束'" class="passed">{{item.projectStatus}}</p>
							<p v-else-if="item.projectStatus == '进行中'" class="being">{{item.projectStatus}}</p>
						</div>
						<div class="anniu">
							<span><p class="btn">
								<router-link :to="{path:'durationApproval',query:{projectId:item.projectId}}">时长审批</router-link>
							</p></span>
							<span><p class="btn1">
								<router-link :to="{path:'durationTask',query:{projectId:item.projectId}}">团队补录</router-link>
							</p></span>
						</div>	
					</li>
				</ul>
			</div>
		</div>
	
	</div>
</template>
	<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'makeupTimet',
		components:{
	  		headerTip
	  	},
		data(){
			return {
				list:[],

			}
		},
		mounted(){
			this.$nextTick(function(){
				this.listView()
			})
		},
		methods:{
			toAddress(path){
                this.$router.push(path)
            },
            listView(){
            	this.$http.get('/api/private/getATTProject').then( response => {
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
.makeupTimet{
	background: #f5f5f5;
	height: 100%;
}
.header{
	padding:0.8rem 0;
	display:flex;
	border-bottom:1px;
	background:white;
}
.header img{
	width:58%;
}
.header span{
width:20%;

}
.main{	
	background: #F5F5F5;
	padding:0.2rem 0;
}
.m1{
	position:relative;
}
.m1 ul li{
	margin:0.6rem 0.5rem 0.5rem 2.3rem;
	background:white;
	border-radius:5px;
	position:relative;
}
.m1 ul li h3{
	margin-bottom: 1rem;
	overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.text{
	padding-top:0.8rem;
	position:relative;
	margin-left:2.4rem;
}
.anniu{
	position:relative;
	padding:1.2rem 0;
}
.anniu a{
	color:rgb(70, 184, 183);
}
.m1 ul li .touxiang{
	width:4.5rem;
	height:4.5rem;
	border-radius: 50%;
	position:absolute;
	left: -2.25rem;
	border-radius: 50%;
	top:8%;
}
.m1 ul li p{
	position:absolute;
}
.btn{
	position: absolute;
    top: 12%;
    left: 16%;
    font-size: 0.5rem;
    color: rgb(70, 184, 183);
    border:1px solid rgb(70, 184, 183);
    padding: 0.2rem 0.6rem;
    border-radius: 0.2rem;
}
.btn1{
	position: absolute;
    top: 12%;
    left: 48%;
    font-size: 0.5rem;
    color: rgb(70, 184, 183);
    border:1px solid rgb(70, 184, 183);
    padding: 0.2rem 0.6rem;
    border-radius: 0.2rem;
}
.being{
	position: absolute;
    right:2%;
    top: 40%;
    font-size: 0.5rem;
    color: rgb(70, 184, 183);
    border: 1px solid rgb(70, 184, 183);
    border-radius: 0.2rem;
    padding: 0 0.2rem;
}
.passed{
	position: absolute;
    right:2%;
    top: 40%;
    font-size: 0.5rem;
    color: #e5e5e5;
    border: 1px solid #e5e5e5;
    border-radius: 0.2rem;
    padding: 0 0.2rem;
}
</style>