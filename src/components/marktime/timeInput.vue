<template>
	<div class="timeInput">
		<headerTip :message="title" goBack="true"></headerTip>
		<div class="header">
			<ul>
				<li>
					<img :src="projectList.projectIcon"  class="touxiang">

					<p>{{projectList.projectName}}<span v-if="projectList.projectStatus == '已结束'" class="passed">{{projectList.projectStatus}}</span><span v-if="projectList.projectStatus == '进行中'" class="being">{{projectList.projectStatus}}</span></p>
					<p style="width:90%;display:flex;"><span style="width:50%">志愿总时长<b style="color:#43B7B5">{{projectList.serverDuration}}小时</b></span><span style="width:40%;margin-left:20%;">报名人数<b style="color:#43B7B5">{{projectList.joinNumber}}人</b></span></p>
				</li>
			</ul>
		</div>
		<div class="header2">
			<ul>
				<li>姓名</li>
				<li>志愿时长</li>	
				<li style="text-align:center;">打卡来源</li>		
			</ul>
		</div>
		
		<div class="header3" >
			<!-- <div class="title"><p>A</p></div> -->
			<ul v-for="item in list">
				<li class="one">
				<span class="item-check-btn list-btn" :class="{'check':item.checked}" @click="checkFlag(item)">
					<svg class="icon icon-ok"></svg>
				</span>
				<img src="./toux.png" class="tx"><p>{{item.volunteerName}}</p></li>
				<li>{{item.serverTime}}小时</li>
				<li style="text-align:center;">补录时长</li>
			</ul>
		</div>
		<div class="ee"></div>
		<div class="foot">
			<ul>
			<li><p>共计：<span>{{list.length}}</span>人</p></li>
			<li class="right"><router-link :to="{path:'informationFilling',query:{projectId:projectId,tit:title}}">团队补录</router-link></li>
			</ul>
		</div>
			</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'timeInput',
		components:{
	  		headerTip
	  	},
		data(){
			return {
				projectList:[],
				list:[],
				volutors:'',
				projectId:'',
				volutorName:'',
				title:''
			}
		},
		mounted(){
			this.projectId = this.$route.query.projectId
			//取得项目
			this.$http.get('/api/private/getATProjectSum',{
				params:{
					projectId:this.$route.query.projectId
				}
			}).then( response => {
        		let res = response.data
        		if(res.result == 0){
        			this.projectList = res.data
        		}
        	})
			//取得参加项目的志愿者
        	this.$http.get('/api/private/getATTPVolunteer',{
        		params:{
        			projectId:this.$route.query.projectId
        		}
        	}).then( response => {
        		let res = response.data
        		if(res.result == 0){
        			this.list = res.data
        		}
        	})

        	sessionStorage.removeItem('volunteerId')
	        sessionStorage.removeItem('volunteerName')

	        this.title = this.$route.query.title
		},
		methods:{
			toAddress(path){
                this.$router.push(path)
            },
            sortgroupcity(){
	            let sortobj = {};
	            for (let i = 65; i <= 90; i++) {
	                if (this.list[String.fromCharCode(i)]) {
	                    sortobj[String.fromCharCode(i)] = this.list[String.fromCharCode(i)];
	                }
	            }
	            return sortobj
	        },
	        checkFlag(item){
	        	if(typeof item.checked == 'undefined'){
	        		this.$set(item,'checked',true)
	        	}else{
	        		item.checked = !item.checked
	        	}
	        	this.addvolutors()
	        },
	        addvolutors(){
	        	this.volutors = ''
	        	this.volutorName = ''
	        	this.list.forEach((item,index)=>{
	        		if(item.checked){
	        			this.volutors += item.volunteerId+','
	        			this.volutorName += item.volunteerName+','

	        			sessionStorage.setItem('volunteerId',this.volutors)
	        			sessionStorage.setItem('volunteerName',this.volutorName)
	        		}
	        	})
	        }
		},
		filters: {
		    formatDate(value) {
		      	if (!value) return ''
		      	let date = new Date(value * 1000)
		      	let year = date.getFullYear()  // 获取完整的年份(4位,1970)
		      	let month = date.getMonth() + 1  // 获取月份(0-11,0代表1月,用的时候记得加上1)
		      	let day = date.getDate()  // 获取日(1-31)
		      	let hour = date.getHours()  // 获取小时数(0-23)
		      	let minute = date.getMinutes()  // 获取分钟数(0-59)
		      	let weekDay = date.getDay() > 0 ? date.getDay() - 1 : 6 // 获取星期中的天数(0-6) 	0代表周日
		      	let week = ['一', '二', '三', '四', '五', '六', '日']
		      	return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ' 周' + week[weekDay]
		    }
	    }
	}
</script>
<style scoped>
@import '../../styles/usertext.css';
.timeInput{
	background: #fff;
}
.header{
	position:relative;
	padding:0.6rem 0;
	background:#F5F5F5;
}
.header ul li{
	background:white;
	padding:0.7rem 0;
	border-radius:7px;
	margin:0rem 0.5rem 0 2.4rem;
	position:relative;

}
.header ul li p{
	margin:0.6rem 0;
	margin-left:2.5rem;
	position: relative;
}
.header ul li p .end{
	width:2rem;
	border:1px #D3D3D3 solid;
	color:#D3D3D3;
	border-radius: 5px;
	margin-left:50%; 
}
.header ul li .touxiang{
	width:5rem;
	height:5rem;
	border-radius: 50%;
	position:absolute;
	left: -11%;
	top:5%;
}


.header2 ul {
	display:flex;
	background: white;
}

.header2 ul li{
	width:32%;
	text-align:center;
	padding:0.8rem 0;
	margin-left:2%;
}
.title{
	padding:0.6rem 0;
	margin-right:2rem;
	background:#F5F5F5;
}
.title p {
	margin-left:1rem;
}
.header3{
	background:white;

}
.header3 ul{
	display:flex;
	border-bottom:1px #F5F5F5 solid;


}
.header3 ul li{
	width:30%;
	padding:0.3rem;
	text-align:center;
	background:white;
	line-height:3rem;
}
.header3 ul .one{
	width:40%;
	display:flex;
}
.header3 ul li .tx{
	width:2.5rem;
	height:2.5rem;
	margin-left: 0.4rem;
	vertical-align: middle;

}
.header3 ul li .tg{
	width:1.1rem;
	height:1.1rem;
	margin-top:9%;

}
.header3 ul li p{
	margin-left:0.4rem;
}
.foot{
	position:fixed;
	bottom:0;
	width:100%;
	background:white;
}
.foot ul{
	display:flex;
}
.foot ul li{
	width:30%;
	padding:0.9rem 0;
	text-align:center;
	border-right:1px #F5F5F5 solid; 
}
.foot ul li p span{
	color:#43B7B5;
}
.foot ul .right{
	width:70%;
}
.foot ul .right a{
	color:#43B7B5;
}
.ee{
	height:3rem;
}
.list-btn{
	position: relative;
	top:0.7rem;
}
.being{
	position: absolute;
    right:10%;
    top: 0;
    font-size: 0.5rem;
    color: rgb(70, 184, 183);
    border: 1px solid rgb(70, 184, 183);
    border-radius: 0.2rem;
    padding: 0 0.2rem;
}
.passed{
	position: absolute;
    right:10%;
    top: 0;
    font-size: 0.5rem;
    color: #e5e5e5;
    border: 1px solid #e5e5e5;
    border-radius: 0.2rem;
    padding: 0 0.2rem;
}
</style>