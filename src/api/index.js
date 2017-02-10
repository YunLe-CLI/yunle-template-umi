import 'whatwg-fetch';
import apiConfig from './api.config';

export function checkV2() {
  return fetch(apiConfig.checkV2)
  .then(response => response.text()).then(body => body);
}

export default {
  checkV2,
};
