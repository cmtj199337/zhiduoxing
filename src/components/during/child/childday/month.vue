<template>
<div class="months">
	<div class="select">
		<p>
			每月第<input type="text" v-model="day" name="">日
				<el-time-select
					class="fixWidth"
				    placeholder="起始时间"
				    v-model="sTime"
				    size="mini"
				    readonly
				    :picker-options="{
				      start: '08:00',
				      step: '00:30',
				      end: '18:00'
				    }">
			  	</el-time-select>
			  	<el-time-select
			  		class="fixWidth"
				    placeholder="结束时间"
				    v-model="eTime"
				    readonly
				    size="mini"
				    :picker-options="{
				      start: '08:00',
				      step: '00:30',
				      end: '18:00',
				      minTime:sTime
				    }">
				</el-time-select>
			<img @click="add()" src="../../tianjia.png" class="jia">
		</p>
	</div>
	<div class="text2">
		<ul>
			<li v-for="item in list">
				<p style="text-align:left">
					<!-- <span class="item-check-btn" :class="{'check':item.checked}" @click="checkFlag(item)">
						<svg class="icon icon-ok"></svg>
					</span> -->
				每月第<b>{{item.day}}</b>日</p>
				<p>{{item.sTime}}-{{item.eTime}}</p>
				<p>{{count}}小时</p>
			</li>
		</ul>
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
				list:[
					// {"id":0,"day":5,"sTime":"8:00:00","eTime":"18:00:00"}
				],
				next:0,
				sTime:'8:00:00',
				eTime:'18:00:00',
				count:'10',
				day:'',
				result:[],
				month:''
			}
		},
		mounted(){
			this.$nextTick(function(){
				sessionStorage.removeItem('startTime')
				sessionStorage.removeItem('endTime')
				sessionStorage.removeItem('count')
				sessionStorage.removeItem('day')
			})
		},
		methods:{
			add(){
				if(this.day == ''){
					this.$message.error("请输入每月第几日")
				}else{
					this.list.push({
			        	id: this.next++,
			        	day:this.day,
				        sTime:this.sTime,
				        eTime:this.eTime,
				        count:this.count
				    })
			        this.next = ''
				}
			},
			checkFlag(item){
				if(typeof item.checked == 'undefined'){
					this.$set(item,'checked',true)
				}else{
					item.checked = !item.checked
				}
				this.caleFlag()
			},
			caleFlag(){
				this.result = []
				this.list.forEach((item,index) => {
					if(item.checked){
						this.result.push({
				        	id: this.next++,
				        	day:this.list.day,
					        sTime:this.sTime,
					        eTime:this.eTime,
					        count:this.count
					    })
				        this.next = ''
					}
				})
			},
			save(){
				this.list.forEach((item,index) => {
					if(!item.sTime || !item.eTime || !item.day){
						this.$message.error('请填写完整信息')
					}else{
						this.month += item.day+','
						sessionStorage.setItem('startTime',this.sTime)
						sessionStorage.setItem('endTime',this.eTime)
						sessionStorage.setItem('count',this.count)
						sessionStorage.setItem('day',this.month)
						sessionStorage.setItem('regularType',0)
						sessionStorage.setItem('timeRate',2)
						this.$router.push('sendProject')
					}
				})
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
.fixWidth{
	width: 6.5rem;
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
	padding:0.8rem;
}
.select p img{
	width:5%;
	display:inline;
	vertical-align:middle;
}
.select p  input{
	width:2.2rem;
	border:1px #EAEAEA solid;
	border-radius:5px;
	height:1.3rem;
}
.select p .jia{
	float: right;
	margin-top: 0.2rem;
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