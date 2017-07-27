<template>
	<div class="iRegister">
		<headerTip message="个人注册" goBack="true"></headerTip>
        <h4 class="texttitle"><span><img src="./profile.png"></span>个人资料</h4>
		<form action="" method="post" @submit.prevent="submit" v-show="wrap" enctype="multipart/form-data">
		<div>
	        <label for="email">邮箱：</label>
	        <input v-validate ="'required|email'" type="text" id="email" name="myEmail">
	    </div>
    	<span v-show="errors.has('myEmail')">{{ errors.first('myEmail')}}</span>
			<div class="usertext userphoto">
				<a href="javascript:;"><span>头像上传</span><upload-img v-model="userinfo.userPhoto"></upload-img></a>
			</div>
			<div class="usertext">
				<input type="tel" placeholder="请输入手机号" maxlength="11" v-model="userinfo.phoneNumber"/>
			</div>
			<div class="usertext">
				<input type="number" placeholder="请输入验证码" maxlength="6" v-model="userinfo.verify" />
				<timer-btn ref="timerbtn" class="btn getcode" v-on:run="send" :second="60"></timer-btn>
			</div>
			<div class="usertext">
				<input type="password" style="width:100%" placeholder="请输入新密码(6~12位数字或字母)" v-model="userinfo.newPassword" /><br />
			</div>
			<div class="usertext">
				<input type="password" placeholder="请确认新密码" v-model="userinfo.reNewPassword" /><br />
			</div>
			<div class="usertext">
				<input type="text" placeholder="请输入昵称" v-model="userinfo.nickName" /><br />
			</div>
			<div class="usertext right">
				<a href="javascript:;" @click="showToggle">
					<span class="good">擅长<span v-for="item in userinfo.goodSelect">{{item}}</span><img src="./right.png"></span>
				</a>
			</div>
			<div class="usertext">
				<input type="text" placeholder="请输入志愿口号" v-model="userinfo.slogan" /><br />
			</div>
			<div class="read">
				<span v-for="item in items">
					<span class="item-check-btn" :class="{'check':item.state}" @click="alocked(item)">
						<svg class="icon icon-ok"></svg>
					</span>
				</span>
				
				<span>我已阅读并授权</span><router-link to="agreement">《志多星用户协议》</router-link>
			</div>
			<div class="sub">
				<input type="button" value="确认提交" @click="confirm"/>
			</div>
		</form>
		<!-- 遮罩、弹框 -->
		<div class="overlay" v-show="isConfirm"></div>
		<div class="popup" v-bind:class="{'show':isConfirm}">
			<p>马上去完善个人信息，可以获得10积分</p>
			<div>
				<router-link to="improve">是</router-link>
				<a href="javascript:;" @click="isConfirm = false">否</a>
			</div>
		</div>
		<!-- goodlist选项 -->
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
		<toast :toastshow.sync="toastshow" :toasttext="toasttext"></toast>	
	</div>
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'
	import TimerBtn from '../common/tools/countdown.vue'
	import UploadImg from '../../components/common/tools/uploadImg.vue'
	import Toast from '../../components/common/tools/toast.vue'
	export default {
	  	name: 'iRegister',
	  	components:{
	  		headerTip,
	  		TimerBtn,
	  		UploadImg,
	  		Toast
	  	},
	 	data () {
		    return {
		    	isConfirm:false,
		    	items:[{
		            state: false
		        }],
		        toastshow:false,
		        toasttext:'',
		        list:[
		        	{value:'保险服务'},
		        	{value:'保险服务'},
		        	{value:'保险服务'},
		        	{value:'保险服务'},
		        	{value:'保险服务'},
		        	{value:'保险服务'}
		        ],					//擅长选项
		        userinfo:{
		        	userPhoto:[],			//用户头像
		        	phoneNumber:'',			//手机号
		        	verify:'',				//验证码
		        	newPassword:'',			//新密码
		        	reNewPassword:'',		//重复新密码
		        	nickName:'',			//昵称
		        	goodSelect:[],			//擅长
		        	slogan:''				//口号
		        },
		        isShow:false,
		        wrap:true,
		        arr:'',
		        type:'GOOD_AT'
		    }
	  	},
	  	mounted(){
	  		this.goodList()
	  	},
	  	computed:{
	  		rightPhoneNumber: function (){
                return /^1\d{10}$/gi.test(this.phoneNumber)
            }
	  	},
	  	methods:{
	  		confirm() {
	  			this.$http.post('/api/upload',this.userinfo).then(response => {
	  				let res = response.data
	  				
	  				if(res.result == 0){
	  					console.log(res)
						this.isConfirm = true;
	  				}else{

	  				}
	  			})
	  		},
	  		//发送短信验证码
	  		send(){
     			this.$refs.timerbtn.setDisabled(true); //设置按钮不可用
	            hz.ajaxRequest("sys/sendCode?_"+$.now(),function(data){
	                if(data.status){
	                    this.$refs.timerbtn.start(); //启动倒计时
	                }else{
	                    this.$refs.timerbtn.stop(); //停止倒计时
	                }
	            });
     		},
     		alocked(item) {
                item.state = !item.state;
            },
            showToggle(){
            	this.isShow = !this.isShow
                if(this.isShow){
                    this.wrap = false  
                }else{  
                    this.wrap = !this.wrap   
                }  
            },
            goodList(){
            	this.$http.get('/api/public/getCommonList',{
            		params:{
            			'type':this.type
            		}
            	}).then( response =>{
            		let res = response.data;
            		if(res.result == 0){
            			this.list = res.data
            		}else{
            			//接口失败
            		}
            	})
            },
            checkFlag(item){
	  			if(typeof item.checked == 'undefined'){
	  				this.$set(item,'checked',true);

	  				if(item.checked == true){
	  					this.arr += item.value+','
	  					this.userinfo.goodSelect = this.arr.split(',').slice(0,-1)

	  					let count = 0
		  				this.list.forEach((item,index)=>{
		  					if(item.checked == true){
		  						count++
		  					}
		  				})
		  				if(count>=3){
		  					this.isShow = false;
		  					this.wrap = true;
		  				}
	  				}
	  			}else{
	  				item.checked = !item.checked
	  				this.arr += item.value+','
	  				this.userinfo.goodSelect = this.arr.split(',').slice(0,-1)
	  			}
	  		}

	  	}
	}
