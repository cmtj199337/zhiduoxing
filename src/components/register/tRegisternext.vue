<template>
	<div class="tRegisternext">
		<headerTip message="完善信息" goBack="true"></headerTip>
        <div class="header">
       		<span class="ire" style="z-index:1;">
				<img src="./t3.png">
				<p style="font-size:1rem;padding:0.4rem">团队信息</p>
			</span>
			<p class="hx"></p>
			<span class="tre">
				<img src="./t22.png">
				<p style="font-size:1rem;padding:0.4rem">团队法人/负责人信息</p>
			</span>
        </div>
         <div class="header2">
            <h4 class="texttitle"><span><img src="./t1.png"></span>注册信息</h4>
        </div>
         <div class="usertext">
			<input type="text" name="contactName" v-validate="'required'" placeholder="请输入团队管理员姓名" @blur="checkForm('contactName','请输入正确的姓名')" v-model="dataList.contactName"/>
		</div>
		<div class="usertext">
			<input type="tel" name="contactMobileNo" v-validate="'required|mobile'" max-length="11" placeholder="请输入团队管理员手机号" maxlength="11" v-model="dataList.contactMobileNo" @blur="checkForm('contactMobileNo','请输入正确的手机号')"/>
		</div>
		 <div class="usertext">
			<input type="text" name="contactMail" v-validate="'required|email'" placeholder="请输入联系人邮箱" v-model="dataList.contactMail" @blur="checkForm('contactMail','请输入正确邮箱')"/>
		</div>
		 <div class="usertext" style="margin-bottom:0">
			<input type="text" name="managerName" v-validate="'required'" placeholder="请输入团队法人/负责人姓名" v-model="dataList.managerName" @blur="checkForm('managerName','请输入正确的姓名')"/>
		</div>
		<div class="kong"></div>

		<h4 class="texttitle"><span style="margin-bottom:0.1rem"><img src="./type.png"></span>证件类型</h4>
		<ul class="improve">
			<el-radio-group v-model="dataList.managerIdType">
				<li v-for="item in typelist"><el-radio :label="item.key">{{item.value}}</el-radio></li>
			</el-radio-group>
		</ul>
		
        <div class="usertext" style="border-top:1px solid #f5f5f5">
			<input v-if="dataList.managerIdType == 1" type="text" name="sfz" v-validate="'required|regIdCard'" v-model="dataList.managerIdNo" placeholder="请输入团队法人/负责人证件号" @blur="checkForm('sfz','身份证格式不正确')" key="sfz"/>
			<input v-else-if="dataList.managerIdType == 2" type="text" name="gatxz" v-validate="'required|isHKMacao'" v-model="dataList.managerIdNo" placeholder="请输入团队法人/负责人证件号" @blur="checkForm('gatxz','港澳通行证格式不正确')" key="gatxz"/>
			<input v-else-if="dataList.managerIdType == 3" type="text" name="hz" v-validate="'required|isPassport'" v-model="dataList.managerIdNo" placeholder="请输入团队法人/负责人证件号" @blur="checkForm('hz','护照格式不正确')" key="hz"/>
			<input v-else-if="dataList.managerIdType == 4" type="text" name="jgz" v-validate="'required|jsJgz'" v-model="dataList.managerIdNo" placeholder="请输入团队法人/负责人证件号" @blur="checkForm('jgz','军官证格式不正确')" key="jgz"/>
			<input v-else-if="dataList.managerIdType == 5" type="text" name="xsz" v-validate="'required|isXsz'" v-model="dataList.managerIdNo" placeholder="请输入团队法人/负责人证件号" @blur="checkForm('xsz','学生证格式不正确')" key="xsz"/>
		</div>

		<div class="usertext">
			<input type="text" name="managerMobileNo" v-validate="'required|mobile'" v-model="dataList.managerMobileNo" placeholder="请输入团队法人/负责人手机号" maxlength="11" @blur="checkForm('managerMobileNo','请输入正确的手机号')"/>
		</div>
		 <div class="usertext">
			<input type="text" name="managerMail" v-validate="'required|email'" v-model="dataList.managerMail" placeholder="请输入团队法人/负责人邮箱" @blur="checkForm('managerMail','请输入正确的邮箱')"/>
		</div>
		<div class="end">
			<div class="chuan chuan1">
				<el-upload
				  class="avatar-uploader"
				  action="/api/public/upload"
				  :show-file-list="false"
				  :on-success="handleAvatarSuccess"
				  :before-upload="beforeAvatarUpload">
				  <img v-if="imageUrl" :src="imageUrl" class="avatar">
				  <i v-else class="avatar-uploader-icon">
				  	<img src="./tianjia.png" alt="">
				  	<p>上传资质照片</p>
				  </i>
				</el-upload>
			</div>
			<div class="chuan chuan2">
				<el-upload
				  class="avatar-uploader"
				  action="/api/public/upload"
				  :show-file-list="false"
				  :on-success="handleAvatar"
				  :before-upload="beforeAvatarUpload">
				  <img v-if="image" :src="image" class="avatar">
				  <i v-else class="avatar-uploader-icon">
				  	<img src="./tianjia.png" alt="">
				  	<p>上传资质照片</p>
				  </i>
				</el-upload>
			</div>
		</div>
		<div class="ee"><p>亲，提交资质证明，可以提升团队级别噢</p></div>
		<div class="eee">
        	<input type="button" @click="submitInfo" class="next" value="完成">
        </div>
    </div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'

	export default{

		name:'tRegisternext',
		components:{
	  		headerTip
	  	},
		data(){
			return {
				dataList:{
					teamId:'',					//团队ID
					contactName:'',				//联系人姓名
					contactMobileNo:'', 		//联系人手机号
					contactMail:'', 			//邮箱
					managerName:'', 			//团队法人/负责人姓名
					managerIdType:1,  			//证件类型
					managerIdNo:'',				//团队法人/负责人证件号码
					managerMobileNo:'', 		//团队法人/负责人手机号
					managerMail:'', 			//团队法人/负责人邮箱
					picture1:'', 				//资质照片1
					picture2:'' 				//资质照片2
				},
				typelist:[],
				imageUrl:'',
				image:''
			}
		},
		created(){
			this.dataList.teamId = this.$route.query.teamId
		},
		mounted(){
			this.getType();
		},
		methods:{
			checkForm(name,filed){
	  			if(this.errors.has(name)){
	  				this.$message.error(filed)
	  			}
	  		},
            getType(){
            	this.$http.get('/api/public/getCommonList',{
            		params:{
            			type:'ID_TYPE'
            		}
            	}).then(response => {
            		let res = response.data
            		if(res.result == 0){
            			this.typelist = res.data
            		}
            	})
            },
            handleAvatarSuccess(res, file) {
	  			let result = res.data
		        this.imageUrl = URL.createObjectURL(file.raw);
		        this.dataList.picture1 = result
		    },
		    handleAvatar(res, file){
		    	let result = res.data
		        this.image = URL.createObjectURL(file.raw);
		        this.dataList.picture2 = result
		    },
		    beforeAvatarUpload(file) {
		        const isLt2M = file.size / 1024 / 1024 < 2;
		        if (!isLt2M) {
		          this.$message.error('上传图片大小不能超过 2MB!');
		        }
		        return isLt2M;
		    },
		    submitInfo(){
		    	let arr = JSON.parse(JSON.stringify(this.errors)).errors
		    	if(this.dataList.contactMobileNo == '' || this.dataList.teamId == '' || this.dataList.picture1 == '' || this.dataList.managerMobileNo == '' || this.dataList.managerIdNo == ''){
		    		this.$message.error('请完善信息')
		    	}else if(arr.length>0){
		    		this.$message.error(arr[0].msg)
		    	}else{
		    		this.$http.post('/api/public/completeTeam',
			    		this.dataList
			    	).then(response => {
			    		let res = response.data
			    		if(res.result == 0){
			    			this.$message.success('创建成功')
			    			setTimeout(()=>{
			    				this.$router.push('login')
			    			},500)
			    		}
			    	})
		    	}
		    }
		}
	}

