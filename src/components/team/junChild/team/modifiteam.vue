<template>
	<div class="modifiteam">
		<headerTip message="团队详情" goBack="true"></headerTip>
			<!-- <span class="paopao">编辑</span> -->

			<div class="header"><img src="./banner.png"></div>
			<div class="kong"></div>

			<div class="header1">
            <h4 class="texttitle"><span><img src="./zil@2x.png"></span>团队信息</h4>
        	</div>
			<div class="usertext">
			<span>团队名称：</span><input type="text" :value="info.teamName">
			</div>
			<div class="usertext">
			<span>团队口号：</span><input type="text" :value="info.teamSlogan">
			</div>
			<div class="usertext">
			<span>联络团队：</span><input type="text" value="志愿服务联合会">
			</div>
			<div class="usertext">
				<span>服务类别：</span>
				<select>
					<option v-for="item in serverTypeList" :value="info.serverType">{{item.value}}</option>
				</select>
			</div>
			<div class="usertext">
			<span>组织管理员:</span><input type="text" :value="info.teamManager">
			</div>
			<div class="usertext">
			<span>联系电话：</span><input type="text" :value="info.contactNumber">
			</div>

			<!-- <div class="header2">
            <h4 class="texttitle"><span><img src="./dingwei@2x.png"></span>团队地址</h4>
        	</div>
        	<div class="usertext">
				<span>所在地区：</span>
				<input type="text" value="北京市">
			</div>
			<div class="usertext">
				<span>所在区县：</span>
				<input type="text" value="顺义区">
			</div> -->
			<my-area @select="haha"></my-area>
			<div class="usertext">
				<input style="text-indent:0" type="text" :value="info.teamAddress" >
			</div>

			<div class="header3">
	            <h4 class="texttitle"><span><img src="./jianjie@2x.png"></span>团队简介</h4>
	        </div>
	        <div class="usertextend">
	       		 <textarea name="" class="jianjie"></textarea>
	        </div>
	        <div class="end">
	        10-500字
	        </div>
	        <div class="eee">
        	<input type="button" name=""  class="next" value="确定">
        </div>
	</div>
</template>
<script>
	import headerTip from '../../../../components/common/header/header.vue'
	import MyArea from '../../../../components/common/tools/area.vue'
	export default{

		name:'modifiteam',
		components:{
	  		headerTip,
	  		MyArea
	  	},
		data(){
			return {
				info:[],
				teaminfo:{
					teamAddress:''
				},
				serverTypeList:[]
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.getServerType()
				this.getInfo()
			})
		},
		methods:{
			getInfo(){
				this.$http.get('/api/public/getTeamDetail',{
					params:{
						teamId:this.$route.query.teamId
					}
				}).then( response => {
					let res = response.data
					if(res.result == 0){
						this.info = res.data
					}
				})
			},
			getServerType(){
				this.$http.get('/api/public/getCommonList',{
					params:{
						type:'SERVER_TYPE'
					}
				}).then( response => {
					let res = response.data
					if(res.result == 0){
						this.serverTypeList = res.data
					}
				})
			},
			haha(d){
            	this.province = d.pro.id
            	this.city = d.city.id
			},
		}

	}
</script>
<style scoped>
@import '../../../../styles/usertext.css';
.modifiteam{
	background: #fff;
}
.header1{
    border-bottom: 1px rgba(238, 238, 244, 0.5) solid;
}
.header2{
    border-bottom: 1px rgba(238, 238, 244, 0.5) solid;
}
.header  span p{
		font-size: 1.2rem;
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
	.usertext{
		margin: 0 1rem 1.2rem 1rem;
		position: relative;
	}
	.usertext input{
		margin: 0;
		width: 100%;
		text-indent: 5rem;
		margin-left:0.5rem;
	}
	.usertext select{
		border: 0;
	    margin: 0 auto;
	    margin-left: 5.5rem;
	    height: 2.5rem;
	    font-size: 1rem;
	    appearance:none;
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
	margin: 0.4rem 0;
	}
	
.usertextend textarea{
	border: none; 
	padding: 2.2rem 0;
	width: 100%;

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
</style>