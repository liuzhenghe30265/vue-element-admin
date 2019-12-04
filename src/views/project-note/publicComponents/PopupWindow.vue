/*
 * @Author: liuzhenghe
 * @Email: liuzhenghe@btzh.cn
 * @Date: 2019-12-04 18:10:04
 * @Last Modified by:   liuzhenghe
 * @Last Modified time: 2019-12-04 18:10:04
 * @Description: 公用弹窗组件
 */

<template>
  <div>
    <!-- 弹窗 -->
    <el-dialog :title="dialogData.title" :visible.sync="dialogVisible.visible">
      <div>
        <img :src="dialogData.imageUrl">
      </div>
    </el-dialog>
    <!-- 弹窗 E -->
  </div>
</template>
<script>
export default {
  name: 'PopupWindow',
  props: {
    dialogVisible: {
      type: Object,
      required: true
    },
    dialogData: {
      type: Object,
      required: true
    }
  }
}
</script>
