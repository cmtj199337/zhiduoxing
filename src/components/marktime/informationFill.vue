<template>
  <div class="informationFilling">
   <headerTip message="补录时长" goBack="true"></headerTip>
 	<div class="main">
		<div class="header">
			<img :src="list.projectIcon">
			<p>{{list.projectName}}<span v-if="list.projectStatus == '已结束'" class="passed">{{list.projectStatus}}</span><span v-else-if="list.projectStatus == '进行中'" class="being">{{list.projectStatus}}</span></p> 
			<p><span style="font-size:0.8rem;color:#CCCCCC">志愿总时长</span> <span style="color:#77CBCA">{{list.serverDuration}}</span>小时</p>
		</div>
	</div>
	<div class="texts">
		<p>日期
			<el-date-picker
				v-model="date"
				size="small"
				type="date"
				placeholder="/年    /月    /日"
				:picker-options="pickerOptions0">
			</el-date-picker>
		</p>
		<p>补录时长 <input type="text" v-model="time" name="" placeholder="请输入小时数"></p>
	</div>
	<div class="end"><p @click="insertRecord()">确认</p></div>
  </div>  
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'informationFilling',
	  	components:{
	  		headerTip
	  	}, 
	 	data () {
		    return {
		    	date:'',
				time:'',
				pickerOptions0: {
					disabledDate(time) {
						return time.getTime() < Date.now() - 8.64e7;
					}
				},
				list:[]
		    }
	  	},
		mounted(){
			this.$nextTick(function(){
				this.showInfo();
			})
		},
	  	methods:{
			showInfo(){
				this.$http.get('/api/private/getATProjectSum',{
					params:{
						projectId:this.$route.query.projectId
					}
				}).then( response => {
					let res = response.data
					if(res.result == 0){
						this.list = res.data
					}
				})
			},
	  		insertRecord(){
				let userId = localStorage.getItem("userId")
				if(!this.date || !this.time){
					this.$message.error("请完善信息")
				}else if(this.time > 12){
					this.$message.error("不能大于12小时")
				}else{
					this.$http.post('/api/private/insertATRecord',{
					addDate:this.date,
					addTime:this.time,
					projectId:this.$route.query.projectId,
					volunteerId:userId,
					}).then( response =>{
						let res = response.data
						if(res.result == 0){
							this.$message.success("提交成功")
						}
					})
				}
				
			}
	  	}
	}
</script>

<style scoped>
p{
	font-size:1rem;
}
.main{
	background:#F5F5F5;
	padding:0.2rem 0;
}
.header{
	margin: 0.6rem 0.6rem 0.6rem 2.5rem;
	background:white;
	position:relative;
	border-radius:5px;
	padding:0.6rem 0;
}
.header img{
	width:4.5rem;
	height:4.5rem;
	border-radius:50%;
	position:absolute;
	top:10%; 
	left:-2.25rem; 
}
.header p .ac{
	border:1px #46B8B7 solid;
	border-radius:5px;
	color:#46B8B7;
	margin-left:0.5rem;
	padding: 0.1rem 0.2rem;
	font-size: 0.7rem
}
.header p{
	margin:0.6rem 0;
	margin-left:2.7rem;
}
.texts{
	background: #FFFFFF;
	padding:0 0.8rem;
}
.texts p{
	border-bottom:1px solid rgba(235,234,234,0.48);
	padding:1rem 0;
}
.texts input{
	border:none;
	width:60%;
	margin-left:1rem;
}
.end p{
	width:55%;
	background:#43B7B5;
	color:white;
	margin:2rem auto; 
	padding:0.8rem 0;
	border-radius:5px;
	text-align:center;
}
input::-webkit-input-placeholder{
	font-size: 0.9rem;
	line-height: 1
}			
.being{
	position: absolute;
    top: 19%;
    right: 3%;
    font-size: 0.6rem;
    color: rgb(70, 184, 183);
    border: 1px solid rgb(70, 184, 183);
    border-radius: 0.2rem;
    padding: 0 0.2rem;
}
.passed{
	position: absolute;
    top: 19%;
    right:3%;
    font-size: 0.6rem;
    color: #e5e5e5;
    border: 1px solid #e5e5e5;
    border-radius: 0.2rem;
    padding: 0 0.2rem;
}
</style>
