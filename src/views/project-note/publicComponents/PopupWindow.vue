/*
 * @Author: liuzhenghe
 * @Email: liuzhenghe@btzh.cn
 * @Date: 2019-12-04 18:10:04
 * @Last Modified by: liuzhenghe
 * @Last Modified time: 2019-12-09 17:12:32
 * @Description: 公用弹窗组件
 */

<template>
  <div>
    <!-- 弹窗 -->
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible">
      <!-- 表格图片预览 -->
      <div v-if="dialogInfo.source === 'previewPicture'">
        <img :src="dialogInfo.data" />
      </div>
      <!-- 表格图片预览 E -->

      <!-- 添加数据 -->
      <div v-if="dialogInfo.source === 'addData'">add</div>
      <!-- 添加数据 E -->
    </el-dialog>
    <!-- 弹窗 E -->
  </div>
</template>
<script>
export default {
  name: 'PopupWindow',
  props: {
    // 弹窗信息
    dialogInfo: {
      type: Object,
      required: true
    }
  }
}
</script>
