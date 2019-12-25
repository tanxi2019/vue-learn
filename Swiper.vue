<template>
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide v-for="(banner,i) in banners" :key="i">
      <img class='boxitem' :src="banner" alt="">
      </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Swiper',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      banners: [
        require('../assets/banner2.jpg'),
        require('../assets/banner3.jpg'),
        require('../assets/banner2.jpg'),
        require('../assets/banner3.jpg')
      ],
      swiperOption: {
        effect: 'flip', // 切换效果 fade,coverflow,cube，flip;
        autoplay: true, // 自动播放
        loop: true, //循环播放
        delay: 3000, // 延迟3s
        speed: 800, //
        keyboard: true, // 键盘
        freeMode: false,
        pagination: { // 分页器
          el: '.swiper-pagination',
          dynamicBullets: false, // 手动切换之后继续自动轮播
          clickable: true // 允许点击小圆点跳转
        },
        navigtion: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {}
      }
    }
  },
  methods: {}
}
</script>

<style scoped>
  .swiper-container .swiper-button-hidden{ opacity : 0; }
</style>
