<template>
  <div class="projectQrCode">
   <headerTip message="项目二维码" goBack="true"></headerTip>

	
	<div class="erwei"><img src="./weweima.png" alt=""></div>
	<p >【中国滋根】数据管理新思路，唤醒沉睡动员力</p>	
       
	<p >发布人：志多星</p>
	  
	<p >项目类型：应急救援</p>	
      
	<p >服务对象：儿童</p>
	        
	<p >活动时间：2017/05/10-2017/08/29</p>    
   
	<p >计划招募人数：200人</p>
	
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
		    	
		    }
	  	},
	  	methods:{
	  		
	  	}
	}
</script>

 <style scoped>
		h1 {text-align:center;}
		.erwei img{
			width:50%; 
			margin:10% 25%;
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
































































    