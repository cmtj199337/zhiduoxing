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
			<el-radio-group v-model="info.sex">
				<el-radio :label="1">男</el-radio>
				<el-radio :label="2">女</el-radio>
			</el-radio-group>
		</div>
		<div class="borderBottom"></div>
		<h4 class="texttitle"><span><img src="./type.png"></span>证件类型</h4>
		<ul>
			<el-radio-group v-model="info.idType">
				<li v-for="item in typelist"><el-radio :label="item.key">{{item.value}}</el-radio></li>
			</el-radio-group>
		</ul>
		<div class="usertext">
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
	@import '/static/css/usertext.css';
	.usertext span{
		font-size: 1rem;
		color: #333;
		padding-left: 1.2rem;
		height: 2.5rem;
		line-height: 2.5rem;
		display: inline-block;
	}
	.improve{
		padding-top: 0.4rem;
		border-top: 0.8rem solid #f5f5f5;
	}
	.improve ul{
		margin-bottom: 0.5rem;
		margin: 0 1rem 1.2rem 1rem;
	}
	.improve ul li{
	    width: 32%;
	    display: inline-block;
	    text-align: left;
	    font-size: 1rem;
	    color: #666;
	    padding-bottom: 0.5rem;
	}
	.usertext{margin: 0 1rem 1.2rem 1rem;}
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
	.borderBottom{
		background: #f5f5f5;
		height: 0.8rem;
	}
</style>