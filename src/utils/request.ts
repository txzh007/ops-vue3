import axios, { AxiosRequestConfig } from 'axios';
import { ElMessage as Message } from 'element-plus';
import { AppConfig } from 'vue';

// 创建axios 实例
const service = axios.create({
  //基础请求头 根据vite写法 引入 .env文件变量
  baseURL: import.meta.env.VITE_APP_BASE_API as string,
  timeout: 5000,
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent

    return config;
  },
  (error) => {
    // do something with request error
    console.error(error); // for debug
    return Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    console.error('err', error); // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  },
);

export interface RequestOptions {
  /** 当前接口权限, 格式：sys:user:add */
  permCode?: string;
  /** 请求成功是提示信息 */
  successMsg?: string;
  /** 请求失败是提示信息 */
  errorMsg?: string;
}
const request = async <T = any>(
  config: AxiosRequestConfig,
  options: RequestOptions = {},
): Promise<BaseApi.Response<T>> => {
  const { successMsg, errorMsg, permCode } = options;
  // if (permCode && !useUserStore().perms.includes(permCode)) {
  //   Message.error('你没有访问该接口的权限，请联系管理员！');
  //   return new Error();
  // }
  try {
    return service.request(config);
  } catch (error: any) {
    return Promise.reject(error);
  }
};

export default request;
