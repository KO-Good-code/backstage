import fn from './http'
import {url, baseUrl, deployUrl, fundUrl } from './url'

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
  getProjectList: {
    path: `${deployUrl}list`,
    method: 'get'
  },
  // 项目打包
  BaleProject: {
    path: `${deployUrl}project`,
    method: 'post'
  },
  // 更新配置文件
  UpProjectConfig: {
    path: `${deployUrl}projectConfig`,
    method: 'put'
  },
  // 获取基金列表数据
  getFundList: {
    path: `${fundUrl}fundList`,
    method: 'get'
  },
  // 添加新的关注基金
  addFundList: {
    path: `${fundUrl}fundCode`,
    method: 'post'
  },
  // 刷新关注基金
  upFundList: {
    path: `${fundUrl}fundList`,
    method: 'put'
  }
}

export default fn(api)