<template>
	<div class="project">
		<span class="xm1" v-for="item in projectList">
			<a href="javascript:;" @click="toAddress('myprojectDetails',item.projectId)">
				<div class="bg">
					<img src="../xiangm.png">
					<ul class="info">
						<li>{{item.projectAddress}}</li>
						<li>{{item.yotNum}}/{{item.honNum}}</li>
						<li>{{item.projectStatus}}</li>
					</ul>
					<dl class="icon">
						<dd>
							<img v-if="item.collectionFlg == 1" src="../xin.png" style="margin-top:0.5rem">
							<img v-else="item.collectionFlg == 0" src="../xin2.png" style="margin-top:0.5rem">
						</dd>
						<dd v-show="item.safeFlg == 1"><img src="../baoxian.png"></dd>
					</dl>
				</div>
				<ul class="te2 clearfix">
					<li>{{item.projectName}}</li>
					<li style="text-align:right;color:#666">{{item.projectTime}}</li>
				</ul>
			</a>
		</span>
		<infinite-loading :on-infinite="getList" ref="infiniteLoading">
			<i slot="no-more">
				没有更多了...
			</i>
		</infinite-loading>
	</div>
</template>
<script>
	import InfiniteLoading from 'vue-infinite-loading'
	export default{
		name:'project',
		components:{
	  		InfiniteLoading
	  	},
		data(){
			return {
				projectList:[]
			}
		},
		methods:{
			toAddress(url,item){
		    	this.$router.push({path:url,query:{projectId:item}})
		    },
			getList(){
				let pages = Math.ceil(this.projectList.length/10)+1;
				this.$http.get('/api/private/getProjectByCollect?nowPage='+pages).then(response =>{
					let res = response.data
					if(res.result == 0){
						if(res.data.length > 0){
		    				this.projectList = this.projectList.concat(res.data);
		    				this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
		    			}else{
		    				this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
		    			}
					}
				})
			}
		}
	}
</script>
<style scoped>
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
</style>