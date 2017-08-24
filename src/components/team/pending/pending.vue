<template>
	<div class="pending">

		<div class="header1">
			<p>
				<span>姓名</span>
				<span>加入时间</span>	
				<span style="width:28%;text-align:right">操作</span>		
			</p>
		</div>
		<div class="kong"></div>
		<div class="header2">
			<ul v-for="item in list">
				<li style="display:flex;">
					<router-link :to="{path:'../personalData',query:{voId:item.voId}}">
					<img :src="item.icon" >
				</router-link><p>{{item.nickName}}</p></li>
				<li><p>{{item.crtDate}}</p></li>
				<li @click="jyong(item.voId,item.forStatus)" class="xx">
				<p :class="[item.forStatus == 1?'active':'']">
				{{item.actionName}}</p></li>
			</ul>	
		
		</div>
	</div>
</template>
<script>
	export default{

		name:'pending',
		data(){
			return {
				list:[],
			}
		},
		mounted(){
			this.getInfo()
		},
		methods:{
			getInfo(){
            	this.$http.get('/api/teamHub/private/selectVoByTeamId',{
            		params:{
            			status:4
            		}
            	}).then(response=>{
            		let res= response.data
            		if(res.result==0){
            			this.list=res.data
            		}
            	})
            },
            jyong(id,forStatus){
            	if(forStatus=='0'){
            		
            		this.$http.get('/api/teamHub/private/unForbiddenVo',{
            		params:{
            			voId:id,
            			status:1
            		}
            	}).then(response=>{
            		let res= response.data
            		if(res.result==0){
            			
        				this.$router.go(0)
            		}
            	})
            	
            	}else{
            		this.$http.get('/api/teamHub/private/unForbiddenVo',{
            		params:{
            			voId:id,
            			status:0
            		}
            	}).then(response=>{
            		let res= response.data
            		if(res.result==0){
        				this.$router.go(0)
            		}
            	})
            	
            	}
            	
            }
		}

	}
</script>
<style scoped>
.active{
	position:absolute;
	background:#43B7B5;
	width:4rem;
	height:1.8rem;
	border-radius:0.3rem;
	color:white;

}

.pending{
	background:white;
	height:100%;
}
.header1 p{
	display: flex;
}
.header1 p span{
	width:32%;
	text-align:center;
	padding:0.5rem 0;

}
.kong{
	height:0.8rem;
	background:#0000001a;
}
.header2{
	margin:0 0.5rem;
}
.header2 ul{
	display:flex;
	border-bottom:1px #0000001a solid; 

}
.header2 ul .xx{
	padding:0.5rem 0;
}
.header2 ul .xx p{
	margin-left:3.8rem;
	line-height:1.8rem;
	margin-top:0.2rem;
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
.header2 ul li p{
	line-height:2.2rem;
	margin-left: 0.6rem;

}
</style>