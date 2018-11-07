import _ from 'lodash'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import Cookies from 'js-cookie';
import router from 'umi/router';
import { checkLogin } from './services/api'

const persistConfig = {
  key: 'h5Ticket',
  storage,
  whitelist: [
    'app',
  ],
};

const persistEnhancer = ()=>createStore=>(reducer, initialState, enhancer)=>{
  const store = createStore(persistReducer(persistConfig, reducer), initialState, enhancer);
  const persist = persistStore(store);
  return {...store, persist };
};


export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
    extraEnhancers:[
      persistEnhancer()
    ]
  },
};

// render 前做权限校验
export function render(oldRender) {
  // Toast.loading('正在验证权限', 0);
  checkLogin()
    .then((data = {}) => {
      // Toast.hide();
      oldRender();
      // if (!_.isError(data)) {
      //   const { code, success } = data;
      //   if (code === 200 && success === true) {
      //     if (window.location.pathname === '/login') {
      //       router.replace('/');
      //     }
      //   } else {
      //     throw data
      //   }
      // } else {
      //   throw data
      // }
    })
    .catch(() => {
      Cookies.set('h5TicketToken', '');
      router.replace('/login');
    }).finally(() => {
      // Toast.hide()
    })
}

