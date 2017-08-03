<template>
	<div class="register">
		<img src="/static/bg.png">
		<div class="fix">
			<a class="ire" href="javascript:;" @click="toAddress({path:'/iregister'})">
				<img src="./ire.png">
				<span>个人注册</span>
			</a>
			<a class="tre" href="javascript:;" @click="toAddress({path:'/tregister'})">
				<img src="./tre.png">
				<span>团队注册</span>
			</a>
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
            }
	  	}
	}
</script>

<style scoped>
	.fix{
		width: 80%;
		position: absolute;
		top: 30%;
		right: 0;left: 0;
		margin: auto;
		display: flex;
	}
	.register{
		position: relative;
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