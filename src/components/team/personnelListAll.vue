<template>
	<div class="personnelListAll">
		<headerTip message="志愿者列表" goBack="true"></headerTip>
		<div class="header1">
			<ul>
				<li>姓名</li>
				<li>加入时间</li>		
			</ul>
		</div>
		<div class="header2">
			<i><span class="tit"></span>团队名称:志多星团队<em>(6人)</em></i>
			<ul>
				<li class="zz1"><img src="./tou1@2x.png" ><p>利好</p></li>
				<li><p class="zz2">2017/06/06</p></li>
			</ul>	
			<ul>
				<li class="zz1"><img src="./tou2@2x.png" ><p>张晓明</p></li>
				<li><p class="zz2">2017/06/06</p></li>
			</ul>	
			<ul>
				<li class="zz1"><img src="./tou1@2x.png" ><p>利好</p></li>
				<li><p class="zz2">2017/06/06</p></li>
			</ul>	
			<ul>
				<li class="zz1"><img src="./tou2@2x.png"><p>张晓明</p></li>
				<li><p class="zz2">2017/06/06</p></li>
			</ul>	
			<ul>
				<li class="zz1"><img src="./tou1@2x.png" ><p>利好</p></li>
				<li><p class="zz2">2017/06/06</p></li>
			</ul>	
			<ul>
				<li class="zz1"><img src="./tou2@2x.png" ><p>张晓明</p></li>
				<li><p class="zz2">2017/06/06</p></li>
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
				
			}
		},

	}
</script>
<style scoped>
.header1 ul{
	display: flex;
	border-bottom:1px #EBEBEB solid;
	padding: 0 0.5rem;
}
.header1 ul li{
	width:50%;
	text-align:left;
	padding:0.8rem 0;
	text-indent: 3rem
}
.header1 ul li:nth-child(2){
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
	width:50%;
	text-align:center;
	padding:0.5rem 0;
}
.header2 ul li:nth-child(2){
	text-align: right;
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