<template xmlns:v-swiper="">
  <div class="swiper-container">
    <div v-swiper:mySwiper="swiperOption" class="inbox">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner,i) in banners" :key="'key'+i">
          <img class='boxitem' :src="banner" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import 'swiper/dist/css/swiper.css'
if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  Vue.use(VueAwesomeSwiper)
}
export default {
  name: 'Swiper',
  data () {
    return {
      banners: [
        require('../assets/banner2.jpg'),
        require('../assets/banner3.jpg'),
        require('../assets/banner2.jpg'),
        require('../assets/banner3.jpg')
      ],
      swiperOption: {
        effect: 'fade', // 切换效果 fade,coverflow,cube;
        autoplay: true, // 自动播放
        loop: true,
        delay: 3000, // 延迟3s
        speed: 800,
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
