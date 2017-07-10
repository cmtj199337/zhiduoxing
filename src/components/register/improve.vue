<template>
	<div class="improve">
		<headerTip message="个人注册" goBack="true"></headerTip>
		<form action="" method="post">
			
			<div class="sub">
				<input type="button" value="提交"/>
			</div>
		</form>
	</div>
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'improve',
	  	components:{
	  		headerTip
	  	},
	 	data () {
		    return {
		    
		    }
	  	},
	}
</script>

<style scoped>

</style>