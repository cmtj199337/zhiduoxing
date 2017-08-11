<template>
	<div class="modifyPassword">
		<headerTip message="修改密码" goBack="true"></headerTip>
			<form action="" method="post">
			<div class="usertext">
				<p model="mobileNo">手机号：{{mobileNo}}</p>
			</div>
			<div class="usertext">
				<i class="s-icon"><img src="./yanzheng.png"></i>
				<input type="number" style="width:50%;" placeholder="请输入验证码" maxlength="11" v-model="verification" @blur="isYanzheng"/>
				<!-- <count-down class="btn getcode" @click="aler" ref="btn" :disabled="disabled" v-ref:btn :second="5"></count-down> -->
				<timer-btn ref="timerbtn" class="btn getcode" v-on:run="send" :disabled="disabled" :second="60"></timer-btn>
			</div>
			<div class="usertext">
				<i class="s-icon"><img src="./lock.png"></i>
				<input type="password" style="width:100%" name="password" placeholder="请输入新密码(6~12位数字或字母)" v-model="newPwd"/><br />
				<span class="toast" v-show="errors.has('password')">{{ errors.first('password')}}</span>
			</div>
			<div class="usertext">
				<i class="s-icon"><img src="./lock.png"></i>
				<input type="password" placeholder="再次确认密码" v-validate="'confirmed:password'" name="pwdagain" v-model="reNewPassword"/><br/>
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

	export default{
		name:'modifyPassword',
		components:{
	  		headerTip,
	  		TimerBtn,
	  		alertTip
	  	},
		data(){
			return {
				mobileNo:'18013755211',
				verification:'',
				showAlert:false,				
				reNewPassword:'' ,
 				newPwd:'',	
 				reNewPassword:'' ,
 				toastshow:false,
 				disabled:false,
 				toast:''

			}
		},
		mounted(){
			this.getInfo()
		},
		methods:{
			send(){
				this.$refs.timerbtn.setDisabled(true);
				this.$http.post('/api/public/sendShortMessage',{
     						verification:this.verification,
     						mobileNo:this.mobileNo
     					},{
     						emulateJSON:true
     					}).then(response=>{
     						let res = response.data
		  					console.log(res)
		  					if(res.result==0){
			  					this.$message.success('已发送')
		  					}
		  					else{
		  						this.$message.error('未发送')
		  					}
     					})
     		},
     		isYanzheng(){
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
     		},
     		isTijiao(){
     			this.$http.post('/api/public/checkVerification',{
     						verification:this.verification,
     						mobileNo:this.mobileNo
     					},{
     						emulateJSON:true
     					}).then(response=>{
     						let res = response.data
		  					console.log(res)
		  					if(res.result==0){
			  			this.$http.post('/api/public/modifyPassword',{
     					mobileNo:this.mobileNo,
     				},{
     					emulateJSON:true
     				}).then(response=>{
     					let res = response.data
		  					console.log(res)
		  					if(res.result==0){
			  					this.showAlert=true
			  					this.alertText='修改密码成功'

			  					
		  					}
     				})}else{
     					this.$message.error('验证码错误,无法修改')
     				}
		  				})
     					
     		},
     		closeTip(){
     			this.showAlert=false
     			this.$router.push('login')
     		},



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