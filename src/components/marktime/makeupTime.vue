<template>
	<div class="makeupTime">
		<headerTip message="补录时长" goBack="true"></headerTip>
		<div class="header">
			<ul>
				<li><span class="active">我的项目</span></li>
				<li><span>历史记录</span></li>
			</ul>
		</div>
		<div class="main">
		<div class="m1">
			<ul>
				<li  style="border-right:1px #F5F5F5 solid">
					<p style="font-size:1.2rem;color:#49B9B7"><b>20</b></p>
					<p style="color:#AFAFAF;font-size:0.9rem">参加项目</p>
				</li>
				<li>
					<p style="font-size:1.2rem;color:#49B9B7"><b>500</b></p>
					<p style="color:#AFAFAF;font-size:0.9rem">志愿者时长（小时）</p>
				</li>
			</ul>
		</div>
		<div class="m2">
			<ul>
				<li>
					<img src="./toux2.png"  class="touxiang">
					<div class="m11">
						<div class="mm1">
							<h3>团中央网络影视中心第五团支部</h3>
							<p>志愿总时长<b class="mark">120</b>小时</p>
						</div>
						<div class="mm2">
							<span>
								<p class="being">进行中</p>
							</span>
							<p class="btn">补录时长</p>
						</div>
					</div>
				</li>
				<li>
					<img src="./toux1.png"  class="touxiang">
					<div class="m11">
						<div class="mm1">
							<h3>团中央网络影视中心第五团支部</h3>
							<p>志愿总时长<b class="mark">120</b>小时</p>
						</div>
						<div class="mm2">
							<span>
								<p class="passed">已结束</p>
							</span>
							<p class="btn">补录时长</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
		</div>	
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'makeupTime',
		components:{
	  		headerTip
	  	},
		data(){
			return {
				
			}
		},

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
	padding: 1rem 0;
}
.header ul li{
	width:50%;
	text-align: center;
}
.header ul li span{
	display: inline-block;
	padding-bottom: 0.4rem;
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