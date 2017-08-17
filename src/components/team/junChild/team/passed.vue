<template>
	<div class="passed">
		<div class="main2">
			<ul>
				<li v-for="item in list">
					<router-link :to="{path:'modifiteam',query:{teamId:item.teamId}}">
						<img :src="item.logo">
						<h3>{{item.name}}</h3>
						<div class="m1">
							<div class="mm1"><span>{{item.serHour}}小时</span><p>志愿总时长</p></div>
							<div class="mm1"><span>{{item.mamager}}</span><p>团队管理员</p></div>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'passed',
		data(){
			return {
				list:[]
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.listView()
			})
		},
		methods:{
            listView(){
            	this.$http.get('/api/private/lowerTeamDetailList',{
            		params:{
            			status:2
            		}
            	}).then( response => {
            		let res = response.data
            		if(res.result == 0){
            			this.list = res.data
            		}
            	})
            },
		}
	}
</script>
<style scoped>
.main2{
	background:#F5F5F5;
	padding: 0.6rem 0;
	position:relative;
}
.main2 ul{
	margin:0.2rem 0;
}
.main2 ul li{
	background:white;
	padding:0.5rem 0;
	border-radius:7px;
	margin-left:15%;
	margin-right: 2%;
	top: 5%;
	position: relative;
	margin-bottom:0.6rem; 
}
.main2 a{
	color: #000;
}
.main2 ul li:last-child{
	margin-bottom:0; 
}
.main2 ul li img{
    width: 5rem;
    height: 5rem;
    position: absolute;
    left: -2.5rem;
    top: 5%;
}
.main2 ul li .m1{
	display:flex;
	margin-left:12%;
}
.main2 ul li .mm1{
	width:50%;
	margin-left:10%
}
.mm1 p{
	color:#BCBCBC;
}
.main2 ul li h3{
	margin-bottom: 0.8rem;
	margin-left:4rem;
}
</style>