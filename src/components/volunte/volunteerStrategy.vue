
<template>
	<div class="volunteerStrategy">
		<headerTip message="志愿攻略" goBack="true"></headerTip>
		<div class="sousuo">
			<input name="" placeholder="       搜索">
			<img src="./sou.png">
		</div>
		<div class="header">
			<ul>
				<li><span class="active">行业政策</span></li>
				<li><span>培训课程</span></li>
				<li><span>经验分享</span></li>
			</ul>
		</div>
		<swipe v-model="index" style="text-align: center;">
		  <swipe-item><img src="./tup1.png" alt=""></swipe-item>
		  <swipe-item><img src="./tup1.png" alt=""></swipe-item>
		  <swipe-item><img src="./tup1.png" alt=""></swipe-item>
		</swipe>
		<div class="kong"></div>
		<div class="main">
			<ul>
				<li>
					<span style="width:40%"><img src="./tup2.png"></span>
						<span><h3>高原上的藏区小学</h3>
						<p>2017/02/05</p>
						<p>四川赶集周处青藏高原一处发现了真后悔的的。。。</p>
					</span>
				</li>	
			</ul>
		</div>
		<div class="main2">
			<div class="tou">
				<ul>
					<li >基础知识<img src="./bottom.png" style="top:35%;left:24%;"></li>
					<li>管理培训<img src="./bottom.png" style="top:35%;left:57%;"></li>
					<li>技能培训<img src="./bottom.png" style="top:35%;left:89%;"></li>
				</ul>
			</div>
			<div class="text">
				<ul>
					<li @click="toAddress({path: '/servicesDetails'})">
						<span style="width:40%"><img src="./tup3.png"></span>
						<span>
							<h3>高原上的藏区小学</h3>
							<p>2017/02/05</p>
							<p>四川赶集周处青藏高原一处发现了真后悔的的。。。</p>
						</span>
					</li>	
				</ul>
			</div>
		</div>
		<div class="main3">
			<ul>
				<li>
					<span style="width:40%"><img src="./tup3.png"></span>
					<span>
						<h3>高原上的藏区小学</h3>
						<p>2017/02/05</p>
						<p>四川赶集周处青藏高原一处发现了真后悔的的。。。</p>
					</span>
				</li>	
			</ul>
		</div>
	</div>
</template>
<script>
	import { Swipe, SwipeItem } from 'c-swipe';
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'volunteerStrategy',
		components:{
			Swipe, 
			SwipeItem,
	  		headerTip
	  	},
		data(){
			return {
				index:0,
			}
		},
		methods:{
			toAddress(path){
                this.$router.push(path)
            }
		}
	}

</script>
<style scoped>
@import '../../styles/swipe.css';
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
	
.sousuo input{
	border:none;
	border-radius:0.2rem;
	padding: 0.4rem 0;
	background:#F5F5F5;
	margin-left:2%;
	margin-right: 2%;
	width:95%;
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
.tou{
	margin-bottom:0.6rem;
}

.tou ul{
	display:flex;
	margin:0.1rem 0;
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