<template>
	<div class="projectDetails">
		<headerTip message="项目详情" goBack="true"></headerTip>
		<swipe v-model="index" style="text-align: center;">
		  <swipe-item><img src="./banner.png" alt=""></swipe-item>
		  <swipe-item><img src="./banner.png" alt=""></swipe-item>
		  <swipe-item><img src="./banner.png" alt=""></swipe-item>
		</swipe>
		<div class="header">
			<ul>
				<li><span class="active">项目详情</span></li>
				<li><span>项目介绍</span></li>
				<li><span>项目社区</span></li>
			</ul>
		</div>
		<div class="detail">
			<div class="usertext">
				<span>【中国滋根】数据管理新思路，唤醒沉睡动员力</span>
			</div>
			<div class="usertext">
				<span>项目编号：123</span>
			</div>
			<div class="usertext">
				<span>活动状态：招募中</span>
			</div>
			<div class="usertext">
				<span>发布人：智多星</span>
			</div>
			<div class="usertext">
				<span>服务对象：儿童</span>
			</div>
			<div class="usertext">
				<span>发布日期：2017/5/10</span>
			</div>
			<div class="usertext">
				<span>招募日期：2017/5/10-2017/8/29</span>
			</div>
			<div class="usertext">
				<span>项目日期：2017/5/10-2017/5/10，每周一，二</span>
			</div>
			<div class="usertext">
				<span>服务时间：08：00-18：00</span>
			</div>
			<div class="usertext">
				<span>单日志愿时长：10小时</span>
			</div>
			<div class="last">
				<span>项目地址：北京朝阳市四惠东</span>
			</div>
			<div class="kong"></div>
			<div class="header2">
	            <h4 class="texttitle"><span><img src="./baoxian.png"></span>保险方案</h4>
	        </div>
	        <div class="usertext">
	        	<p>本项目包含<span>“志愿者意外伤害险”</span></p>
	        </div>
	        <div class="header3">
	        已报名列表<router-link to=""><span>20/200<img src="./right.png"></span></router-link>
	        </div>
			<div class="touxiang">
				<img src="./touxiang1.png" class="img1">
				<img src="./touxiang2.png">
				<img src="./touxiang3.png">
				<img src="./touxiang4.png">
				<img src="./touxiang1.png">
				<img src="./touxiang2.png">
				<img src="./touxiang3.png">
				<img src="./touxiang4.png">
			</div>
			<div class="kong2">
			</div>
			<footer class="foot">
				<span class="bm1"><img src="./shoucang.png">收藏</span>
				<span class="bm2"><img src="./fenxiang.png">分享</span>
				<span class="bm3"><img src="./baoming.png"><p class="bm">我要报名</p></span>
			</footer>
		</div>
		<div class="introduce">
			<div class="jheader">
				<img src="./jieshaotu.png">
			</div>
			<div class="jtext">
				<p>据《报告》数据披露，蚂蚁金服旗下网商银行已成功为650万小微经营者提供超过8000亿贷款，更多蓝领、大学生、进城务工人员开启了精彩人生;2000万人通过芝麻信用获得了金融机构的授信，累计总额1000亿元</p>
			</div>
			<footer class="foot">
				<span class="bm1"><img src="./shoucang.png">收藏</span>
				<span class="bm2"><img src="./fenxiang.png">分享</span>
				<span class="bm3"><img src="./baoming.png"><p class="bm">我要报名</p></span>
			</footer>
		</div>
		<div class="community">
			<div class="cheader">
				<span><img src="./touxiang2.png"></span>
				<div class="name"><span>大蜗牛子</span><p>1小时</p></div>
			</div>
			<div class="ctext">
				<p>社区互动详情，社区互动情况，社区互动详情，社区互动情况，社区互动详情，社区互动情况</p>
			</div>
			<div class="cpicture">
				<img src="./tu11.png">
				<img src="./tu22.png">
				<img src="./tu11.png">
			</div>
			<div class="usertext">
				<span>#志愿项目#</span>
			</div>
			<div class="pl">
				<span><img src="./zan.png">50</span>
				<span><img src="./pinglun.png">42</span>
				<span><img src="./jubao.png">举报</span>
			</div>
			<div class="kong"></div>
			<div class="fb"><img src="./fabiao.png"></div>
		</div>
		</div>
