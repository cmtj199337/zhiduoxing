<template>
	<div class="durationTask2">
		<headerTip message="补录时长" goBack="true"></headerTip>
		<div class="main">
			<div class="header">
				<ul>
					<li>
						<img src="./toux.png"  class="touxiang">
						<div class="m11">
							<div class="mm1">
								<h3>志多星项目</h3>
								<p>2017/05/20-2017/5/20</p>
							</div>
							<div class="mm2">
								<span>
									<p class="being">进行中</p>
								</span>
								<p class="btn" style="top:60%">补录记录</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="main2">
			<div class="header2">
				<img src="./que.png"><p style="margin-left:0.5rem;">2016年7月</p>
			</div>
			<div class="header3">
			<span>
			<p class="cycle">1日</p></span>
				<p>开始时间：2017/05/02 15:00</p>
				<p>开始时间：2017/05/02 15:00</p>
				<p style="color:#62C1BF">志愿时长：3小时</p>
				<span>
				<p class="btn">补录时长</p>
				<p class="nos">未开始</p>
				</span>
			</div>
		<div class="header3">
		<span>
		<p class="cycle">2日</p></span>
			<p>开始时间：2017/05/02 15:00</p>
			<p>开始时间：2017/05/02 15:00</p>
			<p style="color:#62C1BF">志愿时长：3小时</p>
			<span>
			<p class="btn">补录时长</p>
			<p class="passed">已结束</p>
			</span>
		</div>
		</div>
		<div class="kong"></div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'durationTask',
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
.kong{
	background: #F5F5F5;
	height:20rem;
}
.header{
	position:relative;
}
.header ul li{
	background:white;
	padding:0.9rem 0;
	border-radius:7px;
	margin:0.6rem 0.6rem 0 2.4rem;
	position:relative;

}
.header ul li .touxiang{
	width:4rem;
	height:4rem;
	position:absolute;
	left: -11%;
	top:8%;
}
.header ul li .m11{
	display:flex;
	margin-left:12%;
}
.header ul li .mm1{
	width:70%;
	text-align: center;
}
.header ul li .mm2{
	width:31%;
	text-align: center;
	display:relative;

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
.header ul li h3{
	margin-bottom: 0.6rem;
	width:200px;
	text-align:left;
	overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.main{
	background: #F5F5F5;
	padding:0.6rem 0;
}
.header2 img {
	width: 1.8%;
	height:1rem;
}
.header2{
	vertical-align:middle;
	display:flex;
	padding:0.8rem 0;
	border-bottom:1px #F5F5F5 solid;
	font-size:1.1rem;
	
}
.header3{
	margin:0 0.6rem;
	border-bottom:1px #F5F5F5 solid;
	position:relative;
}
.header3 p{
	margin:0.5rem 0 0.2rem 22%;
	font-size:0.9rem;
}
.header3 img{
	position:absolute;
}
.nos{
	position: absolute;
  	right:3%;
	bottom:65%;
    font-size: 0.5rem;
    color: #FFAE41;
    border: 1px solid #FFAE41;
    border-radius: 0.2rem;
    padding: 0 0.2rem;
}
.being{
	position: absolute;
    top: 19%;
    right: 3%;
    font-size: 0.5rem;
    color: rgb(70, 184, 183);
    border: 1px solid rgb(70, 184, 183);
    border-radius: 0.2rem;
    padding: 0 0.2rem;
}
.passed{
	position: absolute;
	right:3%;
	bottom:65%;
    font-size: 0.5rem;
    color: #e5e5e5;
    border: 1px solid #e5e5e5;
    border-radius: 0.2rem;
    padding: 0 0.2rem;
}
.btn{
	position: absolute;
    top: 40%;
    right: 1%;
    font-size: 0.5rem;
    color: white;
    background: rgb(70, 184, 183);
    padding: 0.3rem 0.6rem;
    border-radius: 0.2rem;
}
.cycle{
	width:2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	line-height: 2.5rem;
	text-align: center;
	position: absolute;
    top: 10%;
    right: 90%;
    font-size: 0.5rem;
    color: white;
    background: rgb(70, 184, 183);
}
</style>