<template>
	<div class="index">
		<swipe v-model="index" style="text-align: center;">
		  <swipe-item><img src="/static/banner.png" alt=""></swipe-item>
		  <swipe-item><img src="/static/banner.png" alt=""></swipe-item>
		  <swipe-item><img src="/static/banner.png" alt=""></swipe-item>
		</swipe>
		<!-- 详情 -->
		<div class="detail" style="background-color: #fff;">
			<ul>
				<li><img class="icon" src="./jbxx.png"><span style="font-size: 1rem;">团队介绍</span></li>
				<li><span>名称:</span><span>智多星团队</span></li>
				<li><span>团队编号:</span><span>123</span></li>
				<li><span>团队口号:</span><span>倡导无私奉献新风尚</span></li>
				<li><span>上级团队:</span><span>志愿者联合会</span></li>
				<li><span>团队总志愿时长:</span><span>720小时</span></li>
				<li><span>服务类别:</span><span>关爱服务</span></li>
				<li><span>团队类型:</span><span>党政机关</span></li>
				<li><span>注册日期:</span><span>2017/05/10</span></li>
				<li><span>团队管理员:</span><span>吴彦祖</span></li>
				<li><span>联系电话:</span><span>1234567890</span></li>
				<li><span>团队地址:</span><span>北京市朝阳区四惠东</span></li>
			</ul>
		</div>
		<div style="height:5rem;"></div>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'c-swipe';
	// import footBar from '../common/footer/footer.vue'

	export default {
	  	name: 'index',
	  	components:{
	  		Swipe,
	  		SwipeItem,
	  	},
	 	data () {
		    return {
		    	index:0,
		    }
	  	},
	  
	}
</script>

<style scoped>
	@import '../../styles/swipe.css';
	hr{
		height: 1px;
		border:none;
		background-color: #F2F2F2;
		margin:auto 1rem;
	}
	.index{
		background-color: #F5F5F5;
	     max-height: 1000px;
	}
	/*详情*/
	.detail{

		margin-top: 1rem;
		/*margin-bottom: 2rem;*/

	}
	.detail ul li{
		height: 2.5rem;
		margin-left: 1rem;
		margin-right: 1rem;
		line-height: 2.5rem;
		border-bottom: 1px solid #F2F2F2;
	}
	.detail ul li span{

		color: #868686;
	}

	.detail img{
		vertical-align: middle;
	}
	.icon{
		width: 6%;
		display: inline-block;
		padding:0 0.6rem 0 0rem;
	}
	.detail span{
		font-size: 0.8rem;
	}
</style>