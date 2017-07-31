<template>
	<div class="improve">
		<headerTip message="个人注册" goBack="true"></headerTip>
		<form action="" method="post">
			<prove @sendData="getData"></prove>
			<div class="usertext">
				<input type="text" placeholder="请输入邮箱" v-model="email">
			</div>
			<div class="sub">
				<input type="button" value="提交" @click="submitReal"/>
			</div>
		</form>
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
		    	data:[],
		    	email:''
		    }
	  	},
	  	methods:{
	  		submitReal(){
	  			console.log(this.data)
	  			this.$http.post('').then({

	  			})
	  		},
	  		getData(data){
	  			this.data = data
	  		}
	  	}
	}
</script>

<style scoped>
	@import '../../styles/usertext.css';
	.usertext{margin: 0 1rem 1.2rem 1rem;}
</style>