<template>
	<div class="Area">
		<p><img src="../dizhi.png" alt="">北京市</p>
		<el-radio-group v-model="data">
			<li v-for="item in city"><el-radio :label="item.id">{{item.name}}</el-radio></li>
		</el-radio-group>
	</div>
</template>
<script>
	export default{
		name:'myarea',
		data(){
			return {
				data:[],
				pro:'',
				city:'',
				data:''
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.getList();
			})
		},
		beforeUpdate(){
			sessionStorage.setItem('area',this.data)
		},
		methods:{
			getList(){
				this.$http.get('/api/public/getAreaList').then(response =>{
					let res = response.data
					if(res.result == 0){
						this.data = res.data

						this.pro=this.data;
						this.city=this.pro[0]['child'];
					}
				})
			}
		}
	}
</script>
<style scoped>
	.Area{
		width:70%;
		text-indent:25%;
	}
	.Area p{
		padding: 1rem 0;
	}
	.Area p img{
		width: 4%;
		display: inline-block;
		margin-left: -6%;
		vertical-align: text-top;
		padding-right: 2%;
	}
	.Area .el-radio-group li{
		padding:1rem 0;
	}
	.el-radio-group{
		width: 100%;
		text-indent: 8%;
	}
	.el-radio-group .el-radio{
		width: 0
	}
</style>