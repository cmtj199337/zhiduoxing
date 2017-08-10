<template>
	<div class="teamRegistration">
		<div v-show="wrap">
			<headerTip message="团队注册" goBack="true"></headerTip>
	        <div class="header">
	       		<span class="ire" style="z-index: 1">
					<img src="./t3.png">
					<p style="font-size:1rem;padding:0.4rem">团队信息</p>
				</span>
				<p class="hx"></p>
				<span class="tre">
					<img src="./t2.png" >
					<p style="font-size:1rem;padding:0.4rem">团队法人/负责人信息</p>
				</span>
	        </div> 
	        
	        <div class="header2">
	            <h4 class="texttitle"><span><img src="./t1.png"></span>团队信息</h4>
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
	        <div class="usertext" style="border-top:1px solid #f5f5f5">
	       		 <input type="text" name="teamName" v-validate="'required'"  v-model="teamInfo.teamName" placeholder="请输入团队名称">
	       		 <span class="toast" v-show="errors.has('teamName')">请输入团队名称</span>
	        </div>
	        <div class="usertext">
				<input type="tel" name="mobile" v-validate="'required|mobile'" @change="checkMobile" v-model="teamInfo.mobileNumber" placeholder="请输入手机号" maxlength="11" />
				<span class="toast" v-show="errors.has('mobile')">请输入手机号</span>
			</div>
	        <div class="usertext">
				<input type="number" @change="checkCode" v-model="verify" placeholder="请输入验证" maxlength="6" style="width:56%" />
				<timer-btn ref="timerbtn" class="btn getcode" v-on:run="send()" :second="60"></timer-btn>
			</div>
			<div class="usertext">
				<input type="password" v-validate="'required'" v-model="teamInfo.password" name="password" style="width:100%" placeholder="请输入密码" /><br />
				<span class="toast" v-show="errors.has('password')">请输入密码</span>
			</div>
			<div class="usertext">
				<input type="password" v-validate="'confirmed:password'" v-model="teamInfo.rePassword" name="pwdagain" placeholder="请确认密码" /><br />
				<span class="toast" v-show="errors.has('pwdagain')">两次密码不一致</span>
			</div>
			<div class="usertext">
				<input type="text" v-validate="'required'" v-model="teamInfo.teamSlogan" name="slogan" placeholder="请输入团队口号" /><br />
				<span class="toast" v-show="errors.has('slogan')">请输入团队口号</span>
			</div>
			<div class="usertext right" @click="lianluoToggle()">
				<a href="javascript:;"><span>联络团队<span>{{contactTeam.teamName}}</span><img src="./right.png"></span></a>
			</div>
			<div class="usertext right">
				<a href="javascript:;" @click="showToggle()">
					<span class="good">服务类型<span v-for="item in listSelected">{{item}}</span><img src="./right.png"></span>
				</a>
			</div>
			<div class="usertext right">
				<span>团队类别：<select class="select" style="width:75%" v-model="teamInfo.teamCategory">
					<option v-for="item in teamclist" :value="item.key">{{item.value}}</option>
				</select><img src="./right.png"></span>
			</div>
			<div class="usertext bottom">
				<span>团队种类：<select class="select" v-model="teamInfo.teamKind">
					<option v-for="item in teamKlist" :value="item.key">{{item.value}}</option>
				</select><img src="./bottom.png"></span>
			</div>
			<div class="usertext">
	        	<input type="text" v-model="teamInfo.teamManager" placeholder="请输入团队管理员">
	        </div>
	        <div class="usertext">
				<input type="tel" v-model="teamInfo.contactNumber" placeholder="请输入联系电话" maxlength="11" />
			</div>
			<div class="kong">
			</div>

			<my-area @select="haha"></my-area>
			<div class="usertext">
	       		 <input type="text" v-model="teamInfo.address" placeholder="请填写详细地址，不少于5个字">
	        </div>
	        <div class="kong">
			</div>
			<div class="header2">
	            <h4 class="texttitle"><span><img src="./jianjie.png"></span>团队简介</h4>
	        </div>
	        <div class="usertextend">
	       		<textarea v-model="teamInfo.teamIntro" v-validate="'required'" class="jianjie" name="teamIntro" rows="5"></textarea>
	       		<span class="toast" v-show="errors.has('teamIntro')">请输入团队简介</span>
	        </div>
	        <div class="end">
	        不超过100字
	        </div>
	        <div class="eee">
	        	<input type="button" name=""  class="next" value="下一步" @click="formData()">
	        </div>
        </div>
		<!-- 服务类型 -->
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
		<!-- 联络团体 -->
		<div class="liaisonGroup" v-show="lisnluoShow">
			<div class="head_top">
				<div class='tip'>
	            	<p><span @click="lianluoToggle()"><img src="./back.png"></span>联络团体</p>
	        	</div>
        	</div>

			<div class="Sousuo">
	        <!--<a href="javascript:;" class="weui-btn weui-btn_primary">点击展现searchBar</a>-->
	        <div class="sousuo1" id="searchBar">
	            <form class="weui-search-bar__form">
	                <div class="weui-search-bar__box">
	                    <i class="weui-icon-search"></i>
	                    <input type="search" class="sousuokuang" id="searchInput" placeholder="搜索" required="">
	                    <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
	                </div>
	                <label class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
	                    <i class="weui-icon-search"></i>
	                    <span></span>
	                </label>
	            </form>
	        </div>
	        </div>
	    	<div class="header5">
	    	
	    	</div>
	    	<div class="neirong">
				<ul>
					<el-radio-group v-model="teamInfo.contactTeamId" style="width:100%">
						<li v-for="item in contactTeam">
							<el-radio :label="item.teamId">{{item.teamName}}</el-radio>
						</li>
					</el-radio-group>
				</ul>
	    	</div>	    	
		</div>
    </div>
		
