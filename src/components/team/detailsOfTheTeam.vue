<template>
	<div class="detailsOfTheTeam">
		<headerTip message="团队详情" goBack="true"></headerTip>
			<!-- <span class="paopao">编辑</span> -->
			<!-- <span class="edit"><router-link :to="{path:'detailsReset',query:{teamId:list.teamId}}">编辑</router-link></span> -->
			<div class="header"><img src="./banner.png"></div>
			<div class="kong"></div>

			<div class="header1">
            <h4 class="texttitle"><span><img src="./zil@2x.png"></span>团队信息</h4>
        	</div>
			<div class="usertext">
			<span>团队名称：</span>
			<p class="mode">{{list.teamName}}<i class="modify">修改</i></p>
			<!-- <input type="text"  :placeholder="list.teamName" v-model="check.teamName"> -->
			</div>
			<div class="usertext">
				<span>团队口号：</span><input v-model="list.teamIntro" type="text">
			</div>
			<div class="usertext">
				<span>联络团队：{{list.conTeam}}</span>
			</div>
			<div class="usertext bottom">
				<span>团队种类：</span>
				<select v-model="list.serverType">
					<option v-for="item in teamType" value="">{{item.value}}</option>
				</select>
			</div>
			<div class="usertext">
				<span>管理员：</span><input type="text" v-model="list.teamManager">
			</div>
			<div class="usertext">
				<span>联系电话：</span><input type="text" v-model="list.contactNumber">
			</div>
			<my-area @select="haha" :province="list.province" :citites="list.city"></my-area>
			<div class="usertext">
				<span>{{list.address}}</span>
			</div>

			<div class="header3">
	            <h4 class="texttitle"><span><img src="./jianjie@2x.png"></span>团队简介</h4>
	        </div>
	        <div class="usertextend">
	        	<textarea rows="6">{{list.teamIntro}}</textarea>
	        </div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	import MyArea from '../../components/common/tools/area.vue'
	export default{

		name:'detailsOfTheTeam',
		components:{
	  		headerTip,
	  		MyArea
	  	},
		data(){
			return {
				list:[],
				teamType:[]
			}
		},
		mounted(){
			this.getInfo()
		},
		methods:{
			haha(d){
            	this.list.province = d.pro.id
            	this.list.city = d.city.id
			},
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
				this.getTeam()
			},
			getTeam(){
				this.$http.get('/api/public/getCommonList',{
					params:{
						type:'TEAM_CATEGORY'
					}
				}).then( response => {
					let res = response.data
					if(res.result == 0){
						this.teamType = res.data
					}
				})
			}
		}

	}
</script>
<style scoped>
@import '../../styles/usertext.css';
.detailsOfTheTeam{
	background: #fff
}
.mode{
	width: 74%;
	display: inline-block;
}
.modify{
	font-size: 0.85rem;
	color: #fff;
	background: #43b7b6;
	padding: 0.2rem 0.4rem;
	border-radius: 0.3rem;
	float: right;
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
		margin-left:0.5rem;
	}
	.usertext select{
		border: 0;
	    margin: 0 auto;
	    height: 2.5rem;
	    font-size: 1rem;
	}
	.usertext span{
		height: 2.5rem;
		line-height: 2.5rem;
		font-size: 1rem;
	}
.kong{
	background:#f6f6f9;
	padding: 0.4rem;
	}
	
.usertextend textarea{
    width: 94%;
    padding: 3%;
    font-size: .9rem;
    font-family: Microsoft yahei;
    letter-spacing: 2px;
    line-height: 1.5;
    text-indent: 2em;
    border: 0
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
.edit{
	position:absolute;top:2%;right:2%;font-size:1rem
}
.edit a{
	color: #000;
}
</style>