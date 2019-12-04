/*
 * @Author: liuzhenghe30265
 * @Email: 15901450207@163.com
 * @Date: 2019-12-01 17:05:37
 * @Last Modified by: liuzhenghe
 * @Last Modified time: 2019-12-04 18:23:09
 * @Description: 表格内容
 */
<template>
  <div>
    <el-table
      ref="multipleTable"
      v-loading="listLoading"
      :data="pageDataInfo.data"
      border
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" />
      <el-table-column prop="id" label="ID" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="age" label="Age" />
      <el-table-column prop="gender" label="Gender">
        <template slot-scope="scope">
          <div :class="judgeGenderFun(scope.row.gender)">{{ judgeGenderFun(scope.row.gender) }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="birth" label="Birth" />
      <el-table-column prop="email" label="Email" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="createTime" label="CreateTime" />
      <el-table-column prop="image_uri" label="image_uri">
        <template slot-scope="scope">
          <div class="img_box" style="margin:0 auto;max-width:60px;" @click="opedDialogFun(scope.row.image_uri)">
            <img :src="scope.row.image_uri" width="100%">
          </div>
        </template>
      </el-table-column>
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
      :page-size="pageDataInfo.limit"
      :total="pageDataInfo.total"
      @current-change="pageChange"
    />
    <div style="margin-top: 20px">
      <el-button
        @click="toggleSelection([pageDataInfo.data[1], pageDataInfo.data[2]])"
      >切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
    <!-- 弹窗 -->
    <popup-window :dialog-visible="dialogVisible" :dialog-data="dialogData" />
    <!-- 弹窗 E -->
  </div>
</template>

<script>
import PopupWindow from '../../publicComponents/PopupWindow' // 弹窗
export default {
  name: 'TableContent',
  components: {
    PopupWindow
  },
  props: {
    listLoading: {
      type: Boolean,
      required: true
    },
    pageDataInfo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dataList: [],
      multipleSelection: [], // 选中的项
      currentPage: 1,
      dialogVisible: {
        visible: false
      },
      dialogData: {
        title: ''
      } // 弹窗展示的数据
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 判断性别
    judgeGenderFun(gender) {
      switch (gender) {
        case 1:
          return 'man'
        case 2:
          return 'women'
        default:
          return 'unknown'
      }
    },
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
    },
    // 查看
    handleClick(row) {},
    // 打开弹窗
    opedDialogFun(url) {
      this.dialogVisible.visible = true
      this.dialogData.title = '图片预览'
      this.dialogData.imageUrl = url
    }
  }
}
</script>
