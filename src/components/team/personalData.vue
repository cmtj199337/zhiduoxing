<template>
	<div class="personalData">
		<headerTip message="个人资料" goBack="true"></headerTip>
		<div class="kong"></div>
		<div class="usertext right">
			<router-link to="goodlist"><span>擅长:关爱服务<img src="./you@2x.png"></span></router-link>
		</div>
		<div class="usertext right">
			<router-link to="goodlist"><span>邮箱:12345678901@qq.com<img src="./you@2x.png"></span></router-link>
		</div>
		<div class="usertext right">
			<router-link to="goodlist"><span>志愿口号：志愿改变人生<img src="./you@2x.png"></span></router-link>
		</div>
		<div class="usertext right">
			<router-link to="goodlist"><span>密码修改<img src="./you@2x.png"></span></router-link>
		</div>
		<div class="kong"></div>
		<div class="usertext right">
			<span><img src="./xingming@2x.png" class="toux"></span>
            <router-link to="goodlist"><p>真实姓名：吴彦祖</p><img src="./you@2x.png"></span></router-link>
        </div>
        <div class="usertext right">
        	<span><img src="./xignbie@2x.png" class="toux"></span>
            <router-link to="goodlist"><p>性别：男</p><img src="./you@2x.png"></span></router-link>
        </div>
        <div class="usertext right">
        	<span><img src="./zhengjian@2x.png" class="toux"></span>
            <router-link to="goodlist"><p>身份证号：12345678901</p><img src="./you@2x.png"></span></router-link>
        </div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'personalData',
		components:{
	  		headerTip
	  	},
		data(){
			return {
				
			}
		},

	}
</script>
<style scoped>
@import '../../styles/usertext.css';
.usertext input{
		margin: 0;
		width: 100%;
	}
.usertext{
	margin: 0 1rem 1.2rem 1rem;
}
.usertext img{
		position: absolute;
		right: 0;
	}

.header2{
    border-bottom: 1px rgba(238, 238, 244, 0.5) solid;
}
.header3{
    border-bottom: 1px rgba(238, 238, 244, 0.5) solid;
   margin: 1rem 0;
}
.header  span p{
		font-size: 1.2rem;
	}
.right img{
		width:0.8rem;
		display: inline-block;
		vertical-align: middle;
		top: 25%;
	}
.tlo{
	margin: 0.8rem;
}
.tlo img{
	width:2.5rem;
	display: inline-block;
	vertical-align: middle;
}
.bottom img{
	width:1rem;
	display: inline-block;
	vertical-align: middle;
	left: 46%;
	top:38%;
}
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
.kong{
	background:#f6f6f9;
	padding: 0.4rem;
	margin: 0.4rem 0;
	}
	
.usertextend textarea{
	border: none; 
	padding: 2.5rem 0;
	width: 100%;

	}
.end{
	margin-left: 67%;
	padding: 0.5rem;
	color:#ccc;
	}
.eee{
	padding: 2rem 0;
	margin:0; 
	background:#f6f6f9;
	text-align: center;
	}
.next{
	border:none;
	border-radius:7px;
	background: #43b7b6;
	color: white;
	font-size: 1.2rem;
	width:60%;
	height:3rem;
	}
.usertext.right span .toux{
	left:0;
	width:5%;
}
.usertext.right p{
	margin-left:1.2rem;
}
</style>