<template>
	<div class="tabs01">
		<swipe v-model="index" style="text-align: center;">
		  <swipe-item><img src="../tup1.png" alt=""></swipe-item>
		  <swipe-item><img src="../tup1.png" alt=""></swipe-item>
		  <swipe-item><img src="../tup1.png" alt=""></swipe-item>
		</swipe>
		<div class="kong"></div>
		<div class="main">
			<ul>
				<li>
					<span style="width:40%"><img src="../tup2.png"></span>
						<span><h3>高原上的藏区小学</h3>
						<p>2017/02/05</p>
						<p>四川赶集周处青藏高原一处发现了真后悔的的。。。</p>
					</span>
				</li>	
			</ul>
		</div>
		<div class="main2">
			
				<ul>
					<li @click="toAddress({path: '/servicesDetails'})">
						<span style="width:43%"><img src="../tup3.png"></span>
						<span>
							<h3>高原上的藏区小学</h3>
							<p>2016/02/05</p>
							<p>四川赶集周处青藏高原一处发现了真后悔的的。。。</p>
						</span>
					</li>	
				</ul>
		
		</div>
		<div class="main3">
			<ul>
				<li>
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
</template>
<script>
	import { Swipe, SwipeItem } from 'c-swipe';
	
	export default{

		name:'tabs01',
		components:{
			Swipe, 
			SwipeItem
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
.main ul li{
display:flex;
margin:0.2rem;
background:white;
border-bottom:1px #E9E9E9 solid;
}
.main ul li span{
	width:58%;
	margin:0.4rem;
}

.main ul li span p{
	margin:0.6rem 0;
	color:#D4D4D4;
}
.main ul li span img{
	padding-top:0.3rem;
}


.main2 ul li{
display:flex;
margin:0.2rem;
background:white;
border-bottom:1px #E9E9E9 solid;
}

.main2 ul li span{
width:60%;
margin:0.4rem;
}
.main2 ul li span p{
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