import http from '../http'

const fn = api => {
  let result = {};
  for (let o in api) {
    let {
      path,
      method
    } = api[o]
    result[o] = obj => {
      let { params, body, onUploadProgress } = obj
      if(method == "get") {
        return http[method](path, {params, onUploadProgress:onUploadProgress})
      }else{
        return http[method](path, body)
      }
    }
  }
  return result
}

export default fn