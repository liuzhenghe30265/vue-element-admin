/*
 * @Author: liuzhenghe
 * @Email: liuzhenghe@btzh.cn
 * @Date: 2019-12-05 11:45:23
 * @Last Modified by: liuzhenghe
 * @Last Modified time: 2019-12-05 15:11:20
 * @Description: vuex 测试
 */

const state = {
  logs: [],
  // vuexData: 'testVuex'
  vuexData: localStorage.vuexData // 将数据存储到 localStorage 中，下次打开浏览器数据依旧存在
}

const mutations = {
  SET_DATA: (state, data) => {
    state.vuexData = data
    localStorage.vuexData = data
  }
}

const actions = {
  setData({
    commit
  }, data) {
    commit('SET_DATA', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