</script>

<style scoped>
	@import '../../styles/usertext.css';
	.iRegister{padding:0 0 10% 0;}
	.usertext{margin: 0 1rem 1.2rem 1rem;}
	.usertext input{margin: 0;}
	.usertext a{
	    border: 0;
	    width: 100%;
	    height: 2.5rem;
		line-height: 2.5rem;
	    font-size: 1rem;
	    display: inline-block;
	    color: #333;
	    text-indent: 0;
	    position: relative;
	}
	.usertext a img{
		position: absolute;
		right: 0;
	}
	.userphoto a{
		border: 0;
	    width: 100%;
	    height: 4rem;
		line-height: 4rem;
	    font-size: 1rem;
	    display: inline-block;
	    color: #333;
	    text-indent: 0;
	    position: relative;
	}
	.right img{
		width:0.8rem;
		display: inline-block;
		vertical-align: middle;
		top: 25%;
	}
	.sub{
		margin-top: 1rem;
	}
	.read{
		margin-top:2rem; 
		text-align: center;
		font-size: 0.8rem;
		color: #C9C9C9;
	}
	.read a{
		color: #43B7B6;
	}
	.read i{
		width: 0.7rem;
		height: 0.7rem;
		display: inline-block;
		border: 1px solid #E7E7E7;
		border-radius: 1rem;
		vertical-align: middle;
		margin-right: 0.2rem;
	}
	.overlay{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;left: 0;
		background: rgba(0,0,0,0.5);
		z-index: 1;
	}
	.popup{
		width: 16rem;
		border: 1px solid #666;
		position: fixed;
		top: 40%;
		left: 50%;
		background: #fff;
		margin-left:-8rem; 
		border-radius: 0.4rem;
		z-index: 10;
		display: none;
	}
	.popup p{
		margin: 1rem;
	}
	.popup div{
		display: -webkit-box;
	    border-radius: 0 0 8px 8px;
	    border-top: 1px solid #e5e5e5;
	    margin-top: 0.5rem;
	    line-height: 2.5;
	    text-align: center;
	}
	.popup a{
		width: 50%;
	    -webkit-box-sizing: border-box;
	    color: #000;
	    display: block;
	    line-height: 2.4;
	}
	.popup a:nth-child(2){
    	border-left: 1px solid #e5e5e5;
	}
	.show{display: block;}
	.good span{
		padding-left:1.5rem;
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
		margin-top:10%; 
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