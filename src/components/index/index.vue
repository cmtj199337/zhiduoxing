<template>
	<div class="index">
		<slider-bar></slider-bar>
	</div>
</template>

<script>

	import SliderBar from '../../components/common/tools/swiper.vue'

	export default {


	  	name: 'index',
	  	components:{
	  		SliderBar
	  	},
	 	data () {
		    return {
		    	listImg:[
		    		'../register/ire.png'
		    	]
		    }
	  	},
	  	methods:{
	  		getImg(){

	  		}
	  	}
	}
</script>

<style scoped>
	
</style>