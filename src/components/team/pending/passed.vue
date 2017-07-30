<template>
	<div class="passed">
		<div class="header1">
			<ul>
				<li>姓名</li>
				<li>加入时间</li>	
				<li style="text-align:right">操作</li>		
			</ul>
		</div>
		<div class="kong"></div>
		<div class="header2">
			<ul @click="toAddress({path: '/personalData'})">
				<li style="display:flex;"><img src="../tou1@2x.png" ><p>利好</p></li>
				<li><p>2017/06/06</p></li>
				<li><p class="zz1">禁用</p></li>
			</ul>	
			<ul @click="toAddress({path: '/personalData'})">
				<li style="display:flex;"><img src="../tou2@2x.png" ><p>张晓明</p></li>
				<li><p>2017/06/06</p></li>
				<li><p class="zz2">解禁</p></li>
			</ul>	
			<ul @click="toAddress({path: '/personalData'})">
				<li style="display:flex;"><img src="../tou1@2x.png" ><p>张大大</p></li>
				<li><p>2017/06/06</p></li>
				<li><p class="zz1">禁用</p></li>
			</ul>	
			<ul @click="toAddress({path: '/personalData'})">
				<li style="display:flex;"><img src="../tou2@2x.png"><p>李太白</p></li>
				<li><p>2017/06/06</p></li>
				<li><p class="zz2">解禁</p></li>
			</ul>	
			<ul @click="toAddress({path: '/personalData'})">
				<li style="display:flex;"><img src="../tou1@2x.png" ><p>张大大</p></li>
				<li><p>2017/06/06</p></li>
				<li><p class="zz1">禁用</p></li>
			</ul>	
			<ul @click="toAddress({path: '/personalData'})">
				<li style="display:flex;"><img src="../tou2@2x.png" ><p>李太白</p></li>
				<li><p>2017/06/06</p></li>
				<li><p class="zz2">解禁</p></li>
			</ul>	
		</div>
	</div>
</template>
<script>
	export default{

		name:'passed',
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
.header1 ul{
	display: flex;
}
.header1 ul li{
	width:32%;
	text-align:center;
	padding:0.5rem 0;

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
	color:#959595;
	line-height:1.6rem;
	border-radius:5px;
	margin-left:58%;
	margin-top:6%
}
.header2 ul li .zz2{
	width:4rem;
	height:1.6rem;
	background:#43B7B6;
	color:white;
	line-height:1.6rem;
	border-radius:5px;
	margin-left:58%;
	margin-top:6%
}
</style>