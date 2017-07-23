<template>
	<div class="improve">
		<div class="usertext">
			<i class="s-icon"><img src="./name.png"></i><span>姓名</span>
			<input type="text" placeholder="请输入真实姓名" v-model="info.realName"/>
		</div>
		<div class="usertext">
			<i class="s-icon"><img src="./sex.png"></i>
			<span>姓别</span>
			<span class="radio-btn nan" :class="{'active':sexFlag==0}" @click="changeSex" v-model="info.sex"></span>
			<span class="radio-btn nv" :class="{'active':sexFlag==1}" @click="changeSex" v-model="info.sex"></span>
		</div>
		<h4 class="texttitle"><span><img src="./type.png"></span>证件类型</h4>
		<ul>
			<li v-for="item in typeList">
				<span class="item-check-btn" :class="{'check':item.checked}" @click="checkFlag(item)">
					<svg class="icon icon-ok"></svg>
				</span>
				<span>身份证</span>
			</li>
			<li>
				<span class="item-check-btn">
					<svg class="icon icon-ok"></svg>
				</span>
				<span>护照</span>
			</li>
			<li>
				<span class="item-check-btn">
					<svg class="icon icon-ok"></svg>
				</span>
				<span>军官证</span>
			</li>
			<li>
				<span class="item-check-btn">
					<svg class="icon icon-ok"></svg>
				</span>
				<span>学生证</span>
				</li>
			<li>
				<span class="item-check-btn">
					<svg class="icon icon-ok"></svg>
				</span>
				<span>港澳通行证</span>
			</li>
		</ul>
		<div class="usertext">
			<input type="text" placeholder="请输入证件号码" maxlength="18" v-model="info.certificatesNum">
		</div>
	</div>
</template>

<script>
	export default {
	  	name: 'improve',
	 	data () {
		    return {
		    	typeList:[],
		    	sexFlag:0,
		    	checkFlag:false,
		    	info:{
		    		realName:'',
			    	sex:'',
			    	certificatesType:'',
					certificatesNum:''	
		    	}
		    }
	  	},
	  	mounted(){
	  		this.$emit('sendData',this.info)
	  	},
	  	methods:{
	  		changeSex(){
	  			this.sexFlag = !this.sexFlag
	  		},
	  		checkFlag(item){
	  			if(typeof item.checked == 'undefined'){
	  				this.$set(item,'checked',true);
	  			}else{
	  				item.checked = !item.checked
	  			}
	  		},
	  		typeList(){
	  			this.$http.get('').then({

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
	    width: 2rem !important;
	    height: 1.4rem !important;
	    vertical-align: sub;
	    margin-left: 0.5rem;
	}
	.nan{
	    background: url('./nan2@2x.png') no-repeat;
	    background-size:cover; 
	}
	.nv{
	    background: url('./nv1@2x.png') no-repeat;
	    background-size:cover; 
	}
	.active{
		background: #43B7B6
	}
</style>