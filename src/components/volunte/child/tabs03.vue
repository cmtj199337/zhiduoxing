<template>
	<div class="tabs03">
		tab03
	</div>
</template>
<script>
	import { Swipe, SwipeItem } from 'c-swipe';
	
	export default{

		name:'tabs03',
		components:{
			Swipe, 
			SwipeItem
	  	},
		data(){
			return {
				index:0,
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
@import '../../../styles/swipe.css';
.kong{
	background:#F5F5F5;
	padding:0.3rem;
}
.index{
		position: relative;
		padding-bottom: 15%;
	}
.sousuo{
	padding:0.8rem 0;
	position:relative; 
}
.sousuo input{
	border:none;
	border-radius:0.2rem;
	padding: 0.4rem 0;
	background:#F5F5F5;
	margin-left:2%;
	margin-right: 2%;
	width:95%;
	text-indent: 2em;
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
.header ul{
display:flex;
margin:0.1rem 0 0 0;
padding:0.5rem 0 0 0;
text-align: center;

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
.main{
	display:none;
}
.tou{
	margin-bottom:0.6rem;
}

.tou ul{
	display:flex;
	margin:0.1rem 0;
	padding:0.5rem 0;
	text-align: center;
	position:relative;
	background:white;
		}
.tou ul li{
	width:33%;
}
.tou ul li img{
	width:4%;
	position:absolute;

}
.main2{
	background:#F5F5F5;
}
.main ul li{
display:flex;
margin:0.2rem;
background:white;
border-bottom:1px #E9E9E9 solid;
}
.main ul li span{
width:60%;
margin:0.4rem;
}
.main ul li span p{
	margin:0.6rem 0;
	color:#D4D4D4;
}

.text ul li{
display:flex;
margin:0.2rem;
background:white;
border-bottom:1px #E9E9E9 solid;
}

.text ul li span{
width:60%;
margin:0.4rem;
}
.text ul li span p{
	margin:0.6rem 0;
	color:#D4D4D4;
}	
.main3{
	display:none;
}
.main3 ul li{
display:flex;
margin:0.2rem;
background:white;
border-bottom:1px #E9E9E9 solid;
}
.main3 ul li span{
width:60%;
margin:0.4rem;
}
.main3 ul li span p{
	margin:0.6rem 0;
	color:#D4D4D4;
}	
</style>