<template>
  <div class="hello">
    <el-menu
      theme="dark"
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      text-color="#000000"
      @select="handleSelect">
      <el-menu-item index="1">你看我怎么样</el-menu-item>
      <el-submenu index="2">
        <template slot="title">用户：{{username}}</template>
        <el-menu-item index="2-1" @click="loginOut">退出登录</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">a</el-menu-item>
    </el-menu>

    <button @click="animation">animation</button>
    <button @click="tab">Tab</button>
    <button @click="page">Page</button>
    <router-link to="/fold">Fold</router-link>
    <router-link to="/login">登录</router-link>
    <router-link to="/message">Msg</router-link>
    <How></How>
    <!--  双向数据绑定 -->
    <div class="model">
      <input type="text" v-model="msg" placeholder="请输入如">
      <!--  单向数据绑定 -->
      <div class="test">{{msg}}</div>
    </div>
    <!--   bind动态绑定属性 -->
    <div class="bind">
      <span :title="message">动态绑定的提示信息！</span>
    </div>
    <!--   if条件判断true flase -->
    <div class="if">
      <p v-if="seen">现在你看到我了</p>
    </div>
    <!--  v-for循环 -->
    <div class="item">
      <ul>
        <li v-for="(item,index) in user" :key="index">
          <div class="li-1">{{item.id}}</div>
          <div class="li-2">{{item.name}}</div>
        </li>
      </ul>
    </div>
    <div class="click">
      <p>{{message}}</p>
      <button @click="reverseMessage">点击</button>
    </div>
 <!--   v-bind属性添加 -->
    <div :class="demo">
        <p :class="p1">p1</p>
        <p :id="p2">p2</p>
        <p :class="[p1,p2]">p1,p2</p>
        <p :class="{test:p}">p</p>
        <p :class="text">text</p>
     </div>

  </div>
</template>

<script>
import How from '@/components/How'
const user = [
  {id: 1,
  name: '哈哈1'
  },
{
  id: 2,
  name: '哈哈2'
},
{
  id: 3,
  name: '哈哈3'
},
{
  id: 4,
  name: '哈哈4'
}
]
export default {
  name: 'HelloWorld',
  components: {
    How
  },
  data () {
    return {
      activeIndex:'1',
      username:'',
      msg: '',
      user: user,
      message: '页面加载于 ' + new Date().toLocaleString(),
      seen: true,
      demo: 'demo',
      p1: 'p1',
      p2: 'p2',
      p: true,
      text: {
        text: true,
        p: true
      }
    }
  },
  methods: {
    reverseMessage: function () {
      console.log('测试')
      this.message = this.message.split('').reverse().join('')
    },
    tab: function () {
      this.$router.push('/tab')
    },
    animation: function () {
      this.$router.push('/Animation')
    },
    page: function () {
      this.$router.push('/page')
    },
    //退出登录
    loginOut:function(){
      window.localStorage.removeItem('msg');
      window.location.reload()
    },
    //登录选项
    handleSelect:function(key,keypath){
      console.log(key,keypath)
    }
  },
  mounted:function(){ // 生命周期钩子
    //localStorage || sessionStorage中获取用户名
    if(localStorage.length!==0){
      // var user_detail=JSON.parse(sessionStorage.getItem('data'));
      let user_detail = localStorage.getItem('msg')
      console.log(localStorage)
      this.username=user_detail;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .demo{
    padding: 40px 0;
  }
</style>
