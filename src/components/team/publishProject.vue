<template>
	<div class="publishProject">
		<headerTip message="发布项目" goBack="true"></headerTip>
		<div class="header">
            <h4 class="texttitle"><span><img src="./zil@2x.png"></span>项目信息</h4>
        </div>
        <div class="usertext tlo">
			<a href="javascript:;"><span>项目图片<img src="./tlogo1.png"></span></a>
		</div>
		<div class="usertext">
			<input type="password" placeholder="请输入项目名称" /><br />
		</div>
		<div class="usertext">
        	<input type="text" name="" placeholder="请输入联系人姓名">
        </div>
        <div class="usertext">
			<input type="tel" placeholder="请输入联系手机号" maxlength="11" />
		</div>
		<div class="usertext right">
			<a href="javascript:;"><span>服务类别:关爱服务<img src="./you@2x.png"></span></a>
		</div>
		<div class="usertext right">
			<a href="javascript:;"><span>招募时间<img src="./you@2x.png"></span></a>
		</div>
		<div class="usertext right">
			<a href="javascript:;"><span>项目时间<img src="./you@2x.png"></span></a>
		</div>
		<div class="usertext">
        	<input type="text" name="" placeholder="计划招募人数">
        </div>
		<div class="kong">
		</div>

        <my-area @select="haha"></my-area>
		<div class="usertext">
       		 <input type="text" name="" placeholder="请填写详细地址，不少于5个字">
        </div>
        <div class="usertext right">
			<a href="javascript:;"><span>项目打卡定位 马哥波罗大厦<img src="./you@2x.png"></span></a>
		</div>
		<div class="usertext right">
			<a href="javascript:;"><span>项目打卡区域 一千米<img src="./you@2x.png"></span></a>
		</div>
        <div class="kong">
		</div>

		<div class="header2">
            <h4 class="texttitle"><span><img src="./jianjie@2x.png"></span>项目介绍</h4>
        </div>
        <div class="usertextend">
       		 <textarea name=""></textarea>
        </div>
        <div class="end">
        不超过100字
        </div>
        <div class="kong">
		</div>

		<div class="header3">
            <h4 class="texttitle"><span><img src="./baoxian@2x.png"></span>保险选择</h4>
        </div>
        <div class="usertext right">
			<a href="javascript:;"><span>团队购买<img src="./you@2x.png"></span></a>
		</div>
		<div class="usertext right">
			<a href="javascript:;"><span>个人购买<img src="./you@2x.png"></span></a>
		</div>
		<div class="usertext right">
			<a href="javascript:;"><span>不购买</span></a>
		</div>
		<div class="eee">
        	<p>发布</p>
        </div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	import MyArea from '../../components/common/tools/area2.vue'
	export default{

		name:'publishProject',
		components:{
	  		headerTip,
	  		MyArea
	  	},
		data(){
			return {
				projectInfo:{
					area:'',
				}
			}
		},
		methods:{
			haha(d){
            	this.teamInfo.area = d
			},
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
	margin: 0 1rem 1.2rem 1rem;
}
.usertext img{
		position: absolute;
		right: 0;
	}

.header1{
    border-bottom: 1px rgba(238, 238, 244, 0.5) solid;
}
.header2{
    border-bottom: 1px rgba(238, 238, 244, 0.5) solid;
   margin: 1rem 0;
}
.header3{
    border-bottom: 1px rgba(238, 238, 244, 0.5) solid;
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
	padding: 2.2rem 0;
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
	.eee p{
	padding:0.8rem 0;
	width:60%;
	color:white;
	background:#43B7B5;
	border-radius:5px;
	margin:0 auto; 
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