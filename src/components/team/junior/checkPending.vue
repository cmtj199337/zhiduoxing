<template>
	<div class="checkpend">
			<div class="kong"></div>
			<div class="header">
				<ul>
					<li v-for="(item,index) in tabs">
					<span :class="{active: index == iscur }" @click="toggle(index)">{{item.type}}</span>
					</li>
				</ul>
			</div>
			<div class="main" v-for="item in list" >
			
			<span>
			<router-link :to="{path:'../myprojectDetails',query:{projectId:item.proId}}">
			<img src="./banner@2x.png" style="border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;height:8.2rem;"   >
			<img src="./teb2.png" style="border-radius: 0.3rem;height:2.5rem" >
			</router-link>
			<img class="zz1" src="./quan@2x.png">
			<img class="zz2" src="./shouc@2x.png">
			<router-link :to="{path:'../projectQrCode',query:{projectId:item.proId}}">
			<img class="zz3" src="./quan@2x.png">
			<img src="./erwei.png" style="position:absolute;width:4.5%;top:11.5%;right:6.7%;">
			</router-link>
			<ul class="te1">
			<li class="cc1">{{item.provinceName}}{{item.cityName}}</li>
			<li class="cc2">{{item.actualNum}}/{{item.planNum}}</li>
			</ul>
			<ul class="te2">
			<li class="cc1">{{item.proName}}</li>
			<li class="cc3">{{item.startDate}}-{{item.endDate}}</li>
			</ul>
			</span>
			
			</div>
			
	</div>
</template>
<script>
	export default{
		name:'checkpend',
		data(){
			return {
				iscur:0,
                tabs:[
				 	{type: '待启动'},  
				 	{type: '招募中'},
				 	{type: '进行中'},
				 	{type: '已结束'}
				],
				list:[],
				page:3,
				pic:[],
				saoma:false
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.listView(this.page)
			})
		},
		methods:{
			toggle(index) {
		    	this.iscur = index;
		    	this.page = index + 3
		    	this.listView(this.page)
		    },
            listView(status){
				this.$http.get('/api/teamHub/private/ownDetai',{
					params:{
						appStatus:1,
						status:status
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
.header ul{
	display: flex;
	background: #fff;
}
.header ul li{
	width:50%;
	text-align:center;
	padding:0.5rem 0 0 0;
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
	background:#F5F5F5;
	padding:0.2rem;
	position:relative;
	
}
.main span{
	margin: 0.4rem;
    display: inline-block;
    position: relative;
    box-shadow: 0px 1px 3px #ccc;
    border-radius: 0.4rem;
}
.te1{
	display:flex;
	position:absolute;
	width:96%;
	bottom:24%;
	left:0;
	right:0;
	margin:auto;

}
.te1 li{
	width:90%;
	color:white
}
.te2{
	display:flex;
	position:absolute;
	width:97%;
	bottom:5%;
	left:0;
	right:0;
	margin:auto;

}
.te2 li{
	width:90%;

}
.cc1{
	text-align:left;
}
.cc2{
	text-align:right;
}
.cc3{
	text-align:right;
}
.cc4{
	text-align:right;
	color:#666
}
.zz1{
	position:absolute;width:8%;top:8%;left:5%;
}
.zz2{
	position:absolute;width:5%;top:12%;left:6.5%;
}
.zz3{
	position:absolute;width:8%;top:8%;right:5%;
}
.zz4{
	position:absolute;width:5%;top:12%;left:6.5%;
}
.erweima{
	position:absolute;
	width:7.8rem;
	right:16%;
	top:8%;
	height:7.8rem;
	background:white;
	padding:0.5rem;
	border-radius:2px;
	opacity:0.7;
}
.erweima img{
	width:100%;
	height:100%;
}

</style>