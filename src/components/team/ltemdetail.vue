<template>
	<div class="index">
		<swipe v-model="index" style="text-align: center;">
		  <swipe-item><img src="/static/banner.png" alt=""></swipe-item>
		  <swipe-item><img src="/static/banner.png" alt=""></swipe-item>
		  <swipe-item><img src="/static/banner.png" alt=""></swipe-item>
		</swipe>

		<div class="column">
			<ul>
				<li><span class="":class="{'active':isA}"  v-on:click="detail">项目详情</span></li>
				<li><span class="":class="{'active':isB}" v-on:click="introduce">项目介绍</span></li>
			</ul>
		</div>
		<!-- 详情 -->
		<div class="detail" style="background-color: #fff;" v-if="seen">
			<ul>
				<li><span>中国滋根</span><span>数据管理新思路,唤醒沉睡动员力</span></li>
				<li><span>项目编号:</span><span>123</span></li>
				<li><span>活动状态:</span><span>123</span></li>
				<li><span>发 布 人:</span><span>123</span></li>
				<li><span>服务类别:</span><span>123</span></li>
				<li><span>服务对象:</span><span>123</span></li>
				<li><span>发布日期:</span><span>123</span></li>
				<li><span>招募日期:</span><span>123</span></li>
				<li><span>项目日期:</span><span>123</span></li>
				<li><span>服务时间:</span><span>123</span></li>
				<li><span>单日志愿时长:</span><span>123</span></li>
				<li><span>项目编号:</span><span>123</span></li>
				<li><span>项目地址</span><span>123</span></li>
			</ul>
		</div>
		<div class="footview" v-if="seenfoot">
			<div class="foot">
				<img src="/static/bg@2x.png">
				<p>dsadhadhjakdhjkashdjkahdjkashdjahdjahdjadhjkadhjadhjakdhjadhjkahdjkadhajksdhajksdhjaksdhjaksdhjkasdhjkasdhaskdhaskjdjhakdasdaskdjasdkljaslkdjalsdjlasdjlasjdklasjdkasjdlksajdkls</p>
			</div>
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
		    	seen:true,
		    	seenfoot:false,
		    	index:0,
		    	isA:true,
		    	isB:false,
		    }
	  	},
	  	methods: {
          detail: function (){
            console.log(111);
            this.seen = true;
            this.seenfoot = false;
            this.isA = true;
            this.isB = false;

          },
          introduce: function (){
            console.log(222);
            this.seen = false;
            this.seenfoot = true;
            this.isA = false;
            this.isB = true;
  
          }
        }
	  
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
	}
	.column{
		margin: 1rem 0;
		background-color: #fff;
	}
	.column ul {
		display:flex;
		padding: 0.5rem 0;
	}
	.column ul li{
		width:50%;
		text-align: center;
	}
	.column ul li span{
		display: inline-block;
		padding-bottom: 0.4rem;
	}
	.active{
		color:#43B7B5;
		border-bottom: 2px solid #43B7B5;
	}
	/*详情*/
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
	/*介绍*/
	.footview{
		margin-top: 1rem;
		/*position: relative;*/
		background-color:#43B7B5;
	}
	.foot{
		background-color: #fff;
		padding: 1rem;
		/*position: absolute;*/
		/*top: 1rem;*/
	}
	.foot img{
		/*width: 1;
		margin-left:5%;*/
		border-radius: 0.5rem;
	}
	.foot p{
		word-wrap:break-word;
		color: #868686;
		font-size: 1rem;
	}
</style>