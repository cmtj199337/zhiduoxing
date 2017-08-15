<template>
	<div class="voluntaryProjects">
		<form action="" method="post" v-show="wrap" class="tuandui">
		<headerTip message="项目列表" goBack="true"></headerTip>
		<div class="sousuo">
			<input class="search" name="" placeholder="       搜索">
			<img src="./sou.png"><span style="color:#43B7B6" @click="showToggle">筛选<img src="./shaixuan.png"></span>
		</div>
		<div class="hh">
		<ul>
			<li v-for="(item,index) in tabs">
				<span :class="{active: index == iscur }" @click="toggle(index)">{{item.type}}</span>
			</li>
		</ul>
		</div>
		<div class="main">
			<span v-for="item in proList">
			<router-link :to="{path:'myprojectDetails',query:{projectId:item.projectId}}">
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
			</router-link>
			</span>

			<infinite-loading :on-infinite="projeckList" ref="infiniteLoading">
				<span slot="no-more">
					没有更多了...
				</span>
			</infinite-loading>
		</div>
		</form>
		<!-- 筛选 -->
		<div v-show="isShow">
			<div class="head_top">
				<div class='tip'>
	            	<p><span @click="showToggle"><img src="../common/header/back.png"></span>团队列表</p>
	        	</div>
        	</div>
        	<div class="sousuo">
				<input class="search" name="" placeholder="       搜索">
				<img src="./sou.png"><span style="color:#43B7B6" >筛选<img src="./shaixuan.png"></span>
			</div>
			<div class="kong"></div>
			<div class="header">
				<div class="header2">
					<ul>
						<li v-for="(item,index) in nav">
							<span :class="{current:index == current }" @click="toggle(index,item.view)">{{item.type}}</span>
						</li>
					</ul>
				</div>
				<component :is='currentView' keep-alive></component>
			</div>	
		</div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	import Servicetype from '../../components/volunte/vteamchild/Servicetype.vue'
	import Teamtype from '../../components/volunte/vteamchild/Teamtype.vue'
	import myArea from'../../components/volunte/vteamchild/Area.vue'
	import InfiniteLoading from 'vue-infinite-loading'

	export default{

		name:'voluntaryProjects',
		components:{
	  		headerTip,
	  		InfiniteLoading,
			Servicetype,
			Teamtype,
			myArea
	  	},
		data(){
			return {
				isShow:false,
				wrap:true,
				iscur:0,
				current:0,
                tabs:[
				 	{type: '全部'},  
				 	{type: '招募中'},
				 	{type: '进行中'},
				 	{type: '已结束'}
				],
				currentView:'Servicetype',
				nav:[
					{type: '服务类型',view: 'Servicetype'},  
				 	{type: '团体类型',view: 'Teamtype'},
				 	{type: '区域',view: 'myArea'}
				],
				proList:[]
			}
		},
		methods:{
			toAddress(path){
			    this.$router.push(path)
			},
			toggle(index,v) {
		    	this.iscur = index
				this.current = index
				this.currentView = v
		    },
			showToggle(){
            	this.isShow = !this.isShow
                if(this.isShow){
                    this.wrap = false  
                }else{  
                    this.wrap = !this.wrap   
                }  
            },
		    projeckList(){
		    	this.$http.post('/api/public/getProjectList',{
		    		nowPage:Math.ceil(this.proList.length / 10) + 1
		    	}).then(response => {
		    		let res = response.data
		    		if(res.result == 0){
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
.current{
	color:#43B7B5;
}
.tuandui{
	background:#F5F5F5;
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
.main a{
	color:#000;
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
	.header{
		width:100%;
		display:flex;

	}
.header2 {
	width:30%;
	border-right:1px #E8E8E8 solid;
	height:38rem;
}
.header ul li{
	padding:0.8rem 0;
	border-bottom:1px #E8E8E8 solid;
	width:100%;
	text-align:center;
	margin:0; 
}
</style>