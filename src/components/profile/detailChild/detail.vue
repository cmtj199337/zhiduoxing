<template>
	<div class="detail">
		<div class="usertext">
			<span>{{data.projectName}}</span>
		</div>
		<div class="usertext">
			<span>项目编号：{{data.projectId}}</span>
		</div>
		<div class="usertext">
			<span>活动状态：{{status}}</span>
		</div>
		<div class="usertext">
			<span>发布人：{{data.teamName}}</span>
		</div>
		<div class="usertext">
			<span>服务类别：{{data.serverType}}</span>
		</div>
		<div class="usertext">
			<span>服务对象：{{data.serverObject}}</span>
		</div>
		<div class="usertext">
			<span>发布日期：{{data.releaseDate}}</span>
		</div>
		<div class="usertext">
			<span>招募日期：{{data.recruitDate}}</span>
		</div>
		<div class="usertext">
			<span>项目日期：{{data.projectDate}}</span>
		</div>
		<!-- 规律 -->
		<form v-if="data.regularType == 0">
			<div class="usertext">
				<span>服务时间：{{data.serverTime}}</span>
			</div>
			<div class="usertext">
				<span>单日志愿时长：{{data.serverTimes}}</span>
			</div>
		</form>
		<div class="last">
			<span>项目地址：{{data.projectAddress}}</span>
		</div>
		<div class="kong"></div>
		<div class="header2">
            <h4 class="texttitle"><span><img src="../baoxian.png"></span>保险方案</h4>
        </div>
        <div class="usertext" @click="toggle()">
        	<p>本项目包含<span v-for="type in data.projectSafe">
        		<em style="display:block">{{type.safeName}}</em>
        	</span></p>
        </div>
      <!--   <div class="insurance" v-show="isShow">
        	<h4>
        		<el-radio-group v-model="isPaid">
					<el-radio :label="1">购买</el-radio>
					<el-radio :label="2">不购买</el-radio>
				</el-radio-group>
        	</h4>
			<el-radio-group class="ul" v-model="insurance" v-show="paid">
				<el-radio :label="1"><p>意外险：平安保障方案三 </p><i>￥50</i></el-radio>
				<el-radio :label="2"><p>意外险：平安保障方案三 </p><i>￥50</i></el-radio>
			</el-radio-group>
		</div> -->
        <div class="header3">
			<router-link :to="{path:'signList',query:{projectId:data.projectId}}">
			已报名列表<span>{{data.yotNum}}/{{data.honNum}}<img src="../right.png"></span>
			</router-link>
        </div>
		<div class="touxiang">
			<router-link :to="{path:'signList',query:{projectId:data.projectId}}">
				<img v-for="item in icon" :src="item.volunteerIcon" >
			</router-link>
		</div>
		<div class="kong2">
		</div>
		<div class="header4">
			<h4 class="texttitle"><span><img src="../jianjie.png" alt=""></span>项目简介</h4>
		</div>
		<div class="usertextend">
			<textarea class="jianjie" rows="5">{{data.projectIntro}}</textarea>
		</div>
		<footer class="foot" v-if="userType == 0">
			<span class="bm1" v-if="data.collectFlg == 1" @click="addCollect('delCollect','取消收藏成功')"><img src="../shoucang.png">取消收藏</span>
			<span class="bm1" v-else-if="data.collectFlg == 0" @click="addCollect('addCollect','收藏成功')"><img src="/static/sc333.png">收藏</span>
			<span class="bm2"><img src="../fenxiang.png">分享</span>
			<!-- 项目状态(0:审核中,1:审核通过,2:审核未通过,3:未开始,4:招募,5:进行,6:结束) -->
			<span class="bmout" style="#ccc" v-if="data.projectStatus <= 3"><p class="bm">未开始</p></span>
			<span class="bm3" v-else-if="data.projectStatus == 4 && data.honNum == data.yotNum"><p class="bm">报名已满</p></span>
			<span class="bmout" v-else-if="data.projectStatus == 4 && data.honNum < data.yotNum && data.joinFlg == 0"><p @click="chooseFamily()" class="bm">我要退出</p></span>
			<span class="bm3" v-else-if="data.projectStatus == 4 && data.honNum < data.yotNum && data.joinFlg == 1"><p @click="chooseFamily()" class="bm">我要报名</p></span>
			<!-- 签到（灰） 签到 签退 -->
			<!-- signInFlg 0:已签,1:未签 -->
			<!-- rangeFlg 0:在打卡范围,1:不再打卡范围 -->
			<span class="bmout" v-else-if="data.projectStatus == 5 && data.signInFlg == 1 && data.rangeFlg == 1"><p class="bm">签到</p></span>
			<span class="bmout" style="#ccc" v-else-if="data.projectStatus == 5 && data.signInFlg == 1 && data.rangeFlg == 0"><p class="bm">签到</p></span>
			<span class="bmout" v-else-if="data.projectStatus == 5 && data.signInFlg == 0 && data.rangeFlg == 1"><p class="bm">签退</p></span>
			<span class="bmout" style="#ccc" v-else-if="data.projectStatus == 5 && data.signInFlg == 0 && data.rangeFlg == 0"><p class="bm">签退</p></span>
			<span class="bmout" v-else-if="data.projectStatus == 6"><p class="bm">已结束</p></span>
		</footer>
	</div>	
