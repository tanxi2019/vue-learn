<template>
  <div class="animation">
    <h1>Animation</h1>

    <transition name="slide-fade">
           <div class="head" v-if="show"></div>
        </transition>

    <!-- 实例1 -->
    <button @click="handleShow">Toggle</button>
     <transition name="fade">
      <p v-if="show">v-enter会把fade替换为fade-enter</p>
     </transition>
      <!-- 实例2 -->
      <button @click="show1 = !show1">
    Toggle render
  </button>
  <transition name="slide-fade">
    <p style="width: 500px; margin: 20px auto;" v-if="show1">v-enter会把slide-fade替换为slide-fade-enter</p>
  </transition>

  <!-- 实例3 -->
   <button @click="show2 = !show2">Toggle show</button>
  <transition name="bounce">
    <p v-if="show2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
  </transition>

  <!-- 案例4 -->
  <button @click="show3 = !show3">
    Toggle render
  </button>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
  >
    <p v-if="show3">hello</p>
  </transition>

  <input type="button" value ="动画" @click="flag=!flag">
		<transition enter-active-class="bounceIn" leave-active-class="bounceOut" :duration="{ enter:200, leave:400 }">
			<h3 v-show="flag" class="animated" >this is  the word;</h3>
		</transition>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>
    <h1>测试</h1>

  </div>
</template>

<script>
  export default {
    name:'Animation',
    data () {
      return {
      show:true,
      show1:true,
      show2:true,
      show3:true,
      flag:false
      }
    },
    methods: {
        handleShow:function(){
          this.show = !this.show
        },
         handleScroll () {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                scrollTop>70 ? this.show=true :　this.show=false
            }
    },
    mounted () {
        window.addEventListener('scroll',this.handleScroll)

    },
    destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
}
  }
</script>

<style type="text/css">
    .slide-fade-enter-active {
           animation: bounce-in .5s;
        }
        .slide-fade-leave-active {
          animation: bounce-in .5s reverse;
        }
        @keyframes bounce-in {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 1;
          }
        }
        .head{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 50px;
            background: yellow;
        }
/* 实例1 */
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
  .fade-enter, .fade-leave-to {
  opacity: 0;
}
/* 实例2 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
/* 实例3 */
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
