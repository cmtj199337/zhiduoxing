<template>
	<div class="personalData">
		<div v-show="wrap">
			<headerTip message="个人资料" goBack="true"></headerTip>
			<div class="kong"></div>
			<div class="xinxi">
				<div class="usertext right" style="margin-top:0.3rem">
					<p>昵称</p><input class="xx" v-model="info.nickName">
				</div>
				<div class="usertext right" style="margin-top:0.3rem">
					<p>手机号</p><input class="xx" v-model="info.mobileNo">
				</div>
				<div class="usertext right" style="margin-top:0.3rem" @click="showToggle">
					<p>擅长</p><p class="xx">{{info.goodAt}}<span v-for="item in goodSelect">{{item.value}}</span></p>
				</div>
				<div class="usertext right" style="border:0;margin-bottom:0">
					<p>志愿口号</p><input class="xx" v-model="info.volunteerSlogan"/>
				</div>
	        </div>
	        <div class="tijiao">
	        	<p>提交</p>
	        </div>
        </div>
        <!-- goodlist -->
        <div class="goodlist" v-show="isShow">
			<div class="head_top">
				<div class='tip'>
	            	<p><span @click="showToggle"><img src="./back.png"></span>擅长</p>
	        	</div>
        	</div>
			<form action="" method="post">
				<ul>
					<li v-for="item in list">
						<span>{{item.value}}</span>
						<span class="item-check-btn list-btn" :class="{'check':item.checked}" @click="checkFlag(item)">
							<svg class="icon icon-ok"></svg>
						</span>
					</li>
				</ul>
			</form>
		</div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'personalData',
		components:{
	  		headerTip
	  	},
		data(){
			return {
				info:[],
				isShow:false,
				wrap:true,
				list:[],
				goodSelect:[]
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.showInfo()
			})
		},
		methods:{
			toAddress(path){
                this.$router.push(path)
            },
            showToggle(){
            	this.isShow = !this.isShow
                if(this.isShow){
                    this.wrap = false  
                }else{  
                    this.wrap = !this.wrap   
                }  
            },
            getgoodAt(){
            	this.$http.get('/api/public/getCommonList',{
            		params:{
            			type:'GOOD_AT'
            		}
            	}).then( response =>{
            		let res = response.data;
            		if(res.result == 0){
            			this.list = res.data
            		}
            	})
            },
            showInfo(){
            	this.$http.get('/api/private/getVolunteerInfo').then( response => {
            		let res = response.data
            		if(res.result == 0){
            			this.info=res.data
            		}
            	})
            	this.getgoodAt()
            },
            checkFlag(item){
	  			if(typeof item.checked == 'undefined'){
	  				this.$set(item,'checked',true);
	  			}else{
	  				item.checked = !item.checked	
	  			}
	  			this.cale()
	  		},
	  		cale(){
	  			this.goodSelect = []
	  			this.info.goodAt = ''
	  			this.list.forEach((item,index) => {
	  				if(item.checked){
	  					this.goodSelect.push({
	  						key:item.key,
	  						value:item.value
	  					})
	  					this.goodAt += item.key + ','
	  				}
	  			})
	  		},
	  		update(){
	  			this.$http.post('/api/private/updVolunteerInfo',{

	  			}).then( response => {
	  				let res = response.data
	  				if(res.result == 0){
	  					this.$message.success('修改信息成功')
	  				}
	  			})
	  		}
		}
	}
</script>
<style scoped>
@import '../../styles/usertext.css';
.right input{
	border:none;
	-webkit-appearance:none;
	font-size: 1rem;
}
.personalData{
	height: 100%;
	background: #f5f5f5;
}
.usertext{
	margin: 0 1rem 0.4rem 1rem;
}
.right img{
	width:0.6rem;
	display: inline-block;
	vertical-align: middle;
	top: 25%;
}
.right span{
	margin-right:1rem;
}
.xinxi{
	background:white;
}
.tlo{
	margin: 0.8rem;
}
.tlo img{
	width:2.5rem;
	display: inline-block;
	vertical-align: middle;
}
.bottom img{
	width:1rem;
	display: inline-block;
	vertical-align: middle;
	left: 46%;
	top:38%;
}
.right{
	display:flex;
}
.right .xx{
width:70%;
margin-right:0;
text-align:right;
color:#C9C9C9;

}
.right p{
	width:30%;
	font-size:0.9rem;
	line-height:2.5rem;
	/*margin-left:1.2rem;*/
	font-size:1rem;
}
.right a span{
	margin-left:0.5rem;
}
.usertext a{
	border: 0;
	width: 130%;
	height: 2.5rem;
	line-height: 2.5rem;
	font-size: 1rem;
	display: inline-block;
	color: #333;
	text-indent: 0;
	position: relative;
	text-align:right;
	}
.kong{
	background:#F5F5F5;
	padding: 0.1rem;
	}
	
.usertexttijiao textarea{
	border: none; 
	padding: 2.5rem 0;
	width: 100%;

	}
.eee{
	padding: 2rem 0;
	margin:0; 
	background:#F5F5F5;
	text-align: center;
	}
.next{
	border:none;
	border-radius:7px;
	background: #43b7b6;
	color: white;
	font-size: 1.2rem;
	width:60%;
	height:3rem;
	}
.usertext.right span .toux{
	left:0;
	width:5%;
}
.tijiao{
	background:#F5F5F5;
	padding:2rem 0;
}
.tijiao p{
	width:60%;
	background:#43B7B5;
	margin:0 auto;
	padding:0.7rem 0;
	border-radius:5px;
	text-align:center;
	color:white;
	font-size:1rem;
}
/*goodlist*/
	.goodlist{
		width: 100%;
		font-size: 1rem;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		background: #fff;

	}
	.goodlist form{
		padding-top: 10%;
	    border-top: 0.6rem solid #f5f5f5;
	}
	.goodlist li{ 
		width: 92%;
		margin: 0 auto;
	    border-bottom: 1px solid #dcdcdc;
	    padding-bottom: 1rem;
	    margin-bottom: 1rem;
	    text-align: left;
	    color: #333;
		line-height: 1;
		display: block;
	}
	.goodlist li span{
		vertical-align: middle;
	}
	.goodlist li input{
		vertical-align: sub;
		float: right;
	}
	.list-btn {
	    float: right;
	}
	.head_top{
	    width: 100%;
	    font-size:1.2rem;
	    font-family: arial,'microsoft yahei';
	    color: #333;
	    text-align: center;
	    padding: 0.5rem 0;
	    border-bottom: 0.5px solid #c9c9c9;
	}
	.tip{
	    width: 96%;
	    margin:0.5rem auto;
	    position: relative;
	}
	.tip span{
	    width: 0.7rem;
	    display: inline-block;
	    vertical-align: middle;
	    position: absolute;
	    left: 0.5rem;
	}
	.tip span img{
	    width: 100%;
	}
	.tip p{
	    vertical-align: middle;
	    line-height: 1;
	}
</style>