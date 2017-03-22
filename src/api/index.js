/* global someFunction fetch:true */
import 'whatwg-fetch';
import apiConfig from './api.config';

/**
 * [login 登录]
 * @param  {[Object]} data [用户名&&密码]
 * @return {[promise]}      [promise]
 */
export function login(data) {
  const query = JSON.stringify(data);
  return fetch(apiConfig.login, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: query,
  }).then(response => response.text()).then(body => body);
}

export default {
  login,
};
