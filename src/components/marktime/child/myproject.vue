<template>
	<div class="myproject">
		<div class="main">
			<div class="m1">
				<ul>
					<li style="border-right:1px #F5F5F5 solid">
						<p style="font-size:1.2rem;color:#49B9B7"><b>{{info.projectNum}}</b></p>
						<p style="color:#AFAFAF;font-size:0.9rem">参加项目</p>
					</li>
					<li>
						<p style="font-size:1.2rem;color:#49B9B7"><b>{{info.serverDuration}}</b></p>
						<p style="color:#AFAFAF;font-size:0.9rem">志愿者时长（小时）</p>
					</li>
				</ul>
			</div>
			<div class="m2">
				<ul>
					<li v-for="item in list">
						<img :src="item.projectIcon" class="touxiang">
						<div class="m11">
							<div class="mm1">
								<p class="tou">{{item.projectName}}</p>
								<p>志愿总时长<b class="mark">{{item.serverDuration}}</b>小时</p>
							</div>
							<div class="mm2">
								<span>
									<p class="being">{{item.projectStatus}}</p>
								</span>
								<p class="btn" @click="toAddress({path:'/personalLength'})">补录时长</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>	
	</div>
</template>
<script>
	export default{

		name:'myproject',
		data(){
			return {
				info:[],
				list:[]
			}
		},
		mounted(){
			this.getProject();
		},
		methods:{
			toAddress(path){
                this.$router.push(path)
            },
            getProject(){
            	this.$http.get('/api/private/getATProject').then( response => {
            		let res = response.data
            		if(res.result == 0){
            			this.info = res.data;
            			this.list = res.data.wxatProjectDetail
            		}
            	})
            }
		}
	}
</script>
<style scoped>
.main{
	background: #F5F5F5;
	padding:0.6rem 0;
	height: 40rem;

}

.active{
	color:#43B7B5;
	border-bottom: 3px solid #43B7B5;
}
.m1{
	border-radius:7px;
	background:white;
	margin:0 0.5rem;

}
.m1 ul{
	display:flex;
	padding: 1.5rem 0;
}
.m1 ul li{
	width:50%;
	text-align: center;
}
.m1 p{
	height: 1.6rem;
	line-height: 1.6rem;
}
p{
	font-size:0.9rem;
}
.m2{
	position:relative;
}
.m2 ul li{
	background:white;
	padding:0.8rem 0;
	border-radius:7px;
	margin:0.6rem 0.6rem 0 2.4rem;
	position:relative;

}
.m2 ul li .touxiang{
	width:5rem;
	height:5rem;
	position:absolute;
	left: -11%;
	top:8%;
}
.m2 ul li .m11{
	display:flex;
	margin-left:12%;
	padding:0.2rem;
}
.m2 ul li .mm1{
	width:70%;
	text-align: center;
}
.m2 ul li .mm2{
	width:31%;
	text-align: center;
	display:relative;

}
.m2 ul li .tou{
	margin-bottom: 0.8rem;
	overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom:1.2rem;
    color:black;
    width:12rem;
}
.mm1 p{
	text-align:left;
	margin-left:0;
	color:#AFAFAF;
	margin-top:0rem;

	font-size:0.7rem;
}
.mm2 img{
	position:absolute;
}
.btn{
	position: absolute;
    top: 61%;
    right:3%;
    font-size: 0.65rem;
    color: white;
    background: rgb(70, 184, 183);
    padding: 0.3rem 0.6rem;
    border-radius: 0.4rem;
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
.mark{
	color:#46B8B7;
	font-weight:normal;
	padding-left: 0.5rem;
}
b{
	font-weight: 400;
	font-size: 1.4rem;
}
</style>