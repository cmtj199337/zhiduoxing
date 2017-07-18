<template>
	<div class="iRegister">
		<headerTip message="个人注册" goBack="true"></headerTip>
        <h4 class="texttitle"><span><img src="./profile.png"></span>个人资料</h4>
		<form action="" method="post">
			<div class="usertext userphoto">
				<a href="javascript:;"><span>头像上传</span><img src="./picture.png"></a>
			</div>
			<div class="usertext">
				<input type="tel" placeholder="请输入手机号" maxlength="11" />
			</div>
			<div class="usertext">
				<input type="number" placeholder="请输入验证码" maxlength="11" />
				<timer-btn ref="timerbtn" class="btn getcode" v-on:run="send" :second="60"></timer-btn>
			</div>
			<div class="usertext">
				<input type="password" style="width:100%" placeholder="请输入新密码(6~12位数字或字母)" /><br />
			</div>
			<div class="usertext">
				<input type="password" placeholder="请确认新密码" /><br />
			</div>
			<div class="usertext">
				<input type="text" placeholder="请输入昵称" /><br />
			</div>
			<div class="usertext right">
				<router-link to="goodlist">
					<span>擅长<img src="./right.png"></span>
				</router-link>
			</div>
			<div class="usertext">
				<input type="text" placeholder="请输入志愿口号" /><br />
			</div>
			<div class="read">
				<i></i><span>我已阅读并授权</span><router-link to="agreement">《志多星用户协议》</router-link>
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
		<div class="weui-cells weui-cells_form" id="uploader">
	      <div class="weui-cell">
	        <div class="weui-cell__bd">
	          <div class="weui-uploader">
	          	<div class="weui-uploader__hd">
                  <p class="weui-uploader__title">图片上传</p>
                  <div class="weui-uploader__info"><span id="uploadCount">0</span>/5</div>
                </div>
	            <div class="weui-uploader__bd">
	              <ul class="weui-uploader__files" id="uploaderFiles" @click="handleClickUploadList"></ul>
	              <div class="weui-uploader__input-box">
	                <input name="file" id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple=""/>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
	</div>
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'
	import TimerBtn from '../common/tools/countdown.vue'
	import weui from '../../../static/js/weui.min.js'
	import $ from 'jquery'

	export default {
	  	name: 'iRegister',
	  	components:{
	  		headerTip,
	  		TimerBtn
	  	},
	 	data () {
		    return {
		    	isConfirm:false,
		    	uploadCount:0,//初始化上传图片数量
		    	uploadCountDom:null,
		    	uploadList:[],
		    	successImgList:[],
		    	uploadToken:''

		    }
	  	},
	  	mounted(){
	  		uploadCountDom = document.getElementById('uploadCount')
	  		weui.uploader('#uploader',{
	  			url:'',
	  			auto:false,
	  			type:'file',
	  			fileVal:'file',
	  			compress:{
	  				width:1600,
	  				height:1600,
	  				quality:0.8
	  			}
	  		})
	  	},
	  	methods:{
	  		confirm() {
	  			this.isConfirm = true;
	  		},
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
     		onBeforeQueued(files){
     			if(['image/jpg','image/jpeg','image/png','image/gif'].indexOf(this.type)<0){
     				weui.alert('请上传图片')
     				return false
     			}
     			if(this.size > 10*1024*1024){
     				weui.alert('请上传不超过10M的图片')
     				return false
     			}
     			if(files.length > 5){
     				weui.alert('最多只能上传5张图片')
     				return false
     			}
     			if(uploadCount+1 > 5){
     				weui.alert('最多只能上传5张图片')
     				return false
     			}
     			++uploadCount
     			uploadCountDom.innerHTML = uploadCount
     		},
     		onQueued(){
     			uploadList.push(this)

     			let file = this
     			API.getImageToken().then(response=>{
     				uploadToken = response.token
     				console.log('uploadImg----请求token----'+uploadToken)
     				file.upload()
     			})
     		},
     		onBeforeSend(data,headers){
     			console.log("------onBeforeSend------"+uploadToken)
     			$.extend(data,{token:uploadToken})
     		},
     		onProgress(procent){
     			console.log(this,procent)
     		},
     		onSuccess(ret){
     			console.log('---onSuccess---',this,ret)
     			successImgList.push({id:this.id,key:ret.key})
     			console.log('返回成功的图片集合>>>%s',JSON.stringify(successImgList))
     		},
     		onError(err){
     			console.log(this,err)
     		},
     		// handleClickUploadList(e){
     		// 	let target = e.target
     		// 	while (!target.classList.contains('weui-uploader__files') && target){
     		// 		target = target.parentNode
     		// 	}
     		// 	if(!target) return

     		// 	var url = target.getAttribute('style') || ''
     		// 	var id = target.getAttribute('data-id')
     		// 	if(url){
     		// 		url = url.match(/url\((.*?)\)/)[1].replace(/"/g,'')
     		// 	}
     		// 	var gallery = weui.gallery(url,{
     		// 		className:'custom-name',
     		// 		onDelete(){
     		// 			weui.confirm('确定删除该图片？',function(){
     		// 				--uploadCount
     		// 				uploadCountDom.innerHTML = uploadCount
     		// 				for(let i = 0,i<5,++i){
     		// 					var file = uploadList[i]
     		// 					if(file.id+'' === id){
     		// 						uploadList.splice(i,1)
     		// 						file.stop()
     		// 						break
     		// 					}
     		// 				}
     		// 				for(let i =0,len = 5,i<len,++i){
     		// 					var item = successImgList[i]
     		// 					if(item.id+''===id){
     		// 						successImgList.splice(i,1)
     		// 						break
     		// 					}
     		// 				}
     		// 				target.remove()
     		// 				gallery.hide()
     		// 			})
     		// 		}
     		// 	})
     		// }
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
	.userphoto img{
		width:2rem;
		display: inline-block;
		vertical-align: middle;
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
</style>