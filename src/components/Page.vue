<template>
  <div>
    <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"  v-loading="loading" style="width: 100%">
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
      loading: false
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('http://localhost:3000/posts').then(response => {
        console.log(response.data)
        this.tableData = response.data
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 2000)
      })
    },
    // 每页下拉显示数据
    handleSizeChange: function (size) {
      this.pagesize = size
    },
    // 点击第几页
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }

  }
}
</script>
