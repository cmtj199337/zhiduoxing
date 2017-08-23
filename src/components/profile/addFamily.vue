<template>
  <div class="myFamilys">
   <headerTip message="我的家庭" goBack="true"></headerTip>

	<div class="header">
		<div class="usertext userphoto" style="padding:0.8rem 0 0 0">
				<a href="javascript:;" style="top:-0.5rem"><span>头像上传</span>
					<!-- <upload-img v-model="picture"></upload-img> -->
					<el-upload
					  class="avatar-uploader"
					  action="/api/public/upload"
					  :show-file-list="false"
					  :on-success="handleAvatarSuccess"
					  :before-upload="beforeAvatarUpload">
					  <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <i v-else class="avatar-uploader-icon">
					  	<img src="./picture.png" alt="">
					  </i>
					</el-upload>
				</a>
			</div>
		<div class="t1">
			<i><img src="./name.png" style="width:1.1rem"></i>
			<p>账号</p><input type="text"   v-model="userinfo.accountNo" >
		</div>
		<div class="t1">
			<i><img src="./lock.png" style="width:1.1rem"></i>
			<p>密码</p><input type="text"  v-model="userinfo.password">
		</div>
		<div class="t1">
			<i><img src="./gere.png" alt=""></i>
			<p>昵称</p><input type="text"  v-model="userinfo.nickName">
		</div>
		<div class="t1">
			<i><img src="./sex.png" alt=""></i>
			<p>性别</p>
			<el-radio-group v-model="sex">
				<el-radio :label="1">男</el-radio>
				<el-radio :label="2">女</el-radio>
			</el-radio-group>
		</div>
	</div>	
	<div class="jieshu">
		<p @click="isTijiao">提交</p>
		</div>
		<alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
  </div>  
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'
		import alertTip from '../../components/common/tools/alertTip.vue'

	export default {
	  	name: 'myFamilys',
	  	components:{
	  		headerTip,
	  		alertTip

	  	}, 
	 	data () {
		    return {
		    	sex:1,
		    	imageUrl:'',
		    	userinfo:{

		        	headIcon:'',					//头像
		        	accountNo:'',					//账号
		        	password:'',					//密码
		        	nickName:'',					//昵称
		     		
		        },
		        showAlert:false,
		    	alertText:''
		    }
	  	},
	  	methods:{
	  		handleAvatarSuccess(res, file) {
	  			let result = res.data
		        this.imageUrl = URL.createObjectURL(file.raw);
		        // this.imageUrl = result
		        this.userinfo.headIcon = result
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
		    isTijiao(){
		    	if(!this.userinfo.headIcon||!this.userinfo.accountNo||!this.userinfo.password||!this.userinfo.nickName){
		    			this.$message.error('信息未填完整')
		    	}else{
		    		this.$http.post('/api/public/checkAccountNo',{accountNo:this.userinfo.accountNo},{
            		emulateJSON:true
            	}).then(response=>{
            		let res=response.data
            	if(res.result==0){
    				this.$http.post('/api/public/checkNickName',{nickName:this.userinfo.nickName},{
	    				emulateJSON:true
	    			}).then(response=>{
	    				let res =response.data
	    				if(res.result==0){
	    			this.$http.post('/api/private/addFamilyMember',this.userinfo,this.sex).then(response=>{
			    		let res=response.data
			    		if(res.result==0){
			    		this.showAlert=true
	    				this.alertText='添加成功'
			    		}
			    	})	
	    				}else{
	    					this.$message.error('昵称已存在')
	    				}
	    			})

            		}else{
            			this.$message.error('账号已存在')
            		}
            	})
		    	
		    }
		  },
		  closeTip(){
            	this.showAlert=false
            	 this.$router.push('myFamily')
            },

	  	}
	}
</script>

<style scoped>
.myFamilys{
	background: #F5F5F5;
	height: 100%;
}
.header{
	margin: 1rem 0;
}
.userphoto{
		padding:0.5rem 0;
	}
.userphoto a{
	border: 0;
    width: 100%;
    height: 3rem;
	line-height: 3rem;
    font-size: 1rem;
    display: inline-block;
    color: #333;
    text-indent: 0;
    position: relative;
	}

.t1{
	padding: 0.4rem 0.5rem;
	border-bottom:1px solid rgba(235,234,234,0.48);
	background: #FFFFFF	;
	display:flex;
}
.t1 p{
	margin-left: 0.5rem;
	font-size: 1rem;
	width: 20%;
}
.t1 input{
	font-size: 1rem;
	width: 70%;
	text-align: right;
	border:none;
}
.t1 input::-webkit-input-placeholder{
	text-align: right;
}
.t1 i{
	margin-top: 0.8rem;
	width: 1.3rem;
	height: 1.6rem;
}
.t2{
	background: #F5F5F5;
	position:relative;
}
.t2 img{
	position:absolute
}
.t2 p{
	position:absolute;
}
.t{
	line-height: 3rem;
}
.t1{
	line-height: 3rem;
}
.jieshu{
	padding:0.8rem 0;
	text-align: center;
	background: #F5F5F5;
}
.jieshu p{
	background: #43B7B6;
	color:#fff;
	font-size:1rem;
	padding: 0.6rem 5rem;
	border-radius: 0.4rem;
	margin:0 auto; 
	width:20%;
}
.el-radio-button__inner, .el-radio-group, .el-radio__input{
	line-height: 3rem;
}
.usertext {
	margin: 0;
    padding: 0.8rem;
    border-bottom: 1px solid #F5F5F5;
    text-align: left;
    position: relative;
    background: #fff;
}
.usertext a{
    border: 0;
    width: 85%;
    height: 2.8rem;
    line-height: 2.8rem;
    font-size: 1rem;
    display: inline-block;
    color: #333;
    text-indent: 0;
    position: relative;
    left:2rem;
}
.usertext img{
	position: absolute;
}
.tlo img{
    width: 3rem;
    display: inline-block;
    vertical-align: middle;
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
</style> 