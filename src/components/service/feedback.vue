<template>
  <div class="feedback">
   <headerTip message="意见反馈" goBack="true" style="background: #FFFFFF"></headerTip>
	<img src="./tupian.png" alt="">
	<div class="text">
		<p>感谢您关注志多星，我们将尽快回复</p>
	</div>
	<div class="dt">
	<div class="t"><img src="./name.png" alt=""><input type="text" name="" placeholder="  请输入姓名"  v-model="userInfo.name"></div>
	<div class="t"><img src="./xing.png" alt=""><input type="text" name="" placeholder="  请输入邮箱"  v-model="userInfo.eMail"></div>
	<div class="t"><img src="./haoma.png" alt="" style="width:4.5%;"><input type="text" name="" placeholder="  请输入手机号" maxlength="11" v-model="userInfo.mobileNo"></div>
	<div class="t"><img src="./jigou.png" alt=""><input type="text" name="" placeholder="  请输入您的机构" v-model="userInfo.orgName">
	</div>
	</div>
	<div class="kong"></div>
	<div class="t2">
		<input type="text" name="" placeholder="请输入反馈内容" style="border:none" v-model="userInfo.adviceContent" >
	</div>
	<div class="zi"><p>不超过100字</p></div>
	<div class="t1">
		<p @click="isTijiao">提交</p>
	</div>

  </div>  
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'feedback',
	  	components:{
	  		headerTip,
	  	}, 
	 	data () {
		    return {
		    	userInfo:{
		    		adviceContent:'',
		    		eMail:'',
		    		mobileNo:'',
		    		name:'',
		    		orgName:'',
		    	},
		    }
	  	},
	  	methods:{
	  		isTijiao(){
	  			if(!this.userInfo.adviceContent||!this.userInfo.name||!this.userInfo.orgName||!this.userInfo.mobileNo||!this.userInfo.eMail){
	  				this.$message.error('信息未填完整')
	  		    }else{
	  				this.$http.post('/api/public/addAdvice',this.userInfo).then(response=>{
		  				let res = response.data
			  			console.log(res)
			  		 	if(res.result == 0){
		  					this.$message.success('已提交')
		  				}
	  				})
	  			}
	  		}
		}
	}
</script>

<style scoped>
.feedback{
	height:100%;
	background:#F5F5F5;
}
.kong{
	background:#F5F5F5;
	padding:0.3rem 0;
}
.text{
	padding: 1.2rem 0;
	text-align: center;
}
.text p{
	color:#6A6A6A;
}
.dt{
	background:white;
}
.t{
	margin:0 0.8rem; 
	border-bottom:1px solid #F5F5F5;
	
}


.t img{
	width:5%;
	display:inline;
	vertical-align:middle;
	margin-bottom:0.2rem;
}
.t input{
	width:80%;
	margin-left:3%;
	height:1.2rem;
	border:none;
	font-size:0.9rem;
	margin-top:0.8rem;
	margin-bottom:0.8rem;
}
.t1{
	background:#F5F5F5;
	padding:0.6rem 0;
	
}
.t1 p{
	width:60%;
	background:#43B7B5;
	padding:0.8rem 0;
	margin:1rem auto; 
	border-radius:5px;
	text-align:center;
	color:white;
}

.t2 input{
	width: 100%;
	padding:0.5rem 0 5rem 0;
	text-indent:1rem;
	font-size:0.9rem;
}
.zi{
	background: white;
	padding:0.1rem 0.6rem;
}
.zi p{
	font-size:0.5rem;
	color:#BBBBBB;
	text-align:right;
}

</style>