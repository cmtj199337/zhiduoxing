<template>
	<div class="detail">
		<div class="usertext">
			<span>{{info.projectName}}</span>
		</div>
		<div class="usertext">
			<span>项目编号：{{info.projectId}}</span>
		</div>
		<div class="usertext">
			<span>活动状态：招募中</span>
		</div>
		<div class="usertext">
			<span>发布人：智多星</span>
		</div>
		<div class="usertext">
			<span>服务对象：{{info.serverObject}}</span>
		</div>
		<div class="usertext">
			<span>发布日期：{{info.releaseDate}}</span>
		</div>
		<div class="usertext">
			<span>招募日期：{{info.recruitDate}}</span>
		</div>
		<div class="usertext">
			<span>项目日期：{{info.projectDate}}</span>
		</div>
		<div class="usertext" v-show="serverTimeFlag">
			<span>服务时间：{{info.serverTime}}</span>
		</div>
		<div class="usertext" v-show="serverTimeFlag">
			<span>单日志愿时长：{{info.serverTimes}}</span>
		</div>
		<div class="last">
			<span>项目地址：{{info.projectAddress}}</span>
		</div>
		<div class="kong"></div>
		<div class="header2">
            <h4 class="texttitle"><span><img src="./baoxian.png"></span>保险方案</h4>
        </div>
        <div class="usertext">
        	<p>本项目包含<span v-for="safe in info.projectSafe">{{safe.safeName}}</span></p>
        </div>
		<div class="end">
			<ul>
				<li @click="assess(pass)"><span><img src="./tongg@2x.png">审核通过</span></li>
				<li @click="assess(unps)"><span><img src="./butongg@2x.png">审核不通过</span></li>
			</ul>
		</div>
	</div>
		
</template>
<script>
	export default{

		name:'detail',
		data () {
		    return {
		    	info:[],
		    	serverTimeFlag:false,
		    	pass:'/api/private/getLowPApprove',
	  			unps:'/api/private/getLowPRefuse'
		    }
	  	},
	  	mounted(){
	  		this.$nextTick(function(){
	  			this.showInfo()
	  		})
	  	},
	  	methods:{
	  		showInfo(){
	  			this.$http.get('/api/public/getProjectDetail',{
	  				params:{
	  					id:this.$route.query.projectId
	  				}
	  			}).then( response => {
	  				let res = response.data
	  				if(res.result == 0){
	  					this.info = res.data
	  					if(this.info.regularType == '0'){
	  						this.serverTimeFlag = true
	  					}
	  				}
	  			})
	  		},
	  		assess(way){
	  			this.$http.get(way,{
					params:{
						projectId:this.info.projectId
					}
				}).then( response => {
					let res = response.data
					if(res.result == 0){
						this.$message.success("审核成功")
						this.$router.go(-1)
					}
				})
			},
	  	}
	}
</script>
<style scoped>
@import '../../../../styles/usertext.css';
.usertext{
	margin:0rem 1rem;
	padding:0.8rem 0; 
	font-size: 0.85rem;
}
.last{
	margin:0rem 1rem;
	padding:0.8rem 0; 
	font-size: 0.8rem;
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
	margin-left: 62%;
	}
 	.header3 span img{
	width:0.8rem;
	display:inline-block;
	vertical-align: middle;	
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
.touxiang .img1{
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
	top:40%;
	left:35%;
	font-size:0.9rem;
}
.end{
	width: 100%;
	position: fixed;
	bottom: 0;
	display: block;
	background: #fff;
}
.end ul {
	display:flex;
}
.end ul li{
	width:50%;
	text-align:center;
	border-right:1px #0000001a solid;
	border-bottom :1px #0000001a solid;
	padding:0.7rem 0;
	font-size:0.85rem;

}
.end ul li span img{
	width:13%;
	display:inline;
	vertical-align:middle;
	margin-right:0.3rem;
}
.detail{
	padding-bottom:20%;
	background: #fff;
}
</style>