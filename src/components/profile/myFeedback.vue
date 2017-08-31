<template>
	<div class="myFeedback">
		<headerTip message="我的回馈" goBack="true"></headerTip>
		<div class="kong"></div>
		<!-- <div class="main">
			<ul>
				<li @click="toAddress({path: '/checkLogistics'})">
					<span class="left"><img src="./a2.png" ></span>
					<span class="right">
					<p class="tou">志愿者短T</p>
					<p class="date">兑换日期：2017/06/02 12:00</p>
					<p class="ee"><span><img src="./xingbi.png"><b>300</b></span>
					<span class="wuliu">查看物流</span></p>
					</span>
				</li>
				<li @click="toAddress({path: '/checkLog'})">
					<span class="left"><img src="./a1.png" ></span>
					<span class="right">
					<p class="tou">志愿者短T</p>
					<p class="date">兑换日期：2017/06/02 12:00</p>
					<p class="ee"><span><img src="./xingbi.png"><b>300</b></span>
					<span class="shouhuo">已收货</span></p>
					</span>
				</li>
			</ul>
		</div> -->
		<p style="text-align:center;margin-top:30%">模块建设中，敬请期待</p>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'myFeedback',
		components:{
	  		headerTip
	  	},
		data(){
			return {
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
p{
	font-size:0.85rem;
}

.kong{
	padding:0.3rem 0;
	background:#F5F5F5;
}
.main ul li{
	display:flex;
	padding:0.8rem 0.2rem;
	margin:0 0.6rem;
	border-bottom:1px #F5F5F5 solid;
}
.main ul li .left{
	width:27%;
}
.left img{
	width:100%;
}
.main ul li .right{
	width:74%;
}
.main ul li .right img{
	width:18%;
	display:inline;
	vertical-align:middle;
}
.right p{
	margin:0.6rem 0.4rem;
}
.right .tou{
	margin:0.1rem 0 0.4rem 0.4rem;
	font-size:1.1rem;
}
.right .date{
	color:#ABABAB;
}
.right .ee{
	margin-top:1rem;
	margin-bottom:0;
	color: #43B7B5;
	display:flex;
}
.right .ee span{
	width:40%;
}
.right .ee .wuliu {
	
	height:1.8rem;
	background:#43B7B5;
	color:white;
	border-radius:5px;
	margin-left:19%;
	text-align:center;
	line-height:1.8rem;

}
.right .ee .shouhuo{
	color:#B5B5B5;
	margin-left:16%;
	text-align:right;

}
.ee span b{
	margin-left:0.2rem;
}
</style>