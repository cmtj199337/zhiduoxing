<template>
	<div class="container2">
		<div class="header3">
            <h4 class="texttitle"><span><img src="./dizhi.png"></span>项目地址</h4>
        </div>
        <div class="usertext right">
        	<span>所在地区</span>
			<select v-model="f.p" @change="selpro" placehoder="fasdf">
				<option :value="i" v-for="(v,i) in pro">{{v.name}}</option>
			</select>
			<img src="./right.png">
		</div>
		<div class="usertext right">
			<span>所在区县</span>
			<select v-model="f.c" @change="selcity">
				<option :value="i" v-for="(v,i) in city">{{v.name}}</option>
			</select>
			<img src="./right.png">
		</div>
	</div>
</template>

<style scoped>
	@import '../../../styles/usertext.css';
	.usertext input{
		margin: 0;
		width: 100%;
	}
	.usertext{
		margin: 0 1rem;
		padding:0.5rem 0;
	}
	.usertext img{
		position: absolute;
		right: 0;
	}
	.header3{
	    border-bottom: 1px rgba(238, 238, 244, 0.5) solid;
	}

	.right img{
		width:0.6rem;
		display: inline-block;
		vertical-align: middle;
		top:32%;
	}
	select{
		width: 100%;
		border: 0;
	    margin: 0 auto;
	    height: 2rem;
	    font-size: 1rem;
	    appearance:none;
	    position: relative;
	    text-indent: 5rem;
	}
	.right span{
		font-size: 1rem;
		position: absolute;
		z-index: 1;
	    height: 2.5rem;
	    line-height: 2.5rem;
	}
</style>

<script>
// import data from "./data";
export default {
	data(){
		return {
           data:[],
           pro:"",
           city:'',
           f:{
	           p:0,
	           c:0
       		}
		}
	},
	mounted(){
		this.dataList();
	},
	methods:{
		selpro(){
			this.city=this.pro[this.f.p]['child'];
			this.f.c=0;
			this.result();
		},
		selcity(){
			this.result();
		},
		result(){
			var re={
				pro:{id:this.pro[this.f.p].id,name:this.pro[this.f.p].name},
				city:{id:this.city[this.f.c].id,name:this.city[this.f.c].name}
			};
			this.$emit("select",re);
		},
		dataList(){
			this.$http.get('/api/public/getAreaList').then(response =>{
				let res = response.data
				if(res.result == 0){
					this.data = res.data

					this.pro=this.data;
					this.city=this.pro[0]['child'];
					this.result();
				}
			})
		}
	}
}	
</script>