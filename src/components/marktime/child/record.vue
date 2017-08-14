<template>
  	<div class="volunteerTime">
		<div class="header">
			<ul>
				<li>
					<span class="left">
						<p><b>{{list.serverTimeMonth}}</b></p> 
						<p>本月志愿时长</p>
					</span>
					<span class="right">
						<p><b>{{list.serverTimeAll}}</b></p> 
						<p>志愿总时长</p>
					</span>
				</li>
			</ul>
		</div>
		<calendar></calendar>	
  	</div>  
</template>

<script>
import Calendar from '../../common/tools/calendar.vue'
	export default {
	  	name: 'volunteerTime',
	  	components:{
	  		Calendar
	  	},
	 	data () {
		    return {
		    	list:[]
		    }
	  	},
	  	mounted(){
	  		this.getRecord()
	  	},
	  	methods:{
	  		getRecord(){
	  			this.$http.get('/api/private/getHistory',{
	  				params:{
	  					yearMonth:'2017/8'
	  				}
	  			}).then(response => {
	  				let res = response.data
	  				if(res.result == 0){
	  					this.list = res.data
	  				}
	  			})
	  		}
	  	}
	}
</script>


<style scoped>
p{
	font-size:0.85rem;
	color: rgb(175, 175, 175);
}
.router-link-active{
	padding-bottom: 0.3rem;
	color:#43B7B5 !important;
	border-bottom: 3px solid #43B7B5;
}
.head{
	text-align:center;
	padding: 0.3rem 0;		
	background: #FFFFFF;
}
.head ul li a{
	color:#333;
}

.head ul {
	display:flex;
}
.head ul li{
	font-size: 14px;
	width: 50%;
	padding:0.5rem 0;
}
.header {
	background:#F5F5F5;
	padding:0.4rem 0;
}
.header ul li{
	margin:0.2rem 0.6rem;
	text-align:center;
	padding: 1.3rem 0rem;		
	background: #FFFFFF;
	display:flex;
	border-radius:5px;
}
.header ul li span{
	font-size: 14px;
	width: 50%;
}
.header ul li span p b{
	font-size:1.4rem;
	color:#43B7B5;
	font-weight: 400;
}
.header ul li .left{
	border-right:1px #F5F5F5 solid;
}
.left p{
	height: 1.6rem;
	line-height: 1.6rem;
}
.right p{
	height:1.6rem;
	line-height:1.6rem;
}
.head{
	text-align:center;
	padding: 0.3rem 0;		
	background: #FFFFFF;
}
.ee{
	padding:0.2rem 0;
	background:#F5F5F5;
	margin:0.8rem 0;
}
.end{
	margin-bottom:0;
	background:white;

}
.end p{
	margin:0.6rem;
	
}
.end p span{
	color:#666666;
}

</style>    