</template>
<script>
    import headerTip from '../../components/common/header/header.vue'
    import TimerBtn from '../common/tools/countdown.vue'
    import UploadImg from '../../components/common/tools/uploadImg.vue'
    import MyArea from '../../components/common/tools/area.vue'
    export default{

        name:'teamRegistration',
        components:{
            headerTip,
            TimerBtn,
            UploadImg,
            MyArea
        },
        data(){
            return {
            	teamInfo:{
            		teamIcon:'',			//团队头像
            		teamName:'',			//团队名
            		mobileNumber:'',		//电话
            		password:'',			//密码
		        	teamSlogan:'',			//团队口号
		        	contactTeamId:'',		//联系团队
		        	serverType:'',			//服务类型
		        	teamCategory:'',		//团队类别
		        	teamKind:'',		//团队种类（大小）
		        	teamManager:null,			//团队管理员
		        	contactNumber:null,			//联系人电话
		        	province:'',					//地址
		        	city:'',				//团队简介
		        	address:'',
		        	teamIntro:''
            	},
            	verify:'',
            	isShow:false,
            	lisnluoShow:false,
		        wrap:true,
		        arr:'',
		        imageUrl:'',
		        listSelected:[],
		        list:[],
		        teamclist:[],
		        teamKlist:[],
		        contactTeam:[]
            }
        },
        mounted(){
        	this.$nextTick(function(){
            	this.showList();
        	})
        },
        methods:{
	  		send(){
     			this.$refs.timerbtn.setDisabled(true); 
	            this.$http.post('/api/public/sendShortMessage',{
	            	mobileNo:this.teamInfo.mobileNumber
            	},{
            		emulateJSON:true
            	}).then(response => {
            		let res = response.data
            		if(res.result == 0){
	                    this.$refs.timerbtn.start();
	                }else{
	                    this.$refs.timerbtn.stop();
	                }
            	}) 
     		},
     		toAddress(path){
                this.$router.push(path)
            },
            haha(d){
            	this.teamInfo.province = d.pro.id
            	this.teamInfo.city = d.city.id
			},
			showToggle(){
            	this.isShow = !this.isShow
                if(this.isShow){
                    this.wrap = false  
                }else{  
                    this.wrap = !this.wrap   
                }  
            },
            lianluoToggle(){
            	this.lisnluoShow = !this.lisnluoShow
                if(this.lisnluoShow){
                    this.wrap = false  
                }else{  
                    this.wrap = !this.wrap   
                }  
            },
            showList(){
            	this.$http.get('/api/public/getCommonList',{
            		params:{
            			type:'SERVER_TYPE'
            		}
            	}).then(response => {
            		this.list = response.data.data
            	})
            	this.teamcatlist()
            	this.showteamKlist()
				this.getContactTeam()
            },
            teamcatlist(){
            	this.$http.get('/api/public/getCommonList',{
            		params:{
            			type:'TEAM_CATEGORY'
            		}
            	}).then(response => {
            		this.teamclist = response.data.data
            	})
            },
            showteamKlist(){
            	this.$http.get('/api/public/getCommonList',{
            		params:{
            			type:'TEAM_TYPE'
            		}
            	}).then(response => {
            		this.teamKlist = response.data.data
            	})
            },
            getContactTeam(){
            	this.$http.get('/api/public/getContactTeam').then(response => {
            		let res = response.data
            		if(res.result == 0){
            			this.contactTeam = res.data
            		}
            	})
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
		    },
		    checkMobile(){
		    	this.$http.post('/api/public/checkMobileNo',{
		    		mobileNo:this.teamInfo.mobileNumber,
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
		    },
		    checkCode(){
		    	this.$http.post('/api/public/checkVerification',{
     				mobileNo:this.teamInfo.mobileNumber,
     				verification:this.verify
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
		    formData(){
		    	this.$http.post('/api/public/addTeam',this.teamInfo).then( response => {
	  				let res = response.data
	  				if(res.result == 0){
	  					//将返回的teamId存入
	  					sessionStorage.setItem('teamId',res.data)
						this.$router.push('tregisternext')
	  				}else{

	  				}
	  			})
		    },
	  	}

    }

</script>
<style scoped>
	@import '../../styles/usertext.css';
	.header{
	    margin: auto;
    	    background:#F5F5F5;
	    display:flex;
	    position: relative;
	}
	.header span{
		width:50%;
		display: inline-block;
		text-align: center;
		margin:1rem 0;
		position:relative;
		}
	.header  span img{
		width: 30%;
		margin: 0 auto;
	}

	.usertext input{
			margin: 0;
			width: 100%;
		}
	.usertext{
		margin: 0 1rem;
		font-size: 1rem;
		padding: 0.5rem 0;
	}
	.usertext img{
			position: absolute;
			right: 0;
		}
	.hx{
		width: 10rem;
		position: absolute;
		left: 7.3rem;
		top:40%;
		background:#43b7b6;
		padding:0.1rem;
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
	.tlo{
		margin:0 1rem;
		padding: 0.8rem 0 0 0;
		border:0;
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
	.bottom img{
			width:1rem;
			display: inline-block;
			vertical-align: middle;
		left: 45%;
		top:40%;
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
		background:#f5f5f5;
		 padding: 0.3rem;
	}
	
	.usertextend textarea{
		border: none;
		width: 96%;
		padding: 2%;
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
		background:#f5f5f5;
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
		width: 35%;
		border: 0;
	    margin: 0 auto;
	    height: 2rem;
	    font-size: 1rem;
	    appearance:none;
	    position: relative;
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
	.good span{
		padding-left:1.5rem;
	}

	.sousuokuang{
		width:95%;
		text-align: center;
		background-color:rgba(238, 238, 244, 0.5);
		border: none;
	    border-radius: 0.4rem;
	    margin: 0.5rem 0;
	    padding: 0.6rem;
	}
	.Sousuo{
		width: 100%;
		text-align: center;
	}
	.header5{
		width:100%;
		background-color:rgba(238, 238, 244, 0.5);
		height: 0.7rem;
		margin-top: 0.4rem;
	}
	.tuanti{
		font-size: 1rem;

	}
	.neirong{
		width: 100%;
		padding-top: 1rem;
	}
	.neirong ul li{
	    width: 92%;
	    margin: 0 auto;
	    border-bottom: 1px solid #dcdcdc;
	    padding-bottom: 1rem;
	    margin-bottom: 1rem;
	    text-align: left;
	    color: #333;
	    display: block;
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