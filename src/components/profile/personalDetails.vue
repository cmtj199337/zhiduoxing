
<template>
	<div class="personalDetails">
		<headerTip message="个人详情" goBack="true"></headerTip>
		<div class="header">
			<img src="./bg.png">
			<img src="./bankuan1.png" style="position:absolute;top:15%;">
			<div class="per">
				<img src="./touxiang4.png" style="width:4rem; height:4rem; margin-left:0.5rem">
				<span class="ziliao1">
					<p style="font-size:0.9rem;">彭笑笑</p>
					<p style="color:#666;">志愿口号</p>
					<p style="color:#666;">擅            长</p>
				</span>
				<span class="ziliao2">
					<p class="xx"><img src="./xingxing.png"><img src="./xingxing.png"><img src="./xingxing.png"><img src="./xingxing.png"><img src="./xingxing.png"></p>
					<p>将志愿服务进行到底</p>
					<p>#关爱服务#</p>
				</span>
			</div>
			<div class="header2">
				<span style="border-right:1px rgba(235, 234, 234, 0.48) solid; "><p style="color:#43b7b6;font-size:0.9rem"><b>120</b></p><p>志愿时长</p></span>
				<span><p style="color:#43b7b6;font-size:0.9rem"><b>500</b></p><p>星币</p></span>
			</div>
		</div>
		<div class="kong" style="background:rgba(235, 234, 234, 0.48);height:4rem;"></div>
		<div class="header3">
			<ul>
				<li v-for="(item,index) in tabs">
					<span :class="{active: index == iscur }" @click="toggle(item.view,index)">{{item.type}}</span>
				</li>
			</ul>
		</div>
		<component :is='currentView' keep-alive></component>
	</div>
</template>
 <script>
	import headerTip from '../../components/common/header/header.vue'
	import Project from '../../components/profile/detail/project.vue'
	import Team from '../../components/profile/detail/team.vue'
	export default{

		name:'personalDetails',
		components:{
	  		headerTip,
	  		Project,
	  		Team
	  	},
		data(){
			return {
				iscur:0,
                currentView:'Project',
                tabs:[
				 	{type: '项目（10）',view: 'Project'},  
				 	{type: '团队（20）',view: 'Team'}
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
.header{
	position:relative;
}
.header2{
	position:absolute;
	display: flex;
	width:100%;
}

.header3 ul{
display:flex;
margin:0.1rem 0;
padding:0.5rem 0;
text-align: center;
font-size: 0.85rem;
}
.header3 ul li{
width:50%;

}
.header3 ul li span{
	display: inline-block;
	padding-bottom: 0.4rem;
}
.active{
	color:#43B7B5;
	border-bottom: 3px solid #43B7B5;
}
.header2 span{
	width:50%;
	text-align:center;
}
.per{
	position:absolute;
	top:42%;

	width:96%;
	margin:0 0.6rem;
	border-bottom:1px #F5F5F5 solid;
	height:6.5rem;
	display:flex;
}
	
.ziliao1 p{
	margin: 0.5rem 0;

}
.ziliao2 p{
	margin: 0.5rem 0;

}
.ziliao1{
width:18%;
text-align: center;
margin:1rem 0rem 1rem 1rem;
}
.ziliao2{
width:40%;
margin:1.2rem 0;
margin-left:1rem;
}
.xx{
	display:flex;
}
.xx img{
	width:10%;
	height:10%;
	margin:0 0.2rem;
	vertical-align:middle;
}
.main{
	background:#F5F5F5;
	padding:0.2rem;
	
}
.main span{
	margin:0.4rem;
	display:inline-block;
	position:relative;
}

.main2{
	background:#F5F5F5;
	padding: 0.6rem 0;
	position:relative;
}
.main2 ul{
	margin:0.2rem 0;
}
.main2 ul li{
	background:white;
	padding:0.5rem 0;
	border-radius:7px;
	margin-left:15%;
	margin-right: 2%;
	top: 5%;
	position: relative;
	margin-bottom:0.6rem; 
}
.main2 ul li:last-child{
	margin-bottom:0; 
}
.main2 ul li img{
    width: 5rem;
    height: 5rem;
    position: absolute;
    left: -2.5rem;
    top: 5%;
}
.main2 ul li .m1{
	display:flex;
	margin-left:12%;
}
.main2 ul li .mm1{
	width:50%;
	margin-left:10%
}
.mm1 p{
	color:#BCBCBC;
}
.main2 ul li h3{
	margin-bottom: 0.8rem;
	margin-left:4rem;
}

</style>