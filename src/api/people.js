/*
 * @Author: liuzhenghe
 * @Email: liuzhenghe@btzh.cn
 * @Date: 2019-12-03 18:40:04
 * @Last Modified by: liuzhenghe
 * @Last Modified time: 2019-12-04 18:27:34
 * @Description: people 数据接口
 */

import request from '@/utils/request'

export function peopleList(query) {
  return request({
    url: '/people/list',
    method: 'get',
    params: query
  })
}

export function peopleDetails(id) {
  return request({
    url: '/article/details',
    method: 'get',
    params: { id }
  })
}

export function peoplePv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createPeople(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function updatePeople(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}
