<template>
  <div class="projectQrCode">
   <headerTip message="项目二维码" goBack="true"></headerTip>

	
	<div class="erwei"><img :src="pic.qrCode"></div>
	<p >{{list.projectName}}</p>	
       
	<p >发布人：{{list.teamName}}</p>
	  
	<p >项目类型：{{list.serverType}}</p>	
      
	<p >服务对象：{{list.serverObject}}</p>
	        
	<p >活动时间：{{list.projectDate}}</p>    
   
	<p >计划招募人数：{{list.yotNum}}人</p>
	
  </div>  
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'projectQrCode',
	  	components:{
	  		headerTip
	  	}, 
	 	data () {
		    return {
		    	list:[],
		    	pic:[]
		    }
	  	},
	  	mounted(){
	  		this.$nextTick(function(){
	  			this.showInfo()
	  			this.getCode()
	  		})
	  	},
	  	methods:{
	  		showInfo(){
	  			this.$http.get('/api/public/getProjectDetail',{
	  				params:{
	  					id:this.$route.query.projectId
	  				}
	  			}).then(response => {
	  				let res = response.data
	  				if(res.result == 0){
	  					this.list = res.data


	  				}
	  			})
	  		},
	  		getCode(){
				this.$http.get('/api/teamHub/private/selectQrCode',{
					params:{
						proId:this.$route.query.projectId
				}
			}).then(response=>{
				let res=response.data
				if (res.result==0) {
					this.pic=res.data
				}
				})
			},
	  	}
	}
</script>

 <style scoped>
		h1 {text-align:center;}
		.erwei{
			width:100%;
			height:14rem; 
			padding:1rem 0;
		}
		.erwei img{
			width:13rem;
			height:13rem; 
			margin:0 auto;
		}




    	
    	
		p{ 
			text-align:left;
			font-size:0.85rem;
			margin:0 0.6rem; 
			padding:0.8rem 0;
			border-bottom:1px solid rgba(235,234,234,0.48);
			line-height:1.5rem;
		}


    </style>
































































    