<template>
	<div class="unpend">
		<div class="main2">
			<ul>
				<li v-for="item in list">
					<router-link :to="{path:'teamIntroduction',query:{teamId:item.teamId}}">
					<img :src="item.logo">
					<h3>{{item.name}}</h3>
					<div class="m1">
						<div class="mm1"><span>{{item.serHour}}小时</span><p>志愿总时长</p></div>
						<div class="mm1"><span>{{item.mamager}}</span><p>团队管理员</p></div>
					</div>
				    </router-link>
				    <span class="item-check-btn list-btn" :class="{'check':item.checked}" @click.stop="toggle(item)">
				        <svg class="icon icon-ok"></svg>
				    </span>
				</li>
			</ul>
		</div>
		<div class="end">
			<ul>
				<li>全选</li>
				<li @click="assess(3)"><span><img src="./butongg@2x.png" >不通过</span></li>
				<li @click="assess(2)"><span><img src="./tongg@2x.png" >通过</span></li>
			</ul>
			<span style="top:28%" class="item-check-btn list-btn" :class="{'check':checkFlag}" @click="checkAll()">
		        <svg class="icon icon-ok"></svg>
		    </span>		
		</div>
	</div>
</template>
<script>
	export default{
		name:'unpend',
		data(){
			return {
				list:[],
				checkFlag:false,
				teamId:''
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.listView()
			})
		},
		methods:{
			toAddress(path){
                this.$router.push(path)
            },
            listView(){
            	this.$http.get('/api/private/lowerTeamDetailList',{
            		params:{
            			status:1
            		}
            	}).then( response => {
            		let res = response.data
            		if(res.result == 0){
            			this.list = res.data
            		}
            	})
            },
            toggle(item){
            	if(typeof item.checked == 'undefined'){
            		this.$set(item,'checked',true)
            	}else{
            		item.checked = !item.checked
            	}
            	this.caleTeamId()
            },
            checkAll(){
            	this.checkFlag = !this.checkFlag
            	this.list.forEach((item,index) => {
            		if(typeof item.checked == 'undefined'){
            			this.$set(item,'checked',this.checkFlag)
            		}else{
            			item.checked = this.checkFlag;
            		}
            	})
            	this.caleTeamId()
            },
            caleTeamId(){
            	this.teamId = ''
            	this.list.forEach((item,index) => {
            		if(item.checked){
            			this.teamId += item.teamId+','
            		}
            	})
            },
            assess(way){
				this.$http.post('/api/private/updateTeamStatus',{
					status:way,
					teamIds:this.teamId
				}).then( response => {
					let res = response.data
					if(res.result == 0){
						this.$message.success("审核成功")
					}
				})
			}
		}

	}
</script>
<style scoped>
@import '../../../../styles/usertext.css';
.main2{
	background:#F5F5F5;
	padding:0 0 0.6rem 0;
	position:relative;
}
.main2 ul{
	margin:0.2rem 0;
}
.main2 ul li{
	background:white;
	padding:0.5rem 0;
	border-radius:7px;
	/*margin-left:15%;*/
	margin-right: 2%;
	top: 5%;
	position: relative;
	margin-bottom:0.6rem; 
}
.main2 ul li a{
	color: #000;
}
.main2 ul li:last-child{
	margin-bottom:0; 
}
.main2 ul li img{
    width: 4rem;
    height: 4rem;
    position: absolute;
    left: 2rem;
    top: 13%;
    border-radius: 50%;
}
.main2 ul li .m1{
	display:flex;
	margin-left:20%;
}
.main2 ul li .mm1{
	width:50%;
	margin-left:10%
}
.mm1 p{
	color:#BCBCBC;
}
.main2 ul li h3{
	margin-bottom: 0.8rem;
	margin-left:7rem;
	font-size: 1rem;
	height: 1rem;
	font-weight: normal;
}
.end{
	width: 100%;
	position: fixed;
	background: #fff;
	bottom: 0;
}
.end ul {
	display:flex;
}
.end ul li{
	width:33%;
	text-align:center;
	border-right:1px #0000001a solid;
	border-bottom :1px #0000001a solid;
	padding:0.7rem 0;
	font-size:0.85rem;

}
.end ul li span img{
	width:15%;
	display:inline;
	vertical-align:middle;
	margin-right:0.2rem;
}
.list-btn{
	position: absolute;
	left: 0.5rem;
	top: 40%;
}
</style>