<template>
  <div class="myFamilys">
   <headerTip message="我的家庭" goBack="true"></headerTip>

	<div class="header">
		<div class="t1"><img src="./name.png" alt=""><p>真实姓名</p><input type="text" name="" placeholder="	    吴彦祖" style="border:none"></div>
		<div class="t1"><img src="./sex.png" alt=""><p>性别</p><input type="text" name="" placeholder="                  男" style="border:none"></div>
		<div class="t1"><img src="./type.png" alt=""><p>身份证号</p><input type="text" name="" placeholder="   12345678901" style="border:none"></div>
		
	</div>	
	<div class="jieshu">
		<p>确认</p>
		</div>
  </div>  
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'myFamilys',
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
.myFamilys{
	background: #F5F5F5;
	padding-bottom: 35rem;
}
.header{
	margin: 1rem 0;
}

.t1{
	padding: 0.4rem 0.5rem;
	border-bottom:1px solid rgba(235,234,234,0.48);
	background: #FFFFFF	;
	display:flex;
}
.t1 p{
	margin-left: 0.5rem;
	font-size: 14px;
	width: 65%;
}
.t1 input{
	width: 30%;

}
.t1 input{
	width: 30%;
	
}
.t1 img{
	margin-top: 0.8rem;
	height: 1.3rem;
	width: 1.3rem;
}
.t2{
	background: #F5F5F5;
	position:relative;
}
.t2 img{
	position:absolute
}
.t2 p{
	position:absolute;
}
.t{
	line-height: 3rem;
}
.t1{
	line-height: 3rem;
}
.jieshu{
	padding:0.8rem 0;
	text-align: center;
	background: #F5F5F5;
}
.jieshu p{
	background: #43B7B6;
	color:#fff;
	font-size:1rem;
	padding: 0.6rem 5rem;
	border-radius: 0.4rem;
	display: inline-block;
}
</style> 