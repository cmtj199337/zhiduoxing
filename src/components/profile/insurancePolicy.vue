
<template>
	<div class="insurancePolicy">
		<headerTip message="我的保单" goBack="true"></headerTip>
		<div class="header">
			<ul>
				<li v-for="(item,index) in tabs">
					<span :class="{active: index == iscur }" @click="toggle(item.view,index)">{{item.type}}</span>
				</li>
			</ul>
		</div>
		<div class="kong"></div>
		<component :is='currentView' keep-alive></component>
		</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	import alreadyPaid from '../../components/profile/child/alreadyPaid.vue'
	import UnPaid from '../../components/profile/child/unpaid.vue'
	export default{

		name:'insurancePolicy',
		components:{
	  		headerTip,
	  		alreadyPaid,
	  		UnPaid
	  	},
		data(){
			return {
				iscur:0,
                currentView:'alreadyPaid',
                tabs:[
				 	{type: '已支付',view: 'alreadyPaid'},  
				 	{type: '未支付',view: 'UnPaid'}
				],
			}
		},
		methods:{
			toggle(v,index) {
		    	this.iscur = index;
		    	this.currentView = v
		    }
		}
	}
</script>
<style scoped>
.router-link-active{
	padding-bottom: 0.4rem;
	color:#43B7B5 !important;
	border-bottom: 3px solid #43B7B5;
}
.kong{
	padding:0.4rem 0;
	background:#F5F5F5;
}

.header{
	padding:0.4rem 0;
}
.header ul{
display:flex;
margin:0.1rem 0;
padding:0.2rem 0;
background:white;
text-align: center;
}
.header ul li{
	width:50%;
}
.header ul li a{
	color: #333;
}
.header ul p{
	color:#43B7B5;
}
.header ul li span{
	display: inline-block;
	padding-bottom: 0.4rem;
}
.active{
	color:#43B7B5;
	border-bottom: 3px solid #43B7B5;
}
</style>