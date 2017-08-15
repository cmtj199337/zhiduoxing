<template>
	<div class="Servicetype">
		<el-radio-group v-model="data">
			<li v-for="item in list"><el-radio :label="item.key">{{item.value}}</el-radio></li>
		</el-radio-group>
	</div>
</template>
<script>
	export default{
		name:'Servicetype',
		data(){
			return {
				list:[],
				data:''
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.getList()
			})
		},
		beforeUpdate(){
			sessionStorage.setItem('serverType',this.data)
		},
		methods:{
			getList(){
				this.$http.get('/api/public/getCommonList',{
					params:{
						type:'SERVER_TYPE'
					}
				}).then( response => {
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
	.Servicetype{
		width:70%;
	}
	.el-radio-group{
		width: 100%;
		text-indent: 8%;
	}
	.el-radio-group .el-radio{
		width: 0
	}
	.Servicetype .el-radio-group li{
		padding:1rem 0;
	}
</style>