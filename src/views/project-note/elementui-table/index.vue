/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2019-12-01 17:05:55
 * @Last Modified by: liuzhenghe
 * @Last Modified time: 2019-12-09 16:32:09
 * @Description: 表格页面
 */

<template>
  <div>
    <!-- 静态表头表格 -->
    <div style="padding: 20px;">
      <table-query @onQuery="onQuery" />
      <table-content
        :page-data-info="pageDataInfo"
        :list-loading="listLoading"
        @pageChange="pageChange"
      />
    </div>
    <!-- 静态表头表格 E -->
  </div>
</template>

<script>
import TableQuery from './components/TableQuery'
import TableContent from './components/TableContent'
import { peopleList } from '@/api/people' // 使用 mockjs 模拟的数据
export default {
  name: 'ElementuiTable',
  components: {
    TableContent,
    TableQuery
  },
  data() {
    return {
      SourcePage: 'indexPage', // 来源页面
      // 页面数据
      pageDataInfo: {
        data: [],
        page: 1,
        limit: 5
      },
      // 查询条件
      queryParams: {},
      // 表格加载动画
      listLoading: true
    }
  },
  mounted() {
    this.getPeopleList()
    // vuex 测试
    console.log(this.$store.getters.testVuex)
  },
  methods: {
    // 查询
    onQuery(obj) {
      this.queryParams = obj
      this.getPeopleList()
    },
    // 获取数据列表
    getPeopleList(page) {
      const obj = {
        page: page || 1,
        limit: this.pageDataInfo.limit
      }
      const params = Object.assign({}, obj, this.queryParams)
      this.listLoading = true
      peopleList(params)
        .then(response => {
          this.pageDataInfo.data = response.data.items
          this.pageDataInfo.total = response.data.total
          // 模拟请求等待
          // setTimeout(() => {
          //   this.listLoading = false
          // }, 500)
          this.listLoading = false
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 页码改变
    pageChange(page) {
      this.getPeopleList(page)
    }
  }
}
</script>
