import axios from 'axios'
// import qs from "qs";
// import store from '@/store'
// import { Message } from 'element-ui'
// import {getCookie} from '@/utils/cookie'
const CancelToken = axios.CancelToken
var cancel;
var service=axios.create({
    baseURL:process.env.BASE_API,
    timeout:50000
})
 //添加请求拦截器
 service.interceptors.request.use(function(config){
    //  在大宋请求之前所做的事情
    // config.headers.Authorization = sessionStorage.getItem('token')===null?"":sessionStorage.getItem('token');
    // if(store.getters.token){
    //     config.headers['TOKEN']=getCookie('TOKEN')
    // }
    return config
},function(error){
    // 对错误的请求所做的事情
    return Promise.reject(error)
})
//添加响应拦截器
axios.interceptors.response.use(function(response){
   /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
   */
  // response => {
  //   const res = response.data
  //   if (res.code !== 20000) {
  //     })
  //     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //       }).then(() => {
  //         })
  //       })
  //     }
  //     return Promise.reject('error')
  //   } else {
  //     return response.data
  //   }
  // },
    return response
},function(error){
    console.log('err'+error)
    // Message({
    //     Message:error.message,
    //     type:'error',
    //     duration:5*1000 
    // })
    return Promise.reject(error)
})

function checkStatus(response) {
    // loading
    // 如果http状态码正常，则直接返回数据
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
      return response.data
      // 如果不需要除了data之外的数据，可以直接 return response.data
    }
    let err = {
      status: -404,
      msg: '网络异常'
    };
    if (response && response.status) {
      switch (response.status) {
        case 400:
          err.msg = '错误请求'
          break;
        case 401:
          err.msg = '未授权，请重新登录'
          break;
        case 403:
          err.msg = response.data.Msg
            ? `错误：${response.data.Msg},请重新登录`
            : '拒绝访问';
          setTimeout(() => {
            // Win10_child.close();
            window.location.replace('/#/');
          }, 3000);
          break;
        case 404:
          err.msg = '请求错误,未找到该资源'
          break;
        case 405:
          err.msg = '请求方法未允许'
          break;
        case 408:
          err.msg = '请求超时'
          break;
        case 500:
          err.msg = '服务器端出错'
          break;
        case 501:
          err.msg = '网络未实现'
          break;
        case 502:
          err.msg = '网络错误'
          break;
        case 503:
          err.msg = '服务不可用'
          break;
        case 504:
          err.msg = '网络超时'
          break;
        case 505:
          err.msg = 'http版本不支持该请求'
          break;
        default:
          err.msg = `连接错误${err.response.status}`
      }
    } else {
      err.msg = "连接到服务器失败"
    }
    // 异常状态下，把错误信息返回去
    return err;
  }

  function checkCode(res) {
    // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
    if (res.status === 404) {
      // alert(res.msg)
    }
    if (res.data && (!res.data.success)) {
      // alert(res.data.error_msg)
    }
    return res
  }
export default{
    //get请求
    // get(url,param){
    //     //promise示例
    //     //   axios.post('/user', {
    //     //     firstName: 'Fred',
    //     //     lastName: 'Flintstone'
    //     //   })
    //     //   .then(function (response) {
    //     //     console.log(response);
    //     //   })
    //     //   .catch(function (error) {
    //     //     console.log(error);
    //     //   }); 
    //     // return new Promise((resolve,reject)=>{
    //         service({
    //             method:'get',
    //             url,
    //             params:param,
    //             cancelToken:new CancelToken(c=>{
    //                 cancel=c
    //             })
    //         }).then(res=>{  //axios返回的是一个promise对象
    //             return checkStatus(res)
    //             // resolve(res.data)  //resolve在promise执行器内部 
    //         }).then(err=>{
    //             console.log(err,'异常')
    //         })

    //     // })
    // },
    get (url, params) {
        return axios({
            method: 'get',
            baseURL: process.env.BASE_URL,
            url,
            params,
            // timeout: 10000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then((response) => {
            return checkStatus(response)
        })
    },
    // get (url, params) {
    //     return axios({
    //       method: 'get',
    //       url,
    //       params, // get 请求时带的参数
    //       headers: {
    //         'X-Requested-With': 'XMLHttpRequest'
    //       },
    //       cancelToken:new CancelToken(c=>{
    //         cancel=c
    //      })
    //     }).then(
    //       (response) => {
    //         return checkStatus(response)
    //       }
    //     ).then(
    //       (res) => {
    //         return checkCode(res)
    //       }
    //     )
    //   },
    //post请求
    // post(url,param){
    //     return new Promise((resolve,reject)=>{
    //         service({
    //             method:'post',
    //             url,
    //             data:param,
    //             cancelToken:new CancelToken(c=>{
    //                 cancel=c
    //             })
    //         }).then(res=>{
    //             resolve(res.data)
    //         }).catch(err=>{
    //             console.log(err,'异常')
    //         })
    //     })
    // },
    post (url, data) {
        return axios({
          method: 'post',
          url,
          data: data,
        //   qs.stringify(data)
        //   timeout: 10000,
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        }).then(
          (response) => {
            return checkStatus(response)
          }
        ).then(
          (res) => {
            return checkCode(res)
          }
        )
      },
}