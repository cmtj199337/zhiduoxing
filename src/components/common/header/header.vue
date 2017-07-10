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
    font-size:1.2rem;
    font-family: arial,'microsoft yahei';
    color: #333;
    text-align: center;
    padding: 0.5rem 0;
    border-bottom: 0.5px solid #c9c9c9;
}
.tip{
    width: 96%;
    margin:0 auto;
    height: 2rem;
    line-height: 2rem;
    position: relative;
}
.tip span{
    width: 2rem;
    display: inline-block;
    vertical-align: middle;
    position: absolute;
    left: 0;
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
