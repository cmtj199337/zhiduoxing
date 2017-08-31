<template>
	<div class="informationFilling">
		<headerTip message="时长记录" goBack="true"></headerTip>
		<div class="main">
		<div class="header">
			<ul>
				<li>
					<img :src="projectList.projectIcon" class="touxiang">
					<div class="m11">
						<div class="mm1">
							<h3>{{projectList.projectName}}</h3>
							<p style="width:100%;display:flex;">
								<span style="width:70%">志愿总时长<b style="color:#43B7B5">{{projectList.serverDuration}}小时</b></span>
								<span style="width:40%;">报名人数<b style="color:#43B7B5">{{projectList.joinNumber}}人</b></span>
							</p>
						</div>
						<div class="mm2">
							<span><p :class="projectList.style">{{projectList.projectStatus}}</p></span>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="header2">
			<ul>
				<!-- <li><span :class="{'current':current}">加时长</span></li> -->
				<li v-for="(item,index) in way">
					<span :class="{'current':isCur == index}" @click="toggle(index)">{{item.type}}</span>
				</li>
			</ul>
		</div>
		<div class="main2">
		<div class="header3">
		<p>补录时长</p><input type="text" @change="limitTime()" v-model="time" style="border:none;" placeholder="请输入小时数">
		</div>
		<div class="header4">
		<ul>
			<li v-for="item in volutorName">{{item}}</li>
		</ul>

		</div>
		</div>
		<div class="header5">
			<p>补录时长人员列表：<span style="color:#43B7B5">共计{{volutorName.length}}人</span></p>
		</div>
		</div>
		<div class="jieshu">
			<p @click="comform()">确认</p>
		</div>
		</div>
	</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'informationFilling',
		components:{
	  		headerTip
	  	},
		data(){
			return {
				projectList:[],
				current:true,
				isCur:0,
				way:[
					{type:'加时长'},
					{type:'减时长'}
				],
				volutorId:'',
				volutorName:[],
				time:null
			}
		},
		mounted(){
			this.volutorId = sessionStorage.getItem('volunteerId')
			this.volutorName = sessionStorage.getItem('volunteerName')
			//取得项目
			this.$http.get('/api/private/getATProjectSum',{
				params:{
					projectId:this.$route.query.projectId
				}
			}).then( response => {
        		let res = response.data
        		if(res.result == 0){
        			this.projectList = res.data
        			if(res.data.projectStatus == '进行中'){
        				this.$set(this.projectList,'style','being')
        			}else if(res.data.projectStatus == '已结束'){
        				this.$set(this.projectList,'style','end')
        			}
        		}
        	})
        	this.volutorInfo()
		},
		methods:{
			toggle(index){
				this.isCur = index
				if(this.isCur == 1){
					this.time = -this.time
				}else if(this.isCur == 0){
					this.time = Math.abs(this.time);
				}
			},
			volutorInfo(){
				this.volutorName = this.volutorName.split(',').slice(0,-1)
			},
			comform(){
				if(this.time == ''){
					this.$message.error("信息填写完整")
				}else{
					this.$http.post('/api/private/insertATRecords',{
						addDate:this.$route.query.tit,
						addTime:this.time,
						projectId:this.$route.query.projectId,
						volunteerId:this.volutorId
					}).then( response => {
						let res = response.data
						if(res.result == 0){
							this.$message.success("提交成功")
							setTimeout(()=>{
								//补录记录
								this.$router.push('makeupRecord')
							},500)
						}
					})
				}
			},
			limitTime(){
				if(this.time > 12){
					this.$message.error("必须小于12小时")
					this.time = ''
				}
			}
		}
	}
</script>
<style scoped>
.informationFilling{
	background: #fff
}
.main{
	background: #F5F5F5;
	padding:0.5rem 0;
	height:37rem;
}
.header{
	position:relative;
}
.header ul li{
	background:white;
	padding:0.8rem 0;
	border-radius:7px;
	margin:0rem 0.5rem 0 3rem;
	position:relative;

}
.header ul li .touxiang{
	width:4.5rem;
	height:4.5rem;
	border-radius: 50%;
	position:absolute;
	left: -11%;
	top:10%;
}
.header ul li .m11{
	display:flex;
	margin-left:12%;
	padding:0.2rem;
}
.header ul li .mm1{
	width:100%;
	text-align: center;
}
.header ul li .mm2{
	text-align: center;
	display:relative;

}
.header ul li h3{
	margin-bottom: 0.8rem;
	width:200px;
	text-align:left;
	overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mm1 p{
	text-align:left;
	margin-left:0;
	color:#AFAFAF;
	margin-top:1.2rem;
}
.mm2 img{
	position:absolute;
}
.end{
	position:absolute;
	border-radius:5px;
	border:1px #E0E0E0 solid;
	color:#E0E0E0;text-align:center;
	width:14%;
	font-size:0.6rem;
	right:3%;
	bottom:63%;
}
.being{
	position:absolute;
	border-radius:5px;
	border:1px #43B7B6 solid;
	color:#43B7B6;text-align:center;
	width:14%;
	font-size:0.6rem;
	right:3%;
	bottom:63%;
}
.header2 ul{
	display:flex;
	margin:0.6rem 0;
}
.header2 ul li{
	width:50%;
	text-align: center;
	background:white;
	padding:0.9rem 0;
	position:relative;
}
.header2 span{
	border:1px solid #afafaf;
	padding:0.2rem 1rem;
	border-radius: 0.4rem; 
}
.current{
	border: 1px solid #43B7B6 !important;
	background: #43B7B6;
	color: #fff;
}
.main2{
	background:white;
}
.header3{
	display:flex;
	background:white;
	padding:0.4rem 0;
	margin:0 0.5rem;
	border-bottom:1px #F5F5F5 solid;
}
.header3 p{
	width:20%;
	margin-left:0.5rem;
	line-height:2rem;
}
.header3 input{
	width:70%;
	padding:0.5rem 0;
	
}
.header4{
	padding:0.5rem 0;
}
.header4 ul{
	padding:0.6rem 0;
	clear: both;
	overflow: hidden;
}
.header4 ul li{
	width:25%;
	text-align:center;
	float: left;
	padding:0.6rem 0;
}
.header5{
	padding:0.6rem 0;
	margin:0 0.5rem;
}
.jieshu{
	padding:1rem 0;
	text-align: center;
}
.jieshu p{
	color:#43B7B6;
	font-size:1rem;
}

</style>