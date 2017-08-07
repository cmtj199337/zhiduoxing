<template>
	<div class="improve">
		<headerTip message="个人注册" goBack="true"></headerTip>
		<div class="kong"></div>
		<form action="" method="post">
			<prove @sendData="getData"></prove>
			<div class="usertext youxiang">
				<input type="text" v-validate="'required|email'" placeholder="请输入邮箱" v-model="email" name="email">
				<span class="toast" v-show="errors.has('email')">请输入正确邮箱</span>
			</div>
		</form>
		<div class="sub">
			<input type="button" value="提交" @click="submitReal"/>
		</div>
	</div>
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'
	import Prove from '../../components/common/tools/prove.vue'

	export default {
	  	name: 'improve',
	  	components:{
	  		headerTip,
	  		Prove
	  	},
	 	data () {
		    return {
		    	list:{
		    		idNo:'',
		    		idType:'',
		    		name:'',
		    		sex:'',
		    	},
	    		volunteerId:'',
	    		email:''
		    }
	  	},
	  	mounted(){

	  		// seesionStorage.getItem(this.volunteerId,volunteerId)
	  	},
	  	methods:{
	  		submitReal(){
	  			if(this.list != null){

	  				this.$http.post('/api/public/completeVolunteer',{
	  					idNo:this.list.idNo,
	  					idType:this.list.idType,
	  					name:this.list.name,
	  					sex:this.list.sex,
	  					volunteerId:this.volunteerId,
	  					email:this.email
	  				}).then(response =>{
	  					let res = response.data
	  					if(res.result == 0){
	  						this.$router.push({ path: 'index' })
	  					}
		  			}).catch(()=>{
		  				this.$message.error('服务器异常');
		  			})
	  			}else{
	  				this.$message.error('请填写信息');
	  			}	
	  		},
	  		getData(data){
	  			this.list = data;
	  		}
	  	}
	}
</script>

<style scoped>
	@import '../../styles/usertext.css';
	.usertext{margin: 0 1rem;padding: 0.5rem 0;}
	.youxiang input{
		margin-left:0 !important;
	}
	.kong{
		background: #F5F5F5;
    	padding: 0.3rem;
	}
	.improve{
		background: #f5f5f5;
		height: 100%;
	}
	form{
		background: #fff;
	}
</style>