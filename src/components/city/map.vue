<template>
  <div class="wrap">
  <headerTip message="定位" goBack="true"></headerTip>
    <input v-model.number="lng" style="display:none">
    <input v-model.number="lat" style="display:none">
    <baidu-map class="main" :center="center" @ready="handler" :zoom="15" 
        @moving="syncCenterAndZoom"
        @moveend="syncCenterAndZoom">
      <bm-view class="map"></bm-view>
       <bm-geolocation
          anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
          :showAddressBar="true"
          :autoLocation="true"
          >
       </bm-geolocation>
        <span class="location"><img src="./location.png"></span>
    </baidu-map>
    <div class="end">
      <p @click="pushData()">确定</p>
    </div>
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
        center: {lng: 0, lat: 0},
        lng:'',
        lat:'',
        listdata:{}
      }
    },
    mounted(){
      this.$nextTick(function(){
        this.listdata = JSON.parse(sessionStorage.getItem('data'))
      })
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
      syncCenterAndZoom (e) {
        const {lng, lat} = e.target.getCenter()
        this.lng = lng
        this.lat = lat
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
      },
      pushData(){
        if(this.lng != null || this.lat != null){
          this.listdata.punchLng = this.lng
          this.listdata.puchLat = this.lat

          let data = JSON.stringify(this.listdata)
          sessionStorage.setItem('data',data)

          this.$router.push('sendProject')
        }
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
  .main{
    position: relative;
  }
  .main .location{
    width: 1.5rem;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: -0.75rem;
  }
  .end{
    padding: 2rem 0;
    margin: 0;
    text-align: center;
  }
  .end p{
    padding: 0.7rem 0;
    width: 62%;
    color: white;
    background: #43B7B5;
    border-radius: 5px;
    margin: 0 auto;
    font-size: 1rem;
  }
</style>