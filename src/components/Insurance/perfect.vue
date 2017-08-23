<template>
	<div class="perfect">
	    <headerTip message="完善信息" goBack="true"></headerTip>
	    <div class="header">
			<img src="./banner.png" alt="" style="width:100%">		
		</div>
		<div class="insurance">
			<h4><span><img src="./baoxian.png"></span>保险方案</h4>
			<ul>
				<li>
					<span class="item-check-btn">
						<svg class="icon icon-ok"></svg>
					</span>
					<p>意外险：平安保障方案三 </p><i>￥50</i>
				</li>
				<li>
					<span class="item-check-btn">
						<svg class="icon icon-ok"></svg>
					</span>
					<p>意外险：平安保障方案三 </p><i>￥50</i>
				</li>
			</ul>
		</div>

		<prove @sendData="getData"></prove>
		<div class="end">
			<p>确定</p>
		</div>
	</div>  
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'
	import Prove from '../../components/common/tools/prove.vue'

	export default {
	  	name: 'perfect',
	  	components:{
	  		headerTip,
	  		Prove
	  	}, 
	 	data () {
		    return {
		    	
		    }
	  	},
	  	methods:{
	  		getData(data){
	  			this.data = data
	  		}
	  	}
	}
</script>

<style scoped>
@import '../../styles/usertext.css';
.perfect{
	padding-bottom:10%;
}
.insurance{
	border-top: 0.8rem solid #f5f5f5;
	background: #fff;
}
.insurance h4{
	font-size: 1rem;
    font-weight: normal;
    margin:1rem;
}
.insurance h4 span{
	width: 1rem;
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.5rem;
}
.insurance ul li{
	padding:1rem;
	font-size: 1rem;
}
.insurance ul li p{
	display: inline-block;
	padding-left: 0.5rem;
}
.insurance ul li i{
	display: inline-block;
	color: #FFA92F;
	float: right;
}
.end{
	margin: 2.5rem 0 0 0;
	text-align: center;
}
.end p{
	width: 14rem;
	color: #fff;
	background: #43B7B6;
	padding: 0.8rem 0;
	margin: 0 auto;
	border-radius: 0.4rem;
	border:none;
	appearance:none;
}
</style>