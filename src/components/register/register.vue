<template>
	<div class="register">
		<img src="/static/bg.png" class="bg">
		<div class="fix">
			<a class="ire" href="javascript:;" @click="toAddress({path: '/iregister'})">
				<img src="./ire.png">
				<span>个人注册</span>
			</a>
			<router-link class="tre" :to="{path:'/tregister',query:{from:0}}">
				<img src="./tre.png">
				<span>团队注册</span>
			</router-link>
		</div>
		<p>欢迎加入志多星</p>
	</div>
</template>

<script>
	export default {
	  	name: 'register',
	 	data () {
		    return {
		      
		    }
	  	},
	  	methods:{
	  		toAddress(path){
                this.$router.push(path)
            },
	  	}
	}
</script>

<style scoped>
	.fix{
		width: 80%;
		position: absolute;
		top: 35%;
		right: 0;left: 0;
		margin: auto;
		display: flex;
	}
	.register{
		position: relative;
		width:100%;
		height:100%;
	}
	.register .bg{
		height:100%;
	}
	.register p{
		position: absolute;
		font-size: 1.2rem;
		color: #fff;
		bottom: 15%;
		right: 0;left: 0;
		text-align: center;
	}
	.fix a{
		width: 50%;
		text-align: center;
		display: inline-block;
	}
	.fix a img{
		width: 50%;
		margin:0 auto 0.5rem auto;
	}
	.fix a span{
		font-size: 1.2rem;
		color: #fff;
	}
</style>