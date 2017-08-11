<template>
	<div class="myStarcoin">
		<headerTip message="我的星币" goBack="true"></headerTip>
		<div class="header">
			<ul>
				<li>星币总数</li>
				<li class="number">{{list.sumMoney}}</li>
			</ul>
		</div>
		<div class="title">
			<p>星币明细</p>
		</div>
		<div class="main">
			<ul v-for="item in list.wxPointDetailDtoList">
				<li>{{item.moneyOrgin}}</li>
				<li><img src="./xingbi.png" class="tu"><span class="nb">{{item.changeMoney}}</span></li>
				<li>{{item.getTime}}</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'myStarcoin',
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
				let userid=localStorage.getItem("userId");
				this.$http.get('/api/private/getPointDetail',{
					params:{
						id:userid
					}
				}).then(response=>{
					let res = response.data
	  				console.log(res)
	  				if(res.result == 0){
	  					this.list = res.data
	  				}
	  			})
			}
		}

	}
</script>
<style scoped>
p{
	font-size:0.85rem;
}
.header ul{
	display:flex;

}
.header ul li{
	width:32%;
	text-align:center;
	font-size:0.85rem;
	padding:1rem 0;
}
.header ul .number{
	color:red;
	font-size:2.2rem;
}
.title{
	padding:0.6rem;
	background:#F5F5F5;
}
.main ul{
	display:flex;
	border-bottom:1px #F5F5F5 solid;
	margin:0 0.6rem;
}
.main ul li{
	width:32%;
	text-align:center;
	padding:0.8rem 0;
	font-size:0.85rem;
}
.main ul li .tu{
	display:inline;
	vertical-align:middle;
	width:15%;
}
.main ul li .nb{
	margin-left:0.2rem;
	color:red;
	
}
</style>
