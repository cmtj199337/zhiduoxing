<template>
	<div class="login">
		<headerTip message="登录" goBack="true"></headerTip>
		<form action="" method="post">
			<div class="usertext shengfeng" >
				<i class="s-icon"><img src="./phone.png"></i>
				<input v-validate ="'required|alpha_dash|min:6|max:20'"  type="text" placeholder="账号/手机号" v-model="name" name="userName" maxlength="18" @blur="chenkUser"/>
				<!-- <span class="toast" v-show="errors.has('userName')">请输入账号</span> -->
			</div>
			<div class="usertext">
				<i class="s-icon"><img src="./lock.png"></i>
				<input type="text" v-model="pwd"  placeholder="请输入密码" v-if="checked"/>
				<input type="password" v-model="pwd"  placeholder="请输入密码" v-else/>
				<i class="s-icon right"><img src="./show.png"></i>
				<input type="checkbox"  v-model="checked" >
			</div>
			<div class="sub">
				<input type="button" @click="isLogin" value="登录"/>
			</div>
		</form>
		<div class="link">
			<router-link to="forgetpass" class="forget">忘记密码</router-link>
			<span>|</span>
			<router-link to="register" class="regis">注册账号</router-link>
		</div>
		<alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
	</div>
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'
	import alertTip from '../../components/common/tools/alertTip.vue'

	export default {
	  	name: 'login',
	  	components:{
	  		headerTip,
	  		alertTip
	  	},

	 	data () {
		    return {
		      	name:'',
		      	pwd:'',
		      	error:'',
		      	checked:false,
		      	showAlert: false, //显示提示组件
                alertText: null, //提示的内容
                userType:''
		    }
	  	},
	  	computed:{
	  		user () {
	  			return this.$store.state.user
	  		}
	  	},
	  	created(){
	  		this.$nextTick(function(){
	  			this.name = sessionStorage.getItem('user')
	  		})
	  	},
	  	methods:{
	  		chenkUser(){
	  			if(this.errors.has('userName')){
	  				this.$message.error('请输入正确的账号')
	  			}
	  		},
	  		isLogin() {
	  			if(!this.name || !this.pwd){
	  				this.showAlert = true
                    this.alertText = '用户名密码不能为空'
                    return
	  			}
	  			this.$http.post('/api/public/login',{
	  				'userId':this.name,
	  				'password':this.pwd
	  			},{
	  				emulateJSON:true
	  			}).then(response => {
	  				let res = response.data
	  				let verify = res.data
	  				if(res.result == 0){

	  					localStorage.setItem('access_token',verify.token)
	  					localStorage.setItem('userId',verify.userId)
	  					localStorage.setItem('username',verify.userName)
	  					localStorage.setItem('usertype',verify.userType)
	  					
  						this.$store.commit('isLogin',res.data)
                    	this.$router.push({ path: 'index' })
	  				
	  				}else{
	  					this.showAlert = true
                        this.alertText = '用户名或密码错误'
                        this.pwd = ''
	  				}
	  			}).then(error => error = error)
	  		},
	  		closeTip(){
                this.showAlert = false;
            }
	  	}
	}
</script>

<style scoped>
	@import '../../styles/usertext.css';
	.login{
		text-align: center;
	}
	.link{
		position: absolute;
		bottom: 10%;
		right: 0;left: 0;
		margin: auto;
		font-size: 0.9rem;
		color: #666;
	}
	.link a{
		text-decoration: none;
		color: #666;
	}
	.link span{
		margin: 0 0.5rem 0 0.5rem;
	}
	form{
		margin-top: 30%;
	}
	.right{
		right: 0;
	}
	input[type=checkbox]{
	    position: absolute;
	    right: 0;
	    top: 1rem;
		opacity: 0;
	}
	.shengfeng input{
		width:80% !important;
		margin-bottom: 0.3rem;

	}
	.usertext input{
		margin-bottom: 0.3rem !important;
	}
</style>