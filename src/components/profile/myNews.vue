<template>
	<div class="myNews">
		<headerTip message="我的消息" goBack="true"></headerTip>
		<div class="kong"></div>
		<div class="message" v-for="item in message">
			<p><span class="left">{{item.messageType}}</span><span class="right">{{item.releaseTime}}</span></p>
			<p>{{item.releaseContent}}</p>
		</div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'myNews',
		components:{
	  		headerTip
	  	},
		data(){
			return {
				message:[]
			}
		},
		mounted(){
			this.getList()
		},
		computed:{

		},
		methods:{
			getList(){
				var userId = localStorage.getItem('userId')
				this.$http.get('/api/private/getMyMessage',{
					params:{
						id:userId
					}
				}).then(response =>{
					let res = response.data
					if(res.result == 0){
						this.message = res.data
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
.kong{
	padding:0.3rem 0;
	background:#F5F5F5;
}
.message{
	margin:0 0.6rem;
	border-bottom:1px #EAEAEA solid;
}
.message p{
	margin:0.4rem 0.2rem;
	line-height:1.4rem;
	color:#A7A7A7;
	display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.message p .left{
	font-size:1rem;
	color:black;
}
.message p .right{
	float: right;
}
</style>
