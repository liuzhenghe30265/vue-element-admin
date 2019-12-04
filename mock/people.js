/*
 * @Author: liuzhenghe
 * @Email: liuzhenghe@btzh.cn
 * @Date: 2019-12-03 18:40:52
 * @Last Modified by: liuzhenghe
 * @Last Modified time: 2019-12-04 18:15:09
 * @Description: people 数据模拟
 */

import Mock from 'mockjs'

const List = []
const count = 100

// const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
// const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    name: '@name',
    age: '@integer(18, 70)',
    gender: '@integer(1, 2)',
    birth: '@datetime("yyyy-MM-dd")',
    email: '@email',
    // address: '@province' + '@city' + '@county',
    address: '@title(3, 5)',
    createTime: '@datetime("yyyy-MM-dd")',
    image_uri: Mock.Random.image('@integer(300, 400)x@integer(300, 400)', '#1890FF', '#fff', '@word')
  }))
}

export default [
  {
    url: '/people/list',
    type: 'get',
    response: config => {
      const { name, page = 1, limit = 20, sort } = config.query

      // 筛选条件
      let mockList = List.filter(item => {
        if (name && item.name.indexOf(name) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/people/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article
          }
        }
      }
    }
  },

  {
    url: '/people/pv',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: 'PC', pv: 1024 },
            { key: 'mobile', pv: 1024 },
            { key: 'ios', pv: 1024 },
            { key: 'android', pv: 1024 }
          ]
        }
      }
    }
  },

  {
    url: '/people/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/people/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

