<template>
	<div class="allTeamChecked">
		<headerTip message="服务中心" goBack="true"></headerTip>
		<div class="header"><img src="/static/service.png"></div>
		<div class="main">
			<div class="header1">
				<ul>
					<li @click="toAddress({path: '/platformIntroduction'})">
						<img src="./a1.png"><p>平台介绍</p>
					</li>
					<li @click="toAddress({path: '/useHelp'})">
						<img src="./a2.png"><p>使用帮助</p>
					</li>
				</ul>
			</div>
			<div class="header2">
				<ul>
					<li @click="toAddress({path: '/detailsProblem'})">
						<img src="./a3.png" class="zhiyuan"><p>客服中心</p>
					</li>
					<li @click="toAddress({path: '/feedback'})">
						<img src="./a4.png"><p>意见反馈</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'allTeamChecked',
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
.main{
	background:#f5f5f5;
}
.header1{
	padding:0.3rem 0 0 0;
}
.header1 ul{
display:flex;
text-align: center;

border-radius:5px;
}
.header1 ul li{
	width:46%;
	vertical-align:middle;
	
	padding:1.8rem 0;
	margin:0.5rem;
	background:white;
	border-radius:6px;

}
.header1 ul li img{
	width:22%;
	display:inline;
}
.header1 ul li b{
	font-size:2rem;
	color: #555;
}
.header2{
	padding:0 0 0.3rem 0;
}
.header2 ul{
display:flex;
text-align: center;

border-radius:5px;
}
.header2 ul li{
	width:46%;
	vertical-align:middle;
	
	padding:1.8rem 0;
	margin:0.5rem;
	background:white;
	border-radius:6px;

}
.header2 ul li img{
	width:22%;
	display:inline;
}
.header2 ul li b{
	font-size:2rem;
	color: #555
}
.header2 ul li .zhiyuan{
	width:23%;
}
.main li p{
	padding-top: 0.5rem;
}
</style>