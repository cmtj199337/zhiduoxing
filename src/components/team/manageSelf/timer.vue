<template>
	<div class="timer">
		<headerTip message="志愿时长" goBack="true"></headerTip>
		<div class="header1">
			<ul>
				<li>姓名</li>
				<li style="text-indent: 2rem;">志愿时长</li>	
				<li style="text-align:right;">加入时间</li>		
			</ul>
		</div>
		<div class="header2"><!-- 
			<i><span class="tit"></span>团队名称:志多星团队</i> -->
			<ul>
				<li class="zz1"><img src="../tou1@2x.png" ><p>利好</p></li>
				<li><p>200小时</p></li>
				<li><p class="zz2">2017/06/06</p></li>
			</ul>
			<ul>
				<li class="zz1"><img src="../tou2@2x.png" ><p>张晓明</p></li>
				<li><p>200小时</p></li>
				<li><p class="zz2">2017/06/06</p></li>
			</ul>
			<ul>
				<li class="zz1"><img src="../tou1@2x.png" ><p>利好</p></li>
				<li><p>200小时</p></li>
				<li><p class="zz2">2017/06/06</p></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import headerTip from '../../../components/common/header/header.vue'
	export default{

		name:'timer',
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
	border-bottom:1px #EBEBEB solid; 
}
.header1 ul li{
	width:32%;
	text-align:center;
	padding:0.8rem 0;

}
.zz1{
	display:flex;
	margin-left:0.5rem;
}
.zz2{
	text-align:right;
}

.header2{
	width: 100%
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
	text-indent:0.5rem;
}
.header2 i{
	height: 2rem;
	line-height: 2rem;
	display: block;
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