import axios from 'axios';

let BASE_API = 'http://m.ctrip.com/restapi/soa2/';

let head = {
    "head": {
           "syscode": "09",
           "lang": "01",
           "auth": null,
           "cid": "",
           "ctok": "",
           "cver": "1.0",
           "sid": "8888",
           "extension": [{
               "name": "protocal",
               "value": "http"
           }]
        },
      "sf": "app",
      "chtype": "2", //渠道ID
      "pttype": "17", //产品形态
      "biztype": "33", //业务形态
      "wlver": "0.1216"
  };

// 创建axios实例
let service = axios.create({
  baseURL: BASE_API, // api的base_url
  data: head,
  timeout: 5000                  // 请求超时时间
});


service.defaults.headers.post['Content-Type'] = 'application/x-json;charset=UTF-8';

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    let res = response.data;
    delete res['ResponseStatus'];
    delete res['soajaon']
    if(res.rencode == "200" && res.issuccess == "1"){
      return res;
    }else{
      return Promise.reject(res);
    }
    
  }, function (error) {
    alert("error")
    return Promise.reject(error);
  });

// export default service;

export function fetch(url, data){
  return new Promise((resolve, reject) => {
    service.post(url, data).then(response => {
      resolve(response);
    },err => {
      reject(err);
    }).catch((error) => {
      reject(error);
    })
  })
} 