</script>
<style scoped>
@import '../../styles/usertext.css';
.tRegisternext{
	background: #fff;
}
.usertext{
	margin: 0 1rem 0rem 1rem;
	padding: 0.5rem 0;
}
.usertext input{
	width: 100%;
	border: 0;
    margin: 0 auto;
    /* margin-left: 1.5rem; */
    height: 2rem;
    font-size: 1rem;
	}
	.leixing ul li span{
		font-size:1rem;
	}
.header{
    
    background-color:#F5F5F5;
    display:flex;
    position: relative;
}

.header span{
	width:50%;
	display: inline-block;
	text-align: center;
	margin: 1rem 0;
	position:relative;
	}
.header  span img{
	width: 30%;
	margin: 0 auto;
}
.hx{
	width: 10rem;
	position: absolute;
	left: 7.3rem;
	top:40%;
	background:#43b7b6;
	padding:0.1rem;

}

.kong{
	padding: 0.3rem 0;
	background:#f5f5f5;

}
.leixing{
	
	border-bottom:1px #f5f5f5 solid;
}
.leixing ul{
	
}
	.leixing ul li{
		display:flex;
		text-align:center;
		margin:0.4rem 0; 
	}
.leixing ul li  img{
		width: 16%;
		display:inline;
		vertical-align:middle;
		margin-right:0.4rem;
	}
	.leixing ul li span{
		width:33%;
		margin-left:0.2rem;
	}
.end{
	margin: 0.5rem 0 0 0;
	display: flex;
}
.end .chuan{
	display: inline-block;
	width: 45%;
	margin: auto 3.33%;
	position: relative;
	text-align: center;
	border-radius:1rem;
}
.end .chuan1{
	margin-right: 0;
}
.end img{
	height: 9rem;
}
.end p{
	position:absolute;
	left:26%;
	top:80%;
	color:rgba(33, 31, 31, 0.25);
	font-size: 1rem;
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
.ee p{
	text-align: center;
	font-size:0.7rem;
	color:#43B7B5;
	padding:0.8rem 0;
}
.improve{
	margin: 1rem 0 1rem 2rem;
}
.improve li{
    width: 32%;
    display: inline-block;
    text-align: left;
    font-size: 1rem;
    color: #666;
    height: 2rem;
    line-height: 2rem;
}
</style>