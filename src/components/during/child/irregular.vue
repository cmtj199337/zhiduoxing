<template>
<div class="irregular">
<div class="title">
	<p>添加日期<img src="../tianjia.png" @click="show"></p>
</div>
<div class="tianjia">
	<ul>
		<li v-for="item in list">
			<p style="text-align:center">{{item.serverDay}}</p>
			<p>{{item.serverSTime}}-{{item.serverETime}}</p>
			<p>{{item.serviceTime}}小时</p>
		</li>
	</ul>
</div>
<div class="text">
	<p>总志愿时长：<span>300.5小时</span></p>
</div>
	<div class="end">
		<p>注：项目时间不规律的情况下，需要团队管理员添加每次活动志愿服务时间噢~</p>
		<p class="queding" @click="save()">确定</p>
	</div>
	<!-- 弹框 -->
	<div class="xuanze" v-show="isShow">
		<div class="header">
			<p>总志愿时长：<span>200小时</span></p>
		</div>
		<div class="xx">选择日期
			<el-date-picker
			    v-model="year"
			    align="right"
			    type="date"
			    size="small"
			    placeholder="年-月-日">
			</el-date-picker>
		</div>
		<div class="tt">
			<p>开始时间  <el-time-select
			    placeholder="起始时间"
			    v-model="startTime"
			    size="small"
			    :picker-options="{
			      start: '08:30',
			      step: '00:30',
			      end: '18:30'
			    }">
		  	</el-time-select></p>	
		</div>
		<div class="tt">
			<p>结束时间  <el-time-select
			    placeholder="结束时间"
			    v-model="endTime"
			    size="small"
			    @change="cale()"
			    :picker-options="{
			      start: '08:30',
			      step: '00:30',
			      end: '18:30',
			      minTime: startTime
			    }">
			</el-time-select></p>	
		</div>
		<div class="tt2">
			<p>志愿时长 <span>{{count}}小时</span></p>
		</div>
		<div class="end2">
			<p @click="add()">确定</p>
		</div>
	</div>
	<div class="overlay" v-show="isShow"></div>
</div>
</template>
<script>
export default{

	name:'irregular',
	data(){
		return {
			isShow:false,
			startTime:'',
			endTime:'',
			year:'',
			list:[],
			count:'',
			message:'',
			listdata:{}
		}
	},
	mounted(){
		this.$nextTick(function(){
			this.listdata = JSON.parse(sessionStorage.getItem('data'))
			this.listdata.wxProjectCycleDto.regularType = 1
			this.listdata.wxProjectCycleDto.timeRate = ''
			this.listdata.wxProjectCycleDto.wxProjectCycleTimeDtoList = []
		})
	},
	methods:{
		show(){
			this.isShow = true;
		},
		add(){
			if(!this.year || !this.startTime || !this.endTime){
				this.$message.error('请输入完整信息')
			}else{
				this.year = this.year.toLocaleDateString()

				this.list.push({
		        	serverDay:this.year,
			        serverSTime:this.startTime,
			        serverETime:this.endTime,
			        serviceTime:this.count
			    })
		        this.isShow = false

		        this.listdata.wxProjectCycleDto.wxProjectCycleTimeDtoList.push({
					serverDay:this.year,
					serverSTime:this.startTime,
					serverETime:this.endTime,
					serviceTime:this.count
				})	
			}
		},
		cale(){
			var s = this.startTime.split(':');
		   	var e = this.endTime.split(':');

		   	var daya = new Date();
			var dayb = new Date();

			daya.setHours(s[0]);
			dayb.setHours(e[0]);
			daya.setMinutes(s[1]);
			dayb.setMinutes(e[1]);
		                
		    this.count = (dayb-daya)/1000/60/60
		},
		save(){
			if(this.list.length == 0){
				this.$message.error('请完善信息')
			}else{
				let data = JSON.stringify(this.listdata)
				sessionStorage.setItem('data',data)
				this.$router.push('sendProject')
			}
		}
	}
}
</script>
<style scoped>
.date{
	width: 5	rem;
}
p{
	font-size:0.85rem;
}
.title{
	padding:0.8rem ;
	border-bottom:1px #EBEBEB solid;
}
.title img{
	width:5%;
	display:inline;
	vertical-align:middle;
	margin-left:78%;

}
.tianjia ul li{
	display:flex; 
}
.tianjia ul li p{
	width:33%;
	text-align:right;
	padding:0.6rem 0.2rem;
	color:#7B7B7B;
	margin:0 0.4rem;
}
.tianjia ul li p b{
	color:#FFA120;
}
.text{
	padding: 0.8rem;
}
.text p span{
	color:#888888;
}
.end {
	background:#F5F5F5;
	padding:0.5rem 0;
	height:14rem;
}
.end p{
	margin:0 0.8rem ;
	line-height:1.4rem;
	color:#888888;
}
.end .queding{
	width:13rem;
	height:2.6rem;
	text-align:center;
	background:#43B7B5; 
	margin:0 auto;
	border-radius:5px;
	color:white;
	line-height: 2.6rem;
	margin-top:3rem;
}
.xuanze{
    width: 80%;
    /* height: 20rem; */
    border-radius: 6px;
    position: fixed;
    margin: 0 2rem;
    padding: 0 0.6rem;
    border: 1px #F2F2F2 solid;
    background: white;
    z-index: 3;
    top: 26%;
}
span{
	font-size:0.85rem;
	color:#666666;
}

.header{
	border-bottom:1px #F2F2F2 solid;
	padding:0.6rem 0;
}
.header p{
	text-align:center;
}
.header p span{

	color:#43B7B5;
}
.xx{
	padding:0.8rem 0;
	border-bottom:1px #F2F2F2 solid;

}
.xx input{
	width:3rem;
	height:1.8rem;
	background:#F5F5F5;
	border:none;
	border-radius:5px;
	margin:0 1.1rem; 
}
.tt{
	padding:0.8rem 0;
	border-bottom:1px #F2F2F2 solid;
}
.tt img{
	width:5%;
	display:inline;
	margin-left:62%;

}
.tt2{
	padding:0.8rem 0;
	border-bottom:1px #F2F2F2 solid;
}
.tt2 span{
	margin-left:63%;
}
.end2{
	padding:1rem 0;
}
.end2 p{
	width:70%;
	height:2.6rem;
	background:#43B7B5;
	margin:0 auto;
	border-radius:5px;
	line-height:2.6rem;
	text-align:center;
	color:white;
}

</style>