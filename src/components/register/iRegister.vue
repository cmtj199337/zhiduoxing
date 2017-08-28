<template>
	<div class="iRegister">
		<headerTip message="个人注册" goBack="true"></headerTip>
		<div class="kong"></div>
        <h4 class="texttitle"><span><img src="./t1.png"></span>个人资料</h4>
		<form method="post" v-show="wrap" enctype="multipart/form-data">
			<div class="usertext userphoto" style="padding:0.8rem 0 0 0">
				<a href="javascript:;" style="top:-0.5rem"><span>头像上传</span>
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
			<div class="usertext">
				<input type="tel" v-validate ="'required|mobile'" name="mobile" placeholder="请输入手机号" maxlength="11" v-model="userinfo.mobileNo" @blur="isRegister" />
			</div>
			<!-- <div class="usertext">
				<input type="tel" v-validate ="'required|mobile'" name="mobile" placeholder="请输入手机号" maxlength="11" v-model="userinfo.mobileNo"/>
			</div> -->
			<div class="usertext">
				<input type="number" @change="checkCode" v-model="code" placeholder="请输入验证码" maxlength="6" style="width:56%" />
				<timer-btn ref="timerbtn" class="btn getcode" v-on:run="send()" :second="60"></timer-btn>
			</div>
			<div class="usertext">
				<input type="password" name="password" v-validate="'required'" style="width:100%" placeholder="请输入密码(6~12位数字或字母)" v-model="userinfo.password" />
			</div>
			<div class="usertext">
				<input type="password" @blur="checkForm('pwdagain','两次输入密码不一致')" v-validate="'confirmed:password'" name="pwdagain" placeholder="请确认密码" />
			</div>
			<div class="usertext">
				<input type="text" v-validate="'required|max:10'" @blur="checkForm('nickname','请输入正确昵称')" name="nickname" placeholder="请输入昵称" v-model="userinfo.nickName" />
			</div>
			<div class="usertext right">
				<a href="javascript:;" @click="showToggle">
					<span class="good">擅长
					<!-- <span v-for="item in goodSelect">{{item.value}}</span> -->
					<img src="./right.png"></span>
				</a>
			</div>
			<div class="read">
				<span>
					<span class="item-check-btn" :class="{'check':items}" @click="alocked">
						<svg class="icon icon-ok"></svg>
					</span>
				</span>
				
				<span>我已阅读并授权</span><router-link to="agreement">《志多星用户协议》</router-link>
			</div>
			<div class="sub">
				<input v-if="items == true" type="button" value="确认提交" @click="confirm"/>
				<input v-else-if="items == false" type="button" style="background:#ccc" value="确认提交"/>
			</div>
		</form>
		<!-- 遮罩、弹框 -->
		<!-- <div class="overlay" v-show="isConfirm"></div>
		<div class="popup" v-bind:class="{'show':isConfirm}">
			<p>马上去完善个人信息，可以获得10积分</p>
			<div>
				<router-link to="improve">是</router-link>
				<a href="javascript:;" @click="registerGo">否</a>
			</div>
		</div> -->
		<!-- goodlist选项 -->
		<div class="goodlist" v-show="isShow">
			<div class="head_top">
				<div class='tip'>
	            	<p><span @click="showToggle"><img src="./back.png"></span>擅长</p>
	        	</div>
        	</div>
			<form action="" method="post">
				<ul>
					<li v-for="item in list">
						<span>{{item.value}}</span>
						<span class="item-check-btn list-btn" :class="{'check':item.checked}" @click="checkFlag(item)">
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
	import TimerBtn from '../common/tools/countdown.vue'
	export default {
	  	name: 'iRegister',
	  	components:{
	  		headerTip,
	  		TimerBtn
	  	},
	 	data () {
		    return {
		    	isConfirm:false,
		    	items:false,
		        imageUrl:'',
		        list:[],
		        userinfo:{
		        	headIcon:'',					//头像
		        	mobileNo:'',					//手机号
		        	password:'',					//新密码
		        	nickName:'',					//昵称
		        	goodAt:''						//擅长字符串
		        },
		        goodSelect:[],
		        isShow:false,
		        wrap:true,
		        arr:'',
		        code:''
		    }
	  	},
	  	computed:{
	  		limit(){
	  			return this.goodSelect.length
	  		},
	  		control(){
	  			if(this.limit >= 3){
	  				this.isShow = false
	  				this.wrap = true
	  			}
	  		}
	  	},
	  	mounted(){
	  		this.$nextTick(function(){
	  			this.goodList()
	  			this.$refs.timerbtn.setDisabled(true);
	  		})
	  	},
	  	methods:{
	  		checkForm(name,filed){
	  			if(this.errors.has(name)){
	  				this.$message.error(filed)
	  			}
	  		},
	  		closeTip(){
                this.showAlert = false;
            },
            registerGo(){
            	this.isConfirm =false
            	this.$router.push({ path: 'login' })
            },
	  		confirm() {
	  			if(this.userinfo.headIcon == '' || this.userinfo.mobileNo == '' || this.userinfo.password == '' || this.userinfo.nickName == '' ||this.userinfo.goodAt == ''){
	  				this.$message.error('请完善信息')
	  			}else if(this.errors){
	  				let arr = JSON.parse(JSON.stringify(this.errors)).errors
	  				this.$message.error(arr[0].msg)
	  			}else{
	  				this.$http.post('/api/public/addVolunteer',this.userinfo).then(response => {
		  				let res = response.data
		  				if(res.result == 0){
							this.$router.push('login')
		  				}
		  			})
	  			}
	  		},
	  		//发送短信验证码
	  		send(){
     			this.$refs.timerbtn.setDisabled(true);
	            this.$http.post('/api/public/sendShortMessage',{
	            	mobileNo:this.userinfo.mobileNo,
	            	messageType:'1'
	            },{
	            	emulateJSON:true
	            }).then( response =>{
	            	let res = response.data
	            	if(res.result == 0){
	                    this.$refs.timerbtn.start();
	                }else{
	                    this.$refs.timerbtn.stop();
	                }
	            })
     		},
     		checkCode(){
     			this.$http.post('/api/public/checkVerification',{
     				mobileNo:this.userinfo.mobileNo,
     				verification:this.code
     			},{
     				emulateJSON:true
     			}).then(response => {
     				let res = response.data
     				if(res.result == 0){
     					this.$refs.timerbtn.stop();
     					this.$refs.timerbtn.setDisabled(true)
     				}else{

     				}
     			})
     		},
     		alocked() {
                this.items = !this.items
            },
            showToggle(){
            	this.isShow = !this.isShow
                if(this.isShow){
                    this.wrap = false  
                }else{  
                    this.wrap = !this.wrap   
                }  
            },
            goodList(){
            	this.$http.get('/api/public/getCommonList',{
            		params:{
            			type:'GOOD_AT'
            		}
            	}).then( response =>{
            		let res = response.data;
            		if(res.result == 0){
            			this.list = res.data
            		}
            	})
            },
            checkFlag(item){
	  			if(typeof item.checked == 'undefined'){
	  				this.$set(item,'checked',true);
	  			}else{
	  				item.checked = !item.checked	
	  			}
	  			this.cale()
	  		},
	  		cale(){
	  			this.goodSelect = []
	  			this.userinfo.goodAt = ''
	  			this.list.forEach((item,index) => {
	  				if(item.checked){
	  					this.goodSelect.push({
	  						key:item.key,
	  						value:item.value
	  					})
	  					this.userinfo.goodAt += item.key + ','
	  				}
	  			})
	  		},
	  		handleAvatarSuccess(res, file) {
	  			let result = res.data
		        this.imageUrl = URL.createObjectURL(file.raw);
		        // this.imageUrl = result
		        this.userinfo.headIcon = result
		    },
		    beforeAvatarUpload(file) {
		        const isLt2M = file.size / 1024 / 1024 < 2;
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isLt2M;
		    },
		    isRegister(){
		    	if(this.errors.has('mobile')){
		    		this.$message.error('请输入正确的手机号')
		    		this.$refs.timerbtn.setDisabled(true);
		    	}else{
		    		this.$http.post('/api/public/checkMobileNo',{
		    			mobileNo:this.userinfo.mobileNo,
		    			userType:0
		    		},{
		    			emulateJSON:true
		    		}).then(response =>{
		  				let res = response.data

		  				if(res.result == 0){
		  					
		  					this.$refs.timerbtn.setDisabled(false);
		  				}else{
		  					this.$refs.timerbtn.setDisabled(true);
							this.$message.error("该账号已注册过")
		  				}
		  			})
		    	}
	  		}
	  	}
	}
