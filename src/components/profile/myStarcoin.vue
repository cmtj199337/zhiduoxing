<template>
	<div class="myStarcoin">
		<headerTip message="我的星币" goBack="true"></headerTip>
		<div class="header">
		<ul>
		<li>星币总数</li>
		<li class="number">18</li>
		</ul>
		</div>
		<div class="title">
		<p>星币明细</p>
		</div>
		<div class="main">
		<ul>
		<li>注册成功</li>
		<li><img src="./xingbi.png" class="tu"><span class="nb">10</span></li>
		<li>2017/07/01</li>
		</ul>
		<ul>
		<li>首次登录</li>
		<li><img src="./xingbi.png" class="tu"><span class="nb">1</span></li>
		<li>2017/07/01</li>
		</ul>
		<ul>
		<li>每日登录</li>
		<li><img src="./xingbi.png" class="tu"><span class="nb">1</span></li>
		<li>2017/07/01</li>
		</ul>
		<ul>
		<li>分享/邀请</li>
		<li><img src="./xingbi.png" class="tu"><span class="nb">3</span></li>
		<li>2017/07/01</li>
		</ul>
		<ul>
		<li>社区发布</li>
		<li><img src="./xingbi.png" class="tu"><span class="nb">3</span></li>
		<li>2017/07/01</li>
		</ul>
		<ul>
		<li>时长兑换</li>
		<li><img src="./xingbi.png" class="tu"><span class="nb">3</span></li>
		<li>2017/07/01</li>
		</ul>
		<ul>
		<li>生日福利</li>
		<li><img src="./xingbi.png" class="tu"><span class="nb">20</span></li>
		<li>2017/07/01</li>
		</ul>
		</div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'myStarcoin',
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
p{
	font-size:0.85rem;
}
.header ul{
	display:flex;

}
.header ul li{
	width:32%;
	text-align:center;
	font-size:0.85rem;
	padding:1rem 0;
}
.header ul .number{
	color:red;
	font-size:2.2rem;
}
.title{
	padding:0.6rem;
	background:#F5F5F5;
}
.main ul{
	display:flex;
	border-bottom:1px #F5F5F5 solid;
	margin:0 0.6rem;
}
.main ul li{
	width:32%;
	text-align:center;
	padding:0.8rem 0;
	font-size:0.85rem;
}
.main ul li .tu{
	display:inline;
	vertical-align:middle;
	width:15%;
}
.main ul li .nb{
	margin-left:0.2rem;
	color:red;
	
}
</style>
