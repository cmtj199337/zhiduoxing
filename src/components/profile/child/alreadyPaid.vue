<template>
	<div class="alreadyPaid">
		<div class="text">
			<p><span>意外险1</span><span class="mo">进行中</span></p>
			<p>新华“乐游神州“保障方案三</p>
			<i>￥300</i>
		</div>
		<div class="text">
			<p><span>意外险1</span><span class="passed">已结束</span></p>
			<p>新华“乐游神州“保障方案三</p>
			<i>￥300</i>
		</div>
	</div>
</template>
<style scoped>
.text p{
	margin:0.5rem 0;
	color:#9D9D9D;
}
.text {
	padding:0 0.6rem;
	border-bottom:1px #F5F5F5 solid;
	position: relative;
}
.text p span{
	font-size:1rem;
	color:black;
}
.text p .mo{
	font-size: 0.8rem;
	color: #43B7B5;
	border: 1px solid #43B7B5;
	padding: 0 0.2rem;
	border-radius: 0.3rem;
	margin-left: 0.3rem
}
.text p .passed{
	font-size: 0.8rem;
	color: #ececec;
	border: 1px solid #ececec;
	padding: 0 0.2rem;
	border-radius: 0.3rem;
	margin-left: 0.3rem
}
.text i{
	font-size:1rem;
	color: #FFA121;
	position: absolute;
	right: 0.6rem;
	top: 25%;
}
</style>