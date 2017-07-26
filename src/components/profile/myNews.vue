<template>
	<div class="myNews">
		<headerTip message="我的消息" goBack="true"></headerTip>
		<div class="kong">			
		</div>
		<div class="message">
		<p><span class="left"><b>系统消息</b></span><span class="right">2017/02/05</span></p>
		<p>消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息</p>
		</div>
		<div class="message">
		<p><span class="left"><b>项目消息</b></span><span class="right">2017/02/05</span></p>
		<p>消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息</p>
		</div>
		<div class="message">
		<p><span class="left"><b>团队消息</b></span><span class="right">2017/02/05</span></p>
		<p>消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息消息</p>
		</div>
		</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'myNews',
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
.message{
	margin:0 0.6rem;
	border-bottom:1px #EAEAEA solid;
}
.message p{
	margin:0.4rem 0.2rem;
	line-height:1.4rem;
	color:#A7A7A7;
}
.message p .left{
	font-size:1rem;
	color:black;
}
.message p .right{
	margin-left:60%;
}
</style>
