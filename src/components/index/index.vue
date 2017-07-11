<template>
	<div class="index">
		<div class="headerBar">
			<div class="location">北京</div>
			<div class="number">5000人</div>
		</div>
		<swipe v-model="index" style="text-align: center;">
		  <swipe-item><img src="http://www.jq22.com/demo/jPicture201707092227/images/1.png" alt=""></swipe-item>
		  <swipe-item><img src="http://www.jq22.com/demo/jPicture201707092227/images/2.png" alt=""></swipe-item>
		  <swipe-item><img src="http://www.jq22.com/demo/jPicture201707092227/images/3.png" alt=""></swipe-item>
		</swipe>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'c-swipe';
	export default {
	  	name: 'index',
	  	components:{
	  		Swipe,
	  		SwipeItem
	  	},
	 	data () {
		    return {
		    	index:0,
		    }
	  	},
	  	methods:{
	  		
	  	}
	}
</script>

<style scoped>
	@import '../../styles/swipe.css';
	.index{
		position: relative;
	}
	.headerBar{
		position: absolute;
		top: 0;left: 0;right: 0;
		background: rgba(255,255,255,0.5);
		padding: 1rem;
		z-index: 10;
		display: flex;
	}
	.headerBar div{
		width: 50%;
		font-size: 0.8rem;
		color: #fff;
	}
	.number{
		text-align: right;
	}
</style>