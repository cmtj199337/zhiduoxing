<template>
	<div class="detailsOfTheTeam">
		<headerTip message="团队详情" goBack="true"></headerTip>
			<!-- <span class="paopao">编辑</span> -->

			<div class="header"><img src="./banner.png"></div>
			<div class="kong"></div>

			<div class="header1">
            <h4 class="texttitle"><span><img src="./zil@2x.png"></span>团队信息</h4>
        	</div>
			<div class="usertext">
			<span>团队名称：</span><input type="text"  :placeholder="list.teamName" v-model="check.teamName">
			</div>
			<div class="usertext">
			<span>团队口号：</span><input type="text" :placeholder="list.teamIntro" v-model="check.teamIntro">
			</div>
			<div class="usertext">
			<span>联络团队：</span><input type="text" :placeholder="list.conTeam" v-model="check.conTeam">
			</div>
			<div class="usertext bottom">
				<span>团队种类：</span><select class="select" v-model="check.serType" :value="list.serType">
					<option v-for="item in list.serList" :value="item.key" selected = "selected">{{item.value}}</option>
				</select><img src="./bottom.png">
			</div>
			<div class="usertext">
			<span>组织管理员:</span><input type="text" :placeholder="list.teamManager" v-model="check.teamManager">
			</div>
			<div class="usertext">
			<span>联系电话：</span><input type="text" :placeholder="list.conMob" v-model="check.conMob">
			</div>

			<div class="header2">
            <h4 class="texttitle"><span><img src="./dingwei@2x.png"></span>团队地址</h4>
        	</div>
        	<div class="usertext">
				<span>所在地区：</span>
				<input type="text" :placeholder="list.province" v-model="check.province">
			</div>
			<div class="usertext">
				<span>所在区县：</span>
				<input type="text" :placeholder="list.city" v-model="check.city">
			</div>
			<div class="usertext">
				<input style="text-indent:0; margin-left:0;" type="text" :placeholder="list.address" v-model="check.address"> 
			</div>

			<div class="header3">
	            <h4 class="texttitle"><span><img src="./jianjie@2x.png"></span>团队简介</h4>
	        </div>
	        <div class="usertextend">
	       		 <textarea name="" class="jianjie" :placeholder="list.teamIntro" v-model="check.teamIntro"></textarea>
	        </div>
	        <div class="end">
	        不超过100字
	        </div>
	        <div class="eee">
        	<p @click="isTijiao">确定</p>
        </div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'detailsOfTheTeam',
		components:{
	  		headerTip
	  	},
		data(){
			return {
				list:[],
				check:{
					teamName:'',
					teamIntro:'',
					conTeam:'',
					serType:'',
					teamManager:'',
					conMob:'',
					province:'',
					city:'',
					address:'',
					teamIntro:''
				},
				serList:[]
			}
		},
		mounted(){
			this.getInfo()
		},
		methods:{
			getInfo(){
				let userId=localStorage.getItem('userId')
				this.$http.get('/api/private/teamDetail',{
					params:{
						id:userId

					}
				}).then(response=>{
					let res =response.data
					if(res.result==0){
						this.list=res.data
					}
				})
			},
			isTijiao(){
				if(!this.check){
				this.$message.error('信息未填完整')
			}else{
				this.$http.post('/api/private/updateTeamInfo',this.check).then(response=>{
					let res=response.data
					console.log(res)
					if(res.result==1){
						this.$message.success('修改成功')
					}

				})
			}
			}
		}

	}
</script>
<style scoped>
@import '../../styles/usertext.css';
.detailsOfTheTeam{
	background: #fff
}
.header1{
    border-bottom: 1px rgba(238, 238, 244, 0.5) solid;
}
.header  span p{
		font-size: 1.2rem;
	}
.bottom img{
	width:1rem;
	display: inline-block;
	vertical-align: middle;
	left: 45%;
	top:40%;
}
.select{
	width: 35%;
	border: 0;
    margin: 0 auto;
    height: 2rem;
    font-size: 1rem;
    appearance:none;
    position: relative;
}
.usertext a{
	    border: 0;
	    width: 100%;
	    height: 2rem;
		line-height: 2rem;
	    font-size: 1rem;
	    display: inline-block;
	    color: #333;
	    text-indent: 0;
	    position: relative;
	}
		.usertext{
		margin: 0 1rem;
		font-size: 1rem;
		padding: 0.5rem 0;
	}
	.usertext img{
			position: absolute;
			right: 0;
		}
	.usertext input{
		margin-top:0.2rem;
		width:100%;
		text-indent: 5rem;
		margin-left:0.5rem;
	}
	.usertext select{
		border: 0;
	    margin: 0 auto;
	    margin-left: 5.5rem;
	    height: 2.5rem;
	    font-size: 1rem;
	}
	.usertext span{
		position: absolute;
		left: 0;
		height: 2.5rem;
		line-height: 2.5rem;
		font-size: 1rem;
	}
.kong{
	background:#f6f6f9;
	padding: 0.4rem;
	}
	
.usertextend textarea{
	border: none; 
	height:6rem;
	width:100%;
	margin:0.5rem 0; 
	font-size:1rem;
	text-indent:1rem;

	}
.end{
	margin-left: 67%;
	padding: 0.5rem;
	color:#ccc;
	text-align: right;
	}
.eee{
	padding: 2rem 0;
	margin:0; 
	background:#f6f6f9;
	text-align: center;
	}
	.eee p{
		width:55%;
		padding:1rem 0;
		margin: 0 auto;
		background:#43B7B5;
		border-radius:0.3rem;
		text-align: center;
		color:white;
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
.paopao{
	position:absolute;
	right:4%;
	top:2.5%;
	font-size:1rem;
	}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #000; opacity:1; 
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #000;opacity:1;
}

input:-ms-input-placeholder{
    color: #000;opacity:1;
}

input::-webkit-input-placeholder{
    color: #000;opacity:1;
}
.jianjie::-webkit-input-placeholder{color:#000;}
</style>