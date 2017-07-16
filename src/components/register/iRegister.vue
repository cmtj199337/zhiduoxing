<template>
	<div class="iRegister">
		<headerTip message="个人注册" goBack="true"></headerTip>
        <h4 class="texttitle"><span><img src="./profile.png"></span>个人资料</h4>
		<form action="" method="post">
			<div class="usertext userphoto">
				<a href="javascript:;"><span>头像上传</span><img src="./picture.png"></a>
			</div>
			<div class="usertext">
				<input type="tel" placeholder="请输入手机号" maxlength="11" />
			</div>
			<div class="usertext">
				<input type="number" placeholder="请输入验证码" maxlength="11" />
				<timer-btn ref="timerbtn" class="btn getcode" v-on:run="send" :second="60"></timer-btn>
			</div>
			<div class="usertext">
				<input type="password" style="width:100%" placeholder="请输入新密码(6~12位数字或字母)" /><br />
			</div>
			<div class="usertext">
				<input type="password" placeholder="请确认新密码" /><br />
			</div>
			<div class="usertext">
				<input type="text" placeholder="请输入昵称" /><br />
			</div>
			<div class="usertext right">
				<router-link to="goodlist">
					<span>擅长<img src="./right.png"></span>
				</router-link>
			</div>
			<div class="usertext">
				<input type="text" placeholder="请输入志愿口号" /><br />
			</div>
			<div class="read">
				<i></i><span>我已阅读并授权</span><router-link to="agreement">《志多星用户协议》</router-link>
			</div>
			<div class="sub">
				<input type="button" value="确认提交" @click="confirm"/>
			</div>
		</form>
		<!-- 遮罩、弹框 -->
		<div class="overlay" v-show="isConfirm"></div>
		<div class="popup" v-bind:class="{'show':isConfirm}">
			<p>马上去完善个人信息，可以获得10积分</p>
			<div>
				<router-link to="improve">是</router-link>
				<a href="javascript:;" @click="isConfirm = false">否</a>
			</div>
		</div>
	</div>
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'
	import TimerBtn from '../common/tools/countdown.vue'

	export default {
	  	name: 'iRegister',
	  	components:{
	  		headerTip,
	  		TimerBtn
	  	},
	 	data () {
		    return {
		    	isConfirm:false
		    }
	  	},
	  	methods:{
	  		confirm() {
	  			this.isConfirm = true;
	  		},
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
	.iRegister{padding:0 0 10% 0;}
	.usertext{margin: 0 1rem 1.2rem 1rem;}
	.usertext input{margin: 0;}
	.usertext a{
	    border: 0;
	    width: 100%;
	    height: 2.5rem;
		line-height: 2.5rem;
	    font-size: 1rem;
	    display: inline-block;
	    color: #333;
	    text-indent: 0;
	    position: relative;
	}

	.usertext a img{
		position: absolute;
		right: 0;
	}
	.userphoto img{
		width:2rem;
		display: inline-block;
		vertical-align: middle;
	}
	.right img{
		width:0.8rem;
		display: inline-block;
		vertical-align: middle;
		top: 25%;
	}
	.sub{
		margin-top: 1rem;
	}
	.read{
		margin-top:2rem; 
		text-align: center;
		font-size: 0.8rem;
		color: #C9C9C9;
	}
	.read a{
		color: #43B7B6;
	}
	.read i{
		width: 0.7rem;
		height: 0.7rem;
		display: inline-block;
		border: 1px solid #E7E7E7;
		border-radius: 1rem;
		vertical-align: middle;
		margin-right: 0.2rem;
	}
	.overlay{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;left: 0;
		background: rgba(0,0,0,0.5);
		z-index: 1;
	}
	.popup{
		width: 16rem;
		border: 1px solid #666;
		position: fixed;
		top: 40%;
		left: 50%;
		background: #fff;
		margin-left:-8rem; 
		border-radius: 0.4rem;
		z-index: 10;
		display: none;
	}
	.popup p{
		margin: 1rem;
	}
	.popup div{
		display: -webkit-box;
	    border-radius: 0 0 8px 8px;
	    border-top: 1px solid #e5e5e5;
	    margin-top: 0.5rem;
	    line-height: 2.5;
	    text-align: center;
	}
	.popup a{
		width: 50%;
	    -webkit-box-sizing: border-box;
	    color: #000;
	    display: block;
	    line-height: 2.4;
	}
	.popup a:nth-child(2){
    	border-left: 1px solid #e5e5e5;
	}
	.show{display: block;}
</style>