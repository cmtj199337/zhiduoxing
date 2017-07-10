<template>
	<div class="goodlist">
		<headerTip message="擅长" goBack="true"></headerTip>
		<form action="" method="post">
			<ul>
				<li>
					<span>文化教育</span>
				</li>
				<li>
					<span>文化教育</span>
				</li>
				<li>
					<span>文化教育</span>
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
	.goodlist form{
		margin-top:10%; 
	}
	.goodlist li{
		width: 92%;
		margin: 0 auto;
	    border-bottom: 1px solid #dcdcdc;
	    padding-bottom: 1rem;
	    margin-bottom: 1rem;
	    text-align: left;
	    color: #333;
	}
	.goodlist li span{
		vertical-align: middle;
	}
	.goodlist li input{
		vertical-align: sub;
		float: right;
	}

</style>