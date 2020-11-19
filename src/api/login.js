import request from '@/utils/request'

// 佔成列表
export function login(data) {
  return request({
    url: '/V1/Account/WebLogin',
    method: 'post',
    data
  })
}
