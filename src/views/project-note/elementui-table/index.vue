<template>
  <div>
    <!-- 静态表头表格 -->
    <div style="padding: 20px;">
      <h2 style="margin-bottom: 10px;">静态表头表格</h2>
      <table-content :dataList="dataList" :dataTotal="dataTotal"></table-content>
      <div class="tip">111</div>
    </div>
    <!-- 静态表头表格 E -->
  </div>
</template>

<script>
import TableContent from './components/TableContent.vue'
import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article' // 使用 mockjs 模拟的数据
export default {
  name: 'ElementuiTable',
  components: {
    TableContent
  },
  data() {
    return {
      dataList: [],
      dataTotal: 0
    }
  },
  mounted() {
    this.getFetchList()
  },
  methods: {
    getFetchList() {
      fetchList(this.listQuery).then(response => {
        console.log(response)
        this.dataList = response.data.items
        this.dataTotal = response.data.total
        // console.log(response.data.total)
        // console.log(this.dataTotal)
      })
    }
  }
}
</script>
