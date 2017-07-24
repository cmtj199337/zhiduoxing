<template>
    <div>
        <headerTip message="城市选择"></headerTip>
        <nav class="city_nav">
            <div class="city_tip">
                <span>当前定位城市：</span>
                <span>定位不准时，请在城市列表中选择</span>
            </div>
            <router-link :to="'/city/' + guessCityid" class="guess_city">
                <span>{{guessCity}}</span>
                <svg class="arrow_right">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                </svg>
            </router-link>  
        </nav>
        <section id="hot_city_container">
            <h4 class="city_title">热门城市</h4>
            <ul class="citylistul hot clearfix">
                <router-link  tag="li" v-for="item in hotcity" :to="'/city/' + item.id" :key="item.id">
                    {{item.name}}
                </router-link>  
            </ul>
        </section>
        <section class="group_city_container">
            <ul class="letter_classify">
                <li v-for="(value, key, index) in sortgroupcity" :key="key"  class="letter_classify_li">
                    <h4 class="city_title">{{key}}
                        <span v-if="index == 0">（按字母排序）</span>
                    </h4>
                    <ul class="groupcity_name_container citylistul clearfix">
                        <router-link  tag="li" v-for="item in value" :to="'/city/' + item.id" :key="item.id" class="ellipsis">
                            {{item.name}}
                        </router-link>  
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import headerTip from '../../components/common/header/header.vue'

export default {
    data(){
        return{
            guessCity: '',   //当前城市
            guessCityid: '', //当前城市id
            hotcity: [],     //热门城市列表
            groupcity: {},   //所有城市列表
        }
    },

    mounted(){
        // 获取当前城市
        this.$http.get('http://cangdu.org:8001/v1/cities?type=guess').then(response => {
            let res = response.data;
            this.guessCity = res.name;
            this.guessCityid = res.id;
        })
        //获取热门城市
        this.$http.get('http://cangdu.org:8001/v1/cities?type=hot').then(response => {
            let res = response.data;
            this.hotcity = res;
        })

        //获取所有城市
        this.$http.get('http://cangdu.org:8001/v1/cities?type=group').then(response => {
            let res = response.data;
            this.groupcity = res;
        })
    },
    components:{
        headerTip
    },

    computed:{
        //将获取的数据按照A-Z字母开头排序
        sortgroupcity(){
            let sortobj = {};
            for (let i = 65; i <= 90; i++) {
                if (this.groupcity[String.fromCharCode(i)]) {
                    sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)];
                }
            }
            return sortobj
        }
    },

    methods:{
        //点击图标刷新页面
        reload(){
            window.location.reload();
        }
    },
}

</script>

<style scoped>
    
.head_logo{
  left: 0.4rem;
  font-weight: 400;
  font-size: 0.7rem;
  color: #fff;
  width: 2.3rem;
  height: 0.7rem;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
}
.city_nav{
  padding-top: 2.35rem;
  border-top: 1px solid #e4e4e4;
  background-color: #fff;
  margin-bottom: 0.4rem;
}
.city_nav .city_tip{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
            justify-content: space-between;
    line-height: 1.45rem;
    padding: 0 0.45rem;
}
.city_nav .city_tip span:nth-of-type(1) {
      font-size: 0.55rem;
      color: #666;
}
.city_nav .city_tip span:nth-of-type(2) {
      font-weight: 900;
      font-size: 0.475rem;
      color: #9f9f9f;
}
.city_nav .guess_city{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    height: 1.8rem;
    padding: 0 0.45rem;
    border-top: 1px solid #e4e4e4;
    border-bottom: 2px solid #e4e4e4;
    font: 1.2rem "Microsoft YaHei";
}
.city_nav .guess_city span:nth-of-type(1) {
      color: #3190e8;
}
.city_nav .guess_city .arrow_right{
      width: 0.6rem;
      height: 0.6rem;
      fill: #999;
}
#hot_city_container{
  background-color: #fff;
  margin-bottom: 0.4rem;
}
.citylistul{
  width: 96%;
  margin: 0 auto;
}
.hot li{
  width: 20% !important;
  border-radius: 0.4rem;
  border: 0.025rem solid #43B7B6;
  margin: 0.2rem 2.5%;
}
.citylistul li{
  width: 25%;
  text-align: center;
  color: #333;
  border-right: 0.025rem solid #d5d5d5;
  border-bottom: 0.025rem solid #d5d5d5;
  height: 1.75rem;
  font: 0.8rem/1.75rem "Microsoft YaHei";
  float: left;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
}
.citylistul li:nth-of-type(4n) {
  border-right: none;
}
.city_title {
  color: #666;
  font-weight: 400;
  text-indent: 0.45rem;
  border-top: 2px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  font: 0.85rem "Helvetica Neue";
  padding: 0.5rem 0;
}
.city_title span{
    font-size: 0.475rem;
    color: #999;
}
.letter_classify_li{
  margin-bottom: 0.4rem;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
}
.letter_classify_li .groupcity_name_container li{
    color: #666;
}
</style>
