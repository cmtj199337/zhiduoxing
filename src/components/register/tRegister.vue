<template>
	<div class="teamRegistration">
		<headerTip message="团队注册" goBack="true"></headerTip>
        <div class="header">
       		<span class="ire">
				<img src="./t3.png">
				<p style="font-size:1rem;padding:0.4rem">团队信息</p>
			</span>
			<img src="./t4.png" class="hx">
			<span class="tre">
				<img src="./t2.png" >
				<p style="font-size:1rem;padding:0.4rem">团队法人/负责人信息</p>
			</span>
        </div>
        
        <div class="header2">
            <h4 class="texttitle"><span><img src="./t1.png"></span>团队信息</h4>
        </div>
        <div class="usertext tlo">
			<router-link to="goodlist"><span>团队logo<img src="./tlogo1.png"></span></router-link>
		</div>
        <div class="usertext">
       		 <input type="text" name="" placeholder="请输入团队名称">
        </div>
        <div class="usertext">
			<input type="tel" placeholder="请输入手机号" maxlength="11" />
		</div>
        <div class="usertext">
			<input type="number" placeholder="请输入验证" maxlength="11"  style="width:60%" />
			<timer-btn ref="timerbtn" class="btn getcode" v-on:run="send" :second="60"></timer-btn>
		</div>
		<div class="usertext">
			<input type="password" style="width:100%" placeholder="请输入密码" /><br />
		</div>
		<div class="usertext">
			<input type="password" placeholder="请确认密码" /><br />
		</div>
		<div class="usertext">
			<input type="password" placeholder="请输入团队口号" /><br />
		</div>
		<div class="usertext right">
			<router-link to="liaisonGroup"><span>联络团队：志愿者服务联合会<img src="./right.png"></span></router-link>
		</div>
		<div class="usertext right">
			<router-link to="goodlist"><span>服务类型<img src="./right.png"></span></router-link>
		</div>
		<div class="usertext right">
			<router-link to="goodlist"><span>团队类别：党政机关<img src="./right.png"></span></router-link>
		</div>
		<div class="usertext bottom">
			<router-link to="goodlist"><span>团队种类：中级团队<img src="./bottom.png"></span></router-link>
		</div>
		<div class="usertext">
        	<input type="text" name="" placeholder="请输入团队管理员">
        </div>
        <div class="usertext">
			<input type="tel" placeholder="请输入联系电话" maxlength="11" />
		</div>
		<div class="kong">
		</div>
		 <div class="header3">
            <h4 class="texttitle"><span><img src="./dizhi.png"></span>团队地址</h4>
        </div>
        <div class="usertext right">
			<router-link to="goodlist"><span>所在地区<img src="./right.png"></span></router-link>
		</div>
		<div class="usertext right">
			<router-link to="goodlist"><span>所在区县<img src="./right.png"></span></router-link>
		</div>
		<div class="usertext">
       		 <input type="text" name="" placeholder="请填写详细地址，不少于5个字">
        </div>
        <div class="kong">
		</div>
		<div class="header2">
            <h4 class="texttitle"><span><img src="./dizhi.png"></span>团队简介</h4>
        </div>
        <div class="usertextend">
       		 <textarea name="" class="jianjie"></textarea>
        </div>
        <div class="end">
        不超过100字
        </div>
        <div class="eee">
        	<input type="button" name=""  class="next" value="下一步" @click="toAddress({path: '/tregisternext'})">
        </div>
    </div>
		
</template>
<script>
    import headerTip from '../../components/common/header/header.vue'
    import TimerBtn from '../common/tools/countdown.vue'
    export default{

        name:'teamRegistration',
        components:{
            headerTip,
            TimerBtn
        },
        data(){
            return {
            	isConfirm:false
                
            }
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
     		toAddress(path){
                this.$router.push(path)
            }
	  	}

    }

</script>
<style scoped>
@import '../../styles/usertext.css';
.header{
    margin: auto;
    background-color:rgba(238, 238, 244, 0.5);
    display:flex;
    position: relative;
}


.header span{
	width:50%;
	display: inline-block;
	text-align: center;
	margin-top: 2rem;
	margin-bottom : 2rem;
	position:relative;
	}
.header  span img{
	width: 30%;
	margin: 0 auto;
}

.usertext input{
		margin: 0;
		width: 100%;
	}
.usertext{
	margin: 0 1rem 1.2rem 1rem;
}
.usertext img{
		position: absolute;
		right: 0;
	}
.hx{
	width: 47%;
	position: absolute;
	left: 5.2rem;
	top:43%;
	height: 2px;
	z-index: -1;
}
.header2{
    border-bottom: 1px rgba(238, 238, 244, 0.5) solid;
}
.header3{
    border-bottom: 1px rgba(238, 238, 244, 0.5) solid;
   margin: 1rem 0;
}
.header  span p{
		font-size: 1.2rem;
	}
.tlogo{
		width: 95%;
		border-bottom: 1px rgba(238, 238, 244, 0.5) solid;
		margin: 0 auto;
	}
.tlogo img{
	width: 200%;
	right:0;
}
.right img{
		width:0.8rem;
		display: inline-block;
		vertical-align: middle;
		top: 25%;
	}
.tlo{
	margin: 0.8rem;
	padding: 0.8rem;
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
	.kong{
		background:#f6f6f9;
		 padding: 0.4rem;
		 margin: 0.4rem 0;
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
		background:#f6f6f9;
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




</style>