<template>
	<div class="liaisonGroup">
		<headerTip message="联络团体" goBack="true"></headerTip>

		<div class="Sousuo">
        <!--<a href="javascript:;" class="weui-btn weui-btn_primary">点击展现searchBar</a>-->
        <div class="sousuo1" id="searchBar">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search" class="sousuokuang" id="searchInput" placeholder="搜索" required="">
                    <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
                </div>
                <label class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                    <i class="weui-icon-search"></i>
                    <span></span>
                </label>
            </form>
        </div>
        </div>
    	<div class="header2">
    	
    	</div>
    	<div class="neirong">
    		<span class="tuanti">北京市志多星团队</span>
    	</div>
    	
	</div>
</template>

<script>
	import headerTip from '../../components/common/header/header.vue'
	export default{

		name:'liaisonGroup',
		components:{
	  		headerTip
	  	},
		data(){
			return {
				
			}
		},

	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sousuokuang{
	width:95%;
	text-align: center;
	background-color:rgba(238, 238, 244, 0.5);
	border: none;
    border-radius: 0.4rem;
    margin: 0.5rem 0;
    padding: 0.6rem;
}
.Sousuo{
	width: 100%;
	text-align: center;
	}
	.header2{
		width:100%;
		background-color:rgba(238, 238, 244, 0.5);
		height: 0.7rem;
		margin-top: 0.4rem;
	}
	.tuanti{
		font-size: 1rem;

	}
	.neirong{
		width: 98%;
		padding: 0.8rem;
		border-bottom: 1px rgba(238, 238, 244, 0.5) solid;

	}
	
</style>