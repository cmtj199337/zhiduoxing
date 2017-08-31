<template>
	<div class="article">
		<!-- <ul>
			<li v-for="item in articleList">
				<span style="width:40%"><img src="../tup2.png"></span>
				<span>
					<h3>{{item.title}}</h3>
					<p>{{item.releaseDate}}</p>
					<p>{{item.content}}</p>
				</span>
			</li>	
			<li>
				<span style="width:40%"><img src="../tup2.png"></span>
				<span>
					<h3>高原上的藏区小学</h3>
					<p>2017/02/05</p>
					<p>四川赶集周处青藏高原一处发现了真后悔的的。。。</p>
				</span>
			</li>	
		</ul> -->
		<p style="text-align:center;margin-top:30%;">文章收藏建设中，敬请期待</p>
	</div>
</template>
<script>
	export default{
		name:'article',
		data(){
			return {
				articleList:[]
			}
		},
		mounted(){
			// this.getList();
		},
		methods:{
			getList(){
				var userId = localStorage.getItem('userId')
				
				this.$http.get('/api/private/getArticleByCollect',{
					params:{
						id:userId
					}
				}).then(response =>{
					let res = response.data
					if(res.result == 0){
						this.articleList = res.data
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
.article ul li{
display:flex;
margin:0.6rem;
background:white;
border-bottom:1px #E9E9E9 solid;
}
.article ul li span{
width:60%;
margin:0.4rem;
}
.article ul li span p{
    font-size: 0.85rem;
    color: #999;
    line-height: 1.5;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 0.4rem 0;
}
	
</style>