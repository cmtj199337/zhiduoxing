<template>
	<div class="juniorTeamProject">
		<headerTip message="志愿者列表" goBack="true"></headerTip>
		<div class="pending">
			<div class="header1">
				<ul>
					<li>姓名</li>
					<li>志愿时长</li>	
					<li>操作</li>		
				</ul>
			</div>
			<div class="kong"></div>
			<div class="header2">
				<ul >
<!-- 					<span class="item-check-btn list-btn">
				        <svg class="icon icon-ok"></svg>
				    </span> -->
				    <!-- <router-link :to="{path:'personalData',query:{volunteerId:1}}"> -->
						<li style="display:flex;"><img src="../tou1@2x.png" ><p>利好</p></li>
						<li><p>200小时</p></li>
						<li><p class="zz1">禁用</p></li>
					<!-- </router-link> -->
				</ul>
			</div>
		</div>
<!-- 		<div class="end">
			<ul>
				<li>全选</li>
				<li><span><img src="../butongg@2x.png" >禁用</span></li>
				<li><span><img src="../tongg@2x.png" >解禁</span></li>
			</ul>
			<span style="top:28%" class="item-check-btn list-btn">
		        <svg class="icon icon-ok"></svg>
		    </span>		
		</div> -->
	</div>
</template>
<script>
	import headerTip from '../../../components/common/header/header.vue'
	export default{
		name:'juniorTeamProject',
		components:{
	  		headerTip
	  	},
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
@import '../../../styles/usertext.css';
.header1 ul{
	display: flex;
}
.header1 ul li{
	width:33.33%;
	text-align:center;
	padding:0.5rem 0;

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
	position: relative;
}
.header2 ul li{
	width:26%;
	text-align:center;
	padding:0.5rem 0;

}
.header2 ul li img{
	width:2.5rem;
	height:2.5rem;

}
.header2 ul li p{
	line-height:2.2rem;
	margin-left: 0.6rem;

}
.header2 ul li .zz1{
	width:4rem;
	height:1.6rem;
	background:white;
	color:#959595;
	line-height:1.6rem;
	border-radius:5px;
	margin-left:58%;
	margin-top:6%
}
.header2 ul li .zz2{
	width:4rem;
	height:1.6rem;
	background:#43B7B6;
	color:white;
	line-height:1.6rem;
	border-radius:5px;
	margin-left:58%;
	margin-top:6%
}
.list-btn{
	position: absolute;
	left: 0.5rem;
	top: 36%;
}
.header2 ul li:nth-child(2){
	padding-left: 2rem;
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
.zz1{
	border-radius:5px;
	border:1px #ECECEC solid;  
}
</style>