<template>
	<div class="deliveryAddress">
		<headerTip message="填写收货地址" goBack="true"></headerTip>
		<div class="kong"></div>
		<div class="text">
		<span><img src="./xingming.png"><input type="text" name="" placeholder="收货人姓名"></span>
		</div>
		<div class="text">
		<span><img src="./shouji.png"><input type="text" name="" placeholder="手机号"></span>
		</div>
		<div class="text">
		<span><img src="./dingwei.png">   省市<router-link to="goodlist"><img src="./right.png" class="dian"></router-link></span>
		</div>
		<div class="text end">
		<span><input type="text" name="" placeholder="详细地址"></span>
		</div>
		<div class="ee">
			<img src="./tijiao.png"><span>提交</span>
		</div>

	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{
		name:'deliveryAddress',
		components:{
	  		headerTip

	  	},
		data () {
		    return {
		    }
	  	} 
        
   


	}
</script>
<style scoped>
span{
	font-size:0.85rem;
}
.kong{
	padding:0.4rem;
	background:#F5F5F5;
}
.text{
	margin:0 0.8rem;
	border-bottom:1px #EAEAEA solid;
	padding:0.5rem 0;
}
.text img{
	width:4%;
	display:inline;
	vertical-align:middle;
}
.text input{
	border:none;
	width:80%;
	margin-left:0.6rem;
	padding:0.3rem
}
.text .dian{
	margin-left:80%;
}
.end{
	border:none;
}
.ee{
	background:#F5F5F5;
	padding:3rem;
	position:relative;
	height:25rem;
}
.ee img{
	width:70%;
	margin:0 3rem 0 3rem;
}
.ee span{
	position: absolute;
	left:47%;
	top:11.6%;
	color:white;
	font-size:1rem;
}
</style>