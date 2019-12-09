/*
 * @Author: liuzhenghe
 * @Email: liuzhenghe@btzh.cn
 * @Date: 2019-12-04 14:39:37
 * @Last Modified by: liuzhenghe
 * @Last Modified time: 2019-12-09 17:07:10
 * @Description: 表格筛选
 */

<template>
  <div>
    <!-- 筛选 -->
    <el-form ref="queryParams" :inline="true" :model="queryParams" class="demo-form-inline">
      <el-form-item label="Name" prop="name">
        <el-input v-model="queryParams.name" placeholder="Name" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onQueryFun">查询</el-button>
        <el-button @click="resetForm('queryParams')">重置</el-button>
        <el-button @click="addData()">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 筛选 E -->
    <!-- 新增弹窗 -->
    <popup-window :dialog-info="dialogInfo" />
    <!-- 新增弹窗 E -->
  </div>
</template>

<script>
import PopupWindow from '../../publicComponents/PopupWindow' // 弹窗
export default {
  name: 'TableQuery',
  components: {
    PopupWindow
  },
  props: {},
  data() {
    return {
      // 查询条件参数
      queryParams: {
        name: ''
      },
      newVueBusData: '',
      // 弹窗信息
      dialogInfo: {
        visible: false,
        title: ''
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 筛选
    onQueryFun() {
      const obj = Object.assign({}, this.queryParams)
      this.$emit('onQuery', obj)
    },
    // 重置
    resetForm(formName) {
      // 需要给 el-form-item 中的 prop 绑定值才可以重置输入的内容
      this.$refs[formName].resetFields()
      this.onQueryFun()
    },
    // 新增
    addData() {
      this.dialogInfo.visible = true
      this.dialogInfo.title = '新增'
      this.dialogInfo.source = 'addData'
    }
  }
}
</script>
