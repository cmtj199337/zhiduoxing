<template>
  <div class="feedback">
   <headerTip message="意见反馈" goBack="true" style="background: #FFFFFF"></headerTip>
	<img src="./tupian.png" alt="">
	<div class="text">
		<p>感谢您关注志多星，我们将尽快回复</p>
	</div>
	<div class="t"><img src="./name.png" alt=""><input type="text" name="" placeholder="  请输入姓名" style="border:none"></div>
	<div class="t"><img src="./xing.png" alt=""><input type="text" name="" placeholder="  请输入邮箱" style="border:none"></div>
	<div class="t"><img src="./haoma.png" alt=""><input type="text" name="" placeholder="  请输入手机号" style="border:none"></div>
	<div class="t"><img src="./jigou.png" alt=""><input type="text" name="" placeholder="  请输入您的机构" style="border:none"></div>

	<div class="t1">
		<img src="./queren.png" alt="" style="width:55%;margin-left:5.5rem;margin-top:9.6rem">
		<p style="color:#FFFFFF;margin-left:11rem;margin-top:10.1rem">提交</p>
	</div>

	<div class="t2">
		<input type="text" name="" placeholder="    请输入反馈内容       不超过100字" style="border:none">
	</div>

  </div>  
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'feedback',
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
.feedbacks{
	background: #F5F5F5;
	padding-bottom: 35rem;
}
.text{
	padding: 1.2rem 0;
	text-align: center;
}
.t{
	padding: 1rem 1rem;
	border-bottom:1px solid rgba(235,234,234,0.48);
	background: #FFFFFF	;
	display:flex;
}


.t img{
	height: 1.1rem;
	width: 0.9rem;
}

.t1 img{
	position:absolute
}
.t1 p{
	position:absolute;
}

.t2 input{
	width: 24rem;
	margin: 0.5rem 0;
	padding:0.5rem 0 5rem 0;
}

</style>