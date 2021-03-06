import axios from 'axios'
import { Message } from 'element-ui'
import route from '@/router'

axios.defaults.timeout = 60000

/**
 * 错误提示
 * @param {String} message 提示文字内容
 * @param {Number} duration 提示显示时间
 */
const errorTip = (message = '', duration = 2000) => {
  Message.error({
    message,
    duration
  })
}

/**
 * 状态码响应
 * @param status {Number} http状态码
 * @param content {String} 错误信息
 */
const handleError = (status, content) => {
  switch (status) {
    case 400:
      errorTip(`请求出错 - ${content}`, 2000);
      break;
    case 401:
      // 登录失效
      route.push({name:'login'})
      sessionStorage.removeItem('AUTH_TOKEN')
      errorTip('登录失效，请重新登录', 2000);
      break;
    case 403:
      errorTip('您没有权限访问该接口', 2000);
      break;
    case 404:
      errorTip('请求出错，该接口不存在', 2000);
      break;
    case 405:
      errorTip(`请求出错 - ${content}`, 2000);
      break;
    default:
      errorTip(content, 2000);
      break;
  }
};

axios.interceptors.request.use(
  config => {
    // 请求头添加auth token
    const AUTH_TOKEN = sessionStorage.getItem('AUTH_TOKEN');

    AUTH_TOKEN && (config.headers['Authorization'] = `Bearer ${AUTH_TOKEN}`);

    return config;
  },
  error => Promise.reject(error)
)

/**
 * 响应拦截器
 */
axios.interceptors.response.use(
  response =>
    response.status === 200
      ? Promise.resolve(response.data)
      : Promise.reject(response),
  error => {
    const { response } = error;
    if (response.status < 500) {
      handleError(response.status, response.statusText);
    } else {
      errorTip(response.statusText, 2000);
    }

    return Promise.reject(response);
  }
)

export default axios