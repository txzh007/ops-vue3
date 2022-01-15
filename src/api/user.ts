import request from '@/utils/request';

// 这是一个导出api
export const getUserInfo = (param?: object) =>
  request<any>({
    method: 'get',
    url: '/api/getUserInfo',
  });
