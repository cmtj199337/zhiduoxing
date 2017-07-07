<template>
    <header id='head_top'>
        <div class='tip'>
            <span>
                <img src="./back.png" alt="">
            </span>
            <p>{{message}}</p>
        </div>
    </header>
</template>

<script>
    export default {
    	data(){
            return{

            }
        },
        props: ['message', 'backUrl']
    }

</script>

<style scoped>
#head_top{
    width: 100%;
    font-size:1rem;
    font-family: arial,'microsoft yahei'; 
}
.tip{
    width: 100%;
    height: 2rem;
    line-height: 2rem;
}
.tip span{
    width: 6%;
    display: inline-block;
    vertical-align: middle;
}
.tip span img{
    width: 100%;
}
.tip p{
    vertical-align: middle;
    line-height: 1;
    display: inline-block;
}
</style>
