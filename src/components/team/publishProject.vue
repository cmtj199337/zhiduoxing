<template>
	<div class="publishProject">
		<div v-show="wrap">
			<headerTip message="发布项目" goBack="true"></headerTip>
			<div class="kong"></div>
			<div class="header">
	            <h4 class="texttitle"><span><img src="./zil@2x.png"></span>项目信息</h4>
	        </div>
	            <div class="usertext tlo">
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
			<div class="usertext" style="border-top:none">
				<input type="text" placeholder="请输入项目名称" v-model="projectInfo.projectName" /><br />
			</div>
			<div class="usertext">
	        	<input type="text" name="" placeholder="请输入联系人姓名"  v-model="projectInfo.contactName">
	        </div>
	        <div class="usertext">
				<input type="tel" placeholder="请输入联系手机号" maxlength="11"  v-model="projectInfo.contactMobNo" />
			</div>
			<div class="usertext right">
				<a href="javascript:;" @click="showToggle()">
					<span class="good">服务类别<span v-for="item in caleCh">{{item}}</span><img src="./right.png"></span>
				</a>
			</div>
			<div class="usertext right">
				<a href="javascript:;"><span>招募开始时间 
					<el-date-picker
				      v-model="projectInfo.recruitSTime"
				      type="date"
				      placeholder="开始时间"
				      :picker-options="pickerOptions0">
				    </el-date-picker>
				    <img src="./right.png" alt="">
				</span></a>
			</div>
			<div class="usertext right">
				<a href="javascript:;"><span>招募结束时间 
					<el-date-picker
				      v-model="projectInfo.recruitETime"
				      type="date"
				      placeholder="结束时间"
				      :picker-options="pickerOptions0">
				    </el-date-picker>
				    <img src="./right.png" alt="">
				</span></a>
			</div>
			<div class="usertext right">
				<router-link to="during"><span>项目时间<img src="./you@2x.png"></span></router-link>
			</div>
			<div class="usertext">
	        	<input type="text" name="" placeholder="计划招募人数"  v-model="projectInfo.planRecruitNum">
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
	       		 <textarea name="" rows="5"  v-model="projectInfo.projectIntro"></textarea>
	        </div>
	        <div class="end">
	        10-500字
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
	        	<p @click="isTijiao">发布</p>
	        </div>
        </div>
        <!-- 服务类型 -->
		<div class="type" v-show="isShow">
			<div class="head_top">
				<div class='tip'>
	            	<p><span @click="showToggle()"><img src="./back.png"></span>服务类别</p>
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
					projectPicture:'',
					projectName:'',						//项目名称
					contactMobNo:'',					//联系人电话
					province:'',
					city:'',
					address:'',
					contactName:'',						//联系人姓名
					recruitSTime:'',					//招募开始时间
					recruitETime:'',					//招募结束时间
					planRecruitNum:'',					//计划招募人数
					projectIntro:'',					//项目介绍
					serverType:'',
					wxProjectCycleDto:{					
						projectSDate:'',				//项目开始时间
						projectEDate:'',				//项目结束时间
						regularType:'',					//是否规律
						timeRate:'',					//时间频率
						wxProjectCycleTimeDtoList:{
							serverDay :'',				//服务日
							serverSTime:'',				//服务开始时间
							serverETime:'',				//服务结束时间
							serviceTime:''				//单次志愿时长
						}
					}
				},
				imageUrl:'',
				isShow:false,
				wrap:true,
				list:[],
				caleValue:[],
				pickerOptions0: {
		            disabledDate(time) {
		            	return time.getTime() < Date.now() - 8.64e7;
		        	}
        		},
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.showList()
				this.getPTime()

				// this.getDay()
				// this.getWeek()
				// this.getMonth()
				this.getInfo()
			})
		},
		computed:{
			caleCh(){
				return this.caleValue.slice(0,-1)
			}
		},
		methods:{
			haha(d){
            	this.projectInfo.province = d.pro.id
            	this.projectInfo.city = d.city.id
			},
			isTijiao(){
				
			},
			showList(){
            	this.$http.get('/api/public/getCommonList',{
            		params:{
            			type:'SERVER_TYPE'
            		}
            	}).then(response => {
            		this.list = response.data.data
            	})
            },
			showToggle(){
            	this.isShow = !this.isShow
                if(this.isShow){
                    this.wrap = false  
                }else{  
                    this.wrap = !this.wrap   
                }  
            },
            checkFlag(item){
            	if(typeof item.checked == 'undefined'){
	  				this.$set(item,'checked',true);
	  			}else{
	  				item.checked = !item.checked
	  			}
	  			this.caleCheck()
            },
            caleCheck(){
            	this.projectInfo.serverType  = ''
            	this.caleValue = ''
            	this.list.forEach((item,index) => {
            		if(item.checked == true){
            			this.projectInfo.serverType  += item.key+','
            			this.caleValue += item.value + ','
            			this.caleValue = this.caleValue.split(',')
            		}
            	})
            },
			handleAvatarSuccess(res, file) {
	  			let result = res.data
		        this.imageUrl = URL.createObjectURL(file.raw);
		        // this.imageUrl = result
		        this.projectInfo.projectPicture = result
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
		    getPTime(){
		    	this.projectInfo.wxProjectCycleDto.projectSDate = sessionStorage.getItem('start')
		    	this.projectInfo.wxProjectCycleDto.projectEDate = sessionStorage.getItem('end')
		    	this.projectInfo.wxProjectCycleDto.regularType = sessionStorage.getItem('regularType')
		    	this.projectInfo.wxProjectCycleDto.timeRate = sessionStorage.getItem('timeRate')
			},
		    getInfo(){
		    	this.projectInfo.wxProjectCycleDto.wxProjectCycleTimeDtoList.serverDay = sessionStorage.getItem('day')
		    	this.projectInfo.wxProjectCycleDto.wxProjectCycleTimeDtoList.serverSTime = sessionStorage.getItem('startTime')
		    	this.projectInfo.wxProjectCycleDto.wxProjectCycleTimeDtoList.serverETime = sessionStorage.getItem('endTime')
		    	this.projectInfo.wxProjectCycleDto.wxProjectCycleTimeDtoList.serviceTime = sessionStorage.getItem('count')
		    	this.projectInfo.wxProjectCycleDto.wxProjectCycleTimeDtoList = JSON.parse(sessionStorage.getItem('message'))
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
	text-align: right;
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
	.list-btn {
	    float: right;
	}
	.good span{
		padding-left:1.5rem;
	}
</style>