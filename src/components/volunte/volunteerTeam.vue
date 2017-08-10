<template>
	<div class="volunteerTeam">
		<form action="" method="post" v-show="wrap" class="tuandui">
			<headerTip message="志愿团队" goBack="true"></headerTip>
			<div class="sousuo">
				<input class="search" name="" placeholder="       搜索">
				<img src="./sou.png"><span style="color:#43B7B6" @click="showToggle">筛选<img src="./shaixuan.png"></span>
			</div>
			<div class="mm" @click="toAddress({path: '/teamPresentation'})">
				<ul>
					<li v-for="item in teamList">
						<img :src="item.teamIcon">
						<h3>{{item.teamName}}</h3>
						<div class="m1">
							<div class="mm1"><span><i>{{item.serverDuration}}</i>小时</span><p>志愿总时长</p></div>
							<div class="mm1"><span><i>{{item.teamMember}}</i>人</span><p>团队人数</p></div>
							<div class="mm1"><span>{{item.teamManager}}</span><p>团队管理员</p></div>
						</div>
					</li>
					<infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
				</ul>
			</div>
		</form>
		<!-- 筛选 -->
		<div v-show="isShow">
			<div class="head_top">
				<div class='tip'>
	            	<p><span @click="showToggle"><img src="./back.png"></span>团队列表</p>
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
					<li v-for="(item,index) in tabs">
						<span :class="{active: index == iscur }" @click="toggle(item.view,index)">{{item.type}}</span>
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

		name:'volunteerTeam',
		components:{
	  		headerTip,
	  		Servicetype,
	  		Teamtype,
	  		myArea,
	  		InfiniteLoading
	  	},
		data(){
			return {
				wrap:true,
				isShow:false,
				iscur:0,
                currentView:'Servicetype',
                tabs:[
				 	{type: '服务类型',view: 'Servicetype'},  
				 	{type: '团体类型',view: 'Teamtype'},
				 	{type: '区域',view: 'myArea'}
				],
				teamList:[]

			}
		},
		mounted(){
			this.showTeam()
		},
		methods:{
			toAddress(path){
			    this.$router.push(path)
			},
			showToggle(){
            	this.isShow = !this.isShow
                if(this.isShow){
                    this.wrap = false  
                }else{  
                    this.wrap = !this.wrap   
                }  
            },
            toggle(v,index) {
		    	this.iscur = index;
		    	this.currentView = v
		    },
		    onInfinite(){
		    	this.$http.post('/api/public/getTeamList',{
		    		//fs
		    		nowPage:Math.ceil(this.teamList.length / 10) + 1,
		    	}).then( response => {
		    		let res = response.data
		    		if(res.result == 0){
		    			console.log(res.data.length)
		    			if(res.data.length > 0){
		    				this.teamList = this.teamList.concat(res.data);
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
.tuandui{
	background:#F5F5F5;
	height:100%;
}
.volunteerTeam{
	height:100%;
}
.sousuo{
	padding:0.8rem 0;
	position:relative; 
	background:white;
}
.search{
	text-indent: 1.5rem;
}
.search::-webkit-input-placeholder{
	text-indent: 0;
}
.sousuo input{
	border:none;
	border-radius:0.2rem;
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
.mm{
	padding: 0.6rem 0;
	position:relative;
}
.mm ul li{
	background:white;
	padding:0.5rem 0;
	border-radius:7px;
	margin-left:12%;
	width:85%;
	position:relative;
	margin-bottom: 0.6rem;
}
.mm ul li:last-child{
	margin-bottom: 0;
}
.mm ul li img{
	width:5rem;
	height:5rem;
	position:absolute;
	left: -2.5rem;
	top:5%;
}
.mm ul li .m1{
	display:flex;
	margin-left:12%;
}
.mm ul li .mm1{
	width:33%;
	text-align: center;
}
.m1 p{
	color: #B5B5B5;
	font-size: 0.8rem
}
.m1 i{
	color: #43B7B6;
}
.mm ul li h3{
margin-bottom: 0.8rem;
margin-left:4rem;
}
.active{
	color:#43B7B5;
}
.kong{
	padding:0.3rem 0;
	background:#F5F5F5; 
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