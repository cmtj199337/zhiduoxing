<template>
	<div class="tabs02" v-on:click="toggleall()">
		<swipe v-model="index" style="text-align: center;">
		  <swipe-item><img src="../tup1.png" alt=""></swipe-item>
		  <swipe-item><img src="../tup1.png" alt=""></swipe-item>
		  <swipe-item><img src="../tup1.png" alt=""></swipe-item>
		</swipe>
		<div class="kong"></div>
		<div class="main2">
			<div class="tou">
				<ul>
					<li v-on:click="toggle()" v-on:blur="change1()" ><span :class="{active:iscur==0}">基础知识</span><img src="../bottom.png" style="top:35%;left:24%;"></li>
					<li v-on:click="toggletwo()" v-on:blur="change2()"><span :class="{active:iscur==1}">管理培训</span><img src="../bottom.png" style="top:35%;left:57%;"></li>
					<li v-on:click="togglethree()" v-on:blur="change3()"><span :class="{active:iscur==2}">技能培训</span><img src="../bottom.png" style="top:35%;left:89%;"></li>
				</ul>
				
			</div>

			<div v-show="isShow" class="xianshi"  >
			
				<ul>
					<i class="xuanzhan"></i>
					<li>志愿服务abc</li>
					<li>服务礼仪</li>
					<li>应急救援</li>
				</ul>
				</div>
				<div v-show="isShow2" class="xianshi2"  >
			
				<ul>
					<i class="xuanzhan2"></i>
					<li>志愿服务abc</li>
					<li>服务礼仪</li>
					<li>应急救援</li>
				</ul>
				</div>
				<div v-show="isShow3" class="xianshi3"  >
				<ul>
					<i class="xuanzhan3"></i>
					<li>志愿服务abc</li>
					<li>服务礼仪</li>
					<li>应急救援</li>
				</ul>
				</div>
			
			<div class="text">
				<ul>
					<li @click="toAddress({path: '/servicesDetails'})">
						<span style="width:40%"><img src="../tup3.png"></span>
						<span>
							<h3>高原上的藏区小学</h3>
							<p>2017/02/05</p>
							<p>四川赶集周处青藏高原一处发现了真后悔的的。。。</p>
						</span>
					</li>	
				</ul>
				
			</div>
		</div>

	</div>
</template>
<script>
	import { Swipe, SwipeItem } from 'c-swipe';
	
	export default{

		name:'tabs02',
		components:{
			Swipe, 
			SwipeItem
			
	  	},
		data(){
			return {
				index:0,
				isShow:false,
				isShow2:false,
				isShow3:false
			}
		},
		methods:{
			toAddress(path){
                this.$router.push(path)
            },
             toggle(){
             this.isShow = !this.isShow;
             this.isShow2=false;
             this.isShow3=false
             this.iscur=0
            },
            toggletwo(){
             this.isShow2 = !this.isShow2;
             this.isShow=false;
             this.isShow3=false
             this.iscur=1            	      
            },
            togglethree(){
             this.isShow3 = !this.isShow3;
             this.isShow2=false;
             this.isShow=false
             this.iscur=2           	      
            },
            changeCount1(){
            	this.isShow = !this.isShow;
            },
             changeCount2(){
            	this.isShow2=false;
            },
             changeCount3(){
            	this.isShow3=false;
            }
		}
	}

</script>
<style scoped>
@import '../../../styles/swipe.css';
.kong{
	background:#F5F5F5;
	padding:0.3rem;
}
.index{
		position: relative;
		padding-bottom: 15%;
	}
.sousuo{
	padding:0.8rem 0;
	position:relative; 
}
.active{
	color:#43B7B5;
	border-bottom: 3px solid #43B7B5;
}
.sousuo input{
	border:none;
	border-radius:0.2rem;
	padding: 0.4rem 0;
	background:#F5F5F5;
	margin-left:2%;
	margin-right: 2%;
	width:95%;
	text-indent: 2em;
}
.xuanzhan{
	width: 0.5rem;
	height: 0.5rem;
	background:#fff;
	position:absolute;
	top: -0.25rem;
	left:3.25rem;
	transform: rotate(45deg);
}
.xuanzhan2{
	width: 0.5rem;
	height: 0.5rem;
	background:#fff;
	position:absolute;
	top: -0.25rem;
	left:3.25rem;
	transform: rotate(45deg);
}
.xuanzhan3{
	width: 0.5rem;
	height: 0.5rem;
	background:#fff;
	position:absolute;
	top: -0.25rem;
	left:3.25rem;
	transform: rotate(45deg);
}
.xianshi{
	position:fixed;
	background:white;
	width:7rem;
	height:10rem;
	border-radius: 5px;
	left:5%;
}
.xianshi ul{
	position:relative;
}
.xianshi ul li{	
	padding:0.6rem 0;
	text-align:center;
	border-bottom:1px #F5F5F5 solid;
	margin:0 0.4rem;
	height:1.3rem;
}
.xianshi2{
	position:fixed;
	background:white;
	width:7rem;
	height:10rem;
	border-radius: 5px;
	left:36%;
}
.xianshi2 ul{
	position:relative;
}
.xianshi2 ul li{	
	padding:0.6rem 0;
	text-align:center;
	border-bottom:1px #F5F5F5 solid;
	margin:0 0.4rem;
	height:1.3rem;
}
.xianshi3{
	position:fixed;
	background:white;
	width:7rem;
	height:10rem;
	border-radius: 5px;
	left:68%;
}
.xianshi3 ul{
	position:relative;
}
.xianshi3 ul li{	
	padding:0.6rem 0;
	text-align:center;
	border-bottom:1px #F5F5F5 solid;
	margin:0 0.4rem;
	height:1.3rem;
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
.header ul{
display:flex;
margin:0.1rem 0 0 0;
padding:0.5rem 0 0 0;
text-align: center;

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
.main{
	display:none;
}
.main ul li span img{
	padding-top:0.3rem;
}
.main2 ul li span img{
	padding-top:0.3rem;
}
.tou{
	margin-bottom:0.6rem;
	position:relative;
}

.tou ul{
	display:flex;
	margin:0.1rem 0 0 0;
	padding:0.5rem 0;
	text-align: center;
	position:relative;
	background:white;
		}
.tou ul li{
	width:33%;
}
.tou ul li img{
	width:4%;
	position:absolute;
}
.tou ul li span{
	padding-bottom: 0.3rem;
}
.main2{
	background:#F5F5F5;
}
.main ul li{
display:flex;
margin:0.2rem;
background:white;
border-bottom:1px #E9E9E9 solid;
}
.main ul li span{
width:60%;
margin:0.4rem;
}
.main ul li span p{
	margin:0.6rem 0;
	color:#D4D4D4;
}

.text ul li{
display:flex;
margin:0.2rem;
background:white;
border-bottom:1px #E9E9E9 solid;
}

.text ul li span{
width:60%;
margin:0.4rem;
}
.text ul li span h3{
	margin-top:0.4rem;
}
.text ul li span p{
	margin:0.6rem 0;
	color:#D4D4D4;
}	
.main3{
	display:none;
}
.main3 ul li{
display:flex;
margin:0.2rem;
background:white;
border-bottom:1px #E9E9E9 solid;
}
.main3 ul li span{
width:60%;
margin:0.4rem;
}
.main3 ul li span p{
	margin:0.6rem 0;
	color:#D4D4D4;
}	
</style>