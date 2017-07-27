<template>
	<div class="volunteerList">
		<headerTip message="志愿者列表" goBack="true"></headerTip>
		<div class="header1">
			<ul>
				<li>姓名</li>
				<li>补录时长</li>	
				<li><p class="cc2">操作</p></li>		
			</ul>
		</div>
		<div class="kong"></div>
		<div class="header2">
			<ul>
				<li class="cc1"><img src="./tou1@2x.png" ><p>利好</p></li>
				<li><p>3小时</p></li>
				<li><p class="zz1">禁用</p></li>
			</ul>	
			<ul>
				<li class="cc1"><img src="./tou2@2x.png" ><p>张晓明</p></li>
				<li><p>3小时</p></li>
				<li><p class="zz2">解禁</p></li>
			</ul>	
			<ul>
				<li class="cc1"><img src="./tou1@2x.png" ><p>张大大</p></li>
				<li><p>3小时</p></li>
				<li><p class="zz1">禁用</p></li>
			</ul>	
			<ul>
				<li class="cc1"><img src="./tou2@2x.png"><p>李太白</p></li>
				<li><p>3小时</p></li>
				<li><p class="zz2">解禁</p></li>
			</ul>	
			<ul>
				<li class="cc1"><img src="./tou1@2x.png" ><p>张大大</p></li>
				<li><p>3小时</p></li>
				<li><p class="zz1">禁用</p></li>
			</ul>	
			<ul>
				<li class="cc1"><img src="./tou2@2x.png" ><p>李太白</p></li>
				<li><p>3小时</p></li>
				<li><p class="zz2">解禁</p></li>
			</ul>	
		</div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'volunteerList',
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
.cc1{
	display:flex;
}
.cc2{
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
.header2 ul li p{
	line-height:2.2rem;
	margin-left: 0.6rem;

}
.header2 ul li .zz1{
	width:4rem;
	height:1.6rem;
	background:white;
	color:#E0E0E0;
	line-height:1.6rem;
	border-radius:5px;
	margin-left:58%;
	margin-top:6%
}
.header2 ul li .zz2{
	width:4rem;
	height:1.6rem;
	background:#80d5e1;
	color:white;
	line-height:1.6rem;
	border-radius:5px;
	margin-left:58%;
	margin-top:6%;
}
</style>