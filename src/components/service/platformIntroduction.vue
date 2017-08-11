<template>
	<div class="platformIntroduction">
		
		<div class="title">
		<p style="font-size:1rem;">志多星平台介绍</p>
		</div>
		<div class="text">
		<img src="./image.png">
		<p>{{list}}</p>
		</div>
			
		</div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'platformIntroduction',
		components:{
	  		headerTip
	  	},
		data(){
			return {
				list:[]
			}
		},
		mounted(){
			this.getInfo()
		},
		methods:{
		getInfo(){
			this.$http.get('/api/public/getPlatformIntro').then(response=>{
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
p{
	font-size:0.85rem;
}

.title{
	text-align: center;
	padding:0.6rem 0;
	margin:0.5rem 0.8rem;
	line-height:1.4rem;
}
.title .time{
	font-size:0.5rem;
	margin-left:0.5rem;
	color:#AEAEAE;
}

.text{
	padding:0 0.6rem;
	position:relative;

}
.text p{
	line-height:1.4rem;
	color:#AEAEAE;
}
.text img{
	margin:0.6rem 0;
}

</style>
