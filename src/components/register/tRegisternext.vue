<template>
	<div class="tRegisternext">
		<headerTip message="团队注册" goBack="true"></headerTip>
        <div class="header">
       		<span class="ire">
				<img src="./t3.png">
				<p style="font-size:1rem;padding:0.4rem">团队信息</p>
			</span>
			<img src="./t4.png" class="hx">
			<span class="tre">
				<img src="./t22.png">
				<p style="font-size:1rem;padding:0.4rem">团队法人/负责人信息</p>
			</span>
        </div>
         <div class="header2">
            <h4 class="texttitle"><span><img src="./t1.png"></span>注册信息</h4>
        </div>
         <div class="usertext">
			<input type="text" placeholder="请输入联系人姓名" />
		</div>
		<div class="usertext">
			<input type="tel" placeholder="请输入手机号" maxlength="11" />
		</div>
		 <div class="usertext">
			<input type="text" placeholder="请输入联系人邮箱" maxlength="11" />
		</div>
		 <div class="usertext">
			<input type="text" placeholder="请输入团队法人/负责人姓名"/>
		</div>
		<div class="kong"></div>
		<div class="header2">
            <h4 class="texttitle"><span><img src="./zhengjian2.png"></span>证件类型</h4>
        </div>
        <div class=" usertext leixing">
		<form action="" method="post">
		 <span><img src="./lx.png"><label>身份证</label></span>
		 <span><img src="./lx.png"><label>身份证</label></span>
		 <span><img src="./lx.png"><label>身份证</label></span>
		 <span><img src="./lx.png"><label>身份证</label></span>
		 <span><img src="./lx.png"><label>身份证</label></span>
		</form>
        </div>

        <div class="usertext">
			<input type="tel" placeholder="请输入团队法人/负责人证件号" />
		</div>
		 <div class="usertext">
			<input type="text" placeholder="请输入团队法人/负责人手机号" maxlength="11" />
		</div>
		 <div class="usertext">
			<input type="text" placeholder="请输入团队法人/负责人邮箱"/>
		</div>
		<div class="end">
			<div class="chuan1">
			<img src="./tianjia.png">
			<p>上传资质照片</p>
			</div>
			<div class="chuan2">
			<img src="./tianjia.png">
			<p>上传资质照片</p>
			</div>
		</div>
		<div class="eee">
        	<input type="button" name=""  class="next" value="完成">
        </div>
    </div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'tRegisternext',
		components:{
	  		headerTip
	  	},
		data(){
			return {
				
			}
		}

	}

</script>
<style scoped>
@import '../../styles/usertext.css';
.usertext{
	margin: 0 1rem 1.2rem 1rem;
}
.usertext input{
		margin: 0;
		width: 100%;
	}
.usertext input{
	border: 0;
    margin: 0 auto;
    /* margin-left: 1.5rem; */
    height: 2.5rem;
    font-size: 1rem;
	}
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
.kong{
	padding: 0.3rem 0;
	background:#dcdcdc;

}
.leixing{
	
	border-bottom:1px #dfdfdf solid;
}
.leixing span{
	    border: 0;
	    font-size: 1rem;
	    color: #333;
	    display: inline;
	    margin:1.5rem;

	}
.leixing span img{
		width: 5%;
	}
.end{
	margin: 0.2rem 0;
	padding-bottom: 1rem;
	display: flex;
}
.end div{
		display: inline-block;
		width: 45%;
		margin: auto 2%;
		position: relative;
		text-align: center;
		border-radius:1rem;
	}
	.end img{
		height: 9rem;
	}
	.end p{
		position:absolute;
		left:26%;
		top:80%;
		color:rgba(33, 31, 31, 0.25);
		font-size: 1rem;
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