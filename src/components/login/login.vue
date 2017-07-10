<template>
	<div class="login">
		<headerTip message="登录" goBack="true"></headerTip>
		<form action="" method="post">
			<div class="usertext">
				<input type="text" placeholder="请输入手机号" maxlength="11" v-model="name" />
			</div>
			<div class="usertext">
				<input type="password" v-model="pwd"  placeholder="请输入密码"/><br />
			</div>
			<div class="sub">
				<input type="button" @click="isLogin" value="登录"/>
			</div>
		</form>
		<div class="link">
			<router-link to="register" class="regis">点此注册</router-link>
			<span>|</span>
			<router-link to="forgetpass" class="forget">忘记密码</router-link>
		</div>
	</div>
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'login',
	  	components:{
	  		headerTip
	  	},

	 	data () {
		    return {
		      	name:'',
		      	pwd:'',
		      	error:''
		    }
	  	},
	  	
	  	computed:{
	  		user () {
	  			return this.$store.state.user
	  		}
	  	},
	  	methods:{
	  		isLogin:function () {
		        //全局安装 npm i json-server -g
		        //启动json服务 json-server .\mock-data.json
	  			this.$http.get('http://localhost:3000/users?username='+this.name+'&password='+this.pwd).then(res => {
	  				if(res.body != null & res.body.length > 0){
                            this.$store.commit('isLogin',res.body[0]);
                            // localStorage.setItem(this.name, this.pwd)
                            this.name=''
                            this.pwd= ''
                            this.$router.push({ path: 'main' })
                        }else{
                            alert('请输入正确的用户名和密码！！！');
                            this.name=''
                            this.pwd= ''
                        }
	  			}).then((error)=> this.error = error)
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
</style>