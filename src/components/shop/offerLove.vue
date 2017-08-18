<template>
	<div class="offerLove">
		<headerTip message="星语心愿" goBack="true"></headerTip>
		<div class="main">
		<div class="header">
		<ul>
		<li class="left">
		<p class="n1"><b>800</b>
		<p>可贡献星币</p></p>
		</li>
		<li class="right">
		<p class="n2"><b>500</b></p>
		<p>已贡献星币</p>	
		</li>
		</ul>
		</div>
		<div class="header2" @click="toAddress({path: '/offerLovedetails'})">
		<img src="./xiangm.png">
		<p class="hd1"><b>志多星</b></p>
		<p class="hd2">志愿服务与社会创新研究院</p>
		<div class="jindu">
			<p><span></span></p>
			<img src="./bq.png" class="bq"><p class="j1" >65%</p>
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
		<div class="jindu3">
			<img src="./gongxian.png"><p>贡献星币</p>
		</div>
		</div>
		<div class="header2" @click="toAddress({path: '/offerLovedetails'})">
		<img src="./xiangm.png" >
		<p class="hd1"><b>志多星</b></p>
		<p class="hd2">志愿服务与社会创新研究院</p>
		<div class="jindu">
			<p><span class="s2"></span></p>
			<img src="./bq.png" class="bq2"><p class="j2">40%</p>
		</div>
		<div class="jindu2">
			<ul>
			<li>
			<span><p class="n3">500</p><p>己支持星币</p></span>
			<span><p class="n4">300</p><p>支持者</p></span>
			<span style="border:none;"><p class="n5">35000</p><p>目标筹集星币</p></span>
			</li>
			</ul>
		</div>
		<div class="jindu3">
			<span><img src="./gongxian.png"><p>贡献星币</p></span>
		</div>
		</div>
			
		</div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'offerLove',
		components:{
	  		headerTip
	  	},
		data(){
			return {
				
			}
		},
		methods:{
			toAddress(path){
                this.$router.push(path)
            }
		}

	}
</script>
<style scoped>
p{
	font-size:0.85rem;
}
.main{
	background:#F4F4F4;
	padding-bottom:0.2rem;
}
.header{

	
}
.header2{
	border-radius:5px;
	background:white;
	margin:0 0.7rem;
	position:relative;
	margin-bottom:0.8rem;
}
.header2 .hd1{
	position:absolute;
	font-size:1.5rem;
	top:10%;
	color:white;
	left:40%;
}
.header2 .hd2{
	position:absolute;
	top:25%;
	color:white;
	left:28%;

}

.header ul {
	display:flex;
	padding:0 0.8rem ;
	border-radius:6px;


}
.header ul li{
	width:50%;
	text-align:center;
	background:white;
	padding:1rem 0;
	
	margin:0.8rem 0;

}
.header ul li p{
	margin:0.2rem 0;
}
.left .n1{
	color:#43B7B5;
	font-size:1.2rem;
	border-right: 1px #F4F4F4 solid;
}
.n2{
	color:#43B7B5;
	font-size:1.2rem;
}
.n3{
	color:#43B7B5;
	font-size:1.2rem;
}
.n4{
	color:#43B7B5;
	font-size:1.2rem;
}
.n5{
	color:#43B7B5;
	font-size:1.2rem;
}

.left{
	border-top-left-radius:5px;
	border-bottom-left-radius:5px;
}
	
.right{
	border-top-right-radius:5px;
	border-bottom-right-radius:5px;
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
.jindu3 {
	position:relative;
	padding:0.1rem 0;
}
.jindu3 img{
	width:50%;
	margin:0.8rem 25%;
}
.jindu3 p{
	position:absolute;
	top:38%;
	left:43%;
	color:#4DBAB9;
}
</style>