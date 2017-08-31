<template>
	<div class="personnelListAll">
		<headerTip message="志愿时长" goBack="true"></headerTip>
		<div class="header1">
			<ul>
				<li>姓名</li>
				<li>志愿时长</li>
				<li>加入时间</li>		
			</ul>
		</div>
		<div class="header2" v-for="item in list">
			<i><span class="tit"></span>团队名称:{{item.teamName}}<em>({{item.allSerHour}}小时)</em></i>
			<ul v-for="ite in item.voList">
				<li class="zz1"><img :src="ite.icon" ><p>{{ite.nickName}}</p></li>
				<li><p>{{ite.serHour}}小时</p></li>
				<li><p>{{ite.crtDate}}</p></li>
			</ul>	
		</div>
	</div>
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'personnelListAll',
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
				this.$http.get('/api/private/sumAllTeamSerHour').then(response=>{
					let res =response.data
					if(res.result==0){
						this.list=res.data

					}
				})
			}
		}

	}
</script>
<style scoped>
.personnelListAll{
	background:white;
}
.header1 ul{
	display: flex;
	border-bottom:1px #EBEBEB solid;
	padding: 0 0.5rem;
}
.header1 ul li{
	width:33%;
	text-align:left;
	padding:0.8rem 0;
	text-align:center;
}
.header1 ul li:nth-child(2){
	text-indent:2rem ;
}
.header1 ul li:nth-child(3){
	text-align: right;
}
.zz1{
	display:flex;
}
.header2{
}
.header2 ul{
	display:flex;
	border-bottom:1px #EBEBEB solid; 
	padding: 0 0.5rem
}
.header2 ul li{
	width:33%;
	text-align:center;
	padding:0.5rem 0;
}
.header2 ul li:nth-child(2){
	text-align: center;
	text-indent:1rem;
}
.header2 ul li:nth-child(3){
	text-align: right;
	
}
.header2 ul li img{
	width:2.5rem;
	height:2.5rem;
	border-radius: 50%;
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