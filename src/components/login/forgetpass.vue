<template>
	<div class="login">
		<form action="" method="post">
			<div class="usertext">
				<input type="text" name="" id="input" value="" placeholder="请输入手机号" maxlength="11" />
			</div>
			<div class="usertext">
				<input type="text" name="" id="input" value="" placeholder="请输入验证码" maxlength="11" />
				<input id="aaa" type="button" onclick="send(this)" value="获取验证码">
			</div>
			<div class="usertext">
				<input type="password" name="" style="width:100%" placeholder="请输入新密码(6~12位数字或字母)" /><br />
			</div>
			<div class="usertext">
				<input type="password" name="" placeholder="再次确认密码" /><br />
			</div>
			<div class="sub">
				<input type="button" onclick="show();" value="确认提交"/>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
	  	name: 'login',
	 	 data () {
		    return {
		      
		    }
	  	}
	}
</script>

<style scoped>
	@import '../../styles/usertext.css';
</style>