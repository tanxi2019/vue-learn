<template xmlns="">
  <el-form label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item >
      <el-input type="text" v-model="userName" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="passWord" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        userName:'',
        passWord:''
      }
    },
    methods: {
      login:function(){//登陆验证
        if(this.userName===''||this.passWord===''){
          this.$message({
            message: '账号密码不能为空！',
            type: 'warning'
          });
          return;
        }
        axios.get('http://localhost:3000/users? username='+this.userName+'&password='+this.passWord).then((res)=>{
          if(res.data.length>0){
            var ses = window.sessionStorage;
            //sessionStorage接收的好像是string所以这里吧data解析一下变成json字符串
            // var d=JSON.stringify(res.data[0].username)
            var d = res.data[0].username
            //把拿到的data放在sessionStorage中
            ses.setItem('data',d)
            //验证成功进入首页
            this.$router.push('/');
            //，登陆成功
            window.location.reload()
          }else{
            this.$message({
              message: '请输入正确的账号密码！',
              type: 'warning'
            });
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    /*background: #fff;*/
    /*border: 1px solid #eaeaea;*/
    box-shadow: 0 0 25px #cac6c6;
  }
    .title {
      margin: 0 auto 40px auto;
      text-align: center;
      color: #505458;
    }

</style>
