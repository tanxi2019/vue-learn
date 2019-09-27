<template>
  <div class="how">
    <h4>router跳转</h4>
    <div class="button" v-for="(item,index) in msg" :key="index">
        <router-link  :to="'/a/'+item.id">详情页面</router-link>
    </div>

    <div>
      <h4>数字1：{{num1 | toInt}}</h4>
      <h4>数字2：{{num2 | toInt}}</h4>
      <h4>数字3：{{num3 | toInt}}</h4>
    </div>

    <div>
      <button @click="add">+1</button>
       借我多少钱{{money}} 还我多少钱{{a}} 还剩多少钱{{b}}
    </div>

  </div>
</template>

<script>
export default{
  name: 'how',
  data () { // 实例数据b
    return {
      a: 10,
      num1: 33.333,
      num2: 23.333,
      num3: 13.333,
      money: 100,
      msg: [
        {name: 'txt', id: 1},
        {name: 'hhl', id: 1}
      ]
    }
  },
  filters: {// 过滤方法
    toInt: function (value) { // 过滤小数
      return parseInt(value)
    }
  },
  computed: {// 计算属性
    sum () {
      return this.num1 + this.num2
    },
    // eslint-disable-next-line no-tabs
    b: function () {
      // eslint-disable-next-line no-tabs,no-mixed-spaces-and-tabs
		  return this.money - this.a
      // eslint-disable-next-line no-mixed-spaces-and-tabs,no-tabs,no-tabs
	  }

  },
  methods: {
    add: function () {
      return this.a++
    }
  },
  watch: { // 观察函数
    a: function () {
      console.log('a有变化')
    }
  }
}
</script>

<style>
  .how{
    padding-top: 30px;
  }
  h4{
    text-align: center;
    }
</style>
