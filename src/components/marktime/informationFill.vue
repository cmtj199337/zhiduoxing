<template>
  <div class="informationFilling">
   <headerTip message="补录时长" goBack="true"></headerTip>
 	<div class="main">
		<div class="header">
			<img src="./logo2.png">
			<p>团中央网络影视中心第五团支部 <span class="ac">进行中</span></p> 
			<p><span style="font-size:0.8rem;color:#CCCCCC">志愿总时长</span> <span style="color:#77CBCA">120</span>小时</p>
		</div>
	</div>
	<div class="texts">
		<p>日期 <input type="text" name="" placeholder="/年    /月    /日"></p>
		<p>补录时长 <input type="text" name="" placeholder="请输入小时数"></p>
	</div>
	<div class="end"><p>确认</p></div>
  </div>  
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'informationFilling',
	  	components:{
	  		headerTip
	  	}, 
	 	data () {
		    return {
		    	
		    }
	  	},
	  	methods:{
	  		
	  	}
	}
</script>

<style scoped>
p{
	font-size:0.9rem;
}
.main{
	background:#F5F5F5;
	padding:0.2rem 0;
}
.header{
	margin: 0.6rem 0.6rem 0.6rem 2.5rem;
	background:white;
	position:relative;
	border-radius:5px;
	padding:0.6rem 0;
}
.header img{
	width:5.5rem; 
	position:absolute;
	top:1.5%; 
	left:-2.75rem; 
}
.header p .ac{
	border:1px  #46B8B7 solid;
	border-radius:5px;
	color:#46B8B7;
	margin-left:0.5rem;
	padding: 0.1rem 0.2rem;
	font-size: 0.7rem
}
.header p{
	margin:0.6rem 0;
	margin-left:2.7rem;
}
.texts{
	background: #FFFFFF;
	margin:0 0.8rem;
}
.texts p{
	border-bottom:1px solid rgba(235,234,234,0.48);
	padding:1rem 0;
}
.texts input{
	border:none;
	width:60%;
	margin-left:1rem;
}
.end p{
	width:55%;
	background:#43B7B5;
	color:white;
	margin:2rem auto; 
	padding:0.8rem 0;
	border-radius:5px;
	text-align:center;
}
input::-webkit-input-placeholder{
	font-size: 0.9rem;
	line-height: 1
}			

    </style>
