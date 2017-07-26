
<template>
	<div class="insuranceDetails">
		<headerTip message="保险详情" goBack="true"></headerTip>
		<div class="main">
		<img src="./banner.png">
		<p class="hd">保险公司：人寿保险</p>
		<p>当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作当代文学里程碑之作</p>
		<p>起保日期：2017/05/02</p>
		<p>结束日期：2017/05/02</p>
		<p>等待期：30天</p>
		<p><span>《投保须知》</span><span>《保险条款》</span></p>
		</div>
		<div class="end">
		<img src="./denglu.png"><span>提交付款</span>
		</div>
	</div>
	</template>
	<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'insuranceDetails',
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
.main p{
	margin:0.5rem 0.6rem;
	line-height:1.5rem;
	color:#9A9A9A;

}
.main .hd{
	font-size:1.2rem;
	color:black;
}
.main p span{
	color:#46B8B7;
}
.end{
	background:#F5F5F5;
	position:relative;
	padding:1.5rem 0;
	margin-top:12rem ;
}
.end img{
	margin:0 auto;
	width:50%;
}
.end span{
	position:absolute;
	left:43%;
	top:42%;
	color:white;
}
</style>