</script>

<style scoped>
	@import '../../styles/usertext.css';
	.iRegister{padding:0 0 10% 0;height: 100%;background: #fff}
	.usertext{margin: 0 1rem;padding: 0.5rem 0;}
	.usertext input{
		width:100%;
		margin: 0;}
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
	.usertext a img{
		position: absolute;
		right: 0;
	}
	.userphoto{
		
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
	.right img{
		width:0.6rem;
		display: inline-block;
		vertical-align: middle;
		top: 25%;
	}
	.sub{
		margin-top: 1rem;
	}
	.read{
		margin-top:1rem; 
		text-align: center;
		font-size: 0.8rem;
		color: #C9C9C9;
	}
	.read a{
		color: #43B7B6;
	}
	.read i{
		width: 0.9rem;
		height: 0.9rem;
		display: inline-block;
		border: 1px solid #E7E7E7;
		border-radius: 1rem;
		vertical-align: middle;
		margin-right: 0.2rem;
		margin-bottom:0.1rem;
		position: relative;
	}
	.read .xuanze{
		position:absolute;
		width:0.9rem;
		height:0.9rem;

	}
	.overlay{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;left: 0;
		background: rgba(0,0,0,0.5);
		z-index: 1;
	}
	.popup{
		width: 16rem;
		border: 1px solid #666;
		position: fixed;
		top: 40%;
		left: 50%;
		background: #fff;
		margin-left:-8rem; 
		border-radius: 0.4rem;
		z-index: 10;
		display: none;
	}
	.popup p{
		margin: 1rem;
	}
	.popup div{
		display: -webkit-box;
	    border-radius: 0 0 8px 8px;
	    border-top: 1px solid #e5e5e5;
	    margin-top: 0.5rem;
	    line-height: 2.5;
	    text-align: center;
	}
	.popup a{
		width: 50%;
	    -webkit-box-sizing: border-box;
	    color: #000;
	    display: block;
	    line-height: 2.4;
	}
	.popup a:nth-child(2){
    	border-left: 1px solid #e5e5e5;
	}
	.show{display: block;}
	.good span{
		padding-left:1.5rem;
	}

	/*goodlist*/
	.goodlist{
		width: 100%;
		font-size: 1rem;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		background: #fff;

	}
	.goodlist form{
		padding-top: 10%;
	    border-top: 0.6rem solid #f5f5f5;
	}
	.goodlist li{ 
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
	.goodlist li span{
		vertical-align: middle;
	}
	.goodlist li input{
		vertical-align: sub;
		float: right;
	}
	.list-btn {
	    float: right;
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