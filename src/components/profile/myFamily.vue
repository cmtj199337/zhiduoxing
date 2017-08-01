<template>
  <div class="myFamily">
   <headerTip message="我的家庭" goBack="true" style="background: #FFFFFF"></headerTip>
   <span class="h" @click="toAddress({path: '/addFamily'})">添加成员</span>
   <div class="header">
	<ul>
	<li>
	<span class="left">
	<p ><b>3</b></p> 
	<p >家庭成员（人）</p>
	</span>
	<span>
	<p><b>500</b></p> 
	<p>志愿总时长（小时）</p>
	</span>
	</li>
	</ul>
	</div>
	<div class="main">
	<ul>
	<li>
	<img src="./toux.png" class="tt">
	<p><span>张北影</span><span class="bj">编辑</span></p>
	<p><span>志愿时长</span>  <span>1200小时</span></p>
	<p><span>身份证号</span>  <span>123123*******8901</span><img src="./shanchu.png"></p>
	</li>
	<li>
	<img src="./toux.png" class="tt">
	<p><span>张北影</span><span class="bj">编辑</span></p>
	<p><span>志愿时长</span>  <span>1200小时</span></p>
	<p><span>身份证号</span>  <span>123123*******8901</span><img src="./shanchu.png"></p>
	</li>
	<li>
	<img src="./toux.png" class="tt">
	<p><span>张北影</span><span class="bj">编辑</span></p>
	<p><span>志愿时长</span>  <span>1200小时</span></p>
	<p><span>身份证号</span>  <span>123123*******8901</span><img src="./shanchu.png"></p>
	</li>
	</ul>
	</div>


  </div>  
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'myFamily',
	  	components:{
	  		headerTip
	  	}, 
	 	data () {
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
	background:#F5F5F5;
	padding:0.2rem;
}
.main div{
	border-radius:5px;
}
.header {
	background:#F5F5F5;
	padding:0.4rem 0;
}
.header ul li{
	margin:0.2rem 0.6rem;
	text-align:center;
	padding: 1.3rem 0rem;		
	background: #FFFFFF;
	display:flex;
	border-radius:5px;
	
}
.header ul li span{
	font-size: 14px;
	width: 50%;
}
.header ul li span p b{
	font-size:1.2rem;
	color:#43B7B5;
}
.header ul li .left{
	border-right:1px #F5F5F5 solid;
}
.main ul li{
	background:white;
	margin:0.6rem 0.6rem 0.6rem 3rem;
	border-radius:5px;
	padding:0.6rem 0;
	position:relative;
}
.main ul li p{

	margin:0.4rem 0 0.4rem 2.5rem;

}
.main ul li .tt{
	position:absolute;
	width:20%;
	left: -10%;
	top:15%;
}
.main ul li p img{
	width:6%;
	display:inline;
	vertical-align:middle;
	margin-left:20%;
}
.main ul li p .bj{
	color:#FF9E14;
	margin-left:68%;
}
.h{
	top:2.5%;
	right:2%;
	position:absolute;
}

</style>