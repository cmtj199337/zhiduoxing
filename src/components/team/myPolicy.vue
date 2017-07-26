
<template>
	<div class="insurancePolicy">
		<headerTip message="我的保单" goBack="true"></headerTip>
		<div class="header">
			<ul>
				<li>
					<router-link to="/myPolicy/alreadyPaid"><span>已支付</span></router-link>
				</li>
				<li>
					<router-link to="/myPolicy/unpaid"><span>未支付</span></router-link>
				</li>
			</ul>
		</div>
		<div class="kong"></div>
		<router-view></router-view>
		</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'insurancePolicy',
		components:{
	  		headerTip
	  	},
		data(){
			return {
			}
		},

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
</style>