<template>
	<div class="voluntaryFeedback">
		<headerTip message="志愿回馈" goBack="true"></headerTip>
		<swipe v-model="index" style="text-align: center;">
		  <swipe-item><img src="/static/vobanner.png" alt=""></swipe-item>
		  <swipe-item><img src="/static/vobanner.png" alt=""></swipe-item>
		  <swipe-item><img src="/static/vobanner.png" alt=""></swipe-item>
		</swipe>
		<div class="header">
		<span class="sp1"><img src="./shangp.png" ></span>
		<span class="sp2"><img src="./shangp2.png" >	</span>
		</div>
		<div class="header2">
		<img src="./shangp3.png">
		</div>
		<div class="header3">
		<span class="sp3">
		<p>环保帆布包</p>
		<p style="color:#C6C6C6">专属你的志愿美物专属你的志愿美物</p>
		</span>
		<span class="sp4"><img src="./xingbi.png"><p>300</p></span>
		</div>
		<div class="header4">
		<ul>
			<li><span>
				<img src="./a1.png">
			</span>
			<p>志愿者短T</p>
			<p class="price"><img src="./xingbi.png">300</p>
			</li>
			<li class="cen">
			<span>
				<img src="./a2.png">
			</span>
			<p>环保帆布包</p>
			<p class="price"><img src="./xingbi.png">300</p>
			</li>
			<li><span>
				<img src="./a3.png">
			</span>
			<p>手账本</p>
			<p class="price"><img src="./xingbi.png">300</p>

			</li>
		</ul>
			
		</div>
	</div>
	</template>
	<script>
	import { Swipe, SwipeItem } from 'c-swipe';
	import headerTip from '../../components/common/header/header.vue'
	export default{
		name:'voluntaryFeedback',
		components:{
			Swipe,
	  		SwipeItem,
	  		headerTip

	  	},
		data () {
		    return {
		    index:0,
		    }
	  	} 
        
   


	}
</script>
<style scoped>
@import '../../styles/swipe.css';
p{
	font-size:0.85rem;
}
.header{
	display: flex;
	background:#F5F5F5;
}
.header2{
	margin:0.5rem 0;
}
.header3{
	display: flex;
	 vertical-align:middle; 

}
.header4{
	background:#F5F5F5;
	padding:0.2rem 0;
}

.sp1{
	width:56.5%;
	margin:0.6rem 0;
}
.sp2{
	width:41.5%;	
	margin:0.6rem 0;
}
.sp2 img{
	margin-left:4%;
}

.sp3{
	width:80%;
	margin-left:2%;
}
.sp3 p{
	margin:0.2rem 0;
}
.sp4{
	width:15%;
	margin-left:3%;
	display:flex;

}
.sp4 img{
	width:1rem;
	height:1rem;
	 vertical-align:middle; 
}
.sp4 p{
	color:#44B7B5;
	margin-left:0.6rem;
}
.header4 ul{
	display:flex;
	background:white;
	margin:0.6rem 0;
}
.header4 ul li{
	width:32%;
	text-align:center;
	margin:0.7rem 0;
}
.header4 ul .cen{
	margin:0.7rem 2%;
}
.header4 ul li p{
	margin-top:0.3rem; 
	text-align:center;
}
.header4 ul li p img{
	width:1rem ;
	height:1rem;
	margin-left:33%;
}
.header4 ul li .price{
	display:flex;
}
.price img{
	padding-right: 0.3rem;
}
</style>