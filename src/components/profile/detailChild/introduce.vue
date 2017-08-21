<template>
	<div class="introduce">
		<div class="jheader">
			<!-- <img src="../jieshaotu.png"> -->
		</div>
		<div class="jtext">
			<p>{{intro}}</p>
		</div>
		<footer class="foot">
			<span class="bm1"><img src="../shoucang.png">收藏</span>
			<span class="bm2"><img src="../fenxiang.png">分享</span>
			<span class="bm3"><p class="bm">我要报名</p></span>
		</footer>
	</div>
</template>
<script>
	export default{
		name:'introduce',
		data () {
		    return {
				intro:[]
		    }
	  	},
	  	mounted(){
	  		this.$nextTick(function(){
	  			this.showIntro()
	  		})
	  	},
	  	methods:{
	  		showIntro(){
				  this.$http.get('/api/public/getProjectIntro',{
					  params:{
						  id:this.$route.query.projectId
					  }
				  }).then( response => {
					  let res = response.data
					  if(res.result == 0){
						  this.intro = res.data;
					  }
				  })
			  }
	  	}

	}
</script>
<style scoped>
@import '../../../styles/usertext.css';
.usertext{
	margin:0rem 1rem;
	padding:0.8rem 0; 
	font-size: 0.85rem;
}
.introduce{
	background: #fff
}
.last{
	margin:0rem 1rem;
	padding:0.8rem 0; 
	font-size: 0.8rem;
}
.header{
	padding:0.4rem 0;
	background:rgba(235, 234, 234, 0.48);
}
.header ul{
	display:flex;
	margin:0.1rem 0;
	padding:0.5rem 0;
	background:white;
	text-align: center;
}
.header ul li{
	width:33%;
}
.header ul li span{
	display: inline-block;
	padding-bottom: 0.4rem;
}
.active{
	color:#43B7B5;
	border-bottom: 3px solid #43B7B5;
}
.kong{
	background:rgba(235, 234, 234, 0.48);
	 padding: 0.4rem;
}
.header3{
	margin:0rem 1rem;
	padding:0.8rem 0; 
	border-bottom:1px #dcdcdc solid;
}
.header3 span{
	margin-left: 62%;
}
.header3 span img{
	width:0.8rem;
	display:inline-block;
	vertical-align: middle;	
}
.texttitle {
    font-size: 0.8rem;
    font-weight: normal;
    margin:0rem 1rem;
	padding:0.8rem 0; 
	border-bottom:1px #dcdcdc solid;
}
.kong2{
	background:rgba(235, 234, 234, 0.48);
	padding: 0.8rem;
}
.touxiang{
	position:relative;
	margin:0rem 1rem;
	padding:0.8rem 0; 

}
.touxiang .img1{
	margin-left:0.6rem;
}
.touxiang img{
	width:14%;
	display:inline;
	vertical-align: middle;
	margin-left:-1rem;
}
.foot{
	display:flex;
	text-align:center;
	position: fixed;
	bottom: 0;
	width: 100%;
	background: #fff 
}
.foot span{
	position:relative;
}
.bm1{
	width:23%;
	text-align: center;
	margin:0.3rem 0; 

}
.bm2{
	width:23%;
	margin:0.3rem 0; 
}
.bm3{
	width:56%;
	background: #43B7B5;
}
.bm3 img{
	width: 100%;
	height:100%;
}
.bm1 img{
	width:28%;
	margin-top:0.3rem;
	margin-left:38%;
}
.bm2 img{
	width:28%;
	margin-top:0.3rem;
	margin-left:38%;
}
.bm{
    color: white;
    position: absolute;
    top: 35%;
    left: 35%;
    font-size: 0.9rem;
}
.jheader{
	padding: 1rem 0.5rem;
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
	margin:0.2rem 0.5rem;
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
.fb img{
	width:15%;
	position:absolute; 
	right:4%;
}
</style>