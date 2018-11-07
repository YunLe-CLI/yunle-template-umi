import fetch from 'dva/fetch';
import global from 'global';
import _ from 'lodash';
import Cookies from 'js-cookie'
import router from 'umi/router';
import { Toast, Modal } from 'antd-mobile';
import { UploadRequest } from '@navjobs/upload'; // eslint-disable-line


const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  let _url = url;
  const defaultOptions = {
    credentials: 'include',
      headers: {
        token:  Cookies.get('h5TicketToken') || '',
        viewId: options.viewId,
        operate: 'manage',
      }
  };
  const newOptions = { ...defaultOptions, ...options };
  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        ...newOptions.headers,
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        ...newOptions.headers,
        Accept: 'application/json',
      };
    }
  }

  if (newOptions.method === 'GET') {
    const paramsArray = []
    if (newOptions.body) {
      Object.keys(newOptions.body).forEach(key => paramsArray.push(`${key}=${_.isObject(newOptions.body[key]) ? JSON.stringify(newOptions.body[key]) : newOptions.body[key]}`))
      if (_url.search(/\?/) === -1) {
        _url += `?${paramsArray.join('&')}`
      } else {
        _url += `&${paramsArray.join('&')}`
      }
      delete newOptions.body
    }
  }

  if (newOptions.method === 'UPLOAD') {
    newOptions.method = 'POST';
    delete newOptions.credentials;
    newOptions.headers = {
      ...newOptions.headers,
      'Content-Type': 'multipart/form-data',
    };
    const data = new FormData()
    newOptions.body.files.forEach((item, index) => {
      data.append(`file`, item);
    });
    newOptions.body = data
    console.log(newOptions, data.values())
  }

  return fetch(_url, newOptions)
    .then(checkStatus)
    .then(response => {
      if (newOptions.method === 'DELETE' || response.status === 204) {
        return response.text();
      }
      return response.json();
    })
    .then((json) => {
      console.log(' ')
      console.log('================== fetch start ======================')
      console.log(' ')
      console.info(_url)
      console.log(' ')
      console.log(newOptions)
      console.log(json)
      console.log(' ')
      console.log('================== fetch end  ======================')
      console.log(' ')
      return json
    })
    .then((json) => {
      if (json && json.code === 401) {
        Modal.alert(
          '用户失效',
          '请重新登录',
          [
            {
              text: '知道了',
              onPress: () => {
                global.__dispatch__({
                  type: 'logout'
                }).finally(() => {
                  router.replace({
                    pathname: '/login',
                  })
                })
              }
            }
          ]
        );
        Toast.hide();
      }
      return json
    })
    .catch(e => {
      // const { dispatch } = store;
      const status = e.name;
      if (status === 401) {
        return e;
      }
      if (status === 403) {
        return e;
      }
      if (status <= 504 && status >= 500) {
        return e;
      }
      if (status >= 404 && status < 422) {
        return e;
      }
      return e
    });
}

export function upload(url, options) {
  const defaultOptions = {
    // credentials: 'include',
    headers: {
      // 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryZqg5weVAlrlngvbN',
      token:  Cookies.get('h5TicketToken') || '',
      viewId: options.viewId,
      operate: 'manage',
    }
  };
  return  UploadRequest(
    {
      request: {
        url, //same as above request object
        headers: defaultOptions.headers,
        fileName: 'file',
      },
      files: [options.body], //files array
      progress: options.onProgress ? options.onProgress : value => console.log('progress!', value)
      // progress: value => console.log('progress!', value)
    }
  )
    .then(checkStatus)
    .then(({ response }) => {
      return response;
    })
    .then((json) => {
      console.log(' ')
      console.log('================== fetch start ======================')
      console.log(' ')
      console.info(url)
      console.log(' ')
      console.log(defaultOptions)
      console.log(json)
      console.log(' ')
      console.log('================== fetch end  ======================')
      console.log(' ')
      return json
    })
    .then((json) => {
      if (json && json.code === 401) {
        Modal.alert(
          '用户失效',
          '请重新登录',
          [
            {
              text: '知道了',
              onPress: () => {
                global.__dispatch__({
                  type: 'logout'
                }).finally(() => {
                  router.replace({
                    pathname: '/login',
                  })
                })
              }
            }
          ]
        );
        Toast.hide();
      }
      return json
    })
    .catch(e => {
      // const { dispatch } = store;
      const status = e.name;
      if (status === 401) {
        return e;
      }
      if (status === 403) {
        return e;
      }
      if (status <= 504 && status >= 500) {
        return e;
      }
      if (status >= 404 && status < 422) {
        return e;
      }
      return e
    });
}
