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
      swiperOption: { // 以下配置不懂的，可以去swiper官网看api
        effect: 'flip', // 切换效果 fade,coverflow,cube，flip;
        notNextTick: true, // notNextTick是一个组件自有属性；
        autoplay: true, // 自动播放
        loop: true, // 循环播放
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: { // 分页器
          el: '.swiper-pagination'
        },
        centeredSlides: true,
        paginationClickable: true,
        navigation: { // 左右切换箭头
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        keyboard: true, // 键盘切换
        mousewheelControl: true,
        observeParents: true, // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true
      },
    }
  },
  methods: {
    callback: function() {
      console.log("测试")
    }
  }
}
</script>

<style scoped>
  .swiper-container{ width: 100%; overflow: hidden;}
  .swiper-container .swiper-button-hidden{ opacity : 0; }
</style>
