<template>
  <div class="family">
   <headerTip message="志愿家庭" goBack="true" style="background: #FFFFFF"></headerTip>
   <!-- <span class="h" @click="toAddress({path: '/addFamily'})">添加成员</span> -->

	<div class="t" v-for="item in list">
		<img :src="item.headIcon" alt="">
		<span class="text">
			<p><span style="font-size:16px">{{item.trueName}}</span></p> 
			<p ><span style="font-size:0.8rem;color:#CCCCCC">志愿时长</span> <span style="color:#77CBCA">{{item.serverDuration}}</span><span>小时</span></p>
			<p><span style="font-size:0.8rem;color:#CCCCCC">身份证号</span><span>{{item.memberId}}</span></p>
		</span>
		<span class="item-check-btn list-btn" :class="{'check':item.checked}" @click="checkFlag(item)">
			<svg class="icon icon-ok"></svg>
		</span>
	</div>
	<div class="t3">
		<p @click="comfirm()">确定</p>
	</div>

  </div>  
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'family',
	  	components:{
	  		headerTip
	  	}, 
	 	data () {
		    return {
		    	list:[]
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
				this.$http.get('/api/private/getMyFamily').then( response =>{
					let res = response.data
					if(res.result == 0){
						this.list = res.data.wxFamilyDtoList
					}
				})
			},
			checkFlag(item){
				if(typeof item.checked == 'undefined'){
					this.$set(item,'checked',true)
				}else{
					item.checked = !item.checked
				}
			},
			comfirm(){
				
			}
	  	}
	}
</script>

<style scoped>
@import '../../styles/usertext.css';
.family{
	background: #F5F5F5;
	padding-bottom: 20%;
}
.h{
	margin-top: -2rem;
	margin-left: 19rem;
	position:absolute;
}

.t{
	padding: 0.2rem 0 0.1rem 3rem;
	display:flex;
	margin: 0.6rem 0.6rem 0.6rem 3.5rem;
	background: #FFFFFF;
	position:relative;
	border-radius:5px;
}
.t img{
	width:20%; 
	position:absolute;
 	top:15%; 
	left:-9%;
}
.t p{
	margin: 0.5rem 0;
	height:1.4rem;
	line-height:1.4rem;
}
.t3{
	margin: 2.5rem 0 0 0;
	text-align: center;
}
.t3 p{
	width: 14rem;
	color: #fff;
	background: #43B7B6;
	padding: 0.8rem 0;
	margin: 0 auto;
	border-radius: 0.4rem;
	border:none;
	appearance:none;
}
.list-btn{
    position: absolute;
    right: 1rem;
    top: 50%;
    margin-top: -0.5rem;
}
</style>