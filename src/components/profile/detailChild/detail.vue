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
			<span>发布人：{{data.projectStatus}}</span>
		</div>
		<div class="usertext">
			<span>服务类别：{{data.serverObject}}</span>
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
			<span>项目日期：2017/5/10-2017/5/10，每周一，二</span>
		</div>
		<!-- 不规律 -->
		<form v-show="regular">
			<div class="usertext">
				<span>服务时间：08：00-18：00</span>
			</div>
			<div class="usertext">
				<span>单日志愿时长：10小时</span>
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
        	<p>本项目包含<span>“志愿者意外伤害险”</span></p>
        </div>
        <div class="insurance" v-show="isShow">
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
		</div>
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
		<footer class="foot">
			<span class="bm1" @click="addCollect()">
				<img src="../shoucang.png">
			收藏</span>
			<span class="bm2"><img src="../fenxiang.png">分享</span>
			<span class="bm3"><p @click="chooseFamily()" class="bm">我要报名</p></span>
		</footer>
		<!-- <div class="overlay"></div> -->
<!-- 		<qrcode
			:value="qrcodeUrl" 
			v-if="qrcodeUrl" 
			:options="{ size: 170 }">
		</qrcode>
 -->	</div>	
</template>
<script>
	import Qrcode from 'vue-qrcode';

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
		    }
	  	},
	  	components: {
		    qrcode: Qrcode
		},
	  	mounted(){
	  		this.$nextTick(function(){
	  			this.showView()
	  			this.qrcodeUrl = window.location.href
	  		})
	  		
	  	},
	  	computed:{
	  		status(){
	  			if(this.isPaid === 1){
	  				this.paid = true
	  			}else{
	  				this.paid = false
	  			}
	  		}
	  	},
	  	methods:{
	  		showView(){
	  			this.$http.get('api/public/getProjectDetail',{
					  params:{id:this.$route.query.projectId}
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
            	this.$http.get('/api/private/getMyFamily').then( response => {
            		let res = response.data
            		if(res.result == 0){
            			if(res.data.familyNum > 0){
            				this.$router.push('familys')
            			}else{
            				this.$message.success('报名成功')
            			}
            		}
            	})
            },
            addCollect(){
            	this.$http.post('/api/private/addCollect',{
            		collectType:1,
            		collectId:this.data.projectId
            	},{
            		emulateJSON:true
            	}).then( response => {
            		let res = response.data
            		if(res.result == 0){
            			this.$message.success('收藏成功')
            		}else{
            			this.$message.error('收藏失败')
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
	}
 	.texttitle {
	    font-size: 0.8rem;
	    font-weight: normal;
	    margin:0rem 1rem;
		padding:0.8rem 0; 
		border-bottom:1px #dcdcdc solid;
	}
	.kong2{
			background:rgba(235, 234, 234, 0.48);
			padding: 0.8rem;
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
	.detail{
		padding-bottom:10%;
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