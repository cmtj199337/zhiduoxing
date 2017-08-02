<template>
	<div class="personalData">
		<headerTip message="个人资料" goBack="true"></headerTip>
		<div class="kong"></div>
		<div class="usertext right" style="margin-top:0.3rem">
			<p>昵称</p><span><input type="text" placeholder="小鱼干"><img src="./you@2x.png"></span>
		</div>
		<div class="usertext right">
			<p>擅长</p><span><input type="text" placeholder="关爱服务"><img src="./you@2x.png"></span>
		</div>
		<div class="usertext right">
			<p>邮箱</p><span><input type="text" placeholder="12345678901@qq.com"><img src="./you@2x.png"></span>
		</div>
		<div class="usertext right">
			<p>志愿口号</p><span><input type="text" placeholder="志愿改变人生"><img src="./you@2x.png"></span>
		</div>
		<div class="usertext right" @click="toAddress({path: '/modifypassword'})">
			<p>密码修改</p><span><img src="./you@2x.png"></span>
		</div>
		<div class="kong"></div>
		<div class="usertext right">
			<span><img src="./xingming@2x.png" class="toux"></span>
           <p>真实姓名</p><span><input type="text" placeholder="吴彦祖"></span>
        </div>
        <div class="usertext right">
        	<span><img src="./xignbie@2x.png" class="toux"></span>
         <p> 性别</p><span><input type="text" placeholder="男"></span>
        </div>
        <div class="usertext right" style="margin-bottom:0;border:none;">
        	<span><img src="./zhengjian@2x.png" class="toux"></span>
            <p>身份证号</p><span><input type="text" placeholder="12345678901"></span>
        </div>
        <div class="tijiao"><p>提交</p></div>
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
		methods:{
			toAddress(path){
                this.$router.push(path)
            },
            showInfo(){
            	this.$http.get('',)
            }
		}
	}
</script>
<style scoped>
@import '../../styles/usertext.css';
.usertext input{
	margin: 0;
	width: 100%;
}
.usertext{
	margin: 0 1rem 0.4rem 1rem;
}
.usertext img{
	position: absolute;
	right: 0;
}
.usertext input{
	text-align: right;
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
	width:0.6rem;
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
.right{
	display:flex;
}
.right p{
	width:35%;
	font-size:0.9rem;
	line-height:2.5rem;
	margin-left:1.2rem;
}
.right  a span{
	margin-right:0.9rem;
}
.usertext a{
	border: 0;
	width: 130%;
	height: 2.5rem;
	line-height: 2.5rem;
	font-size: 1rem;
	display: inline-block;
	color: #333;
	text-indent: 0;
	position: relative;
	text-align:right;
	}
.kong{
	background:#F5F5F5;
	padding: 0.4rem;
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
	background:#F5F5F5;
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
.tijiao{
	background:#F5F5F5;
	height:12rem;
	padding:2rem 0;
}
.tijiao p{
	width:60%;
	background:#43B7B5;
	margin:0 auto;
	padding:0.7rem 0;
	border-radius:5px;
	text-align:center;
	color:white;
	font-size:1rem;

}

</style>