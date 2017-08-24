<template>
	<div class="juniorTeamManagement">
		<headerTip message="下级团队管理" goBack="true"></headerTip>
		<div class="header"><img src="/static/bg02.png"></div>
		<div class="main">
			<div class="header1">
				<ul>
					<li @click="toAddress({path: '/juniorteam'})">
						<img src="./a@2x.png"><span>{{info.teamNum}}</span><p>团队总数（个）</p>
					</li>
					<li @click="toAddress({path: '/juniorproject'})">
						<img src="./b@2x.png"><span>{{info.proNum}}</span><p>项目总数（个）</p>
					</li>
				</ul>
			</div>
			<div class="header2">
				<ul>
					<li @click="toAddress({path: '/personnelList'})">
						<img src="./c@2x.png" class="zhiyuan"><span>{{info.voNum}}</span><p>志愿者总人数（人）</p>
					</li>
					<li @click="toAddress({path: '/teammanagetimer1'})">
						<img src="./d@2x.png"><span>{{info.serHour}}</span><p>志愿时长（小时）</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'juniorTeamManagement',
		components:{
	  		headerTip
	  	},
		data(){
			return {
				info:[]
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.listView()
			})
		},
		methods:{
			toAddress(path){
                this.$router.push(path)
            },
            listView(){
            	this.$http.get('/api/private/lowerDetail').then( response => {
            		let res = response.data
            		if(res.result == 0){
            			this.info = res.data
            		}
            	})
            }
		}

	}
</script>
<style scoped>
span{
	color: #555;
	font-weight: 400;
	font-size: 2rem;
	padding-left: 0.2rem
}
.main{
	background:#f6f6f9;
}
.header1{
	padding:0.3rem 0;
}
.header1 ul{
display:flex;
text-align: center;

border-radius:5px;
}
.header1 ul li{
	width:46%;
	vertical-align:middle;
	
	padding:1.8rem 0;
	margin:0.5rem;
	background:white;
	border-radius:6px;

}
.header1 ul li img{
	width:22%;
	display:inline;
}
.header2{
	padding:0.3rem 0;
}
.header2 ul{
display:flex;
text-align: center;

border-radius:5px;
}
.header2 ul li{
	width:46%;
	vertical-align:middle;
	
	padding:1.8rem 0;
	margin:0rem 0.5rem 0.5rem 0.5rem;
	background:white;
	border-radius:6px;

}
.header2 ul li img{
	width:22%;
	display:inline;
}
.header2 ul li .zhiyuan{
	width:13%;
}
</style>