<template>
  <div class="detailsProblem">
   <headerTip message="客服中心" goBack="true" style="background: #FFFFFF"></headerTip>
   <div class="kong"></div>
	<div>
		<p class="title">问题{{list.problemId}}:{{list.problemTitle}}</p>
		<p class="content">{{list.problemContent}}</p>
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
		    	list:[]
		    }
	  	},
	  	mounted(){
	  		this.getInfo()
	  	},
	  	methods:{
	  		getInfo(){
	  			
	  			this.$http.get('/api/public/getProblemDetail',{
	  				params:{
	  					id:1
	  				}
	  			}).then(response=>{
	  				let res = response.data
	  				console.log(res)
	  				if(res.result == 0){
	  					this.list = res.data
	  				}
	  			})
	  		}
	  	}
	}
</script>

<style scoped>
.kong{
	padding:0.35rem 0;
	background:#F5F5F5;
}
.title{
	font-size:1.1rem;
	margin:0.2rem 0.6rem; 
	padding:0.6rem 0;
}
.content{
	color:#A3A3A3;
	line-height:1.5rem;
	padding:0.2rem 0.6rem;
	font-size:0.87rem;
}


</style>