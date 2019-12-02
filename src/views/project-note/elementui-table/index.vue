/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2019-12-01 17:05:55
 * @Last Modified by: liuzhenghe30265
 * @Last Modified time: 2019-12-03 07:12:09
 * @Description: Description
 */

<template>
  <div>
    <!-- 静态表头表格 -->
    <div style="padding: 20px;">
      <h2 style="margin-bottom: 10px;">静态表头表格</h2>
      <table-content
        :data-result="dataResult"
        @pageChange="pageChange"
      />
    </div>
    <!-- 静态表头表格 E -->
  </div>
</template>

<script>
import TableContent from './components/TableContent.vue'
// import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article' // 使用 mockjs 模拟的数据
import { fetchList } from '@/api/article' // 使用 mockjs 模拟的数据
export default {
  name: 'ElementuiTable',
  components: {
    TableContent
  },
  data() {
    return {
      dataResult: {},
      dataTotal: 0,
      // 查询条件
      listQuery: {
        importance: '',
        type: '',
        title: '',
        page: 1,
        limit: 10
      }
    }
  },
  mounted() {
    this.getFetchList(1)
  },
  methods: {
    // 获取数据列表
    getFetchList(page) {
      this.listQuery.page = page || 1
      fetchList(this.listQuery).then(response => {
        this.dataTotal = response.data.total
        this.dataResult = response.data
        console.log(this.dataResult)
      })
    },
    // 页码改变
    pageChange(page) {
      this.getFetchList(page)
    }
  }
}
</script>
