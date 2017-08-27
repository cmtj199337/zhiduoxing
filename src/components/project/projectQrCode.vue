<template>
  <div class="projectQrCode">
   <headerTip message="项目二维码" goBack="true"></headerTip>
	<div class="erwei">
		<qrcode
			class="code"
			:value="qrcodeUrl" 
			v-if="qrcodeUrl">
		</qrcode>
	</div>
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
	import Qrcode from 'vue-qrcode';
	export default {
	  	name: 'projectQrCode',
	  	components:{
	  		headerTip,
	  		Qrcode
	  	}, 
	 	data () {
		    return {
		    	list:[],
		    	qrcodeUrl:''
		    }
	  	},
	  	mounted(){
	  		this.$nextTick(function(){
	  			this.showInfo()
	  			this.code()
	  		})
	  	},
	  	methods:{
	  		code(){
	  			let url = 'http://114.215.143.132:8088/#/myprojectDetails?projectId='
	  			this.qrcodeUrl = url + this.$route.query.projectId
	  		},
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
	  		}
	  	}
	}
</script>

 <style scoped>
	h1 {text-align:center;}
	.erwei{
		width:100%;
		text-align: center;
		padding:1rem 0;
	}
	p{ 
		text-align:left;
		font-size:0.85rem;
		margin:0 0.6rem; 
		padding:0.8rem 0;
		border-bottom:1px solid rgba(235,234,234,0.48);
		line-height:1.5rem;
	}
	.code{
		width: 13rem;
	}
</style>
































































    