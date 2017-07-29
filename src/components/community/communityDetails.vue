<template>
	<div class="communityDetails">
		<headerTip message="社区详情" goBack="true"></headerTip>
		<div class="kong"></div>
		<div class="sqxq">
			<div class="cheader" @click="toAddress({path: '/personalDetails'})">
			<span><img src="./touxiang2.png"></span>
			<div class="name"><span>大蜗牛子</span><p>1小时</p></div>
			</div>

			<div class="ctext">
				<p>社区互动详情，社区互动情况，社区互动详情，社区互动情况，社区互动详情，社区互动情况</p>
			</div>
			<div class="cpicture">
				<img src="./tu11.png">
				<img src="./tu22.png">
				<img src="./tu11.png">
			</div>
			<div class="pl">
				<span><img src="./zan.png">50</span>
				<span><img src="./pinglun.png">42</span>
				<span><img src="./jubao.png">举报</span>
			</div>			
			</div>
			<div class="zan" >
			<div class="zz"><img src="./dianzan.png" style="width:4%"></div>
			<div class="tt">
			<img src="./touxiang1.png">	
			<img src="./touxiang2.png">	
			<img src="./touxiang3.png">
			</div>
		</div>
		<div class="message">
		<ul>
		<li><span class="left"><img src="./touxiang2.png"></span>
		<span class="text">
		<p style="color:#43b7b6;font-size:0.9rem">昵称</p>
		<p style="color:#c9c9c9">2012/05/02 10:00</p>
		<p>评论详情评论详情评论详情评论详情评论详情评论详情</p>
		</span>
		</li>
		<li><span class="left"><img src="./touxiang2.png"></span>
		<span class="text">
		<p><span style="color:#43b7b6;font-size:0.9rem">张三</span>回复<span style="color:#43b7b6;font-size:0.9rem">昵称</span></p>
		<p style="color:#c9c9c9">2012/05/02 10:00</p>
		<p>评论详情评论详情评论详情评论</p>
		</span>
		</li>
		</ul>
		</div>
		</div>
</template>
        <script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'communityDetails',
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
.kong{
		background:rgba(235, 234, 234, 0.48);
		 padding: 0.4rem;
	}
.sqxq{
	margin:0 0.6rem;
	border-bottom:1px rgba(235, 234, 234, 0.48) solid;
}
	.cheader{
	padding:0.6rem 0;
	position:relative; 
	
}
.cheader  div{
	position:absolute; 
	top:24%;
	left:20%; 
}
.cheader span{
	font-size:0.9rem; 
}
.cheader p{
	color:#666;
	padding-top: 0.3rem;
}
.cheader img{
	width:15%;
	margin: 0 0.5rem;
}
.ctext p{
	padding:0.2rem 0;
	margin:0 0.5rem;
	line-height:1.5rem;
	color: #666;
    font-size: 0.85rem;
}
.cpicture {
	margin:0 0.2rem;
}
.cpicture img{
width:30%;
display:inline;
margin:0 1.2%;
}
.pl{
	display:flex;
	text-align: center;
	color: #999
}
.pl span{
	width:32%;
	margin-left:5%; 
	margin:0.5rem 0;

}
.pl img{
	width:13%;
	display:inline;
	vertical-align: middle;	
}
.zan{
	margin:0 0.6rem;
	padding:1.8rem 0;
	position:relative;
	border-bottom:1px rgba(235, 234, 234, 0.48) solid;
}
.zan div{
	display:inline;
}
.zan img{
	width:10%;
	display: inline;

}
.zz img{
	left:5%;
	position: absolute;
	width:10%;
	top:32%;
}
.tt{
	width:100%;
	left:15%;
	top:15%;
	position:absolute;

}
.tt img{
	margin-left: -1rem;
}
.message ul li{
display:flex;
margin:auto 1rem;
}
.left{
	width:12%;
	margin-right:2%;
}
.left img{
	width:100%;
	margin:40% 15%;
}
.text{
	margin:0.5rem 1rem;
	width:88%;
}
.text p{
	margin:0.3rem 0;

}


</style>