<template>
	<div class="container">
		<div class="header3">
            <h4 class="texttitle"><span><img src="./dizhi.png"></span>团队地址</h4>
        </div>
        <div class="usertext bottom">
        	<span>所在地区</span>
			<select v-model="f.p" @change="selpro">
				<option v-for="(v,i) in pro" :value="i">{{v.name}}</option>
			</select>
			<img src="./right.png">
		</div>
		<div class="usertext bottom">
			<span>所在区县</span>
			<select v-model="f.c" @change="selcity">
				<option v-for="(v,i) in city" :value="i">{{v.name}}</option>
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
		padding: 0.5rem 0;
	}
	.usertext img{
		position: absolute;
		right: 0;
	}
	.bottom img{
		width:0.6rem;
		display: inline-block;
		vertical-align: middle;
		top: 32%;
		transform: rotate(90deg);
	}
	.right img{
		width:0.6rem;
		display: inline-block;
		vertical-align: middle;
		top: 32%;
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
	    height: 2rem;
	    line-height: 2rem;
	}
	.bottom span{
		font-size: 1rem;
		position: absolute;
		z-index: 1;
	    height: 2rem;
	    line-height: 2rem;
	}
</style>

<script>

export default {
	props:['province','citites'],
	data(){
		return {
           data:[],
           pro:[],
           city:[],
           f:{
	           p:0,
	           c:0
       		},
       		proName:[]
		}
	},
	mounted(){
		this.dataList();
		this.ecChange()
	},
	methods:{
		ecChange(){
		},
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
					let citys = res.data.child
					this.data = res.data

					this.pro = this.data;
					this.city = this.pro[0]['child'];
					this.result();

					res.data.forEach((item,index) => {
						if(item.id == this.province){
							this.proName.push({
								id:this.province,
								name:item.name
							})
						}
					})
				}
			})
		}
	}
}	
</script>