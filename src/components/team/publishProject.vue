<template>
	<div class="publishProject">
		<headerTip message="发布项目" goBack="true"></headerTip>
		<div class="kong"></div>
		<div class="header">
            <h4 class="texttitle"><span><img src="./zil@2x.png"></span>项目信息</h4>
        </div>
        <div class="usertext tlo">
			<a href="javascript:;"><span style="font-size:1rem;">项目图片<img src="./tlogo1.png" style="top:-0.5rem"></span></a>
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
			<a href="javascript:;"><span>项目打卡定位 </span><span style="margin-left:0.4rem;color:#858585;">马哥波罗大厦<img src="./you@2x.png"></span></a>
		</div>
		<div class="usertext right">
			<a href="javascript:;"><span>项目打卡区域</span><span style="margin-left:0.4rem;color:#858585;"> 一千米<img src="./you@2x.png"></span></a>
		</div>
        <div class="kong">
		</div>

		<div class="header2">
            <h4 class="texttitle"><span><img src="./jianjie@2x.png"></span>项目介绍</h4>
        </div>
        <div class="usertextend">
       		 <textarea name="" rows="5"></textarea>
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
span{
	font-size:1rem;
}
.usertext input{
		margin: 0;
		width: 100%;
	}
.usertext{
	margin: 0 1rem 0rem 1rem;
	padding: 0.5rem 0;
}
.usertext img{
		position: absolute;
		right: 0;
	}

.header1{
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
.right a span{
	font-size:1rem;
}
.right img{
		width:0.6rem;
		display: inline-block;
		vertical-align: middle;
		top: 32%;
	}
.tlo{
	padding: 1rem 0;
}
.tlo img{
	width:3rem;
	display: inline-block;
	vertical-align: middle;
}
.usertext a{
	border: 0;
	width: 100%;
	height: 2rem;
	line-height: 2rem;
	font-size: 1rem;
	display: inline-block;
	color: #333;
	text-indent: 0;
	position: relative;
	}
.kong{
	background:#F5F5F5;
	padding: 0.3rem;
	}
	
.usertextend textarea{
	border: none; 
	padding:2%;
	width: 96%;
	text-indent: 2em;
	font-size: 0.9rem;
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
	.eee p{
	padding:0.7rem 0;
	width:62%;
	color:white;
	background:#43B7B5;
	border-radius:5px;
	margin:0 auto; 
	font-size:1rem;
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
	.select{
		height: 2rem;
		border: none;
		appearance:none;
		font-size: 1rem;
	}
	.usertext span{
		font-size: 1rem;
	}
</style>