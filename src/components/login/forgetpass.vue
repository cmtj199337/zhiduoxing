<template>
	<div class="forgetpass">
		<headerTip message="忘记密码" goBack="true"></headerTip>
		<form action="" method="post">
			<div class="usertext">
				<input type="tel" placeholder="请输入手机号" maxlength="11" />
			</div>
			<div class="usertext">
				<input type="number" placeholder="请输入验证码" maxlength="11" />
				<timer class="getcode" @click="send" ref="btn">获取验证码</timer>
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
	import countDown from '../common/tools/countdown.vue'

	export default {
	  	name: 'forgetpass',
	 	 data () {
		    return {
		      	disabled: false
		    }
	  	},
	  	components:{
	  		'headerTip':headerTip,
	  		'timer':countDown
	  	},
	  	methods:{
	  		send() {
                this.disabled = true;
                setTimeout(this.sended, 2000);
            },
            sended() {
                this.$refs.btn.run();
                this.disabled = false;
            }
	  	}
	}
</script>

<style scoped>
	@import '../../styles/usertext.css';
	.forgetpass form{
		margin-top: 10%;
	}
</style>