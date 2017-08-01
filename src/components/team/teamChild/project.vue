<template>
	<div class="main">
		<span @click="toAddress({path: '/myprojectDetails'})">
			<img src="../xiangm.png" >
			<img src="../teb2.png" >
			<img src="../quan.png" style="position:absolute;width:8%;top:8%;left:5%;">
			<img src="../xin.png" style="position:absolute;width:5%;top:12%;left:6.5%;">
			<img src="../quan.png" style="position:absolute;width:8%;top:8%;right:5%;">
			<img src="../baoxian.png" style="position:absolute;width:5%;top:11%;right:6.5%;">
			<ul class="te">
				<li>北京市朝阳区</li>
				<li>50/100</li>
				<li style="text-align:right;margin-right:1rem;">待启动</li>
			</ul>
			<ul class="te2">
				<li>智多星项目名称</li>
				<li style="text-align:center;color:#666">2017/05/02-2017/05/02</li>
			</ul>
		</span>
		<span @click="toAddress({path: '/myprojectDetails'})">
			<img src="../xiangm.png" >
			<img src="../teb2.png" >
			<img src="../quan.png" style="position:absolute;width:8%;top:8%;left:5%;">
			<img src="../xin.png" style="position:absolute;width:5%;top:12%;left:6.5%;">
			<img src="../quan.png" style="position:absolute;width:8%;top:8%;right:5%;">
			<img src="../baoxian.png" style="position:absolute;width:5%;top:11%;right:6.5%;">
			<ul class="te">
				<li>北京市朝阳区</li>
				<li>50/100</li>
				<li style="text-align:right;margin-right:1rem;">待启动</li>
			</ul>
			<ul class="te2">
				<li>智多星项目名称</li>
				<li style="text-align:center;color:#666">2017/05/02-2017/05/02</li>
			</ul>
		</span>
	</div>
</template>
 <script>
	export default{

		name:'main',
		data(){
			return {
				
			}
		},
		methods:{
			toAddress(path){
                this.$router.push(path)
            }
		}
	}

</script>
<style scoped>
.header{
	position:relative;
}
.header2{
	position:absolute;
	display: flex;
	width:100%;
}

.header3 ul{
display:flex;
margin:0.1rem 0;
padding:0.5rem 0;
text-align: center;
font-size: 0.85rem;
}
.header3 ul li{
width:50%;

}
.header3 ul li span{
	display: inline-block;
	padding-bottom: 0.4rem;
}
.active{
	color:#43B7B5;
	border-bottom: 3px solid #43B7B5;
}
.header2 span{
	width:50%;
	text-align:center;
}
.per{
	position:absolute;
	top:42%;

	width:96%;
	margin:0 0.6rem;
	border-bottom:1px #F5F5F5 solid;
	height:6.5rem;
	display:flex;
}
	
.ziliao1 p{
	margin: 0.5rem 0;

}
.ziliao2 p{
	margin: 0.5rem 0;

}
.ziliao1{
width:18%;
text-align: center;
margin:1rem 0rem 1rem 1rem;
}
.ziliao2{
width:40%;
margin:1.2rem 0;
margin-left:1rem;
}
.xx{
	display:flex;
}
.xx img{
	width:10%;
	height:10%;
	margin:0 0.2rem;
	vertical-align:middle;
}
.main{
	background:#F5F5F5;
	padding:0.2rem;
	
}
.main span{
	margin:0.4rem;
	display:inline-block;
	position:relative;
}
.te{
	display:flex;
	position:absolute;
	width:100%;
	bottom:23%;

}
.te li{
	text-align:center;
	width: 33%;
	color:white
}
.te2{
	display:flex;
	position:absolute;
	width:100%;
	bottom:5%;

}
.te2 li{
	width: 45%;
	margin-left: 5%
}
.main2{
	background:#F5F5F5;
	padding: 0.6rem 0;
	position:relative;
}
.main2 ul{
	margin:0.2rem 0;
}
.main2 ul li{
	background:white;
	padding:0.5rem 0;
	border-radius:7px;
	margin-left:15%;
	margin-right: 2%;
	top: 5%;
	position: relative;
	margin-bottom:0.6rem; 
}
.main2 ul li:last-child{
	margin-bottom:0; 
}
.main2 ul li img{
    width: 5rem;
    height: 5rem;
    position: absolute;
    left: -2.5rem;
    top: 5%;
}
.main2 ul li .m1{
	display:flex;
	margin-left:12%;
}
.main2 ul li .mm1{
	width:50%;
	margin-left:10%
}
.mm1 p{
	color:#BCBCBC;
}
.main2 ul li h3{
	margin-bottom: 0.8rem;
	margin-left:4rem;
}

</style>