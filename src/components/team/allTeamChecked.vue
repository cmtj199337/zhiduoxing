<template>
	<div class="allTeamChecked">
		<headerTip message="全部团队查看" goBack="true"></headerTip>
		<div class="header"><img src="./banner@2x.png"></div>
		<div class="main">
			<div class="header1">
			<ul>
				<li >
					<img src="./a@2x.png"><b>27</b><p>团队总数（个）</p>
				</li>
				<li>
					<img src="./b@2x.png"><b>100</b><p>项目总数（个）</p>
				</li>
				</ul>
			</div>
			<div class="header2">
			<ul>
				<li>
					<img src="./c@2x.png" class="zhiyuan"><b>2000</b><p>志愿者总人数（人）</p>
				</li>
				<li>
					<img src="./d@2x.png"><b>2200</b><p>志愿时长（小时）</p>
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
.main li p{
	padding-top: 0.3rem;
}
</style>