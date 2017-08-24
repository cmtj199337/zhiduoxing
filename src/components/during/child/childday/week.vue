<template>
<!-- 按周 -->
<div class="week">
	<div class="time">
		<ul>
			<li v-for="item in list">
				<span class="item-check-btn" :class="{'check':item.checked}" @click="checkFlag(item)">
					<svg class="icon icon-ok"></svg>
				</span>
				<span>{{item.week}}</span>
			</li>
		</ul>
	</div>
	<div class="date2">
		<p>服务开始时间：
			<el-time-select
			    placeholder="起始时间"
			    v-model="startTimeWeek"
			    size="small"
			    @change="send"
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
		    v-model="endTimeWeek"
		    size="small"
		    @change="send"
		    :picker-options="{
		      start: '08:30',
		      step: '00:30',
		      end: '18:30',
		      minTime: startTimeWeek
		    }">
		</el-time-select>
	</p>
	</div>
	<div class="date2">
		<p>单次服务时长：
			<span>{{getDays}}小时</span>
		</p>
	</div>
	<div class="end">
		<p @click="save()">确定</p>
	</div>
</div>
</template>
<script>
	export default{
		data(){
			return{
				startTimeWeek: '',
        		endTimeWeek: '',
        		list:[
        			{week:'星期一',id:'2'},
        			{week:'星期二',id:'3'},
        			{week:'星期三',id:'4'},
        			{week:'星期四',id:'5'},
        			{week:'星期五',id:'6'},
        			{week:'星期六',id:'7'},
        			{week:'星期日',id:'1'}
        		],
        		totle:'',
        		listdata:{}
			}
		},
		computed:{
			getDays(){ 
			   	var s = this.startTimeWeek.split(':');
			   	var e = this.endTimeWeek.split(':');

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
		mounted(){
			this.$nextTick(function(){
				this.listdata = JSON.parse(sessionStorage.getItem('data'))
				this.listdata.wxProjectCycleDto.regularType = 0
				this.listdata.wxProjectCycleDto.timeRate = 1
			})
		},
		methods:{
			send(){
				if(this.startTimeWeek != '' || this.endTimeWeek != ''){
					this.listdata.wxProjectCycleDto.wxProjectCycleTimeDtoList.serverSTime = this.startTimeWeek
					this.listdata.wxProjectCycleDto.wxProjectCycleTimeDtoList.serverETime = this.endTimeWeek
					this.listdata.wxProjectCycleDto.wxProjectCycleTimeDtoList.serviceTime = this.getDays
				}
			},
			checkFlag(item){
				if(typeof item.checked == 'undefined'){
					this.$set(item,'checked',true)
				}else{
					item.checked = !item.checked
				}
				this.caleTime()
			},
			caleTime(){
				this.totle = ''
				this.list.forEach((item,index) => {
					if(item.checked){
						this.totle += item.id+','
						this.listdata.wxProjectCycleDto.wxProjectCycleTimeDtoList.serverDay = this.totle
					}
				})
			},
			save(){
				if(!this.startTimeWeek || !this.endTimeWeek || !this.totle){
					this.$message.error('请填写完整时间')
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
@import '../../../../styles/usertext.css';
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
	overflow: hidden;
}
.time ul li{
	width:33%;
	text-align:center;
	padding:0.6rem 0;
	float: left;
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