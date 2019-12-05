/*
 * @Author: liuzhenghe
 * @Email: liuzhenghe@btzh.cn
 * @Date: 2019-12-05 14:01:29
 * @Last Modified by: liuzhenghe
 * @Last Modified time: 2019-12-05 15:02:35
 * @Description: Description
 */
<template>
  <div>
    <h4>子组件2</h4>
    <div>{{ this.$store.getters.vuexData }}</div>
  </div>
</template>
<script>
export default {
  nam: 'SecondComponent'
}
</script>
