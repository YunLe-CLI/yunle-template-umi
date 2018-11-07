import _ from 'lodash'
import global from 'global';
import Cookies from 'js-cookie';
import { uploadOrderImage, batchUploadOrderImage, mark, chupiaoQrc, checkLogin, login, orderList } from '../services/api'

const takeLatest = { type: 'takeLatest' };

export default {
  namespace: 'app',
  state: {
    user: {},
  },
  reducers: {
    saveUser(state, { payload = {} }) {
      return {
        ...state,
        user: payload
      }
    }
  },
  effects: {
    checkLogin: [
      function* (action, { put, select, call }) {
        return yield call(checkLogin)
      },
      takeLatest,
    ],
    login: [
      function* ({ payload }, { put, select, call }) {
        const res = yield call(login, {
          username: payload.username,
          password: payload.password,
          origin: 'html',
        })
        const { code, data = {} } = res
        if (!_.isError(res) && code === 200) {
          const { token } = data
          console.log(token, 1111)
          Cookies.set('h5TicketToken', token);
          yield put({
            type: 'saveUser',
            payload: data
          })
        }
        return res;
      },
      takeLatest,
    ],
    logout: [
      function* (action, { put, select, all }) {
        Cookies.set('h5TicketToken', '');
        yield put({
          type: 'saveUser',
          payload: {}
        })
      },
      takeLatest,
    ],
    uploadOrderImage: [
      function* ({ payload = {} }, { put, select, call }) {
        const res = yield call(uploadOrderImage, {
          orderId: payload.orderId,
          file: payload.file
        })
        const { code, data = {} } = res
        if (!_.isError(res) && code === 200) {
          // yield put({
          //   type: 'saveUser',
          //   payload: data
          // })
        }
        return res;
      },
      takeLatest,
    ],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      global['__dispatch__'] = dispatch;
    },
  },
};
