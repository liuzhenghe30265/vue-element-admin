/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2019-12-01 17:05:55
 * @Last Modified by: liuzhenghe
 * @Last Modified time: 2019-12-03 18:48:27
 * @Description: Description
 */

<template>
  <div>
    <!-- 静态表头表格 -->
    <div style="padding: 20px;">
      <h2 style="margin-bottom: 10px;">静态表头表格</h2>
      <table-content :data-result="dataResult" @pageChange="pageChange" />
    </div>
    <!-- 静态表头表格 E -->
  </div>
</template>

<script>
import TableContent from './components/TableContent.vue'
// import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article' // 使用 mockjs 模拟的数据
import { peopleList } from '@/api/people' // 使用 mockjs 模拟的数据
export default {
  name: 'ElementuiTable',
  components: {
    TableContent
  },
  data() {
    return {
      dataResult: {}, // 请求结果
      // 查询条件
      listQuery: {
        importance: '',
        type: '',
        title: '',
        page: 1,
        limit: 5
      }
    }
  },
  mounted() {
    this.getPeopleList()
  },
  methods: {
    // 获取数据列表
    getPeopleList(page) {
      this.listQuery.page = page || 1
      peopleList(this.listQuery).then(response => {
        this.dataResult = response.data
        this.dataResult.limit = this.listQuery.limit
      }).catch(err => {
        console.log(err)
      })
    },
    // 页码改变
    pageChange(page) {
      this.getPeopleList(page)
    }
  }
}
</script>
