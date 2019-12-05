/*
 * @Author: liuzhenghe
 * @Email: liuzhenghe@btzh.cn
 * @Date: 2019-12-05 14:00:22
 * @Last Modified by:   liuzhenghe
 * @Last Modified time: 2019-12-05 14:00:22
 * @Description: vuex 测试
 */

<template>
  <div>
    <h4>子组件1</h4>
    <div>{{ this.$store.getters.vuexData }}</div>
  </div>
</template>
<script>
export default {
  nam: 'FirstComponent'
}
</script>
