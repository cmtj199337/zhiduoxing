<template>
<div class="months">
	<div class="select">
		<p>
			<span class="item-check-btn">
				<svg class="icon icon-ok"></svg>
			</span>
			每月第<input type="text" v-model="list.day" name="">日
				<el-time-select
					    placeholder="起始时间"
					    v-model="start"
					    :picker-options="{
					      start: '08:30',
					      step: '00:30',
					      end: '18:30'
					    }">
				  	</el-time-select>
				  	<el-time-select
					    placeholder="结束时间"
					    v-model="end"
					    :picker-options="{
					      start: '08:30',
					      step: '00:30',
					      end: '18:30',
					      minTime:start
					    }">
					</el-time-select>
			<img @click="add()" src="../../tianjia.png" class="jia">
		</p>
	</div>
	<div class="text2">
		<ul>
			<li v-for="item in list">
				<span class="item-check-btn">
					<svg class="icon icon-ok"></svg>
				</span>
				<p style="text-align:center">每月第<b>{{item.day}}</b>日</p>
				<p>
					
				</p>
				<p>{{item.totle}}小时</p>
			</li>
		</ul>
	</div>
</div>
</template>
<script>
	export default{
		data(){
			return{
				list:[
					{"id":0,"day":5,"start":"9:00:00","end":"18:00:00","totle":3}
				],
				next:1,
				sTime:'',
				eTime:''
			}
		},
		methods:{
			add(){
				this.list.push({
		        	id: this.next++,
		        	day:this.list.day,
			        start: this.sTime,
			        end:this.eTime,
			        totle:this.list.total
			    })
		        this.next = ''
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