<template>
	<div class="unpending">
		<div class="header1">
			<ul>
				<li>姓名</li>
				<li class="bulu">补录时长</li>	
				<li><p class="cc2">申请日期</p></li>		
			</ul>
		</div>
		<div class="kong"></div>
		<div class="header2">
			<ul @click="toAddress({path: '/personalData'})">
				<li class="cc1"><img src="../tongg@2x.png" class="t1"><p><img src="../tou1@2x.png" ><span>联系人</span></p></li>
				<li><p>3小时</p></li>
				<li><p class="zz1">2017/05/21</p></li>
			</ul>	
			<ul @click="toAddress({path: '/personalData'})">
				<li class="cc1"><img src="../xuanze.png" class="t1"><p><img src="../tou1@2x.png" ><span>联系人</span></p></li>
				<li><p>3小时</p></li>
				<li><p class="zz1">2017/05/21</p></li>
			</ul>	
			<ul @click="toAddress({path: '/personalData'})">
				<li class="cc1"><img src="../xuanze.png" class="t1"><p><img src="../tou1@2x.png" ><span>联系人</span></p></li>
				<li><p>3小时</p></li>
				<li><p class="zz1">2017/05/21</p></li>
			</ul>	
			<ul @click="toAddress({path: '/personalData'})">
				<li class="cc1"><img src="../xuanze.png" class="t1"><p><img src="../tou1@2x.png" ><span>联系人</span></p></li>
				<li><p>3小时</p></li>
				<li><p class="zz1">2017/05/21</p></li>
			</ul>	
			<ul @click="toAddress({path: '/personalData'})">
				<li class="cc1"><img src="../xuanze.png" class="t1"><p><img src="../tou1@2x.png" ><span>联系人</span></p></li>
				<li><p>3小时</p></li>
				<li><p class="zz1">2017/05/21</p></li>
			</ul>	
			<ul @click="toAddress({path: '/personalData'})">
				<li class="cc1"><img src="../xuanze.png" class="t1"><p><img src="../tou1@2x.png" ><span>联系人</span></p></li>
				<li><p>3小时</p></li>
				<li><p class="zz1">2017/05/21</p></li>
			</ul>	
			<ul @click="toAddress({path: '/personalData'})">
				<li class="cc1"><img src="../xuanze.png" class="t1"><p><img src="../tou1@2x.png" ><span>联系人</span></p></li>
				<li><p>3小时</p></li>
				<li><p class="zz1">2017/05/21</p></li>
			</ul>	
			<ul @click="toAddress({path: '/personalData'})">
				<li class="cc1"><img src="../xuanze.png" class="t1"><p><img src="../tou1@2x.png" ><span>联系人</span></p></li>
				<li><p>3小时</p></li>
				<li><p class="zz1">2017/05/21</p></li>
			</ul>	
		</div>
		<div class="end">
			<ul>
				<li>全选</li>
				<li><span><img src="../butongg@2x.png" >不通过</span></li>
				<li><span><img src="../tongg@2x.png" >通过</span></li>
			</ul>		
		</div>
	</div>
</template>
<script>
	export default{

		name:'unpending',
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
.header2 ul li .t1{
	width:1rem;
	height:1rem;
	margin-top:0.8rem;
}

.header1 ul{
	display: flex;
	margin-left:4%;
}
.header1 ul li{
	width:30%;
	text-align:right;
	padding:0.5rem 0;

}
.cc1{
	display:flex;
}
.cc2{
	text-align:right;
}
.kong{
	height:0.8rem;
	background:#0000001a;
}
.header2{
	margin:0 0.5rem;
}
.header2 ul{
	display:flex;
	border-bottom:1px #0000001a solid;

}
.header2 ul .cc1{
	width:40%;
}
.header2 ul li{
	width:30%;
	text-align:center;
	padding:0.5rem 0;

}

.header2 ul li p{
	line-height:2.6rem;
	margin-left: 0.6rem;


}
.header2 ul li p img{
	display:inline;
	vertical-align:middle;
	width:2.8rem;
	height:2.8rem;

}
.header2 ul li p span{
	margin-left:0.2rem;
}
.end{
	width: 100%;
	position: fixed;
	background: #fff;
	bottom: 0;
}
.end ul {
	display:flex;
}
.end ul li{
	width:33%;
	text-align:center;
	border-right:1px #0000001a solid;
	border-bottom :1px #0000001a solid;
	padding:0.7rem 0;
	font-size:0.85rem;

}
.end ul li span img{
	width:15%;
	display:inline;
	vertical-align:middle;
	margin-right:0.2rem;
}
</style>