<template>
	<div class="setUpTeam">
		<headerTip message="创建团队" goBack="true"></headerTip>
		<div class="kong"></div>
        <div class="header2">
            <h4 class="texttitle"><span><img src="./zil@2x.png"></span>团队信息</h4>
        </div>
        <div class="usertext tlo" style="top:-0.5rem">
				<a href="javascript:;">
					<span>团队logo</span>
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
			<input type="text" placeholder="请输入团队口号"  v-model="teamInfo.teamSlogan"/><br />
		</div>
		<div class="usertext bottom">
			<span>团队种类：<select class="select" style="width:30%" v-model="teamInfo.teamKind">
				<option value="" selected="selected">初级团队</option>
				<option value="">中级团队</option>
				<option value="">高级团队</option>
			</select><img src="./xial@2x.png"></span>
			<span style="position:relative;">
				<img src="./quanxian.png" style="margin-left:-12%;position:absolute;top:18%;width:9%">
				<span style="margin-left:20%;font-size:0.8rem;color:#CACACA">团队权限介绍</span></span>
		</div>
		<div class="usertext right">
				<a href="javascript:;" @click="showToggle()">
					<span class="good">服务类型<span v-for="item in listSelected">{{item}}</span><img src="./right.png"></span>
				</a>
			</div>
		<div class="usertext right">
			<span>团队类别：<select class="select" style="width:75%" v-model="teamInfo.teamCategory">
				<option value="" selected="selected">机构团队</option>
				<option value="">机构团队</option>
				<option value="">机构团队</option>
			</select><img src="./you@2x.png"></span>
		</div>
		<div class="usertext">
        	<input type="text" name="" placeholder="请输入团队管理员" v-model="teamInfo.teamManager">
        </div>
        <div class="usertext" style="border:0;">
			<input type="tel" placeholder="请输入联系电话" maxlength="11" v-model="teamInfo.mobileNumber" />
		</div>
		<div class="kong">
		</div>
		 <div class="header3">
            <h4 class="texttitle"><span><img src="./dingwei@2x.png"></span>团队地址</h4>
        </div>
        <div class="usertext right">
			<span>所在地区：<select class="select" style="width:75%" v-model="teamInfo.city">
				<option value="" selected="selected">北京市</option>
				<option value="">上海市</option>
				<option value="">河北省</option>
			</select><img src="./you@2x.png"></span>
		</div>
		<div class="usertext right">
			<span>所在区县：<select class="select" style="width:75%" v-model="teamInfo.city">
				<option value="" selected="selected">东城区</option>
				<option value="">朝阳区</option>
				<option value="">海淀区</option>
			</select><img src="./you@2x.png"></span>
		</div>
		<div class="usertext" style="border:0;">
       		 <input type="text" name="" placeholder="请填写详细地址，不少于5个字" v-model="teamInfo.address">
        </div>
        <div class="kong">
		</div>
		<div class="header2">
            <h4 class="texttitle"><span><img src="./jianjie@2x.png"></span>团队简介</h4>
        </div>
        <div class="usertextend">
       		 <textarea name="" rows="5" class="jianjie"></textarea>
        </div>
        <div class="end">
        不超过100字
        </div>
        <div class="eee">
        	<input type="button" name=""  class="next" value="下一步" @click="isTijiao">
        </div>
        <div class="type" v-show="isShow">
			<div class="head_top">
				<div class='tip'>
	            	<p><span @click="showToggle()"><img src="./back.png"></span>服务类型</p>
	        	</div>
        	</div>
			<form action="" method="post">
				<ul>
					<li v-for="item in list">
						<span>{{item.value}}</span>
						<span class="item-check-btn list-btn" :class="{'check':item.checked}" @click="checkFlag(item,3)">
							<svg class="icon icon-ok"></svg>
						</span>
					</li>
				</ul>
			</form>
		</div>
    </div>		
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	 import UploadImg from '../../components/common/tools/uploadImg.vue'
	export default{

		name:'setUpTeam',
		components:{
	  		headerTip,
	  		 UploadImg,
	  	},
		data(){
			return {
				teamInfo:{				
					mobileNumber:'',
					serverType:'',			//服务类型
					teamCategory:'',		//团队类别
					teamKind:'',		//团队种类（大小）
		        	teamManager:'',			//团队管理员
		        	address:'',
					teamIntro:'',
					city:'',
					teamSlogan:'',	
				},
				imageUrl:'',
				isShow:false,
				list:[],
				
			}
		},
		methods:{
			isTijiao(){

			},
			 checkFlag(item,way){
	  			if(typeof item.checked == 'undefined'){
	  				this.$set(item,'checked',true);

	  				this.teamInfo.serverType += item.key+','
	  				this.arr += item.value+','
		            this.listSelected = this.arr.split(',').slice(0,-1)

	  				let count = 0
	  				this.list.forEach((item,index)=>{
	  					if(item.checked == true){
	  						count++
	  					}
	  				})
	  				if(count>=way){
	  					this.isShow = false;
	  					this.wrap = true;
	  				}
	  			}else{
	  				item.checked = !item.checked
	  			}
	  		},
	  		showToggle(){
            	this.isShow = !this.isShow
                if(this.isShow){
                    this.wrap = false  
                }else{  
                    this.wrap = !this.wrap   
                }  
            },
	  		handleAvatarSuccess(res, file) {
	  			let result = res.data
	  			
		        this.imageUrl = URL.createObjectURL(file.raw);

		        //this.imageUrl = result
		        this.teamInfo.teamIcon = result
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
		    }
		}

	}
