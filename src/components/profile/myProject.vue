<template>
	<div class="myProject">
		<headerTip message="我的项目" goBack="true"></headerTip>
		<div class="sousuo">
			<input name="" placeholder="       搜索">
		<img src="./sou.png"><span>筛选<img src="./shaixuan.png"></span>
		</div>
		<div class="header">
			<ul>
				<li v-for="(item,index) in tabs">
					<span :class="{active: index == iscur }" @click="toggle(index)">{{item.type}}</span>
				</li>
			</ul>
		</div>
		<div class="project">
			<span class="xm1" v-for="item in list">
				<a href="javascript:;" @click="toAddress('myprojectDetails',item.projectId)">
					<div class="bg">
						<img src="./xiangm.png">
						<ul class="info">
							<li>{{item.projectAddress}}</li>
							<li>{{item.yotNum}}/{{item.honNum}}</li>
							<li>{{item.projectStatus}}</li>
						</ul>
						<dl class="icon">
							<dd @click.stop="collect()">
								<img v-if="item.collectionFlg == 1" src="./xin.png" style="margin-top:0.5rem">
								<img v-else="item.collectionFlg == 0" src="./xin2.png" style="margin-top:0.5rem">
							</dd>
							<dd v-show="item.safeFlg == 1"><img src="./baoxian.png"></dd>
						</dl>
					</div>
					<ul class="te2 clearfix">
						<li>{{item.projectName}}</li>
						<li style="text-align:right;color:#666">{{item.projectTime}}</li>
					</ul>
				</a>
			</span>
		</div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'myProject',
		components:{
	  		headerTip
	  	},
		data(){
			return {
				iscur:0,
                tabs:[
				 	{type: '全部'},  
				 	{type: '招募中'},
				 	{type: '进行中'},
				 	{type: '已结束'}
				],
				list:[],
				pages:0
			}
		},
		mounted(){
	    	this.$nextTick(function(){
	    		this.listView(this.pages)
	    	})
	    },
		methods:{
            toggle(index) {
		    	this.iscur = index
		    	this.pages = index + 3
		    	this.listView(this.pages)
		    },
		    toAddress(url,item){
		    	this.$router.push({path:url,query:{projectId:item}})
		    },
		    listView(status){
		    	this.$http.post('/api/private/getProjectList',{
		    		projectStatus:status
		    	}).then( response => {
		    		let res = response.data
		    		if(res.result == 0){
		    			this.list = res.data
		    		}
		    	})
		    },
		    collect(){
		    	alert("fsd")
		    }
		}
	}
</script>
<style scoped>
.sousuo{
	padding:0.8rem 0;
	position:relative;
	background: #fff; 
}
.sousuo span{
	color:#4BBAB8;
}
.sousuo input{
	border:none;
	border-radius:0.3rem;
	padding: 0.4rem 0;
	background:#F5F5F5;
	margin-left:2%;
	margin-right: 2%;
	width:80%;
}
.sousuo p{
	margin-right:5%; 
}
.sousuo img{
	width: 4%;
	position: absolute;
	top:38%;
	left:3%;
}
.sousuo span img{
	width: 4%;
	position: absolute;
	top:38%;
	left:93%;
}
.header{
	background: #fff;
}
.header ul{
	display:flex;
}
.header ul li{
	width:25%;
	text-align:center;
}
.header ul li span{
	display: inline-block;
	padding-bottom:0.4rem;
}
.myProject{
	height: 100%;
	background:#f5f5f5 
}
.project{
	background:#F5F5F5;
	padding:0.2rem;
}
.project span{
    width: 96%;
    margin: 2%;
    display: inline-block;
    position: relative;
    box-shadow: 0px 1px 3px #ccc;
    border-radius: 0.4rem;
}
/*新*/
.bg{
	width: 100%;
	height: 8.6rem;
	position: relative;
}
.xm1 a{color: #000;}
.info{
	width: 96%;
	position: absolute;
	bottom: 0.2rem;
	color: #fff;
	display: flex;
	padding: 0 2%;
	justify-content:space-between;
}
.te2{
	padding:0.6rem 2%;
	background: #fff;
	border-radius: 0.3rem
}
.te2 li{
	width: 50%;
	float: left;
	line-height: 1;
}
.icon{
	width: 100%;
	position: absolute;
	top: 9%;
}
.icon dd:first-child{
	position: absolute;
	left:3%;
	width: 2rem;
	height:2rem;
	border-radius: 50%;
	background: rgba(0,0,0,0.3)
}
.icon dd:last-child{
	position: absolute;
	right:3%;
	width: 2rem;
	height:2rem;
	border-radius: 50%;
	background: rgba(0,0,0,0.3)
}
.icon dd img{
	width: 1.2rem;
    margin: 0 auto;
    margin-top: 0.4rem;
}
.active{
	color: #43B7B5;
    border-bottom: 3px solid #43B7B5;
}
</style>