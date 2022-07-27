/**
 * @author YangLing
 * @date 2022/7/27 16:07
 */

import request from '@/utils/request'

const getAdvertList = (data) => {
  return request({
    url: '/article/advert/search',
    method: 'POST',
    data
  })
}

export default {
  getAdvertList
}
