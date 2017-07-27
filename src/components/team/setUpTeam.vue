<template>
	<div class="setUpTeam">
		<headerTip message="创建团队" goBack="true"></headerTip>
        <div class="header2">
            <h4 class="texttitle"><span><img src="./zil@2x.png"></span>团队信息</h4>
        </div>
        <div class="usertext tlo">
			<a href="javascript:;"><span>团队logo<img src="./tlogo1.png"></span></a>
		</div>
		<div class="usertext">
			<input type="password" placeholder="请输入团队口号" /><br />
		</div>
		<div class="usertext bottom">
			<a href="javascript:;"><span>团队种类：中级团队<img src="./xial@2x.png"></span></a>
		</div>
		 <div class="usertext right">
			<a href="javascript:;"><span>服务类型<img src="./you@2x.png"></span></a>
		</div>
		<div class="usertext right">
			<a href="javascript:;"><span>团队类别：党政机关<img src="./you@2x.png"></span></a>
		</div>
		<div class="usertext">
        	<input type="text" name="" placeholder="请输入团队管理员">
        </div>
        <div class="usertext">
			<input type="tel" placeholder="请输入联系电话" maxlength="11" />
		</div>
		<div class="kong">
		</div>
		 <div class="header3">
            <h4 class="texttitle"><span><img src="./dingwei@2x.png"></span>团队地址</h4>
        </div>
        <div class="usertext right">
			<a href="javascript:;"><span>所在地区<img src="./you@2x.png"></span></a>
		</div>
		<div class="usertext right">
			<a href="javascript:;"><span>所在区县<img src="./you@2x.png"></span></a>
		</div>
		<div class="usertext">
       		 <input type="text" name="" placeholder="请填写详细地址，不少于5个字">
        </div>
        <div class="kong">
		</div>
		<div class="header2">
            <h4 class="texttitle"><span><img src="./dingwei@2x.png"></span>团队简介</h4>
        </div>
        <div class="usertextend">
       		 <textarea name="" class="jianjie"></textarea>
        </div>
        <div class="end">
        不超过100字
        </div>
        <div class="eee">
        	<input type="button" name=""  class="next" value="下一步" @click="toAddress({path: '/'})">
        </div>
    </div>		
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'setUpTeam',
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
.tlogo{
		width: 95%;
		border-bottom: 1px rgba(238, 238, 244, 0.5) solid;
		margin: 0 auto;
	}
.tlogo img{
	width: 200%;
	right:0;
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
</style>