<template>
	<div class="login">
		<headerTip message="忘记密码" goBack="true"></headerTip>
		<form action="" method="post">
			<div class="usertext">
				<input type="text" placeholder="请输入手机号" maxlength="11" />
			</div>
			<div class="usertext">
				<input type="text" placeholder="请输入验证码" maxlength="11" />
				<input id="aaa" type="button" value="获取验证码" @click="mobileCode">
			</div>
			<div class="usertext">
				<input type="password" style="width:100%" placeholder="请输入新密码(6~12位数字或字母)" /><br />
			</div>
			<div class="usertext">
				<input type="password" placeholder="再次确认密码" /><br />
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
	  	name: 'login',
	 	 data () {
		    return {
		      
		    }
	  	},
	  	components:{
	  		headerTip
	  	},
	  	methods:{
	  		mobileCode:function() {
	  			
	  		}
	  	}
	}
</script>

<style scoped>
	@import '../../styles/usertext.css';
</style>