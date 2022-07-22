/**
 * @author YangLing
 * @date 2022/7/22 16:37
 */

import request from '@/utils/request'

// /api
const getTest1 = () => {
  return request({
    url: '/article/label/search',
    method: 'GET',
    basePath: '/api'
  })
}

// /api1
const getTest2 = () => {
  return request({
    url: '/classroom/',
    method: 'GET',
    basePath: '/api1'
  })
}

// 100
const getTest3 = () => {
  return request({
    url: '/classroom/',
    method: 'GET',
    basePath: '/api2'
  })
}

export default {
  getTest1,
  getTest2,
  getTest3
}
