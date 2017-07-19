<template>
	<div class="improve">
		<headerTip message="个人注册" goBack="true"></headerTip>
		<form action="" method="post">
			<div class="usertext">
				<i class="s-icon"><img src="./name.png"></i><span>姓名</span>
				<input type="text" placeholder="请输入真实姓名" />
			</div>
			<div class="usertext">
				<i class="s-icon"><img src="./sex.png"></i><span>姓别</span>
				<input type="text"/>
			</div>
			<h4 class="texttitle"><span><img src="./type.png"></span>证件类型</h4>
			<ul>
				<li>
					<span class="item-check-btn">
						<svg class="icon icon-ok"></svg>
					</span>
					<span>身份证</span>
				</li>
				<li><span class="item-check-btn">
						<svg class="icon icon-ok"></svg>
					</span>
					<span>护照</span></li>
				<li><span class="item-check-btn">
						<svg class="icon icon-ok"></svg>
					</span>
					<span>军官证</span></li>
				<li><span class="item-check-btn">
						<svg class="icon icon-ok"></svg>
					</span>
					<span>学生证</span></li>
				<li><span class="item-check-btn">
						<svg class="icon icon-ok"></svg>
					</span>
					<span>港澳通行证</span></li>
			</ul>
			<div class="usertext">
				<input type="text" placeholder="请输入证件号码" maxlength="18">
			</div>
			<div class="usertext">
				<input type="text" placeholder="请输入邮箱">
			</div>
			<div class="sub">
				<input type="button" value="提交"/>
			</div>
		</form>
	</div>
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'improve',
	  	components:{
	  		headerTip
	  	},
	 	data () {
		    return {
		    	
		    }
	  	},
	  	methods:{
	  		
	  	}
	}
</script>

<style scoped>
	@import '../../styles/usertext.css';
	form{
		margin-top: 2rem;
	}
	.usertext span{
		font-size: 1rem;
		color: #333;
		padding-left: 1.2rem;
	}
	.improve ul{
		margin-bottom: 0.5rem;
		margin: 0 1rem 1.2rem 1rem;
	}
	.improve ul li{
	    width: 32%;
	    display: inline-block;
	    text-align: left;
	    font-size: 1rem;
	    color: #666;
	    padding-bottom: 0.5rem;
	}
	.usertext{margin: 0 1rem 1.2rem 1rem;}
</style>