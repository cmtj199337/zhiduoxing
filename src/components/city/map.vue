<template>
  <div class="wrap">
  <headerTip message="定位" goBack="true"></headerTip>
    <label>关键词：<input v-model="keyword"></label>
    <baidu-map class="main" :center="center" @click="geohash()" @ready="handler" :zoom="15">
      <bm-view class="map"></bm-view>
      <bm-local-search :keyword="keyword" :auto-viewport="true"></bm-local-search>
       <bm-geolocation
          anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
          :showAddressBar="true"
          :autoLocation="true"
          >
       </bm-geolocation>
    </baidu-map>
  </div>
</template>

<script>
  import headerTip from '../../components/common/header/header.vue'
  export default {
    components:{
      headerTip
    },
    data () {
      return {
        keyword: '',
        center: {lng: 0, lat: 0},
        loca:''
      }
    },
    mounted(){
      
    },
    methods:{
      handler ({BMap, map}) {
        this.center = localStorage.getItem('hesh')
        this.center = this.center.split(',')
        this.center = {
          lng:this.center[0],
          lat:this.center[1]
        }
      },
      geohash(a){
        alert(a.point)
      },
      getLocation(){
        var geolocation = new BMap.Geolocation();
        //弹出地理授权
          geolocation.getCurrentPosition(function(r) {
              if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                  // // alert('定位成功');
                  // console.log(r.point);
                  localStorage.setItem('hesh',r.point.lng+','+r.point.lat)
              } else {
                  alert("baidu return failed");
              }
          },
          //获取失败时候的回调
          function(r) {
              console.log(r);
              alert('定位失败');
              return {
                  //设置高精度
                  enableHighAccuracy: true
              }
          });
      }
    }
  }
</script>
<style scoped>
  .wrap{
    width: 100%;
    height: 100%;
    background: #fff
  }
  .map{
    width: 100%;
    height: 20rem;
  }
</style>