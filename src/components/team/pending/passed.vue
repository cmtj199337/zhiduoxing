<template>
	<div class="passed">
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
				</router-link>
				<p>{{item.nickName}}</p>
				</li>
				<li><p>{{item.crtDate}}</p></li>
				<li @click="jyong(item.voId,item.forStatus)">
				<p class="zz1">
				{{item.actionName}}</p></li>
			</ul>	
			
		</div>
	</div>
</template>
<script>
	export default{

		name:'passed',
		data(){
			return {
				list:[],
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.getInfo()
			})
		},
		methods:{
			getInfo(){
            	this.$http.get('/api/teamHub/private/selectVoByTeamId',{
            		params:{
            			status:0
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
            	return
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
            	return
            	}
            	
            }
		}
	}
</script>
<style scoped>
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
.header2 ul li{
	width:32%;
	text-align:center;
	padding:0.5rem 0;

}
.header2 ul li a img{
	width:2.5rem;
	height:2.5rem;
	vertical-align:middle;
	display:inline;
	border-radius:1.25rem;

}
.header2 ul li p{
	line-height:2.2rem;
	margin-left: 0.6rem;

}
.header2 ul li .zz1{
	width:4rem;
	height:1.6rem;
	background:white;
	color:#959595;
	line-height:1.6rem;
	border-radius:5px;
	margin-left:55%;
	margin-top:6%;
	border:1px #959595 solid ;
}
.header2 ul li .zz2{
	position:absolute;
	width:4rem;
	height:1.6rem;
	background:#43B7B6;
	color:white;
	line-height:1.6rem;
	border-radius:5px;
	margin-left:58%;
	margin-top:6%
}
</style>