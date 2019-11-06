import fn from './http'
import {url, baseUrl} from './url'

const api = {
  login: {
    path: `${url}login`,
    method: 'post'
  },
  getPost: {
    path: `${baseUrl}post`,
    method: 'get'
  },
  getPostList: {
    path: `${baseUrl}home`,
    method: 'get'
  },
  insertPost: {
    path: `${url}post`,
    method: 'post'
  },
  updatePost: {
    path: `${url}post`,
    method: 'put'
  },
  delPost: {
    path: `${url}post`,
    method: 'delete'
  },
}

export default fn(api)