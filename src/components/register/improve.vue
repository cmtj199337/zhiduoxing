<template>
	<div class="improve">
		<headerTip message="个人注册" goBack="true"></headerTip>
		<form action="" method="post">
			<div class="usertext">
				<span>姓名：</span><input type="text">
			</div>
			<div class="usertext">
				<span>性别：</span>
			</div>
			<h4><img src="" alt="">证件类型</h4>
			<ul>
				<li>身份证</li>
				<li>护照</li>
				<li>军官证</li>
				<li>学生证</li>
				<li>港澳通行证</li>
			</ul>
			<div class="usertext">
				<input type="number" placeholder="请输入证件号码">
			</div>
			<div class="usertext">
				<input type="mail" placeholder="请输入邮箱">
			</div>
			<div class="sub">
				<input type="button" value="提交"/>
			</div>
		</form>
	</div>
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'improve',
	  	components:{
	  		headerTip
	  	},
	 	data () {
		    return {
		    	
		    }
	  	},
	}
</script>

<style scoped>
	@import '../../styles/usertext.css';
	.improve h4{
		font-size: 1rem;
		font-weight: normal;
		margin: 1.2rem 1rem 1.2rem 1rem;
	}
	.improve ul li{
		width: 30%;
		display: inline-block;
		text-align: center;
		font-size: 1rem;
		color: #666;
	}
	.usertext{margin: 0 1rem 1.2rem 1rem;}
</style>