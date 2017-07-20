<template>
	<div class="goodlist">
		<headerTip message="擅长" goBack="true"></headerTip>
		<form action="" method="post">
			<ul>
				<li v-for="(item,index) in list">
					<span>{{item.value}}</span>
					<span class="item-check-btn" :class="{'check':item.checked}" @click="checkFlag(item)">
						<svg class="icon icon-ok"></svg>
					</span>
				</li>
			</ul>
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
	  	computed:{

	  	},
	  	methods:{
	  		listview(){
	  			this.$http.get('api/public/getCommonList/goodAt').then( response =>{
	  				let res = response.data;
	  				if(res.result == 0){
	  					let c = []
	  					let value = sessionStorage.getItem("check")
	  					if(value != null){
	  						let value1 = value.split(',')
		            		let value2 = value1.slice(0,-1)

			            	for(var i = 0;i<res.data.length;i++){
			            		let oo = {'key':res.data[i].key,'value':res.data[i].value}
			            		for (var j = 0;j<value2.length;j++){
			            			if(res.data[i].value == value2[j]){
			            				oo.checked = true
			            			}
			            		}
			            		c[i] = oo
			            	}
			            	this.list = c
	  					}else{
	  						this.list = res.data
	  					}
	  					
	  				}
	  			})		
	  		},
	  		checkFlag(item){
	  			if(typeof item.checked == 'undefined'){
	  				let count = 0;
	  				this.list.forEach((item,index) => {
	  					if(item.checked == true){
	  						//用逗号拼接字符串保存到sessionStorage
	  						count++
	  					}
	  				})
	  				if(count>=2){
	  					this.$router.push({path:'/iregister'})
	  				} 

	  				this.$set(item,'checked',true);
	  				let name='';
	  				this.list.forEach((item,index) => {
	  					if(item.checked == true){
	  						//用逗号拼接字符串保存到sessionStorage
	  						name += item.value+','
	  					}
	  				})
	  				sessionStorage.setItem("check", name);
	  				
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
		line-height: 1;
		display: block;
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


.child-view {  
  position: absolute;  
  left: 0;  
  top: 0;  
  width: 100%;  
  height: 100%;  
  transition: all .5s cubic-bezier(.55,0,.1,1);  
}  
.slide-left-enter, .slide-right-leave-active {  
  opacity: 0;  
  -webkit-transform: translate(30px, 0);  
  transform: translate(30px, 0);  
}  
.slide-left-leave-active, .slide-right-enter {  
  opacity: 0;  
  -webkit-transform: translate(-30px, 0);  
  transform: translate(-30px, 0);  
}  
</style>