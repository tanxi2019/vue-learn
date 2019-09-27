<template>
  <div class="a">
    <h4>测试</h4>
    {{msg}}
    <div v-for="item in msg">
      <span>{{item.id}}</span>
      <span>{{item.name}}</span>
    </div>
  </div>

</template>

<script>
export default{
  name: 'A',
  data () {
    return {
      msg: []
    }
  },
  methods: {
    //   getParams () {
    //     let routerParams = this.$route.query.dataObj; //接收上个页面跳转传过来的数据对象
    //     this.msg = routerParams;//赋值到data的msg
    //     console.log("测试"+routerParams)
    // }
  },
  created () {
    // this.getParams()//生命周期函数创建后调用
  }
}
</script>

<style>
</style>
