/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2019-12-01 17:05:37
 * @Last Modified by: liuzhenghe30265
 * @Last Modified time: 2019-12-01 17:17:25
 * @Description: Description
 */
<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="dataResult.items"
      border
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" />
      <el-table-column prop="id" label="ID" />
      <el-table-column prop="author" label="Author" />
      <el-table-column prop="title" label="title" />
      <el-table-column prop="content_short" label="content_short" />
      <el-table-column prop="display_time" label="Display_time" />
      <el-table-column prop="pageviews" label="Pageviews" />
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top:10px;"
      background
      layout="total, prev, pager, next"
      :current-page="currentPage"
      :page-size="dataResult.limit"
      :total="dataResult.total"
      @current-change="pageChange"
    />
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([dataResult.items[1], dataResult.items[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableContent',
  props: {
    dataResult: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dataList: [],
      multipleSelection: [], // 选中的项
      currentPage: 1
    }
  },
  created() {},
  mounted() {},
  methods: {
    pageChange(page) {
      this.$emit('pageChange', page)
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    }
  }
}
</script>