</script>
<style scoped>
@import '../../styles/usertext.css';
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
	    margin-top:0.2rem;
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
.tlo{
		margin:0 1rem;
		padding: 0.9rem 0 0 0;
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
		width:0.6rem;
		display: inline-block;
		vertical-align: middle;
		top: 32%;
	}

.bottom img{
	width:1rem;
	display: inline-block;
	vertical-align: middle;
	left: 45%;
	top:42%;
}
.usertext a{
	border: 0;
	width: 100%;
	height:2rem;
	line-height: 2rem;
	font-size: 1rem;
	display: inline-block;
	color: #333;
	text-indent: 0;
	position: relative;
	}
.kong{
	background:#f5f5f5;
	padding: 0.4rem;
	}
	
.usertextend textarea{
	border: none;
	width: 96%;
	padding: 2%;
	text-indent: 2em;
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
	.select{
		height: 2rem;
		border: none;
		appearance:none;
		font-size: 1rem;
	}
	.usertext span{
		font-size: 1rem;
	}
	.head_top{
	    width: 100%;
	    font-size:1.2rem;
	    font-family: arial,'microsoft yahei';
	    color: #333;
	    text-align: center;
	    padding: 0.5rem 0;
	    border-bottom: 0.5px solid #c9c9c9;
	}
	.tip{
	    width: 96%;
	    margin:0.5rem auto;
	    position: relative;
	}
	.tip span{
	    width: 0.7rem;
	    display: inline-block;
	    vertical-align: middle;
	    position: absolute;
	    left: 0.5rem;
	}
	.tip span img{
	    width: 100%;
	}
	.tip p{
	    vertical-align: middle;
	    line-height: 1;
	}
	.type{
		width: 100%;
		font-size: 1rem;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		background: #fff;

	}
	.type form{
		padding-top: 10%;
    	border-top: 0.6rem solid #f5f5f5;
	}
	.type li{ 
		width: 92%;
		margin: 0 auto;
	    border-bottom: 1px solid #dcdcdc;
	    padding-bottom: 1rem;
	    margin-bottom: 1rem;
	    text-align: left;
	    color: #333;
		line-height: 1;
		display: block;
	}
	.type li span{
		vertical-align: middle;
	}
	.type li input{
		vertical-align: sub;
		float: right;
	}
</style>