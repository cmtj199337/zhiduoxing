<template>
    <footer class="foot">
        <!-- 由于mocudata，手机无法显示数据 -->
        <!-- <section @click="toAddress({path: item.path})" :class="check" v-for="item in footlist">
            <img :src="item.src">
            <p v-text="item.text"></p>
        </section> -->
        <section @click="toAddress({path: '/index'})" class="check">
            <img src="./shouye1.png">
            <p>首页</p>
        </section>
        <section @click="toAddress({path: '/scan'})">
            <img src="./qiandaodaka1.png">
            <p>签到打卡</p>
        </section>
        <section @click="toAddress({path: '/profile'})">
            <img src="./geren1.png">
            <p>个人中心</p>
        </section>
    </footer>
</template>

<script>
    export default {
    	data(){
            return{
                footlist:[
                    {text:'首页',path:'/index',src:'./shouye1.png'},
                    {text:'签到打卡',path:'/scan',src:'./qiandaodaka1.png'},
                    {text:'个人中心',path:'/profile',src:'./geren1.png'}
                ],
                checkFlag:false
            }
        },
        mounted(){
            // this.showlist()
        },
        methods:{
            toAddress(path){
                this.$router.push(path)
            }
        }
    }
</script>

<style scoped>
    .foot{
        width: 100%;
        max-width: 720px;
        padding: 0.3rem 0;
        position: fixed;
        bottom: 0;
        background: #fff;
        box-shadow: 0px 5px 10px #000;
    }
    .foot section{
        width: 33.33%;
        text-align: center;
        color: #cbcbcb;
        float: left;
    }
    .foot section img{
        width: 25%;
        margin: 0 auto;
    }
    .check{
        color: #43B7B6 !important;
    }
</style>
