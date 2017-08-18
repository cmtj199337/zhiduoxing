
<template>
	<div class="offerLovedetails">
		<headerTip message="星语心愿详情" goBack="true"></headerTip>
			<div class="kong"></div>
			<div class="header2">

		<img src="./xiangm.png">
		<div class="jindu">
			<p><span></span></p>
			<img src="./bq.png" class="bq"><p class="j1">65%</p>
		</div>
		<div class="jindu2">
			<ul>
			<li>
			<span><p class="n3">2500</p><p>己支持星币</p></span>
			<span><p class="n4">500</p><p>支持者</p></span>
			<span style="border:none;"><p class="n5">30000</p><p>目标筹集星币</p></span>
			</li>
			</ul>
		</div>
		</div>
		<div class="kong"></div>
		<div class="title"><p>项目背景</p></div>
		<div class="text"><p>当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学</p></div>
		<div class="kong"></div>
		<div class="titlep"><img src="./gy.png"><span>公益机构</span></div>
				<div class="text"><p>当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学</p></div>
		<div class="kong"></div>
		<div class="titlep"><img src="./ax.png"><span>爱心伙伴</span></div>
				<div class="text"><p>当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学</p></div>
		<div class="kong"></div>
		<div class="title"><p>活动规则</p></div>
		<div class="text"><p>当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学</p></div>
		<div class="kong"></div>
		<div class="end">
		<ul>
		<li class="le">邀请朋友一起</li>
		<li class="ri">贡献星币</li>
		</ul>
			
		</div>

	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'offerLovedetails',
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
p{
	font-size:0.85rem;
}
.kong{
	padding:0.3rem 0;
	background:#F4F4F4;
}
.header2{
	border-radius:5px;
	background:white;
	margin:0.6rem 0;
	padding:0 0.5rem;
}
.jindu{
	margin-top:2rem;
	margin-bottom:1rem;
	position:relative;
}
.jindu p span{
	width:59%;
	background:#43B7B6;
	padding:0.15rem 0;
	position:absolute;
	border-radius:5px;
	top:0;
}
.jindu p .s2{
	width:38%;
	background:#43B7B6;
	padding:0.15rem 0;
	position:absolute;
	border-radius:5px;
	top:0;
}
.jindu p{
	width:95%;
	background:#E6E6E6;
	padding:0.15rem 0;
	margin:0 auto; 
	border-radius:5px;
	position:relative;
}
.jindu .j1{
	position: absolute;
	left:55.5%;
	top:-1.35rem;
	font-size:0.8rem;
	color:white;
	width:2rem;
	background:none;
}
.jindu .j2{
	position: absolute;
	top:-1.37rem;
	left:35.5%;
	color:white;
	font-size:0.8rem;
	width:2rem;
	background:none;
}
.bq{
	position:absolute;
	width:8%;
	bottom:26%;
	left:55%;
}
.bq2{
	position:absolute;
	width:8%;
	bottom:26%;
	left:35%;
}
.jindu2 ul li{
display:flex;
background:#F8F8F8;
margin:0 0.6rem;


}
.jindu2 ul li span{
	width:33%;
	text-align:center;
	padding:0.5rem 0;
	border-right:1px #F4F4F4 solid;
	margin:0.6rem 0;

}
.title{
	padding:0.8rem 0;
	margin:0 0.6rem;
	border-bottom:1px #F4F4F4 solid;
}
.titlep{
	padding:0.4rem 0;
	margin:0 0.6rem;
	border-bottom:1px #F4F4F4 solid;
}
.titlep span{
	font-size:0.85rem;
	margin-left:0.6rem;


}
.titlep img{
	width:8%;
	display:inline;
	vertical-align:middle;
}
.text{
	padding:0.2rem;
}
.text p{
	font-size:0.8rem;
	color:#A7A7A7;
	margin:0.2rem 0.2rem;
	line-height:1.3rem;
}
.end ul {
	display:flex;
}
.end ul li{
	width:50%;
	text-align:center;
	padding:1rem 0;
	border-right:1px #F4F4F4 solid;
}
.le{
	color:#FFB353;
	font-size:1rem;
}
.ri{
	color:#4CBAB9;
	font-size:1rem;
}
</style>