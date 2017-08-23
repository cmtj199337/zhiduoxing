<template>
	<div class="unpending">
		<div class="header1">
			<ul>
				<li style="text-align:center">姓名</li>
				<li class="bulu">申请日期</li>		
			</ul>
		</div>
		<div class="kong"></div>
		<div class="header2">
			<ul v-for="item in list" @click="toAddress('/personalData',item.voId)">
				<li class="cc1">
					<span class="item-check-btn list-btn" :class="{'check':item.checked}" @click.stop="toggle(item)">
				        <svg class="icon icon-ok"></svg>
				    </span>
					<p><img src="../tou1@2x.png" ><span>联系人</span></p>
				</li>
				<li><p>2017/05/21</p></li>
			</ul>
		</div>
		<div class="end">
			<ul>
				<li>全选</li>
				<li @click="assess(4)"><span><img src="../butongg@2x.png" >不通过</span></li>
				<li @click="assess(0)"><span><img src="../tongg@2x.png" >通过</span></li>
			</ul>	
			<span style="top:28%" class="item-check-btn list-btn" :class="{'check':checkFlag}" @click="checkAll()">
		        <svg class="icon icon-ok"></svg>
		    </span>	
		</div>
	</div>
</template>
<script>
	export default{

		name:'unpending',
		data(){
			return {
				checkFlag:false,
				list:[],
				id:''
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.listView()
			})
		},
		methods:{
			toAddress(url,para){
                this.$router.push({path:url,query:{userid:para}})
            },
            listView(){
            	this.$http.get('/api/teamHub/private/selectVoByTeamId',{
            		params:{
            			status:3
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
            	this.cale()
            },
            cale(){
            	this.id = ''
            	this.list.forEach((item,index) => {
            		if(item.checked){
            			this.id += item.voId+','
            		}
            	})
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
            	this.cale()
            },
            assess(way){
				this.$http.get('/api/teamHub/private/approveVo',{
					params:{
						status:way,
						voIds:this.id
					}
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
@import '../../../styles/usertext.css';
.unpending{
	background: #fff;
}
.header2 ul li .t1{
	width:1rem;
	height:1rem;
	margin-top:0.8rem;
}

.header1 ul{
	display: flex;
	margin-left:4%;
}
.header1 ul li{
	width:45%;
	text-align:right;
	padding:0.5rem 0;

}
.cc1{
	display:flex;
}
.cc2{
	text-align:right;
}
.kong{
	height:0.8rem;
	background:#0000001a;
}
.header2{
	margin:0 0.5rem;
}
.header2 ul{
	display:flex;
	border-bottom:1px #0000001a solid;
	position: relative;
}
.header2 ul .cc1{
	width:40%;
}
.header2 ul li{
    width: 55%;
    text-align: right;
    padding: 0.5rem 0;

}

.header2 ul li p{
	line-height:2.6rem;
	margin-left: 2.6rem;
}
.header2 ul li p img{
	display:inline;
	vertical-align:middle;
	width:2.8rem;
	height:2.8rem;

}
.header2 ul li p span{
	margin-left:0.2rem;
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