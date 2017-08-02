<template>
	<div class="servicesDetails">
		<headerTip message="志愿攻略详情" goBack="true"></headerTip>
		<div class="kong"></div>
		<div class="main">
		<div class="title">
		<p style="font-size:1rem;">【中国资根】数据管理新思路，唤醒沉睡动员力</p>
		<p class="time">2017/02/05</p>
		</div>
		<div class="header2"><span class="left"><img src="./bofang1.png"></span>
		<span class="right">
		<p >新数据思路</p>
		<p><img src="./jindu.png"></p>
		<p>
		<span>0:00</span>
		<span class="all">6:28</span>
		</p>
		</span>
		</div>
		<div class="text">
		<img src="./image.png"><img src="./bofang2.png" class="bofang">
		<p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
		<img src="./image2.png">
		<p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
		</div>
			
		</div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'servicesDetails',
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
	background:#F5F5F5;
}
.title{
	padding:0.6rem 0;
	margin:0 0.8rem;
	line-height:1.4rem;
}
.title .time{
	font-size:0.8rem;
	margin-left:0.5rem;
	color:#AEAEAE;
}
.header2{
	padding:0.8rem 0;
	margin:0 0.6rem;
	border:1px #F5F5F5 solid;
	border-radius:5px;
}
.header2 .mus{
	width:100%;
	height:4rem;
	
}
.header2 {
	display:flex;
}
.header2 .left{
	width:25%;
}
.header2 .left img{
	width:60%;
	margin-left:20%;

}
.header2 .right{
	width:70%;
}
.header2 .right p .all{
	margin-left:75%;
}
.header2 .right p  span{
	color:#AEAEAE;
}

.header2 .right p{
	line-height:1.8rem;
}
.text{
	padding:0 0.8rem;
	position:relative;

}
.text p{
	line-height:1.4rem;
	color:#AEAEAE;
}
.text img{
	margin:0.6rem 0;
}
.text .bofang{
	position:absolute;
	width:15%;
	top:11%;
	left:42%;

}
</style>