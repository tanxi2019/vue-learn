<template>
  <div>
    <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              v-loading="loading"
              element-loading-text="拼命加载中"
              style="width: 100%">
      <el-table-column prop="id" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="price" label="地址">
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5,10, 20, 30, 40]"
        :page-size="pagesize"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
        prev-text="上一页"
        next-text="下一页">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'page',
  data () {
    return {
      currentPage: 1, // 默认显示页面为1
      pagesize: 5, //    每页的数据条数
      tableData: [], // 需要data定义一些，tableData定义一个空数组，请求的数据都是存放这里面
      loading: false // 加载状态
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('http://localhost:3000/posts').then(res => {
        this.loading = true // 加载动画开始
        setTimeout(() => { // 做延迟，效果更合理
          this.tableData = res.data // 赋值
          this.loading = false // 延迟2s,动画结束
        }, 2000)
      })
    },
    handleSizeChange: function (size) { // 每页下拉显示数据
      this.pagesize = size
    },
    handleCurrentChange: function (currentPage) { // 点击第几页
      this.loading = true // 切换下一页，动画开始
      setTimeout(() => { // 做延迟，效果更合理
        this.currentPage = currentPage
        this.loading = false // 切换下一页延迟2s,动画结束
      }, 2000)
    }

  }
}
</script>
