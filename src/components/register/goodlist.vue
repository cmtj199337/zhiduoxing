<template>
	<div class="goodlist">
		<headerTip message="擅长" goBack="true"></headerTip>
		<form action="" method="post">
			<ul>
				<li>
					<span>文化教育</span><input type="checkbox">
				</li>
				<li>
					<span>文化教育</span><input type="checkbox">
				</li>
				<li>
					<span>文化教育</span><input type="checkbox">
				</li>
			</ul>
			<div class="sub">
				<input type="button" value="提交"/>
			</div>
		</form>
	</div>
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'goodlist',
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
	@import '../../styles/usertext.css';
	.goodlist{
		font-size: 1rem;
	}
	.goodlist li{
		margin: 0rem 2.5rem;
	    border-bottom: 1px solid #dcdcdc;
	    padding-bottom: 0.3rem;
	    margin-bottom: 1.2rem;
	    text-align: left;
	}
	.goodlist li span{
		vertical-align: middle;
	}
	.goodlist li input{
		vertical-align: sub;
		float: right;
	}

</style>