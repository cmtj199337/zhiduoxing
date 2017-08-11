<template>
	<div class="voluntaryProjects">
		<headerTip message="项目列表" goBack="true"></headerTip>
		<div class="sousuo">
			<input class="search" name="" placeholder="       搜索">
			<img src="./sou.png"><span style="color:#43B7B6">筛选<img src="./shaixuan.png"></span>
		</div>
		<div class="hh">
		<ul>
			<li v-for="(item,index) in tabs">
				<span :class="{active: index == iscur }" @click="toggle(index)">{{item.type}}</span>
			</li>
		</ul>
		</div>
		<div class="main">
			<span @click="toAddress({path: '/myprojectDetails'})" v-for="item in proList">
				<div class="maskwarp">
					<img src="./xiangm.png" >
					<p class="mask"></p>
				</div>
				<img src="./teb2.png" style="border-radius: 0.3rem;">
				<img src="./quan.png" @click.stop="click" style="position:absolute;width:8%;top:8%;left:5%;">
				<img src="./xin.png" style="position:absolute;width:5%;top:12%;left:6.5%;">
				<img src="./quan.png" style="position:absolute;width:8%;top:8%;right:5%;">
				<img src="./baoxian.png" style="position:absolute;width:5%;top:11%;right:6.5%;">
				<ul class="te">
					<li>{{item.projectAddress}}</li>
					<li>50/100</li>
					<li style="text-align:right;margin-right:0.4rem;">待启动</li>
				</ul>
				<ul class="te2">
					<li>{{item.projectName}}</li>
					<li style="text-align:right;color:#666">{{item.projectTime}}</li>
				</ul>
			</span>
			<infinite-loading :on-infinite="projeckList" ref="infiniteLoading">
				<span slot="no-more">
					没有更多了...
				</span>
			</infinite-loading>
		</div>
	</div>
	</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	import InfiniteLoading from 'vue-infinite-loading'

	export default{

		name:'voluntaryProjects',
		components:{
	  		headerTip,
	  		InfiniteLoading
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
				proList:[]
			}
		},
		methods:{
			toAddress(path){
			    this.$router.push(path)
			},
			toggle(index) {
		    	this.iscur = index
		    },
		    projeckList(){
		    	this.$http.post('/api/public/getProjectList',{
		    		// nowPage:Math.ceil(this.proList.length / 10) + 1
		    	}).then(response => {
		    		let res = response.data
		    		if(res.result == 0){
		    			 console.log(res.data.length)
		    			if(res.data.length > 0){
		    				this.proList = this.proList.concat(res.data);
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
.voluntaryProjects{
	height:100%;
}
.sousuo{
	padding:0.8rem 0;
	position:relative; 
}
.search{
	text-indent: 1.5rem;
}
.search::-webkit-input-placeholder{
	text-indent: 0;
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
.hh ul{
	display:flex;
	padding:0;
}
.hh ul li{
	width:25%;
	text-align:center;
}
.hh ul li span{
	display: inline-block;
	padding-bottom: 0.4rem;
}
.active{
	color: #43B7B5;
    border-bottom: 3px solid #43B7B5;
}
.main{
	background:#F5F5F5;
	padding:0.2rem;
	height:100%;
	
}
.main span{
    margin: 0.4rem;
    display: inline-block;
    position: relative;
    box-shadow: 0px 1px 3px #ccc;
    border-radius: 0.4rem;
}
.te{
	display:flex;
	position:absolute;
	width:100%;
	bottom:23%;

}
.te li{
	text-align:center;
	width: 33%;
	color:white
}
.te2{
	display:flex;
	position:absolute;
	width:100%;
	bottom:5%;

}
.te2 li{
	width: 44%;
	margin-left: 5%
}
.maskwarp{
	position: relative;
}
.mask{
    position: absolute;
    bottom: 0rem;
    left: 0;
    width: 100%;
    height: 2rem;
    opacity: 0.2;
    background: linear-gradient(0deg, #060606, rgba(0, 0, 0, 0));
}
</style>