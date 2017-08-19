<template>
	<div class="forgetpass">
		<headerTip message="忘记密码" goBack="true"></headerTip>
		<form action="" method="post">
			<div class="usertext">
				<i class="s-icon"><img src="./phone.png"></i>
				<input type="tel" placeholder="请输入手机号" name="mobile" v-validate ="'required|mobile'" maxlength="11" v-model="mobileNo" @blur="isRegister"  />
				<span class="toast" v-show="errors.has('mobile')">{{ errors.first('mobile')}}</span>
			</div>
			<div class="usertext">
				<i class="s-icon"><img src="./yanzheng.png"></i>
				<input type="number" placeholder="请输入验证码" maxlength="11" v-model="verification" @blur="isYanzheng"/>
				<!-- <count-down class="btn getcode" @click="aler" ref="btn" :disabled="disabled" v-ref:btn :second="5"></count-down> -->
				<timer-btn ref="timerbtn" class="btn getcode" v-on:run="send" :disabled="disabled" :second="60"></timer-btn>
			</div>
			<div class="usertext">
				<i class="s-icon"><img src="./lock.png"></i>
				<input type="password" style="width:100%" name="password" v-validate="'required'" placeholder="请输入新密码(6~12位数字或字母)" v-model="newPwd" /><br />
				<span class="toast" v-show="errors.has('password')">{{ errors.first('password')}}</span>
			</div>
			<div class="usertext">
				<i class="s-icon"><img src="./lock.png"></i>
				<input type="password" v-validate="'confirmed:password'" name="pwdagain" placeholder="再次确认密码" v-model="reNewPassword"/><br />
				<span class="toast" v-show="errors.has('pwdagain')">两次密码不一致</span>
			</div>
			<div class="sub">
				<input type="button" value="确认提交" @click="isTijiao"/>
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
		      	disabled: false,
		      	toastshow:false,
		        toasttext:'',		        
		        verification:'',		//验证码
		        reNewPassword:'' ,      //确认新密码	
				mobileNo:'',			//手机号
		        newPwd:'',			//新密码
		        showAlert:false,
			    flag:1,	       		      		
		    }
	  	},
	  	components:{
	  		headerTip,
	  		TimerBtn,
	  		alertTip,
	  	},
	  	methods:{
     		send(){
     			this.$refs.timerbtn.setDisabled(true); //设置按钮不可用
	            if(this.mobileNo){
						this.$http.post('/api/public/checkMobileNo',{
			    			mobileNo:this.mobileNo
			    		},
		    			{
		    				emulateJSON:true
		    			}).then(response =>{
		  				let res = response.data
		  				console.log(res)
		  				if(res.result == 0){	
		  					this.$message.error('请输入正确手机号')
		  					return
		  				}else{
		  					this.$http.post('/api/public/sendShortMessage',{
				            	mobileNo:this.mobileNo
				            },{
				            	emulateJSON:true
				            }).then(response=>{
				            	let res = response.data
					  				console.log(res)
				  				if(res.result == 0){
									this.$refs.timerbtn.start()
				  				}
				  				else{
				  					this.$refs.timerbtn.setDisabled(true);  				
				  				}
				            })
		  				}
		  			})	
		        }else{
					this.$message.error('请输入手机号')
		    		return
		        }

     		},
     		isYanzheng(){
     			if(this.reNewPassword,this.mobileNo){
     				this.$http.post('/api/public/checkVerification',{
     						verification:this.verification,
     						mobileNo:this.mobileNo
     					},{
     						emulateJSON:true
     					}).then(response=>{
     						let res = response.data
		  					console.log(res)
		  					if(res.result==0){
			  					
		  					}
		  					else{
		  						this.$message.error('验证码错误')
		  					}
     					})
     			}
     		},
     		
    		isTijiao(){
		    	if(!this.mobileNo){
		    		this.$message.error('请输入手机号')
		    		return
		    	}else{
		    		this.$http.post('/api/public/checkMobileNo',{
			    			mobileNo:this.mobileNo
			    		},
		    			{
		    				emulateJSON:true
		    			}).then(response =>{
		  				let res = response.data
		  				console.log(res)
		  				if(res.result == 0){	
		  					this.$message.error('请输入正确手机号')
		  					return
		  				}
		  				
		  			})
		    	}

		    	if(!this.verification){
		    		this.$message.error('请输入验证码')
		    		return
		    	}

		    	//验证码
     			if(this.verification){
     				this.$http.post('/api/public/checkVerification',{
     						verification:this.verification,
     						mobileNo:this.mobileNo
     					},{
     						emulateJSON:true
     					}).then(response=>{
     						let res = response.data
		  					console.log(res)
		  					if(res.result==0){
			  					
		  					}
		  					else{
		  						this.$message.error('验证码错误')
		  						return
		  					}
     					})
     			}

     			if(!this.newPwd){
		    		this.$message.error('请输入新密码')
		    		return
		    	}		    	
		    	if(!this.reNewPassword){
		    		this.$message.error('请输入确认密码')
		    		return
		    	}

                //密码
    			if(this.reNewPassword==this.newPwd){
    				this.$http.post('/api/public/modifyPassword',{
    					mobileNo:this.mobileNo,
    					newPwd:this.newPwd
    				},{
    					emulateJSON:true
    				}).then(response=>{
    					let res = response.data
    					if(res.result ==0 ){
							this.showAlert=true
  							this.alertText = '密码修改成功'
    					}
    					else{
    						this.showAlert=true
  							this.alertText = '密码修改失败'
    					}
    				})
    			}else{
					this.$message.error('两次密码输入不一致')
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
		margin-top: 10%;
	}
	.forgetpass{
		height: 100%;
		background: #fff;
	}
</style>