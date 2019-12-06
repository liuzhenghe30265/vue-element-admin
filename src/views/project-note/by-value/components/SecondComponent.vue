/*
 * @Author: liuzhenghe
 * @Email: liuzhenghe@btzh.cn
 * @Date: 2019-12-05 14:01:29
 * @Last Modified by: liuzhenghe
 * @Last Modified time: 2019-12-06 15:41:50
 * @Description: Description
 */
<template>
  <div style="border:1px solid #ebebeb; padding:20px;">
    <h4>子组件2</h4>
    <div>
      vuex 数据：
      <b>{{ this.$store.getters.vuexData }}</b>
    </div>
    <div>
      vue-bus 数据：
      <b>{{ vueBusData }}</b>
    </div>
  </div>
</template>
<script>
export default {
  nam: 'SecondComponent',
  data() {
    return {
      vueBusData: ''
    }
  },
  mounted() {
    this.$bus.on('test-vuebus', data => {
      this.vueBusData = data
    })
  }
}
</script>
