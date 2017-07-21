<template>
	<div class="myMessage">
		<headerTip message="我的消息" goBack="true"></headerTip>
		<div class="message">
		<ul>
		<li><span class="left"><img src="./touxiang2.png"></span>
		<span class="text">
		<p style="font-size:1rem">利好</p>
		<p>内容内容内容内容内容内容内容内...</p>
		<p style="color:#c9c9c9">1小时</p>
		</span>
		<span class="right"><img src="./tup.png"></span>
		</li>
		<li>
		<span class="left"><img src="./touxiang1.png"></span>
		<span class="text"><p style="font-size:1rem">利好</p>
		<p class="zan"><img src="./dianzan.png"></p>
		<p style="color:#c9c9c9">2012/02/05 10:00</p></span>
		<span class="right"><img src="./tup.png"></span></li>
		</ul>
		</div>
		</div>
</template>
<script >
import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'myMessage',
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
.message ul li{
border-bottom:1px rgba(235, 234, 234, 0.48) solid;
display:flex;
margin:auto 1rem;
}
.left{
	width:12%;
	margin-right:2%;
}
.left img{
	width:120%;
	margin:45% 15%;
}
.text{
	margin:0rem 1rem;
	width:65%;
}
.text p{
	margin:0.5rem 0;

}
.right{
	width:25%;
}

.right img{
	width:80%;
	margin:10% 15%;
}

.zan img{
	width:8%;
}

	
</style>