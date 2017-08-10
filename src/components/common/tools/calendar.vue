<template>
    <vue-event-calendar :events="demoEvents">
        <!--<template scope="props">
            <div v-for="(event, index) in props.showEvents" class="event-item">
            这里拿到的是传入的单个event所有数据
            {{event}}
            </div>
        </template> -->
    </vue-event-calendar>
</template>
<script>
export default {
  data () {
    return {
      demoEvents: [{
        date: '2017/8/15',
        title: '北京西站地区志愿服务',
        desc: '3小时'
      },{
        date: '2017/8/12',
        title: '地区志愿服务',
        desc:'4小时'
      }]
    }
  }
}
</script>