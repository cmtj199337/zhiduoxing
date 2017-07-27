<template>
	<div class="teammamge">
	<!-- 头部返回 -->
	<headerTip message="团队管理" goBack="true"></headerTip>

	<div class="column">
		<ul>
			<li>
				<span>待审核志愿者名单</span>	
				<div class="right">
					<span>80</span>
					<img class="arrow" >
				</div>
			</li>
			<li>
				<span>下级团队审核</span>
				<div class="right">
					<span>80</span>
					<img class="arrow" src="./you@2x.png">
				</div>
			</li>
			<li>
				<span>团队口号</span>
				<div class="right">
					<span>80</span>
					<img class="arrow" src="./you@2x.png">
				</div>
			</li>
			<li>
				<span>项目审核</span>
				<div class="right">
					<span>80</span>
					<img class="arrow" src="./you@2x.png">
				</div>
			</li>
			<li>
				<span>志愿者数</span>
				<div class="right">
					<span>80</span>
					<img class="arrow" src="./you@2x.png">
				</div>
			</li>
			<li>
				<span>志愿时长</span>
				<div class="right">
					<span>80</span>
					<img class="arrow" src="./you@2x.png">
				</div>
			</li>
			<li>
				<span>项目数</span>
				<div class="right">
					<span>80</span>
					<img class="arrow" src="./you@2x.png">
				</div>
			</li>
		</ul>
	</div>
	</div>
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'
	export default {
	  	name: 'teammamge',
	  	components:{
	  		headerTip,
	  	},


	}
</script>

<style type="text/css" scoped>
	.teammamge{
	background-color: #F5F5F5;

	}
	.column{
		margin-top: 2rem;
		background-color: #fff;

	}
	.arrow{
		width: 6%;
		display: inline-block;
		padding:0 6px 0 0;
		margin-left: 10px;
		vertical-align: middle;
	}

	.column{
	margin:1rem 0;
	background-color: #fff;


	}
	.icon{
		width: 7%;
		display: inline-block;
		padding:0 0.6rem 0 1.5rem;
	}
	.column ul li span{
		vertical-align: middle;
		font-size: 1rem;
	}
	.column ul li{
		padding: 1rem 0;
		margin: auto 0.8rem;
		border-bottom: 1px solid #ececec;
		position: relative;
	}

	.right{
		/*background-color: #43B7B6;*/
		width: 35%;
		display: inline-block;
		text-align: right;
		position:absolute;
		right: 0;
		/*top: 1.2rem;*/
	}

</style>