<template>
	<div class="makeupTime">
		<headerTip message="补录时长" goBack="true"></headerTip>
		<div class="header">
			<ul>
				<li v-for="(item,index) in tabs">
				<span :class="{active:index == iscur }" @click="toggle(item.view,index)">{{item.type}}</span>
				</li>
			</ul>
		</div>
		<component :is='currentView' keep-alive></component>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	import MyProject from '../../components/marktime/child/myproject.vue'
	import Record from '../../components/marktime/child/record.vue'
	export default{

		name:'makeupTime',
		components:{
	  		headerTip,
	  		MyProject,
	  		Record
	  	},
		data(){
			return {
				iscur:0,
                currentView:'MyProject',
                tabs:[
				 	{type: '我的项目',view: 'MyProject'},  
				 	{type: '历史记录',view: 'Record'}
				],
			}
		},
		methods:{
			toggle(v,index) {
		    	this.iscur = index;
		    	this.currentView = v
		    }
		}

	}
</script>
<style scoped>
.main{
	background: #F5F5F5;
	padding:0.6rem 0;
	height: 40rem;

}
.header ul {
	display:flex;
	padding: 0.8rem 0 0 0;
}
.header ul li{
	width:50%;
	text-align: center;
}
.header ul li span{
	display: inline-block;
	padding-bottom:0.4rem;
}
.active{
	color:#43B7B5;
	border-bottom: 3px solid #43B7B5;
}
.m1{
	border-radius:7px;
	background:white;
	margin:0 0.5rem;

}
.m1 ul{
	display:flex;
	padding: 1.5rem 0;
	

}
.m1 ul li{
	width:50%;
	text-align: center;
	
}
p{
	font-size:0.9rem;
}
.m2{
	background:rgba(238, 238, 244, 0.5);
	position:relative;
}
.m2 ul li{
	background:white;
	padding:0.8rem 0;
	border-radius:7px;
	margin:0.6rem 0.6rem 0 2.4rem;
	position:relative;

}
.m2 ul li .touxiang{
	width:5rem;
	height:5rem;
	position:absolute;
	left: -11%;
	top:8%;
}
.m2 ul li .m11{
	display:flex;
	margin-left:12%;
	padding:0.2rem;
}
.m2 ul li .mm1{
	width:70%;
	text-align: center;
}
.m2 ul li .mm2{
	width:31%;
	text-align: center;
	display:relative;

}
.m2 ul li h3{
	margin-bottom: 0.8rem;
	overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mm1 p{
	text-align:left;
	margin-left:0;
	color:#AFAFAF;
	margin-top:1.2rem;
}
.mm2 img{
	position:absolute;
}
.btn{
	position: absolute;
    top: 61%;
    right: 6%;
    font-size: 0.5rem;
    color: white;
    background: rgb(70, 184, 183);
    padding: 0.3rem 0.6rem;
    border-radius: 0.2rem;
}
.being{
	position: absolute;
    top: 19%;
    right: 6%;
    font-size: 0.5rem;
    color: rgb(70, 184, 183);
    border: 1px solid rgb(70, 184, 183);
    border-radius: 0.2rem;
    padding: 0 0.2rem;
}
.passed{
	position: absolute;
    top: 19%;
    right: 6%;
    font-size: 0.5rem;
    color: #e5e5e5;
    border: 1px solid #e5e5e5;
    border-radius: 0.2rem;
    padding: 0 0.2rem;
}
.mark{
	color:#46B8B7;
	font-weight:normal;
	padding-left: 0.5rem;
}
</style>