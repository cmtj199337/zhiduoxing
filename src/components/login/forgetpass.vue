<template>
	<div class="forgetpass">
		<headerTip message="忘记密码" goBack="true"></headerTip>
		<div class="type">
			<el-radio-group v-model="userType">
				<el-radio :label="0">个人用户</el-radio>
				<el-radio :label="1">团队用户</el-radio>
			</el-radio-group>
		</div>
		<form action="" method="post">
			<div class="usertext">
				<i class="s-icon"><img src="./phone.png"></i>
				<input type="tel" placeholder="请输入手机号" name="mobile" v-validate ="'required|mobile'" maxlength="11" @blur="checkForm('mobile','请输入正确的手机号')" v-model="mobileNo" @change="checkMobile"/>
			</div>
			<div class="usertext">
				<i class="s-icon"><img src="./yanzheng.png"></i>
				<input type="number" @change="checkCode" style="width:40%;" placeholder="请输入验证码" maxlength="11" v-model="verification"/>
				<timer-btn ref="timerbtn" class="btn getcode" v-on:run="send" :second="60"></timer-btn>
			</div>
			<div class="usertext">
				<i class="s-icon"><img src="./lock.png"></i>
				<input type="password" style="width:100%" name="password" v-validate="'required'" placeholder="请输入新密码(6~12位数字或字母)" v-model="newPwd" /><br />
			</div>
			<div class="usertext">
				<i class="s-icon"><img src="./lock.png"></i>
				<input type="password" v-validate="'confirmed:password'" name="pwdagain" placeholder="再次确认密码" @blur="checkForm('pwdagain','两次输入密码不一致')" v-model="reNewPassword"/>
			</div>
			<div class="sub">
				<input type="button" @click="sub" value="确认提交"/>
			</div>
		</form>
		<alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
	</div>
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'
	import TimerBtn from '../common/tools/countdown.vue'
	import alertTip from '../../components/common/tools/alertTip.vue'

	export default {
	  	name: 'forgetpass',
	 	 data () {
		    return {		        
		        verification:'',		//验证码
		        reNewPassword:'' ,      //确认新密码	
				mobileNo:'',			//手机号
		        newPwd:'',			//新密码
		        showAlert:false,
		        userType:0      		
		    }
	  	},
	  	components:{
	  		headerTip,
	  		TimerBtn,
	  		alertTip,
	  	},
	  	mounted(){
	  		this.$nextTick(function(){
	  			this.$refs.timerbtn.setDisabled(true)
	  		})
	  	},
	  	methods:{
	  		sub(){
	  			let arr = JSON.parse(JSON.stringify(this.errors)).errors
	  			if(this.mobileNo == '' || this.newPwd == ''){
	  				this.$message.error('请完善信息')
	  			}else if(arr.length>0){
	  				this.$message.error(arr[0].msg)
	  			}else{
	  				this.$http.post('/api/public/modifyPassword',{
	  					mobileNo:this.mobileNo,
	  					newPwd:this.newPwd,
	  					userType:this.userType
	  				},{
	  					emulateJSON:true
	  				}).then(response => {
		  				let res = response.data
		  				if(res.result == 0){
		  					this.$message.success("修改成功")
		  					sessionStorage.setItem('user',this.mobileNo)
		  					setTimeout(()=>{
		  						this.$router.push('login')
		  					},500)
		  				}
		  			})
	  			}
	  		},
	  		checkCode(){
     			this.$http.post('/api/public/checkVerification',{
     				mobileNo:this.mobileNo,
     				verification:this.verification
     			},{
     				emulateJSON:true
     			}).then(response => {
     				let res = response.data
     				if(res.result == 0){
     					this.$refs.timerbtn.stop();
     					this.$refs.timerbtn.setDisabled(true)
     				}else{
     					this.$message.error('验证码错误')
     					this.verification = ''
     				}
     			})
     		},
	  		send(){
	  			this.$refs.timerbtn.setDisabled(true);
	            this.$http.post('/api/public/sendShortMessage',{
	            	mobileNo:this.mobileNo,
	            	messageType:'2'
	            },{
	            	emulateJSON:true
	            }).then( response =>{
	            	let res = response.data
	            	if(res.result == 0){
	                    this.$refs.timerbtn.start();
	                }else{
	                    this.$refs.timerbtn.stop();
	                }
	            })
	  		},
	  		checkMobile(){
	  			if(this.errors.has('mobile')){
		    		this.$message.error('请输入正确的手机号')
		    		this.$refs.timerbtn.setDisabled(true);
		    	}else{
		    		this.$http.post('/api/public/checkMobileNo',{
		    			mobileNo:this.mobileNo,
		    			userType:this.userType
		    		},{
		    			emulateJSON:true
		    		}).then(response =>{
		  				let res = response.data
		  				if(res.result == 0){
		  					this.$refs.timerbtn.setDisabled(true);
							this.$message.error("该账号不存在")
		  				}else{
		  					this.$refs.timerbtn.setDisabled(false);
		  				}
		  			})
		    	}
	  		},
	  		checkForm(name,filed){
	  			if(this.errors.has(name)){
	  				this.$message.error(filed)
	  			}
	  		},
	  		closeTip(){
                this.showAlert = false;
                this.$router.push('login')
            }
	  	}
	}
</script>

<style scoped>
	@import '../../styles/usertext.css';
	.forgetpass form{
		margin-top: 1rem;
	}
	.forgetpass{
		height: 100%;
		background: #fff;
	}
	.type{
		text-align: center;
		margin-top:2rem;
	}
	.getcode{
		margin-top: 0
	}
</style>