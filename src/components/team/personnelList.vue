<template>
	<div class="personnelList">
		<headerTip message="志愿者列表" goBack="true"></headerTip>
		<div class="header1">
			<ul>
				<li>姓名</li>
				<li>志愿时长</li>	
				<li style="text-align:right;">加入时间</li>		
			</ul>
		</div>
		<div class="header2">
			<ul v-for="item in list">
				<li class="zz1"><img :src="item.icon" ><p>{{item.name}}</p></li>
				<li><p>{{item.serHour}}</p></li>
				<li><p class="zz2">{{item.crtDate}}</p></li>
			</ul>	
			
		</div>
	</div>
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'personnelList',
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
				this.$http.get('/api/private/allVoDetailList',{
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
.header1 ul{
	display: flex;
	border-bottom:1px #EBEBEB solid; 
}
.header1 ul li{
	width:32%;
	text-align:center;
	padding:0.8rem 0;

}
.zz1{
	display:flex;
}
.zz1 img{
	width:2rem;
	height:2rem;
	border-radius:1.1rem;
}
.zz2{
	text-align:right;
}

.header2{
	margin:0 0.5rem;
}
.header2 ul{
	display:flex;
	border-bottom:1px #EBEBEB solid; 

}
.header2 ul li{
	width:32%;
	text-align:center;
	padding:0.5rem 0;

}
.header2 ul li img{
	width:2.5rem;
	height:2.5rem;

}
.header2 p{
	line-height:2.5rem;
	margin-left:0.5rem;
}
</style>