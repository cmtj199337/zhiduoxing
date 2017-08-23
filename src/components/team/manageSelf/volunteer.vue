<template>
	<div class="juniorTeamProject">
		<headerTip message="志愿者" goBack="true"></headerTip>
		<div class="header">
			<ul>
				<li v-for="(item,index) in tabs">
					<span :class="{active: index == iscur }" @click="toggle(item.view,index)">{{item.type}}</span>
				</li>
			</ul>
		</div>
		<component :is='currentView' keep-alive></component>
	</div>
</template>
<script>
	import headerTip from '../../../components/common/header/header.vue'
	import UnPending from '../../../components/team/pending/unpending.vue'
	import Pending from '../../../components/team/pending/pending.vue'
	import Passed from '../../../components/team/pending/passed.vue'
	
	export default{
		name:'juniorTeamProject',
		components:{
	  		headerTip,
	  		UnPending,
	  		Pending,
	  		Passed
	  	},
		data(){
			return {
				iscur:0,
                currentView:'UnPending',
                tabs:[
				 	{type: '待审核',view: 'UnPending'},  
				 	{type: '已通过',view: 'Passed'},
				 	{type: '未通过',view: 'Pending'}
				],
			}
		},
		methods:{
			toggle(v,index) {
		    	this.iscur = index;
		    	this.currentView = v
		    }
		}
	}
</script>
<style scoped>
span{
	font-size:0.85rem;
	}
.router-link-active{
	padding-bottom: 0.4rem;
	color: #43B7B5 !important;
	border-bottom: 3px solid #43B7B5;
}
.header ul li a {
	color:#333;
}
.kong{
	padding: 0.4rem 0;
	background: #F5F5F5;
}
.header{
	padding: 0.4rem 0;
}
.header ul{
	display: flex;
	margin:0.1rem 0;
	padding: 0.1rem 0;
	padding-top:0.5rem;
	background: white;
	text-align: center;
}
.header ul li{
	width: 50%;
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