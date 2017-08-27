<template>
	<div class="detailsOfTheTeam">
		<div v-show="wrap">
			<headerTip message="资料修改" goBack="true"></headerTip>

			<div class="header"><img src="./banner.png"></div>
			<div class="kong"></div>

			<div class="header1">
            <h4 class="texttitle"><span><img src="./zil@2x.png"></span>团队信息</h4>
        	</div>
			<div class="usertext">
			<span>团队名称：</span>
			<input type="text" v-model="check.teamName">
			</div>
			<div class="usertext">
			<span>团队口号：</span><input type="text" v-model="check.teamIntro">
			</div>
			<div class="usertext right" @click="lianluoToggle()">
				<a href="javascript:;"><span>联络团队<img src="./right.png"></span></a>
			</div>
			<div class="usertext bottom">
				<span>团队类型：</span><select class="select" v-model="check.serverType">
					<option v-for="item in typeList" :value="item.key">{{item.value}}</option>
				</select><img src="./bottom.png">
			</div>
			<div class="usertext">
			<span>组织管理员:</span><input type="text" v-model="check.teamManager">
			</div>
			<div class="usertext">
			<span>联系电话：</span><input type="text" v-model="check.conMob">
			</div>

			<my-area @select="haha"></my-area>
			<div class="usertext">
				<input style="text-indent:0; margin-left:0;" placeholder="请输入详细地址" type="text" v-model="check.address"> 
			</div>
			<div class="header3">
	            <h4 class="texttitle"><span><img src="./jianjie@2x.png"></span>团队简介</h4>
	        </div>
	        <div class="usertextend">
	       		 <textarea name="" class="jianjie" v-model="check.teamIntro"></textarea>
	        </div>
	        <div class="end">10-500字</div>
	        <div class="eee">
	        	<p @click="isTijiao">确定</p>
	        </div>
        </div>
		<!-- 联络团体 -->
		<div class="liaisonGroup" v-show="lisnluoShow">
			<div class="head_top">
				<div class='tip'>
	            	<p><span @click="lianluoToggle()"><img src="./back.png"></span>联络团体</p>
	        	</div>
        	</div>

			<div class="Sousuo">
	        <!--<a href="javascript:;" class="weui-btn weui-btn_primary">点击展现searchBar</a>-->
	        <div class="sousuo1" id="searchBar">
	            <form class="weui-search-bar__form">
	                <div class="weui-search-bar__box">
	                    <i class="weui-icon-search"></i>
	                    <input type="search" v-model="contant" @blur="getContactTeam(contant,teamInfo.teamKind)" class="sousuokuang" id="searchInput" placeholder="搜索" required="">
	                    <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
	                </div>
	                <label class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
	                    <i class="weui-icon-search"></i>
	                    <span></span>
	                </label>
	            </form>
	        </div>
	        </div>
	    	<div class="header5">
	    	
	    	</div>
	    	<div class="neirong">
				<ul>
					<!-- <el-radio-group v-model="teamInfo.contactTeamId" style="width:100%">
						<li v-for="item in contactTeam">
							<el-radio :label="item.teamId">{{item.teamName}}</el-radio>
						</li>
					</el-radio-group> -->
				</ul>
	    	</div>	    	
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
				check:{
					teamIcon:'',
					serverType:'',
					teamManager:'',
					contactNumber:'',
					teamCategory:'',
					province:'',
					city:'',
					address:'',
					teamIntro:'',
					teamId:'',
					teamSlogan:''
				},
				typeList:[],
				wrap:true,
				lisnluoShow:false,
				contant:''
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.getTypeList()
			})
		},
		methods:{
			haha(d){
            	this.check.province = d.pro.id
            	this.check.city = d.city.id
			},
			getTypeList(){
				this.$http.get('/api/public/getCommonList',{
					params:{
						type:'TEAM_TYPE'
					}
				}).then( response => {
					let res = response.data
					if(res.result == 0){
						this.typeList = res.data
					}
				})
			},
			lianluoToggle(){
            	this.lisnluoShow = !this.lisnluoShow
                if(this.lisnluoShow){
                    this.wrap = false  
                }else{  
                    this.wrap = !this.wrap   
                }  
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
	left: 50%;
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
	.right img{
	    position: absolute;
	    right: 0;
	    width: .6rem;
	    display: inline-block;
	    vertical-align: middle;
	    top: 32%;
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
		width: 100%;
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
	.sousuokuang{
		width:95%;
		text-align: center;
		background-color:rgba(238, 238, 244, 0.5);
		border: none;
	    border-radius: 0.4rem;
	    margin: 0.5rem 0;
	    padding: 0.6rem;
	}
	.Sousuo{
		width: 100%;
		text-align: center;
	}
	.header5{
		width:100%;
		background-color:rgba(238, 238, 244, 0.5);
		height: 0.7rem;
		margin-top: 0.4rem;
	}
</style>