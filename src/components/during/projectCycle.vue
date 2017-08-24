<template>
	<div class="projectCycle">
		<headerTip message="项目周期" goBack="true"></headerTip>
	<div class="header">
		<ul>
			<li v-for="(item,index) in tabs">
				<span :class="{active: index == iscur }" @click="toggle(item.view,index)">{{item.type}}</span>
			</li>
		</ul>
	</div>
	<div class="kong"></div>
	<div class="date">
		<p>项目开始日期：
			<el-date-picker
		      v-model="startTime"
		      type="date"
		      size="small"
		      placeholder="开始时间"
		      @change="send"
		      :picker-options="pickerOptions0">
		    </el-date-picker>
		</p>
	</div>
	<div class="date">
		<p>项目结束日期：
			<el-date-picker
		      v-model="endTime"
		      type="date"
		      size="small"
		      placeholder="结束时间"
		      @change="send"
		      :picker-options="pickerOptions0">
		    </el-date-picker>
		</p>
	</div>
	<div class="kong"></div>
	<component :is='currentView' keep-alive></component>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	import Irregular from '../../components/during/child/irregular.vue'
	import LawGular from '../../components/during/child/law.vue'

	export default{

		name:'projectCycle',
		components:{
	  		headerTip,
	  		Irregular,
	  		LawGular
	  	},
		data(){
			return {
				iscur:0,
                currentView:'LawGular',
                tabs:[
				 	{type: '规律时间',view: 'LawGular'},  
				 	{type: '不规律时间',view: 'Irregular'}
				],
				startTime:'',
				endTime:'',
				pickerOptions0: {
		            disabledDate(time) {
		            	return time.getTime() < Date.now() - 8.64e7;
		        	}
        		},
        		listdata:{}
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.listdata = JSON.parse(sessionStorage.getItem('data'))
			})
		},
		methods:{
			toggle(v,index) {
		    	this.iscur = index;
		    	this.currentView = v
		    },
		    send(){
		    	if(this.startTime != '' || this.endTime != ''){
		    		this.listdata.wxProjectCycleDto.projectSDate = this.startTime
		    		this.listdata.wxProjectCycleDto.projectEDate = this.endTime

		    		let data = JSON.stringify(this.listdata)
					sessionStorage.setItem('data',data)
		    	}
		    }
		}
	}
</script>
<style scoped>
.projectCycle{
	background: #fff
}
p{
	font-size:0.85rem;
}
.kong{
	padding:0.3rem 0;
	background:#F5F5F5;
}
.router-link-active{
	padding-bottom: 0.3rem;
	color:#43B7B5 !important;
	border-bottom: 3px solid #43B7B5;
}
.header ul{
	display:flex;
}
.header ul li{
	width:50%;
	text-align:center;
	padding:0.5rem 0 0 0;
}

.header ul li a{
	color:#333;
}
.date{
	padding:0.8rem 0;
	margin:0 0.8rem; 
	border-bottom:1px #F2F2F2 solid;
}
.date span{
	color:#666666;
}
.header ul li span{
	display: inline-block;
	padding-bottom: 0.4rem;
}
.active{
	color:#43B7B5;
	border-bottom: 3px solid #43B7B5;
}
</style>