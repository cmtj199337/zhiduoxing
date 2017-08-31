<template>
<div class="team">
	<ul>
		<li v-for="item in teamlist">
			<router-link :to="{path:'teamPresentation',query:{teamId:item.teamId}}">
				<img :src="item.teamIcon">
				<p class="hd">{{item.teamName}}</p>
				<p class="two">
					<span class="s1"><b>{{item.serverDuration}}</b>小时</span>
					<span class="s2"><b>{{item.teamMember}}</b>人</span>
					<span class="s3">{{item.teamManager}}</span>
				</p>
				<p class="three">
					<span>志愿总时长</span>
					<span>团队人数</span>
					<span>团队管理员</span>
				</p>
			</router-link>
		</li>
		<infinite-loading :on-infinite="getList" ref="infiniteLoading">
			<i slot="no-more">
				没有更多了...
			</i>
		</infinite-loading>
	</ul>
</div>
</template>
<script>
	import InfiniteLoading from 'vue-infinite-loading'

	export default{

		name:'team',
		components:{
	  		InfiniteLoading
	  	},
		data(){
			return {
				teamlist:[]
			}
		},
		methods:{
			getList(){
				let pages = Math.ceil(this.teamlist.length/10)+1;
				this.$http.get('/api/private/getTeamByCollect?nowPage='+pages).then(response =>{
					let res = response.data
					if(res.result == 0){
						if(res.data.length > 0){
		    				this.teamlist = this.teamlist.concat(res.data);
		    				this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
		    			}else{
		    				this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
		    			}
					}
				})
			}
		}

	}
</script>
<style scoped>
p{
	font-size:0.85rem;
}
.team{
	background:#f5f5f5;
	padding: 0.6rem 0;
	position:relative;

}
.team ul li .hd{
	margin-bottom:0.5rem;
	font-size:1rem;
	margin-left:15%;
}
.team ul li p{
	margin:0.2rem 0;
	
}
.team ul li p span{
	margin-left:12%;
}
.team ul li{
	background:white;
	padding:0.5rem 0;
	border-radius:7px;
	margin-left:12%;
	margin-right: 2%;
	position:relative;
	margin-bottom: 0.6rem;
}
.team ul li a{
	color: #000;
}
.team ul li img{
	width:4.5rem;
	height:4.5rem;
	border-radius: 50%;
	position:absolute;
	left: -2.25rem;
	top:10%;
}
.team ul li .m1{
	display:flex;
	margin-left:12%;
}
.team ul li .mm1{
	width:33%;
	text-align: center;
}
.team ul li h3{
margin-bottom: 0.8rem;
margin-left:4rem;
}
	.three{
		color:#999999;
	}
.two .s1{
		margin-left:15%;
		

	}
	.two .s2{
		margin-left:18%;
		
	}
	.two .s1 b{
		color:#4FBAB9;
	}
	.two .s2 b{
		color:#4FBAB9;
	}

	.two .s3{
		margin-left:18%;
	}
</style>