</template>
<script>
	export default{
		name:'detail',
		data () {
		    return {
		    	qrcodeUrl:'',
		    	data:[],
				icon:[],
				isPaid:2,
				insurance:null,
				isShow:false,
				paid:false,
				regular:true, 		//规律不规律时间
				userType:''
		    }
	  	},
	  	created(){
	  		this.userType = localStorage.getItem('usertype')
	  	},
	  	mounted(){
	  		this.$nextTick(function(){
	  			this.showView()
	  		})
	  	},
	  	computed:{
	  		status(){
				if(this.data.projectStatus == 0) {
					return '审核中'
				} else if (this.data.projectStatus == 1) {
					return '审核通过'
				} else if (this.data.projectStatus == 2) {
					return '审核未通过'
				} else if (this.data.projectStatus == 3) {
					return '未开始'
				} else if (this.data.projectStatus == 4) {
					return '招募中'
				} else if (this.data.projectStatus == 5) {
					return '进行中'
				} else if (this.data.projectStatus == 6) {
	  				return '已结束'
	  			} else {
	  				this.paid = false
	  			}
	  		}
	  	},
	  	methods:{
	  		showView(){
	  			let userid = localStorage.getItem('userId')
	  			this.$http.get('api/public/getProjectDetail',{
					params:{
					  	id:this.$route.query.projectId,
					  	userId: userid,
						punchLng: 1,
						punchLat: 1,
					}
				  }).then(response =>{
	  				let res = response.data
	  				if(res.result == 0){
	  					this.data = res.data
						this.icon = res.data.projectVolunteer
	  				}
	  			})
	  		},
	  		toAddress(path){
                this.$router.push(path)
            },
            toggle(){
            	this.isShow = !this.isShow
            },
            chooseFamily(){
            	this.$http.get('/api/private/getMyFamilySign').then( response => {
            		let res = response.data
            		if(res.result == 0){
            			if(res.data.familyNum > 0){
            				// this.$router.push('familys')
            				this.$router.push({path:'familys',query:{projectId:this.data.projectId}})
            			}else{
            				// this.$message.success('报名成功')
            				// this.$router.push('perfact')
            				this.join()
            			}
            		}
            	})
            },
            join(){
            	let userId = localStorage.getItem('userId')
            	this.$http.post('/api/private/joinProject',{
            		projectId:this.data.projectId,
            		volunteerId:userId
            	},{
            		emulateJSON:true
            	}).then( response => {
            		let res = response.data
            		if(res.result == 0){
            			this.$message.success("已报名")
            			this.$router.go(0)
            		}
            	})
            },
            addCollect(oprateType,msg){
            	this.$http.post('/api/private/'+oprateType,{
            		collectType:1,
            		collectId:this.data.projectId
            	},{
            		emulateJSON:true
            	}).then( response => {
            		let res = response.data
            		if(res.result == 0){
            			this.$message.success(msg)
            			setTimeout(()=>{
            				this.$router.go(0)
            			},500)
            		}else{
            			this.$message.error('操作失败')
            		}
            	})
            }
	  	}

	}
