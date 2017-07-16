<template>
	<div class="goodlist">
		<headerTip message="擅长" goBack="true"></headerTip>
		<form action="" method="post">
			<ul>
				<li v-for="(item,index) in list">
					<span>{{item.name}}</span>
					<span class="item-check-btn" :class="{'check':item.checked}" @click="checkFlag(item)">
						<svg class="icon icon-ok"></svg>
					</span>
				</li>
			</ul>
			<div class="sub">
				<input type="button" value="提交"/>
			</div>
		</form>
	</div>
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'

	export default {
	  	name: 'goodlist',
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
	  			this.listview();
	  		})
	  	},
	  	methods:{
	  		listview(){
	  			this.$http.get('http://localhost:3000/list').then( response =>{
	  				let result = response.body;
	  				this.list = result;
	  			})
	  		},
	  		checkFlag(item){
	  			if(typeof item.checked == 'undefined'){
	  				this.$set(item,'checked',true);
	  				//不管创建多少，点击第三个的时候将选中的三项数据传到上一页
	  				let count = 0;
	  				this.list.forEach((item,index) => {
	  					if(item.checked == true){
	  						count++
	  					}
	  				})
	  				if(count>3){
	  					item.checked = !item.checked;
	  					this.$router.push({path:'/iregister'})
	  				}
	  			}else{
	  				item.checked = !item.checked;
	  			}
	  		}
	  	}
	}
</script>

<style scoped>
	@import '../../styles/usertext.css';
	.goodlist{
		font-size: 1rem;
	}
	.goodlist form{
		margin-top:10%; 
	}
	.goodlist li{ 
		width: 92%;
		margin: 0 auto;
	    border-bottom: 1px solid #dcdcdc;
	    padding-bottom: 1rem;
	    margin-bottom: 1rem;
	    text-align: left;
	    color: #333;
	}
	.goodlist li span{
		vertical-align: middle;
	}
	.goodlist li input{
		vertical-align: sub;
		float: right;
	}
	.item-check-btn {
	    float: right;
	}

</style>