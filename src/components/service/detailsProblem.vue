<template>
  <div class="detailsProblem">
   <headerTip message="客服中心" goBack="true" style="background: #FFFFFF"></headerTip>
	<div class="text">
		<p>问题1：问题详情问题详情问题详情</p>
		<span class="t">
		<p>问题详情问题详情问题详情问题详情问题详情问题详情问题详情</p>
		<p>问题详情问题详情问题详情问题详情问题详情问题详情问题详情</p>
		<p>问题详情问题详情问题详情问题详情问题详情问题详情问题详情</p>
		<p>问题详情问题详情问题详情问题详情问题详情问题详情问题详情</p>
		<p>问题详情问题详情问题详情问题详情问题详情问题详情问题详情</p>
		<p>问题详情问题详情问题详情问题详情问题详情问题详情问题详情</p>
		<p>问题详情问题详情问题详情问题详情问题详情问题详情问题详情</p>
		<p>问题详情问题详情问题详情问题详情问题详情问题详情问题详情</p>
		</span>
	</div>
  </div>  
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'detailsProblem',
	  	components:{
	  		headerTip
	  	}, 
	 	data () {
		    return {
		    	
		    }
	  	},
	  	methods:{
	  		
	  	}
	}
</script>

<style scoped>
.detailsProblem{
	background: #F5F5F5;
	padding-bottom: 40rem;
}
.text{
	margin: 1rem 0;
	background: #FFFFFF;
}
.text p{
	padding: 0.5rem 0 0.5rem 0.5rem; 
	font-size: 14px;
}

.t p{
	margin: 0.3rem 0;
	padding: 0 0 0 0.5rem;
	font-size: 10px;
}


</style>