</script>
<style scoped>
	@import '../../../styles/usertext.css';
	.usertext{
		margin:0rem 1rem;
		padding:0.8rem 0; 
		font-size: 0.85rem;
	}
	.last{
		margin:0rem 1rem;
		padding:0.8rem 0;
	}
	.kong{
		background:rgba(235, 234, 234, 0.48);
		 padding: 0.4rem;
	}
	.header3{
		margin:0rem 1rem;
		padding:0.8rem 0; 
		border-bottom:1px #dcdcdc solid;
	}
	.header3 span{
		float: right;
	}
 	.header3 span img{
		width:0.6rem;
		display:inline-block;
		vertical-align: middle;	
	}
	.header3 a{
		color:#000;
		display: block;
	}
 	.texttitle {
	    font-size: 1rem;
	    font-weight: normal;
	    margin:0rem 1rem;
		padding:0.8rem 0; 
		border-bottom:1px #dcdcdc solid;
	}
	.usertextend textarea{
	    border: none;
	    width: 94%;
	    padding: 3%;
	    font-size: .9rem;
	    font-family: Microsoft yahei;
	    letter-spacing: 2px;
	    line-height: 1.5;
	    text-indent: 2em;
	}
	.kong2{
			background:rgba(235, 234, 234, 0.48);
			padding: 0.4rem;
		}
	.touxiang{
		position:relative;
		margin:0rem 1rem;
		padding:0.8rem 0; 
	}
	.touxiang img:first-child{
		margin-left:0.6rem;
	}
	.touxiang img{
		width:14%;
		display:inline;
		vertical-align: middle;
		margin-left:-1rem;
		border-radius: 50%;
	}
	.foot{
		display:flex;
		text-align:center;
		position: fixed;
		bottom: 0;
		width: 100%;
		background: #fff 
	}
	.foot span{
		position:relative;
	}
	.bm1{
	width:23%;
	text-align: center;
	margin:0.3rem 0; 

	}
	.bm2{
		width:23%;
		margin:0.3rem 0; 
	}
	.bm3{
		width:56%;
		background: #43B7B5;
	}
	.bm3 img{
		width: 100%;
		height:100%;
	}
	.bm1 img{
		width:28%;
		margin-top:0.3rem;
		margin-left:38%;
	}
	.bm2 img{
		width:28%;
		margin-top:0.3rem;
		margin-left:38%;
	}
	.bm{
		color:white;
		position:absolute;
		top:35%;
		left:35%;
		font-size:0.9rem;
	}
	.bmout{
		width:56%;
		background: #e15050;
	}

	.detail{
		padding-bottom:20%;
		background: #fff
	}
	.family{
		width: 16rem;
		margin:0 auto;
		position: fixed;
		top: 20%;
		background: #fff;
	}

.insurance{
	/*border-top: 0.8rem solid #f5f5f5;*/
}
.insurance .ul label{
	width: 100%;
	padding:1rem;
	font-size: 1rem;
	text-align: left;
}

.insurance .ul p{
	display: inline-block;
	padding-left: 0.5rem;
}
.insurance .ul i{
	display: inline-block;
	color: #FFA92F;
}

.insurance h4 .el-radio-group{
	width: 60%;
	margin: 0 auto;
	display: block;
	font-weight: normal;
	padding: 0.6rem;
}
.el-radio{
	width: 50%;
	margin:0;
	text-align: center;
}
</style>