<template>
	<div class="forgetpass">
		<headerTip message="忘记密码" goBack="true"></headerTip>
		<form action="" method="post">
			<div class="usertext">
				<i class="s-icon"><img src="./phone.png"></i>
				<input type="tel" placeholder="请输入手机号" name="mobile" v-validate ="'required|mobile'" maxlength="11"   />
				<span class="toast" v-show="errors.has('mobile')">{{ errors.first('mobile')}}</span>
			</div>
			<div class="usertext">
				<i class="s-icon"><img src="./yanzheng.png"></i>
				<input type="number" placeholder="请输入验证码" maxlength="11" />
				<!-- <count-down class="btn getcode" @click="aler" ref="btn" :disabled="disabled" v-ref:btn :second="5"></count-down> -->
				<timer-btn ref="timerbtn" class="btn getcode" v-on:run="send" :disabled="disabled" :second="60"></timer-btn>
			</div>
			<div class="usertext">
				<i class="s-icon"><img src="./lock.png"></i>
				<input type="password" style="width:100%" name="password" v-validate="'required'" placeholder="请输入新密码(6~12位数字或字母)" v-model="newPassword" /><br />
				<span class="toast" v-show="errors.has('password')">{{ errors.first('password')}}</span>
			</div>
			<div class="usertext">
				<i class="s-icon"><img src="./lock.png"></i>
				<input type="password" v-validate="'confirmed:password'" name="pwdagain" placeholder="再次确认密码" v-model="reNewPassword"/><br />
				<span class="toast" v-show="errors.has('pwdagain')">两次密码不一致</span>
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

	export default {
	  	name: 'forgetpass',
	 	 data () {
		    return {
		      	disabled: false,
		      	toastshow:false,
		        toasttext:'',
		        
		         verify:'',				//验证码
		        reNewPassword:'' ,      //确认新密码	
		        userinfo:{
				phoneNumber:'',			//手机号
		        newPassword:'',			//新密码
		        }
		        
		      		
		    }
	  	},
	  	components:{
	  		headerTip,
	  		TimerBtn
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
     		},
     		isRegister(mobile){
	  			this.$http.post('/api/public/checkMobileNo',{mobileNo:mobile}).then(response =>{
	  				let res = response.data
	  				if(res.result == 0){
	  					//已注册过，可以修改密码
	  					
	  				}
	  			})
	  		},
	  		mbRegister(){
	  			this.$http.post('/api/public/modifyPassword',{
	  				'mobileNo':this.phoneNumber,
	  				'newPwd':this.newPassword}).then(response =>{
	  				let res = response.data
	  				if(res.result == 0){
	  				
	  				}
	  			})
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