<template>
	<div class="personnelList">
		<headerTip message="项目人员列表" goBack="true"></headerTip>
		<div class="header1">
			<ul>
				<li>姓名</li>
				<li>补录时长</li>	
				<li style="text-align:right;">志愿时长</li>		
			</ul>
		</div>
		<div class="kong"></div>
		<div class="header2">
			<ul>
				<li class="zz1"><img src="./tou1@2x.png" ><p>利好</p></li>
				<li><p>2017/06/06</p></li>
				<li><p class="zz2">200小时</p></li>
			</ul>	
			<ul>
				<li class="zz1"><img src="./tou2@2x.png" ><p>张晓明</p></li>
				<li><p>2017/06/06</p></li>
				<li><p class="zz2">200小时</p></li>
			</ul>	
			<ul>
				<li class="zz1"><img src="./tou1@2x.png" ><p>利好</p></li>
				<li><p>2017/06/06</p></li>
				<li><p class="zz2">200小时</p></li>
			</ul>	
			<ul>
				<li class="zz1"><img src="./tou2@2x.png"><p>张晓明</p></li>
				<li><p>2017/06/06</p></li>
				<li><p class="zz2">200小时</p></li>
			</ul>	
			<ul>
				<li class="zz1"><img src="./tou1@2x.png" ><p>利好</p></li>
				<li><p>2017/06/06</p></li>
				<li><p class="zz2">200小时</p></li>
			</ul>	
			<ul>
				<li class="zz1"><img src="./tou2@2x.png" ><p>张晓明</p></li>
				<li><p>2017/06/06</p></li>
				<li><p class="zz2">200小时</p></li>
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
				
			}
		},

	}
</script>
<style scoped>
.header1 ul{
	display: flex;
}
.header1 ul li{
	width:32%;
	text-align:center;
	padding:0.5rem 0;

}
.zz1{
	display:flex;
}
.zz2{
	text-align:right;
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
.header2 ul li img{
	width:2.5rem;
	height:2.5rem;

}
.header2 p{
	line-height:2.5rem;
	margin-left:0.5rem;
}
</style>