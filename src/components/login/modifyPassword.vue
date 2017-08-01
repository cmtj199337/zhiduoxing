<template>
	<div class="modifyPassword">
		<headerTip message="修改密码" goBack="true"></headerTip>
			<form action="" method="post">
			<div class="usertext">
				<p>手机号：180****13535</p>
			</div>
			<div class="usertext">
				<i class="s-icon"><img src="./yanzheng.png"></i>
				<input type="number" style="width:50%;" placeholder="请输入验证码" maxlength="11" />
				<!-- <count-down class="btn getcode" @click="aler" ref="btn" :disabled="disabled" v-ref:btn :second="5"></count-down> -->
				<timer-btn ref="timerbtn" class="btn getcode" v-on:run="send" :disabled="disabled" :second="60"></timer-btn>
			</div>
			<div class="usertext">
				<i class="s-icon"><img src="./lock.png"></i>
				<input type="password" style="width:100%" placeholder="请输入新密码(6~12位数字或字母)" /><br />
			</div>
			<div class="usertext">
				<i class="s-icon"><img src="./lock.png"></i>
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
	import TimerBtn from '../common/tools/countdown.vue'

	export default{
		name:'modifyPassword',
		components:{
	  		headerTip,
	  		TimerBtn
	  	},
		data(){
			return {
				
			}
		},
		methods:{
			send(){
     			this.$refs.timerbtn.setDisabled(true); //设置按钮不可用
	            hz.ajaxRequest("sys/sendCode?_"+$.now(),function(data){
	                if(data.status){
	                    this.$refs.timerbtn.start(); //启动倒计时
	                }else{
	                    this.$refs.timerbtn.stop(); //停止倒计时
	                }
	            });
     		}
        }
	}
</script>
<style scoped>
	@import '../../styles/usertext.css';
	.usertext p{
		padding:0.8rem 0;
		font-size:0.85rem;
	}
	.modifyPassword form{
		margin-top: 10%;
	}
	.getcode{
		    font-family: microsoft yahei;
    float: right;
    display: inline-block;
    color: #43B7B6;
    border: 1px solid #43B7B6;
    padding: 0.3rem 1rem;
    border-radius: 4px;
    vertical-align: middle;
    background: #fff;
	}
</style>