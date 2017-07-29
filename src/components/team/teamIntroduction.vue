<template>
	<div class="teamIntroduction">
		<headerTip message="团队详情" goBack="true"></headerTip>
		<swipe v-model="index" style="text-align:center;">
		 	<swipe-item><img src="./banner@2x.png" alt=""></swipe-item>
		 	<swipe-item><img src="./banner@2x.png" alt=""></swipe-item>
		 	<swipe-item><img src="./banner@2x.png" alt=""></swipe-item>
		</swipe>
			<div class="kong"></div>

			<div class="header1">
            <h4 class="texttitle"><span><img src="./zil@2x.png"></span>团队信息</h4>
        	</div>
			<div class="usertext">
			<span>名称：志多星团队 团队编号：123</span>
			</div>
			<div class="usertext">
			<span>团队口号：倡导无私奉献新风尚</span>
			</div>
			<div class="usertext">
			<span>上级团队：志愿者联合会</span>
			</div>
			<div class="usertext">
			<span>团队总志愿时长：720小时</span>
			</div>
			<div class="usertext">
			<span>服务类别：关爱服务</span>
			</div>
			<div class="usertext">
			<span>团队类型：党政机关</span>
			</div>
			<div class="usertext">
			<span>注册日期：2017-05-10</span>
			</div>
			<div class="usertext">
			<span>团队管理员：吴彦祖</span>
			</div>
			<div class="usertext">
			<span>联系电话：12345678912</span>
			</div>

			<div class="header2">
            	<h4 class="texttitle"><span><img src="./dingwei@2x.png"></span>团队地址</h4>
				<div class="usertext">
				<span>北京市朝阳区四惠东</span>
				</div>
			</div>
			
	        <div class="end">
			<ul>
			<li><span><img src="./tongg@2x.png">审核通过</span></li>
			<li><span><img src="./butongg@2x.png">审核不通过</span></li>
			</ul>
			</div>
	</div>
</template>
<script>
import{ Swipe,SwipeItem}from'c-swipe';
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'teamIntroduction',
		components:{
			Swipe,
			SwipeItem,
	  		headerTip
	  	},
		data(){
			return {
				index:0,
			}
		},

	}
</script>
<style scoped>
@import '../../styles/usertext.css';
@import '../../styles/swipe.css';
.usertext input{
		margin: 0;
		width: 100%;
	}
.usertext{
	margin: 0 1rem 1.2rem 1rem;
}
.header1{
    border-bottom: 1px rgba(238, 238, 244, 0.5) solid;
}
.header2{
    border-bottom: 1px rgba(238, 238, 244, 0.5) solid;
}
.header  span p{
		font-size: 1.2rem;
	}
.usertext a{
	border: 0;
	width: 100%;
	height: 2.5rem;
	line-height: 2.5rem;
	font-size: 1rem;
	display: inline-block;
	color: #333;
	text-indent: 0;
	position: relative;
	}
.kong{
	background:#f6f6f9;
	padding: 0.4rem;
	margin: 0.4rem 0;
	}
	
.usertextend textarea{
	border: none; 
	padding: 2.5rem 0;
	width: 100%;

	}
.next{
	border:none;
	border-radius:7px;
	background: #43b7b6;
	color: white;
	font-size: 1.2rem;
	width:60%;
	height:2rem;
	}
.end{
	width: 100%;
	position: fixed;
	bottom: 0;
	display: block;
	background: #fff;
}
.end ul {
	display:flex;
}
.end ul li{
	width:50%;
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