import request, { upload } from '../utils/request';
import config from '../utils/config';

const { api } = config

/**
 * 验证token todo: 验证token
 * @param params
 * @param viewId
 * @returns {Promise<Object>}
 */
export async function checkLogin(params, viewId) {
  return request(`${api}/store/checklogin`, {
    method: 'GET',
    body: {
      pageNum: 1,
      pageSize: 1,
    },
    viewId: 10,
  });
}


/**
 * 登陆
 * @param params
 * @returns {Promise<Object>}
 */
export async function login(params) {
  return request(`${api}/store/login`, {
    method: 'POST',
    body: params,
  });
}


/**
 * 上传
 * @param params
 * @returns {Promise<Object>}
 */
export async function batchUploadOrderImage(params) {
  return request(`${api}/orderManage/batchUploadOrderImage`, {
    method: 'POST',
    body: params,
    viewId: 10,
  });
}
