<template>
	<div class="allTeamChecked">
		<headerTip message="全部团队查看" goBack="true"></headerTip>
		<div class="header"><img src="/static/service.png"></div>
		<div class="main">
			<div class="header1">
				<ul>
					<li>
						<img src="./a1.png"><p>平台介绍</p>
					</li>
					<li>
						<img src="./a2.png"><p>使用帮助</p>
					</li>
				</ul>
			</div>
			<div class="header2">
				<ul>
					<li>
						<img src="./a3.png" class="zhiyuan"><p>客服中心</p>
					</li>
					<li>
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
			getList(){
				this.$http.get('').then(res=>{
					
				})
			}
		}
	}
</script>
<style scoped>
.main{
	background:#0000001a;
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
	padding-right: 0.5rem;
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
	padding-right: 0.5rem;
}
.header2 ul li b{
	font-size:2rem;
	color: #555
}
.header2 ul li .zhiyuan{
	width:13%;
}
</style>