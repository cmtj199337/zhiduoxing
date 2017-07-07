<template>
	<div class="iRegister">
		<headerTip message="个人注册" goBack="true"></headerTip>
        <h4>个人资料</h4>
		<form action="" method="post">
			<div class="usertext">
				<input type="text" placeholder="请输入手机号" maxlength="11" />
			</div>
			<div class="usertext">
				<input type="text" placeholder="请输入验证码" maxlength="11" />
				<input id="aaa" type="button" value="获取验证码">
			</div>
			<div class="usertext">
				<input type="password" style="width:100%" placeholder="请输入新密码(6~12位数字或字母)" /><br />
			</div>
			<div class="usertext">
				<input type="password" placeholder="请确认新密码" /><br />
			</div>
			<div class="usertext">
				<input type="text" placeholder="请输入昵称" /><br />
			</div>
			<div class="usertext">
				<router-link to="goodlist">擅长<img src="../common/header/back.png"></router-link>
			</div>
			<div class="sub">
				<input type="button" value="确认提交"/>
			</div>
		</form>
	</div>
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'iRegister',
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
	.usertext a{
	    border: 0;
	    width: 100%;
	    height: 2.5rem;
	    font-size: 1rem;
	    display: inline-block;
	    line-height: 2.5rem;
	    color: #000;
	    text-indent: 1rem;
	}
	.usertext a img{
		transform: rotate(180deg);
		float: right;
	}
</style>