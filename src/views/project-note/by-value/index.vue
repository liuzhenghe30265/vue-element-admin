/*
 * @Author: liuzhenghe
 * @Email: liuzhenghe@btzh.cn
 * @Date: 2019-12-05 14:01:50
 * @Last Modified by: liuzhenghe
 * @Last Modified time: 2019-12-06 15:56:19
 * @Description: Description
 */
<template>
  <div style="padding:20px;">
    <div style="border:1px solid #ebebeb; padding:20px;">
      <h4>父组件</h4>
      <div>
        vuex 数据：
        <b>{{ this.$store.getters.vuexData }}</b>
      </div>
      <div style="margin: 20px 0;">
        <el-input v-model="inputValue" style="width: 150px;" />
        <el-button type="primary" @click="changeDataFun">修改 vuexData</el-button>
      </div>

      <first-component />
      <second-component />
    </div>
  </div>
</template>
<script>
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
export default {
  name: 'FatherComponent',
  components: {
    FirstComponent,
    SecondComponent
  },
  data() {
    return {
      inputValue: ''
    }
  },
  mounted() {},
  methods: {
    changeDataFun() {
      this.$store.dispatch('testVuex/setData', this.inputValue)
    }
  }
}
</script>

<style lang="scss">
</style>
