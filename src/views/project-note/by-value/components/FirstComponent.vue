/*
 * @Author: liuzhenghe
 * @Email: liuzhenghe@btzh.cn
 * @Date: 2019-12-05 14:00:22
 * @Last Modified by: liuzhenghe
 * @Last Modified time: 2019-12-06 15:43:43
 * @Description: vuex 测试
 */

<template>
  <div style="border:1px solid #ebebeb; padding:20px;">
    <h4>子组件1</h4>
    <div>
      vuex 数据：
      <b>{{ this.$store.getters.vuexData }}</b>
    </div>
    <div style="margin:20px 0;">
      vue-bus 数据：
      <b>{{ vueBusData }}</b>
      <el-button type="primary" @click="passData">向 子组件2 传递数据</el-button>
    </div>
  </div>
</template>
<script>
export default {
  nam: 'FirstComponent',
  data() {
    return {
      vueBusData: 'vueBusData'
    }
  },
  methods: {
    passData() {
      this.$bus.emit('test-vuebus', this.vueBusData)
    }
  }
}
</script>
