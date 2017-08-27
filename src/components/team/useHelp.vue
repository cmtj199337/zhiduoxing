<template>
	<div class="useHelp">
		<headerTip message="使用帮助"goBack="true"  v-if="tyoe"></headerTip>
		<headerTip message="使用帮助(团队)"goBack="true"  v-else></headerTip>

		<div class="kong"></div>
		<div class="main" v-html="list">
		</div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'useHelp',
		components:{
	  		headerTip
	  	},
		data(){
			return {
				list:[],
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.getInfo()
			})
		},
		methods:{
			getInfo(){
				let type=localStorage.getItem('usertype')
			if(type==0){	
				this.$http.get('/api/public/getPlatformIntro',{
				params:{
				type:1
			}}).then(response=>{
				let res = response.data
	  				console.log(res)
	  				if(res.result == 0){
	  					this.list = res.data
	  					this.tyoe=true
	  				}
			})
		}else{
			this.$http.get('/api/public/getPlatformIntro',{
				params:{
				type:2
			}}).then(response=>{
				let res = response.data
	  				console.log(res)
	  				if(res.result == 0){
	  					this.list = res.data
	  				}
			})
		}
	}	,					
		
	}

}
</script>
<style scoped>
p{
	font-size:0.85rem;
}
.kong{
	padding:0.3rem 0;
	background:#F5F5F5;
}
.main{
	text-align: center;
	font-size:1rem;
}
.main img{
	margin:0.2rem auto;
}

</style>