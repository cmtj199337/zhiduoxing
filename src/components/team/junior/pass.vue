<template>
<div class="pass">
	<div class="main" v-for="item in list">
	
			<span>
			<router-link :to="{path:'../pDetail',query:{projectId:item.projectId}}">
			<img src="../banner@2x.png" style="border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;height:8.2rem;">
			<img src="../teb2.png" style="border-radius: 0.3rem;height:2.5rem">
			</router-link>
			<ul class="te">
			<li class="cc1">{{item.proName}}</li>
			</ul>
			<ul class="te1">
			<li class="cc1">{{item.provinceName}}{{item.cityName}}</li>
			<li class="cc2">{{item.actualNum}}/{{item.planNum}}</li>
			<li class="cc3"></li>
			</ul>
			<ul class="te2">
			<li class="cc1">项目时间</li>
			<li class="cc4">{{item.startDate}}-{{item.endDate}}</li>
			</ul>
			</span>
			
	</div>
</div>
</template>
<script>
	export default{
		name:'pass',
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.getInfo(2)
			})
		},
		methods:{
			toAddress(path){
                this.$router.push(path)
            },
               getInfo(status){           
            	this.$http.get('/api/teamHub/private/ownDetai',{
            		params:{         			
            			appStatus:status,
            		}
            	}).then(response=>{
            		let res=response.data
            		if (res.result==0) {
            			this.list=res.data
            		}
            	})
            }
		}
	}
</script>
<style scoped>
.main{
	background:#F5F5F5;
	padding:0 0.3rem;

	
}
.main span{
	margin: 0.4rem;
    display: inline-block;
    position: relative;
    box-shadow: 0px 1px 3px #ccc;
    border-radius: 0.4rem;
}
.te{
	position:absolute;
	width:100%;
	bottom:40%;
	left:2%;

}
.te li{
	width:50%;
	color:white;
	font-size:0.9rem;
}
.te1{
	display:flex;
	position:absolute;
	width:97%;
	bottom:24%;
	left:0;
	right:0;
	margin:auto;

}
.te1 li{
	width:98%;
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
	text-align:center;
}
.cc3{
	text-align:right;
}
.cc4{
	text-align:right;
	color:#666
}
</style>