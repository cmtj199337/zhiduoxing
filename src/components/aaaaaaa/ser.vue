<template>
	<div class="goodlist">
		<headerTip message="服务类型" goBack="true"></headerTip>
		<form action="" method="post">
			<ul>
				<li>
					<span>关爱服务</span>
					<span class="item-check-btn">
						<svg class="icon icon-ok"></svg>
					</span>
				</li>
				<li>
					<span>国际服务</span>
					<span class="item-check-btn">
						<svg class="icon icon-ok"></svg>
					</span>
				</li>
				<li>
					<span>社区服务</span>
					<span class="item-check-btn">
						<svg class="icon icon-ok"></svg>
					</span>
				</li>
				<li>
					<span>关爱服务</span>
					<span class="item-check-btn">
						<svg class="icon icon-ok"></svg>
					</span>
				</li>
				<li>
					<span>国际服务</span>
					<span class="item-check-btn">
						<svg class="icon icon-ok"></svg>
					</span>
				</li>
				<li>
					<span>社区服务</span>
					<span class="item-check-btn">
						<svg class="icon icon-ok"></svg>
					</span>
				</li>
			</ul>
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
	  	mounted(){
	  	},
	  	computed:{

	  	},
	  	methods:{
	  		
	  	
	  	}
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
		line-height: 1;
		display: block;
	}
	.goodlist li span{
		vertical-align: middle;
	}
	.goodlist li input{
		vertical-align: sub;
		float: right;
	}
	.item-check-btn {
	    float: right;
	}


.child-view {  
  position: absolute;  
  left: 0;  
  top: 0;  
  width: 100%;  
  height: 100%;  
  transition: all .5s cubic-bezier(.55,0,.1,1);  
}  
.slide-left-enter, .slide-right-leave-active {  
  opacity: 0;  
  -webkit-transform: translate(30px, 0);  
  transform: translate(30px, 0);  
}  
.slide-left-leave-active, .slide-right-enter {  
  opacity: 0;  
  -webkit-transform: translate(-30px, 0);  
  transform: translate(-30px, 0);  
}  
</style>