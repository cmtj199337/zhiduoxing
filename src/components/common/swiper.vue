<template>
    <div>
      <!-- swiper -->
        <swiper :options="swiperOption">
          <swiper-slide><img src="/static/banner01.png" alt=""></swiper-slide>
          <swiper-slide><img src="/static/banner01.png" alt=""></swiper-slide>
          <swiper-slide><img src="/static/banner01.png" alt=""></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          loop:true,
          coverflow: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows : true
          }
        }
      }
    },
    methods:{
      toAddress(path){
          this.$router.push(path)
      }
    }
  }
</script>

<style scoped>
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 18rem;
  }
  .swiper-slide img{
    width: 100%;
    border-radius: 0.4rem
  }
</style>