/*
 * @Author: liuzhenghe
 * @Email: liuzhenghe@btzh.cn
 * @Date: 2019-12-04 14:39:37
 * @Last Modified by: liuzhenghe
 * @Last Modified time: 2019-12-04 18:25:52
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
      </el-form-item>
    </el-form>
    <!-- 筛选 E -->
  </div>
</template>

<script>
export default {
  name: 'TableQuery',
  props: {},
  data() {
    return {
      queryParams: {
        name: ''
      } // 查询条件参数
    }
  },
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
    }
  }
}
</script>
