<template>
<div class="day">
	<div class="hd">
		<p><img src="../../gou.png"><span></span>每天</p>
	</div>
	<div class="date2">
		<p>服务开始时间：
			<el-time-select
			    placeholder="起始时间"
			    v-model="startTime"
			    :picker-options="{
			      start: '08:30',
			      step: '00:30',
			      end: '18:30'
			    }">
		  	</el-time-select>
		</p>
	</div>
	<div class="date2">
		<p>服务结束时间：
			<el-time-select
			    placeholder="结束时间"
			    v-model="endTime"
			    :picker-options="{
			      start: '08:30',
			      step: '00:30',
			      end: '18:30',
			      minTime: startTime
			    }">
			</el-time-select>
		</p>
	</div>
	<div class="date2">
	<p>单次服务时长：
		<span>{{getDays}}小时</span>
	</p>
	</div>
</div>
</template>
<script>
	export default{
		data(){
			return{
				startTime: '',
        		endTime: '',
			}
		},
		computed:{
			getDays(){ 
			   	var s = this.startTime.split(':');
			   	var e = this.endTime.split(':');

			   	var daya = new Date();
				var dayb = new Date();

				daya.setHours(s[0]);
				dayb.setHours(e[0]);
				daya.setMinutes(s[1]);
				dayb.setMinutes(e[1]);
			                
			    var count = (dayb-daya)/1000/60/60

			    return count;
		 	}
		},
		methods:{
			
		}
	}
</script>
<style scoped>
span{
	font-size:0.85rem;
}
p{
	font-size:0.85rem;
}
.header ul {
	display:flex;
	margin:1rem;
}
.header ul li{
	width:20%;
	text-align:center;
	padding:0.6rem 0;
	border-top-left-radius:8px;
	border-top-right-radius:8px;
	background:#E5E5E5;
}
.header ul .one{
	background:#43B7B5;
	color:white;
}
.hd{
	margin:0 0.8rem;
	border-bottom:1px #E5E5E5 solid;
	padding:0.8rem 0;
}
.hd p img{
	display:inline;
	vertical-align:middle;
	width:5%;
	margin-left:1rem;
}
.hd p span{
	margin-left:0.6rem;
	font-size:0.85rem;
}
.date2{
	padding:0.8rem 0;
	margin:0 0.8rem;
}
.date2 span{
	color:#6E6E6E;
}
.end {
	background:#F5F5F5;
	padding: 3rem 0;
	height:14rem;
}
.end p{
	width:13rem;
	height:2.6rem;
	text-align:center;
	background:#43B7B5; 
	margin:0 auto;
	border-radius:5px;
	color:white;
	line-height: 2.6rem;
}
.time{
	margin:0 0.8rem ; 
	border-bottom:1px #E5E5E5 solid;
}
.time ul{
	display:flex;
}
.time ul li{
	width:33%;
	text-align:center;
	padding:0.6rem 0;
}
.time ul li img{
	width:14%;
	display:inline;
	vertical-align:middle;
}
.time ul li span{
	margin-left:0.6rem;
}
.select p{
	padding:0.8rem 0;
}
.select p img{
	width:5%;
	display:inline;
	vertical-align:middle;
	margin-left:5%;
	margin-right:0.6rem;
}
.select p  input{
	width:2.2rem;
	border:1px #EAEAEA solid;
	border-radius:5px;
	height:1.3rem;
}
.select p .jia{
	margin-left:54%;
}
.text2 ul li{
	display:flex; 
}
.text2 ul li p{
	width:33%;
	text-align:right;
	padding:0.6rem 0.2rem;
	color:#7B7B7B;
	margin:0 0.4rem;
}
.text2 ul li p b{
	color:#FFA120;
}
</style>