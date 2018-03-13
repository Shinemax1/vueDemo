// import Config from '../../config/index'
import login from '../../store/modules/login.js'
import { HOST_CONCIG, KEY_CONFIG, API_ROUTER_CONFIG } from '../config/api-config';
const baseUrl = HOST_CONCIG.host;

export default async (type = 'GET', url = '', data = {}, method = 'fetch') => {
  type = type.toUpperCase();
  url = baseUrl + url;
  let aData = []; // 存储数据
  let sData = ''; // 拼接数据
  for (let attr in data) {
    aData.push(attr + '=' + data[attr]);
  }
  sData = aData.join('&');
  if (type === 'GET') {
    url = url + '&' + sData;
  }
  if (window.fetch && method === 'fetch') {
    let requestConfig = {
      // credentials: 'include', Fetch 请求默认是不带 cookie 的，需要设置 fetch(url, {credentials: 'include'})
      method: type,
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json',
        //'Content-Type': 'text/html;charset=utf-8',
        'token':login.state.token,
        'authId': login.state.userId
        //;charset=UTF-8
        //'Access-Control-Allow-Origin': '*',
        //'Access-Control-Allow-Headers': 'Authorization'
      },
      mode: 'cors'
      // cache: 'force-cache' 表示fetch请求不顾一切的依赖缓存, 即使缓存过期了, 它依然从缓存中读取. 除非没有任何缓存, 那么它将发送一个正常的request.
    };
    // console.log(data);
    if (type === 'POST' || type === 'PUT') {
      // url = url + '?v=' + new Date().getTime() + Math.random().toString(36).substr(2)
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data)
      });
    }
    // return await fetch(url, requestConfig)
    try {
      var response = await fetch(url, requestConfig);
      var responseJson = await response.json();
    } catch (error) {
      throw new Error(error);
    }
    return responseJson;
  } else {
    return new Promise((resolve, reject) => {
      let requestObj;
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        // requestObj = new ActiveXObject
      }
      // 'application/x-www-form-urlencoded'
      requestObj.open(type, url, true);
      requestObj.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
      requestObj.send(JSON.stringify(data));

      requestObj.onreadystatechange = () => {
        if (requestObj.readyState === 4) {
          if (requestObj.status === 200) {
            let obj = requestObj.response;
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj);
            }
            resolve(obj);
          } else {
            reject(requestObj);
          }
        }
      };
    });
  }
};
