<template>
	<div class="improve">
		<div class="usertext">
			<i class="s-icon"><img src="./name.png"></i><span>姓名</span>
			<input type="text" v-validate="'required'" placeholder="请输入真实姓名" v-model="info.name" name="name"/>
			<em class="toast" v-show="errors.has('name')">请输入真实姓名</em>
		</div>
		<div class="usertext" style="margin-bottom:0;border:0">
			<i class="s-icon"><img src="./sex.png"></i>
			<span>姓别</span>
			<el-radio-group v-model="info.sex" style="margin-left:1.8rem">
				<el-radio :label="1">男</el-radio>
				<el-radio :label="2">女</el-radio>
			</el-radio-group>
		</div>
		<div class="kong"></div>
		<h4 class="texttitle"><span style="margin-bottom:0.1rem"><img src="./type.png"></span>证件类型</h4>
		<ul>
			<el-radio-group v-model="info.idType">
				<li v-for="item in typelist"><el-radio :label="item.key">{{item.value}}</el-radio></li>
			</el-radio-group>
		</ul>
		<div class="usertext zhengjian" style="border-top: 1px solid #f5f5f5;">
			<input type="text" v-validate="'required'" placeholder="请输入证件号码" maxlength="18" v-model="info.idNo" name="idNo">
			<em class="toast" v-show="errors.has('idNo')">请输入正确证件号</em>
		</div>
	</div>
</template>

<script>
	export default {
	  	name: 'prove',
	 	data () {
		    return {
		    	info:{
		    		name:'',
			    	sex:1,
			    	idType:1,
					idNo:''	
		    	},
		    	typelist:[]
		    }
	  	},
	  	mounted(){
	  		this.getType()
	  		this.$emit('sendData',this.info)
	  	},
	  	methods:{
	  		getType(){
	  			this.$http.get('/api/public/getCommonList',{
	  				params:{
	  					type:'ID_TYPE'
	  				}
	  			}).then(response => {
	  				this.typelist = response.data.data
	  			})
	  		}
	  	}
	}
</script>

<style scoped>
	@import '../../../styles/usertext.css';
	.usertext span{
		font-size: 1rem;
		color: #333;
		padding-left: 1.2rem;
		height: 2rem;
		line-height: 2rem;
		display: inline-block;
	}
	.improve{
		background: #fff;
	}
	.zhengjian input{
		margin-left:0 !important;
		width: 100%;
	}
	.improve ul{
		margin: 1rem;
	}
	.improve ul li{
	    width: 32%;
	    display: inline-block;
	    text-align: left;
	    font-size: 1rem;
	    color: #666;
	    height: 2rem;
	    line-height: 2rem;
	}
	.usertext{margin: 0 1rem 0rem 1rem;padding: 0.5rem 0;}
	.radio-btn{
	    width: 3rem !important;
	    height: 1.4rem !important;
	    line-height: 1.4rem !important;
	    margin-left: 0.5rem;
	    background: #cacaca;
	    padding-left: 0 !important;
	    text-align: center;
	    font-size: 0.5rem;
	    border-radius: 0.2rem;
	}
	.radio-btn img{
	    width: 0.7rem;
	    display: inline-block;
	}
	.radio-btn i{
	   color: #fff;
	   padding-left:0.2rem; 
	}
	.active{
		background: #43B7B6
	}
	.kong{
		background: #f5f5f5;
		padding: 0.3rem;
	}
</style>