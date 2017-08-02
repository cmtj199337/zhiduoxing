<template>
	<div class="communityInteraction">
		<headerTip message="社区互动" goBack="true"></headerTip><span class="message" @click="toAddress({path: '/mymessage'})">我的消息</span>
		<div class="sousuo">
			<input name="" placeholder="搜索"><img src="./sou.png">
		</div>
		<div class="header">
			<ul>
				<li v-for="(item,index) in tabs">
					<span :class="{active: index == iscur }" @click="toggle(item.view,index)">{{item.type}}</span>
				</li>
			</ul>
		</div>
		<div class="kong"></div>
		
		<component :is='currentView' keep-alive></component>
		<div class="fb" ><img src="./fabiao.png" @click="toAddress({path: '/release'})"></div>
		</div>
</template>
<script >
import headerTip from '../../components/common/header/header.vue'
import vCommunity from '../../components/community/child/vCommunity.vue'
import myCommunity from '../../components/community/child/myCommunity.vue'
	export default{

		name:'communityInteraction',
		components:{
	  		headerTip,
	  		vCommunity,
	  		myCommunity
	  	},
		data(){
			return {
				iscur:0,
                currentView:'vCommunity',
                tabs:[
				 	{type: '志愿社区',view: 'vCommunity'},  
				 	{type: '我的社区',view: 'myCommunity'}
				],
			}
		},
		methods:{
			toAddress(path){
                this.$router.push(path)
            },
            toggle(v,index) {
		    	this.iscur = index;
		    	this.currentView = v
		    }
		}

	}
	
</script>
<style scoped>
.message{
	position:absolute;
	right:4%;
	top:2.5%;
	font-size:0.9rem; 

}
.kong{
		background:rgba(235, 234, 234, 0.48);
		 padding: 0.4rem;
	}
.usertext{
	margin:0rem 1rem;
	padding:0.8rem 0; 
	font-size: 0.8rem;
	border-bottom:1px rgba(235, 234, 234, 0.48) solid;
}
.sousuo{
	padding:0.8rem 0;
	position:relative; 
}
	
.sousuo input{
	border:none;
	border-radius:0.2rem;
	padding: 0.4rem 0;
	background:rgba(238, 238, 244, 0.5);
	margin-left:2%;
	margin-right: 2%;
	width:95%;
	text-indent: 2em
}
.sousuo p{
	margin-right:5%; 
}
.sousuo img{
	width:4%;
	position: absolute;
	top:38%;
	left:3%;
}
.sousuo span img{
	width: 4%;
	position: absolute;
	top:38%;
	left:92%;
}

.header ul{
	display:flex;
	margin:0.1rem 0;
	padding:0.5rem 0 0 0;
	text-align: center;
	width: 90%;
    margin: 0 auto;
    font-size: 0.85rem;
}
.header ul li{
	width:50%;
}
.header ul li span{
	display: inline-block;
	padding-bottom: 0.4rem;
}
.active{
	color:#43B7B5;
	border-bottom: 3px solid #43B7B5;
}
.jheader{
	margin: 1rem 0.5rem;
}
.jtext p{
	margin: 0.5rem 0.5rem;
	padding:1rem 0;
	line-height:2rem;
}
.cheader{
	padding:0.6rem 0;
	position:relative; 
}
.cheader  div{
	position:absolute; 
	top:24%;
	left:20%; 
}
.cheader span{
	font-size:0.9rem; 
}
.cheader p{
	color:#666;
	padding-top: 0.3rem;
}
.cheader img{
	width:15%;
	margin: 0 0.5rem;
}
.ctext p{
	padding:0.2rem 0;
	margin:0 0.5rem;
	line-height:1.5rem;
	color: #666;
    font-size: 0.85rem;
}
.cpicture {
	margin:0 0.5rem;
}
.cpicture img{
width:30%;
display:inline;
margin:0 1.2%;
}
.pl{
	display:flex;
	text-align: center;
	color: #999
}
.pl span{
	width:32%;
	margin-left:5%; 
	margin:0.5rem 0;

}
.pl img{
	width:13%;
	display:inline;
	vertical-align: middle;	
}
.fb img{
	width:15%;
	position:absolute; 
	right:4%;
}
</style>