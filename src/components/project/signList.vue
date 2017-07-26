<template>
	<div class="signList">
		<headerTip message="报名列表" goBack="true"></headerTip>
		<div class="list">
			<p class="head"><span>姓名</span><span>加入时间</span><span>志愿时长</span></p>
			<ul>
				<li v-for="item in list">
					<p><span><img :src="item.src" alt=""></span>{{item.name}}</p>
					<p>{{item.date}}</p>
					<p>{{item.total}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'signList',
		components:{
	  		headerTip
	  	},
		data () {
		    return {
		    	id:null,
		    	list:[]
		    }
	  	},
	  	methods:{
	  		listView(){
	  			this.$http.get('/api/public/getVolunteers',{
	  				params:{
	  					id:this.id
	  				}
	  			}).then(response => {
	  				let res = response.data
	  				if(res.result == 0){
	  					this.list = result.data
	  				}else{

	  				}
	  			})
	  		}
	  	}
	}
</script>
<style scoped>
@import '../../styles/usertext.css';
	.list{
		width: 96%;
		margin: 0 auto;
	}
	.head{
		display: flex;
		font-size: 1rem;
		margin: 1rem 0;
		text-indent: 1em;
	}
	.head span{
		width: 33.33%;
		text-align: center;
	}
	.list ul li{
		display: flex;
		padding: 1rem 0;
		border-bottom: 1px solid #ececec;
	}
	.list ul li p{
		width: 33.33%;
		text-align: center;
		position: relative;
		height: 3rem;
		line-height: 3rem;
		font-size: 1rem;
		color: #747474;
		text-indent: 1em;
	}
	.list ul li p span{
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		display: inline-block;
		position: absolute;
		left: 0
	}
</style>