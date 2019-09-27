<template>
  <div id="app">
    <router-view></router-view>
    <!-- <div>{{a}}</div> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      a:4
    }
  },
  methods:{}
//   beforeCreate:function(){
//     console.log("beforeCreate---创建前")
//     console.log(this.$el)
//     console.log(this.$data)
//     console.log(this.a)
//
//   },
//   created:function(){
//     console.log("created---创建后")
//     console.log(this.$el)
//     console.log(this.$data)
//     console.log(this.a)
//
//   },
//   beforeMount:function(){
//     console.log("beforeMount---载入前")
//     console.log(this.$el)
//   },
//   mounted:function(){
//     console.log("mounted---载入后")
//     console.log(this.$el)
//     console.log(this.$data)
//     console.log(this.a)
//   },
//   beforeDestroy:function(){
//     console.log("beforeDestroy---更新前")
//     console.log(this.$el)
//     console.log(this.$data)
//     console.log(this.a)
//   },
//   destroyed:function(){
//     console.log("destroyed---更新后")
//     console.log(this.$el)
//     console.log(this.$data)
//     console.log(this.a)
//   },
//   beforeUpdate:function(){
//     console.log("beforeUpdate---销毁前")
//     console.log(this.$el)
//     console.log(this.$data)
//     console.log(this.a)
//   },
//   updated:function(){
//     console.log("updated---销毁后")
//     console.log(this.$el)
//     console.log(this.$data)
//     console.log(this.a)
//   }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
