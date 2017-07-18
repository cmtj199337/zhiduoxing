<template>
	<div class="movie">
		<h1>{{msg}}</h1>
		<ul>
			<li v-for="article in articles">
				<div class="m-img inl-block"><img v-bind:src="article.images.small" ></div>
				<div class="m-content inl-block">
					<div>{{article.title}}</div>
					<div>年份：{{article.year}}</div>
					<div>类型：{{article.subtype}}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import api from '../api/api.js'
	export default{
		name:'movie',
		data(){
			return {
				msg:'电影列表',
				articles:[]
			}
		},
		created:function () {
			this.$http.get('/v2/movie/top250?count=10',{},{
				headers: {

				},
				emulateJSON:true
			}).then(res => {
				console.log(res);
				this.articles = res.data.subjects
			},res => {
				console.log(res)
			});
		}
	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li{
border-bottom: 1px solid #999;
padding: 10px 0;
}

.inl-block{
display: inline-block;
}

.m-img{
  
}
.m-content{
margin-left: 20px;
}
</style>