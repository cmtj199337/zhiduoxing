<template>
	<div class="iRegister">
		<headerTip message="个人注册" goBack="true"></headerTip>
        <h4><img src="" alt="">个人资料</h4>
		<form action="" method="post">
			<div class="usertext">
				<a href=""><span>头像上传</span><img src="../../images/lock_1.png"></a>
			</div>
			<div class="usertext">
				<input type="tel" placeholder="请输入手机号" maxlength="11" />
			</div>
			<div class="usertext">
				<input type="number" placeholder="请输入验证码" maxlength="11" />
				<input id="aaa" type="button" value="获取验证码">
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
			<div class="usertext">
				<router-link to="goodlist"><span>擅长</span><img src="../common/header/back.png"></router-link>
			</div>
			<div class="usertext">
				<input type="text" placeholder="请输入志愿口号" /><br />
			</div>
			<div class="read">
				<i></i><span>我已阅读并授权</span><router-link to="agreement">《志多星用户协议》</router-link>
			</div>
			<div class="sub">
				<input type="button" value="确认提交" />
			</div>
		</form>
		<!-- 遮罩、弹框 -->
		<div class=""></div>
		<div class="popup">
			<p>马上去完善个人信息，可以获得10积分</p>
			<div>
				<a href="javascript:;">是</a>
				<a href="javascript:;">否</a>
			</div>
		</div>
	</div>
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'iRegister',
	  	components:{
	  		headerTip
	  	},
	 	data () {
		    return {
		    	
		    }
	  	},
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
	    font-size: 1rem;
	    display: inline-block;
	    color: #333;
	    text-indent: 0;
	    position: relative;
	}

	.usertext a img{
		transform: rotate(180deg);
		position: absolute;
		right: 0;
	}
	.iRegister h4{
		font-size: 1rem;
		font-weight: normal;
		margin: 1.2rem 1rem 1.2rem 1rem;
	}
	.usertext img{
		width:1.5rem;
		display: inline-block;
		vertical-align: middle;
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
		position: absolute;
		top: 0;left: 0;
		background: rgba(0,0,0,0.5);

	}
	.popup{
		width: 16rem;
		border: 1px solid #666;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left:-8rem; 
		border-radius: 0.4rem;
		padding: 1rem 1rem 0 1rem;
		display: none;
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
		color: #A7DD87;
    	border-left: 1px solid #e5e5e5;
	}
	.show{display: block;}
</style>