</template>
<script>
	import { Swipe, SwipeItem } from 'c-swipe';
	import headerTip from '../../components/common/header/header.vue'

	export default{

		name:'projectDetails',
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
@import '../../styles/usertext.css';
@import '../../styles/swipe.css';
.usertext{
	margin:0rem 1rem;
	padding:0.8rem 0; 
	font-size: 0.85rem;
}
.detail{
	display:none;
}
.introduce{
	display:none;
}
.last{
	margin:0rem 1rem;
	padding:0.8rem 0; 
	font-size: 0.8rem;
}
.header{
	padding:0.4rem 0;
	background:rgba(235, 234, 234, 0.48);
}
.header ul{
display:flex;
margin:0.1rem 0;
padding:0.5rem 0;
background:white;
text-align: center;
}
.header ul li{
width:33%;

}
.header ul li span{
	display: inline-block;
	padding-bottom: 0.4rem;
}
.active{
	color:#43B7B5;
	border-bottom: 3px solid #43B7B5;
}
	.kong{
		background:rgba(235, 234, 234, 0.48);
		 padding: 0.4rem;
	}
	.header3{
	margin:0rem 1rem;
	padding:0.8rem 0; 
	border-bottom:1px #dcdcdc solid;
	}
	.header3 span{
	margin-left: 62%;
	}
 	.header3 span img{
	width:0.8rem;
	display:inline-block;
	vertical-align: middle;	
}
 	.texttitle {
    font-size: 0.8rem;
    font-weight: normal;
    margin:0rem 1rem;
	padding:0.8rem 0; 
	border-bottom:1px #dcdcdc solid;
}
.kong2{
		background:rgba(235, 234, 234, 0.48);
		padding: 0.8rem;
	}
.touxiang{
	position:relative;
	margin:0rem 1rem;
	padding:0.8rem 0; 

}
.touxiang .img1{
	margin-left:0.6rem;
}
.touxiang img{
	width:14%;
	display:inline;
	vertical-align: middle;
	margin-left:-1rem;
}
.foot{
	display:flex;
	text-align:center; 
}
.foot span{
	position:relative;
}
.bm1{
width:23%;
text-align: center;
margin:0.3rem 0; 

}
.bm2{
	width:23%;
	margin:0.3rem 0; 
}
.bm3{
	width:56%;
}
.bm3 img{
	width: 100%;
	height:100%;
}
.bm1 img{
	width:28%;
	margin-top:0.3rem;
	margin-left:38%;
}
.bm2 img{
	width:28%;
	margin-top:0.3rem;
	margin-left:38%;
}
.bm{
	color:white;
	position:absolute;
	top:40%;
	left:35%;
	font-size:0.9rem;
}
.jheader{
	margin: 1rem 0.5rem;
}
.jtext p{
	margin: 0.5rem 0.5rem;
	padding:1rem 0;
	line-height:2rem;
}
.cheader{
	padding:0.6rem 0;
	position:relative; 
}
.cheader  div{
	position:absolute; 
	top:24%;
	left:20%; 
}
.cheader span{
	font-size:0.9rem; 
}
.cheader p{
	color:#666;
	padding-top: 0.3rem;
}
.cheader img{
	width:15%;
	margin: 0 0.5rem;
}
.ctext p{
	padding:0.2rem 0;
	margin:0.2rem 0.5rem;
	line-height:1.5rem;
	color: #666;
    font-size: 0.85rem;
}
.cpicture {
	margin:0 0.5rem;
}
.cpicture img{
width:30%;
display:inline;
margin:0 1.2%;
}
.pl{
	display:flex;
	text-align: center;
	color: #999
}
.pl span{
	width:32%;
	margin-left:5%; 
	margin:0.5rem 0;

}
.pl img{
	width:13%;
	display:inline;
	vertical-align: middle;	
}
.fb img{
	width:15%;
	position:absolute; 
	right:4%;
}
</style>