<template>
	<div class="mycommunity"  @click="toAddress({path: '/communityDetails'})">
		<div class="cheader">
			<span><img src="../touxiang2.png"></span>
			<div class="name"><span>大蜗牛子</span><p>1小时</p></div>
		</div>

		<div class="ctext">
			<p>社区互动详情，社区互动情况，社区互动详情，社区互动情况，社区互动详情，社区互动情况</p>
		</div>
		<div class="cpicture">
			<img src="../tu11.png">
			<img src="../tu22.png">
			<img src="../tu11.png">
		</div>
		<div class="usertext">
			<span>#志愿项目#</span>
		</div>
		<div class="pl">
			<p><img src="../zan.png"><span>50</span></p>
			<p><img src="../pinglun.png"><span>42</span></p>
			<p><img src="../shanchu.png"><span></span></p>
		</div>
		<div class="kong"></div>
	</div>
</template>
<script >
	export default{

		name:'mycommunity',
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
.message{
	position:absolute;
	right:4%;
	top:2.5%;
	font-size:0.9rem; 

}
.kong{
		background:rgba(235, 234, 234, 0.48);
		 padding: 0.4rem;
	}
.usertext{
	margin:0rem 1rem;
	padding:0.8rem 0; 
	font-size: 0.8rem;
	border-bottom:1px rgba(235, 234, 234, 0.48) solid;
}
.sousuo{
	padding:0.8rem 0;
	position:relative; 
}
.usertext span{
	color:#43B7B5;
}
	
.sousuo input{
	border:none;
	border-radius:0.2rem;
	padding: 0.4rem 0;
	background:rgba(238, 238, 244, 0.5);
	margin-left:2%;
	margin-right: 2%;
	width:80%;
	text-indent: 2em
}
.sousuo p{
	margin-right:5%; 
}
.sousuo img{
	width: 4%;
	position: absolute;
	top:38%;
	left:3%;
}
.sousuo span img{
	width: 4%;
	position: absolute;
	top:38%;
	left:92%;
}

.header ul{
	display:flex;
	margin:0.1rem 0;
	padding:0.5rem 0;
	text-align: center;
	width: 90%;
    margin: 0 auto;
    font-size: 0.85rem;
}
.header ul li{
	width:50%;
}
.header ul li span{
	display: inline-block;
	padding-bottom: 0.4rem;
}
.active{
	color:#43B7B5;
	border-bottom: 3px solid #43B7B5;
}
.jheader{
	margin: 1rem 0.5rem;
}
.jtext p{
	margin: 0.5rem 0.5rem;
	padding:1rem 0;
	line-height:2rem;
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
	margin:0 0.5rem;
}
.cpicture img{
width:30%;
display:inline;
margin:0 1.2%;
}
.pl{
	display:flex;
	text-align: center;
	color: #999;
	padding:0.2rem 0;
}
.pl p{
	width:33.3%;
	margin-left:5%; 
	margin:0.5rem 0;
}
.pl p span{
	margin-left:0.4rem;
}
.pl img{
	width:13%;
	display:inline;
	vertical-align:middle;	
	padding-bottom:0.15rem;
}
.fb img{
	width:15%;
	position:absolute; 
	right:4%;
}
</style>