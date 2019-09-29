<template>
    <div>
      <h1>mssage</h1>
      <el-button :plain="true" @click="open">成功</el-button>
    </div>
</template>

<script>
  export default {
    name: 'Message',
    data (){
      return {}
    },
    methods:{
      open() {
        this.$router.push('/',  this.$message({
          message: '恭喜你，跳转成功了',
          type: 'success',
        }))
      }
    }
  }
</script>

<style scoped>
</style>
