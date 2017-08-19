<template>
  <div class="myFamily">
   <headerTip message="我的家庭" goBack="true" style="background: #FFFFFF"></headerTip>
   <span class="h" @click="toAddress({path: '/addFamily'})">添加成员</span>
   <div class="header">
	<ul>
	<li>
	<span class="left">
	<p ><b>{{list.familyNum}}</b></p> 
	<p >家庭成员（人）</p>
	</span>
	<span>
	<p><b>{{list.serverTime}}</b></p> 
	<p>志愿总时长（小时）</p>
	</span>
	</li>
	</ul>
	</div>
	<div class="main">
	<ul>
		<li v-for="item in list.wxFamilyDtoList">
			<img src="./toux.png" class="tt">
			<p class="hd"><span>{{item.trueName}}</span><span class="bj">编辑</span></p>
			<p><span>志愿时长</span>  <span>{{item.serverDuration}}</span></p>
			<p><span>身份证号</span>  <span>{{item.idNo}}</span><img src="./shanchu.png" class="shanchu" @click="shanChu(item.memberId)"></p>
		</li>
	</ul>
	</div>
	<alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>

  </div>  
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'
	import alertTip from '../../components/common/tools/alertTip.vue'

	export default {
	  	name: 'myFamily',
	  	components:{
	  		headerTip,
	  		alertTip
	  	}, 
	 	data () {
		    return {
		    	list:[],
		    	showAlert:false,
		    	alertText:''
		    }
	  	},
	  	mounted(){
	  		this.getInfo()
	  	},
	  	methods:{
	  		toAddress(path){
                this.$router.push(path)
            },
            getInfo(){
            this.$http.get('/api/private/getMyFamily').then(response=>{
            	let res=response.data
            	console.log(res)
	  				if(res.result == 0){
	  					this.list = res.data
	  				}
            })
            },
            shanChu(id){
            	this.$http.post('/api/private/delFamilyMember',{
            			memberId:id
            	},{
            		emulateJSON:true
            	}).then(response=>{
            		let res=response.data
            		if(res.result==0){
            			this.showAlert=true
  						this.alertText = '删除成功'
            			
            		}
            	})
            },
            closeTip(){
            	this.showAlert=false
            	this.$router.go(0)
            }
	  	}
	}
</script>

<style scoped>
.myFamily{
	height:100%;
}
.main{
	background:#F5F5F5;
	padding:0.2rem;
	height:100%;
}
.main div{
	border-radius:5px;
}
.header {
	background:#F5F5F5;
	padding:0.4rem 0;
}
.header ul li{
	margin:0.2rem 0.6rem;
	text-align:center;
	padding: 1.1rem 0rem;		
	background: #FFFFFF;
	display:flex;
	border-radius:0.3rem;
	position:relative;
	
}
.header ul li span{
	font-size: 14px;
	width: 50%;
}
.header ul li span p b{
	font-size:1.4rem;
	color:#43B7B5;
	font-weight: 400;
}
.header ul li .left{
	border-right:1px #F5F5F5 solid;
}
.main ul li .hd{
	margin-bottom:0.4rem;
}
.main ul li{
	background:white;
	margin:0rem 0.6rem 0.6rem 2.5rem;
	border-radius:0.4rem;
	padding:0.55rem 0;
	position:relative;
}
.main ul li p{

	margin:0.3rem 0 0.3rem 2.5rem;

}
.main ul li .tt{
	position:absolute;
	width:19%;
	left: -9%;
	top:0;
	bottom: 0;
	margin: auto;
}
.main ul li p .bj{
	color:#FF9E14;
	right:5%;
	position:absolute;
}
.h{
	top:2.5%;
	right:2%;
	position:absolute;
}
.shanchu{
	position:absolute;
	right:5%;
	width:4.5%;
	bottom:20%;
}

</style>