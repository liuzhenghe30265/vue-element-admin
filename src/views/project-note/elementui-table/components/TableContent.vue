<template>
  <div>
    <el-table
      :data="dataList"
      border
      ref="multipleTable"
      tooltip-effect="dark"
      @selection-change="handleSelectionChange"
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="author" label="姓名" width="180"></el-table-column>
      <el-table-column prop="sex" label="性别" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="image" label="头像"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="dataTotal"></el-pagination>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([dataList[1], dataList[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableContent',
  data() {
    return {
      multipleSelection: [] // 选中的项
    }
  },
  props: {
    dataList: {
      type: Array,
      required: true
    },
    dataTotal: {
      type: Number,
      required: true
    }
  },
  created() {
    console.log('------------')
    console.log(this.dataList)
    console.log(this.dataTotal)
  },
  mounted() {},
  methods: {
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
  },
  props: {
    dataList: {
      type: Array,
      required: true
    },
    dataTotal: {
      type: Number,
      required: true
    }
  }
}
</script>