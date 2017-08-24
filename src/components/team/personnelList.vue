<template>
	<div class="personnelList">
		<headerTip message="志愿者列表" goBack="true"></headerTip>
		<div class="header1">
			<ul>
				<li style="text-indent:-2rem">姓名</li>	
				<li style="text-align:right;">加入时间</li>		
			</ul>
		</div>
		<div class="header2" v-for="item in list">
		<i><span class="tit"></span>团队名称:{{item.teamName}}<em>({{item.length}}人)</em></i>
		<ul v-for="ite in item.voList">
				<li class="zz1"><img :src="ite.icon"><p>{{ite.nickName}}</p></li>
				<li><p class="zz2">{{ite.crtDate}}</p></li>
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
			
				this.$http.get('/api/private/selectVoByTeamId').then(response=>{
					let res=response.data
					console.log(res)
					if(res.result==0){
						this.list=res.data
						
					}
				})
			}
		}

	}
</script>
<style scoped>
.head{
	display:flex;
	padding:0.3rem 0;
}
.head li{
	width:47%;
	text-align:center;
	text-indent:-2.2rem;
}
.personnelList{
	background:white;
	height:100%;
}
.header1 ul{
	display: flex;
	border-bottom:1px #EBEBEB solid; 
}
.header1 ul li{
	width:47%;
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
	border-bottom:1px #F5F5F5 solid
}
.header2 ul{
	display:flex;
	border-bottom:1px #EBEBEB solid; 

}
.header2 ul li{
	width:48.5%;
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
.header2 i{
	height: 2rem;
	line-height: 2rem;
	display: block;
}
.header2 i em{
	float: right;
	padding-right: 0.5rem;
}
.tit{
	width: 0.5rem;
	height: 0.85rem;
	vertical-align: text-top;
	background: #43b7b6;
	display: inline-block;
	margin-right: 1rem
}
</style>