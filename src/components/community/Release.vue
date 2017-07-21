
<template>
	<div class="Release">
		<headerTip message="我要发布" goBack="true"></headerTip>
		<span class="message">发布</span>
		<div class="fabu">
			<textarea placeholder="这一刻的想法..." ></textarea>
		</div>
		<div>
			<div class="fa">
				<span><img src="./f1.png"></span>
				<span><img src="./f2.png"></span>
				<span><img src="./f3.png"></span>
				<span><img src="./f4.png"></span>
				<img src="./chanchu.png" style="position:absolute;width:4.2%;left:19.1%;top:6.5%;opacity:0.7">
				<img src="./chanchu.png" style="position:absolute;width:4.2%;left:69.2%;top:6.5%;opacity:0.7">
				<img src="./chanchu.png" style="position:absolute;width:4.2%;left:94.2%;top:6.5%;opacity:0.7">
			</div>
			<div class="fa2">
				<span><img src="./f1.png"></span>
				<span><img src="./f2.png"></span>
				<span><img src="./f3.png"></span>
				<span><img src="./f4.png"></span>
				<img src="./chanchu.png" style="position:absolute;width:4.2%;left:19.1%;top:6.5%;opacity:0.7">
				<img src="./chanchu.png" style="position:absolute;width:4.2%;left:69.2%;top:6.5%;opacity:0.7">
				<img src="./chanchu.png" style="position:absolute;width:4.2%;left:94.2%;top:6.5%;opacity:0.7">
			</div>
			<img src="./tianjia.png" style="width:24%;margin:1%;">
		</div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'Release',
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
.message{
	position:absolute;
	right:4%;
	top:2.5%;
	font-size:0.9rem; 
}
.fabu{
	width:100%;
}
.fabu textarea{
	width:100%;
	height:10rem;
	border:0 none; 
	outline:none;
}
.fa{
	display:flex;
	margin:1%;
	border-top:1px #F5F5F5 solid;
	position:relative;
}
.fa span{
	width:23%;
	margin:1%;
}
.fa2{
	display:flex;
	margin:1%;
	position:relative;

}
.fa2 span{
	width:23%;
	margin:1%;

}

	
</style>