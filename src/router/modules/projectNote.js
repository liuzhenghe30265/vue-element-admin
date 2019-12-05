/*
 * @Author: liuzhenghe
 * @Email: liuzhenghe@btzh.cn
 * @Date: 2019-11-27 10:46:55
 * @Last Modified by: liuzhenghe
 * @Last Modified time: 2019-12-05 14:13:47
 * @Description: 项目笔记路由配置
 */
/** When your routing table is too long, you can split it into small modules**/
import Layout from '@/layout'

const projectNote = {
  path: '/project-note',
  component: Layout,
  redirect: '/project-note',
  name: 'project-note',
  meta: {
    title: '项目笔记',
    icon: 'chart'
  },
  children: [
    {
      path: '/elementui-table',
      component: () => import('@/views/project-note/elementui-table/index'),
      name: 'elementui-table',
      meta: { title: 'element-ui 表格', noCache: true }
      // children: [
      //   {
      //     path: 'elementui-table111',
      //     component: () => import('@/views/project-note/elementui-table/index'),
      //     name: 'element-ui 表格',
      //     meta: { title: 'element-ui 表格', noCache: true }
      //   },
      //   {
      //     path: 'elementui-table222',
      //     component: () => import('@/views/project-note/elementui-table/index'),
      //     name: 'element-ui 表格',
      //     meta: { title: 'element-ui 表格', noCache: true }
      //   }
      // ]
    },
    {
      path: '/vuex-test',
      component: () => import('@/views/project-note/vuex-test/index.vue'),
      name: 'vuex-test',
      meta: { title: 'vuex-test', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/charts/line'),
      name: 'LineChart111',
      meta: { title: 'lineChart', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: 'MixChart111',
      meta: { title: 'mixChart', noCache: true }
    }
  ]
}

export default projectNote
