<template>
	<div class="personalData">
		<div v-show="wrap" class="wrap">
		<headerTip message="个人资料" goBack="true"></headerTip>
		<div class="kong"></div>
		<div class="usertext right" style="margin-top:0.3rem">
			<p>昵称</p><span><input type="text" v-model="nickName" :placeholder="info.nickName"><img src="./you@2x.png"></span>
		</div>
		<div class="usertext right">
			<a href="javascript:;" @click="showToggle">
				<div style="text-align:left;text-indent:1.2rem;">擅长<span v-for="li in good">{{li.value}}</span></div><span><img src="./you@2x.png"></span>
			</a>	
		</div>
		<!-- <div class="usertext right">
			<a href="javascript:;" @click="showToggle">
				<span>服务类型<span v-for="item in goodSelect">{{item}}</span><img src="./right.png"></span>
			</a>
		</div> -->
		<!-- <div class="usertext right">
			<p>邮箱</p><span><input type="text" :placeholder="info.eMail"><img src="./you@2x.png"></span>
		</div> -->
		<div class="usertext right" style="border:0;margin-bottom:0">
			<p>志愿口号</p><span><input type="text" v-model="volunteerSlogan" :placeholder="info.volunteerSlogan"><img src="./you@2x.png"></span>
		</div>
		<!-- <div class="usertext right" @click="toAddress({path: '/modifypassword'})">
			<p>密码修改</p><span><img src="./you@2x.png"></span>
		</div> -->
		<!-- <div class="kong"></div> -->
		<!-- <div class="usertext right">
			<span><img src="./xingming@2x.png" class="toux"></span>
           <p>真实姓名</p><span><input type="text" placeholder="吴彦祖"></span>
        </div>
        <div class="usertext right">
        	<span><img src="./xignbie@2x.png" class="toux"></span>
         <p> 性别</p><span><input type="text" placeholder="男"></span>
        </div>
        <div class="usertext right" style="margin-bottom:0;border:none;">
        	<span><img src="./zhengjian@2x.png" class="toux"></span>
            <p>身份证号</p><span><input type="text" placeholder="12345678901"></span>
        </div> -->
        <div class="tijiao"><p @click="commit">提交</p></div>
		</div>
        <!-- goodlist选项 -->
		<div class="goodlist" v-show="isShow">
			<div class="head_top">
				<div class='tip'>
	            	<p><span @click="showToggle"><img src="../register/back.png"></span>擅长</p>
	        	</div>
        	</div>
			<form action="" method="post">
				<ul>
					<li v-for="item in goodList">
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
				isShow:false,
				goodAt:[],
				info:[],
				wrap:true,
				arr:'',
				good:[],
				goodList:[],
				nickName:'',
				volunteerSlogan:''
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.getGoodAt()
				this.showInfo()
			})
		},
		methods:{
			toAddress(path){
                this.$router.push(path)
            },
            showInfo(){
            	this.$http.get('/api/private/getVolunteerInfo').then( response => {
            		let res = response.data
            		if(res.result == 0){
            			this.info = res.data
            			var num = res.data.goodAt.split(',')

            			var temp = {}
            			for(var i in this.goodList){
            				temp = {
            					'key':this.goodList[i].key,
            					'value':this.goodList[i].value
            				}
            				for(var j in num){
            					if(temp.key == num[j]){
            						this.good.push(temp)
            					}
            				}
            			}

            		}
            	})
            },
            showToggle(){
            	this.isShow = !this.isShow
                if(this.isShow){
                    this.wrap = false  
                }else{  
                    this.wrap = !this.wrap   
                }  
            },
            getGoodAt(){
            	this.$http.get('/api/public/getCommonList',{
            		params:{
            			type:'GOOD_AT'
            		}
            	}).then( response => {
            		let res = response.data
            		if(res.result == 0){
            			this.goodList = res.data
            		}
            	})
            },
            checkFlag(item){
	  			if(typeof item.checked == 'undefined'){
	  				this.$set(item,'checked',true);
	  				let count = 0
	  				this.goodAt += item.key+','
	  				//this.userinfo.goodAt = this.userinfo.goodAt.slice(0,-1)
	  				this.arr += item.value+','
	  				this.good = this.arr.split(',').slice(0,-1)
	  				this.goodList.forEach((item,index)=>{
	  					if(item.checked == true){
	  						count++
	  					}
	  				})
	  				if(count>=3){
	  					this.isShow = false;
	  					this.wrap = true;
	  				}
	  			}else{
	  				item.checked = !item.checked	
	  			}
	  		},
	  		commit(){
	  			this.$http.post('/api/private/updVolunteerInfo',{
	  				nickName:this.nickName,
	  				volunteerSlogan:this.volunteerSlogan,
	  				goodAt:this.good.value
	  			}).then( response => {
	  				let res = response.data
	  				if(res.result == 0){
	  					this.$message.success('提交成功')
	  				}else{
	  					this.$message.error('提交错误')
	  				}
	  			})
	  		}
		}
	}
</script>
<style scoped>
@import '../../styles/usertext.css';
.personalData{
	height: 100%;
	background: #f5f5f5;
}
.personalData .wrap{
	background: #fff;
}
.usertext input{
	margin: 0;
	width: 100%;
}
.usertext{
	margin: 0 1rem 0.4rem 1rem;
}
.usertext img{
	position: absolute;
	right: 0;
}
.usertext input{
	text-align: right;
}
.header span p{
	font-size: 1.2rem;
}
.right img{
	width:0.6rem;
	display: inline-block;
	vertical-align: middle;
	top: 25%;
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
.right p{
	width:35%;
	font-size:0.9rem;
	line-height:2.5rem;
	margin-left:1.2rem;
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
	padding: 0.3rem;
	}
	
.usertextend textarea{
	border: none; 
	padding: 2.5rem 0;
	width: 100%;

	}
.end{
	margin-left: 67%;
	padding: 0.5rem;
	color:#ccc;
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