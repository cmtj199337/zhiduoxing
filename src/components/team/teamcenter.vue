<template>
	<div class="teamcenter">
	<div style="height:2rem;"></div>
	<!-- 头部 -->
	<img class="topimge" src="./logo.png" >
		<div class="topview">
		<div>xxx</div>
			<!-- <img src="./logo.png" > -->
			<p style="font-size: 1rem">北京西站地区志愿服务</p>
			<div>
				<p><span class="count">120</span>小时</p>
				<p class="title">志愿总时长</p>
			</div>
			<div>
				<p><span class="count">200</span>人</p>
				<p class="title">团队人数</p>
			</div>
			<div>
				<p>志多星</p>
				<p class="title">团队管理</p>
			</div>
			<hr>
			<div style="width: 80%;text-align:left;">
				<span>团队口号:</span>
				<span>将志愿服务进行到底</span>
			</div>
		</div>

		<!-- 栏目列表 -->
		<div class="column">
			<ul>
					<li>
						<img class="icon" src="./jbxx.png">
						<span>基本信息</span>
					</li>
					<hr>
					<li>
						<img class="icon" src="./sz.png">
						<span>团队管理</span>
					</li>
					<hr>
					<li>
						<img class="icon" src="./tdbd.png">
						<span>团队保单</span>
					</li>
				</ul>
		</div>

		<div class="column">
			<ul>
					<li>
						<img class="icon" src="./xjtdgl.png">
						<span>下级团队管理</span>
					</li>
					<hr>
					<li>
						<img class="icon" src="./qbtdck.png">
						<span>全部团队查看</span>
					</li>
					<hr>
					<li>
						<img class="icon" src="./cjtd.png">
						<span>创建团队</span>
					</li>
					<hr>
					<li>
						<img class="icon" src="./cjxm.png">
						<span>创建项目</span>
					</li>
				</ul>
		</div>

			<div class="column" style="">
			<ul>
					<li style="border:none;">
						<img class="icon" src="./sybz.png">
						<span>使用帮助</span>
					</li>
				</ul>
		</div>
	</div>
</template>


<style scoped>
hr{
		height: 1px;
		border:none;
		background-color: #F2F2F2;
		margin:auto 1.5rem;
	}
	/*头部*/
.teamcenter{
	background-color: #F5F5F5;
	/*position: relative;*/
	width: 100%;
	/*height: 1000px;*/
}
.topview{
	width: 90%;
	margin-left: 5%;
	background-color: #fff;
	border-radius: 0.5rem;
	text-align: center;
	/*position: relative;*/
	/*margin-top: 4rem;*/
	margin-top: -3rem;  
	box-shadow: 0px 0px 1rem #EFEFEF;
}
.topimge{
	width: 6rem;
	height: 6rem;
	/*top: 50px;*/
	margin:auto;
	position: relative;
}
/*.topview img{
	width: 6rem;
	height: 6rem;
	top: 50px;
	margin:auto;
	position: relative;
}*/
.topview div{
	display: inline-block;
	width: 30%;
	margin:1rem auto;


} 
.topview p{
	font-size: 0.7rem;
}
.title{
	color: #AFAFAF;
}

.count{
	color: #54B9B7;
}

/*栏目列表*/
.column{
	margin:1rem 0;
	background-color: #fff;


}
.icon{
		width: 6%;
		display: inline-block;
		padding:0 0.6rem 0 1.5rem;
}
.column ul li span{
		vertical-align: middle;
}
.column ul li{
		padding: 1rem 0;
		margin: auto 0.8rem;
		/*border-bottom: 1px solid #ececec;*/
		position: relative;
}
.column img{
		vertical-align: middle;
}
</style>