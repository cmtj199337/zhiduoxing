<template>
	<div class="publishProject">
		<headerTip message="发布项目" goBack="true"></headerTip>
		<div class="kong"></div>
		<div class="header">
            <h4 class="texttitle"><span><img src="./zil@2x.png"></span>项目信息</h4>
        </div>
            <div class="usertext tlo" style="top:-0.5rem">
				<a href="javascript:;">
					<span>项目logo</span>
					<el-upload
					  class="avatar-uploader"
					  action="/api/public/upload"
					  :show-file-list="false"
					  :on-success="handleAvatarSuccess"
					  :before-upload="beforeAvatarUpload">
					  <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <i v-else class="avatar-uploader-icon">
					  	<img src="./tlogo1.png" alt="">
					  </i>
					</el-upload>
				</a>
			</div>
		<div class="usertext">
			<input type="password" placeholder="请输入项目名称" v-model="projectInfo.proNum" /><br />
		</div>
		<div class="usertext">
        	<input type="text" name="" placeholder="请输入联系人姓名"  v-model="projectInfo.contactName">
        </div>
        <div class="usertext">
			<input type="tel" placeholder="请输入联系手机号" maxlength="11"  v-model="projectInfo.contactNumber" />
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
        	<input type="text" name="" placeholder="计划招募人数"  v-model="projectInfo.jnumber">
        </div>
		<div class="kong">
		</div>

        <my-area @select="haha"></my-area>
		<div class="usertext">
       		 <input type="text" name="" placeholder="请填写详细地址，不少于5个字"  v-model="projectInfo.address">
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
       		 <textarea name="" rows="5"  v-model="projectInfo.teamIntro"></textarea>
        </div>
        <div class="end">
        10-500字
        </div>
        <div class="kong">`
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
        	<p @click="isTijiao">发布</p>
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
					proIcon:'',
					area:'',
					contactNumber:null,			//联系人电话
					address:'',
					teamIntro:'',
					jnumber:'',
					contactName:'',
					proNum:'',
				},
				imageUrl:'',
			}
		},
		methods:{
			haha(d){
            	this.projectInfo.area = d
			},
			isTijiao(){
				
			},
			handleAvatarSuccess(res, file) {
	  			let result = res.data
		        this.imageUrl = URL.createObjectURL(file.raw);
		        // this.imageUrl = result
		        this.projectInfo.proIcon = result
		    },
		    beforeAvatarUpload(file) {
		        const isJPG = file.type === 'image/jpeg';
		        const isLt2M = file.size / 1024 / 1024 < 2;

		        if (!isJPG) {
		          this.$message.error('上传头像图片只能是 JPG 格式!');
		        }
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isJPG && isLt2M;
		    },
		}

	}
</script>
<style scoped>
@import '../../styles/usertext.css';
span{
	font-size:1rem;
}
.publishProject{
	background: #fff
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
.tlo{
		border:0;
		border-bottom:1px #F5F5F5 solid;
	}
.tlo a{
		border: 0;
	    width: 3rem;
	    height: 3rem !important;
		line-height: 3rem !important;
	    font-size: 1rem;
	    display: inline-block;
	    color: #333;
	    text-indent: 0;
	    position: relative;
	}
	.avatar-uploader{
		position: absolute;
		right: 0;
		top: 0;
	}
	.avatar-uploader-icon {
	    width: 3rem;
	    height: 3rem;
	    line-height: 3rem;
	    border-radius: 50%;
	    display: inline-block;
	}
	.avatar {
	    width: 3rem;
	    height: 3rem;
	    border-radius: 50%;
	    display: block;
	    position: absolute;
	    right: 0;
	    top: 0;
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