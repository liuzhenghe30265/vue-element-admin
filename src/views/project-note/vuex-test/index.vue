/*
 * @Author: liuzhenghe
 * @Email: liuzhenghe@btzh.cn
 * @Date: 2019-12-05 14:01:50
 * @Last Modified by: liuzhenghe
 * @Last Modified time: 2019-12-05 15:21:20
 * @Description: Description
 */
<template>
  <div>
    <div class="component_box">
      <h4>父组件</h4>
      <div>{{ this.$store.getters.vuexData }}</div>
      <div>
        <el-input v-model="inputValue" style="width:200px;margin:20px 0;" />
      </div>
      <el-button @click="changeDataFun">修改 vuexData</el-button>
      <div class="component_box">
        <first-component />
      </div>
      <div class="component_box">
        <second-component />
      </div>
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
  mounted() {
  },
  methods: {
    changeDataFun() {
      this.$store.dispatch('testVuex/setData', this.inputValue)
    }
  }
}
</script>

<style lang="scss">
.component_box {
  padding: 20px;
  margin: 20px;
  border: 1px solid #dcdcdc;
}
</style>
