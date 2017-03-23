import { fromJS } from 'immutable';
import LOGIN_TYPE from './constants';

const {
	SETIPT_LOGIN,
	LOGIN_REQUESTED_EDIT,
	LOGIN_SUCCEEDED_EDIT,
	LOGIN_FAILED_EDIT,
	LOGOUT_REQUESTED_EDIT,
} = LOGIN_TYPE;

const initialState = fromJS({
  text: false,
  loginForm: {
  	isFetching: false,
  	name: '',
	  pwd: '',
  },
  loginUser: {
    name: '',
  },
});

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTED_EDIT: {
      return state
	      .setIn(['loginForm', 'isFetching'], true);
    }
	  case LOGIN_SUCCEEDED_EDIT: {
	  	const { data = {} } = action.result || {};
		  return state
			  .merge({
				  loginForm: {
					  isFetching: false,
					  name: '',
					  pwd: '',
				  },
				  loginUser: {
					  name: data.nickname,
					  avatar: data.avatar,
				  },
			  });
	  }
	  case LOGIN_FAILED_EDIT: {
		  return state
			  .setIn(['loginForm', 'isFetching'], false)
			  .setIn(['text'], action.text);
	  }
	  case LOGOUT_REQUESTED_EDIT: {
		  return state
			  .merge({
				  loginForm: {
					  isFetching: false,
					  name: '',
					  pwd: '',
				  },
				  loginUser: {
					  name: '',
					  avatar: '',
				  },
			  });
	  }
	  case SETIPT_LOGIN: {
	  	return state
			  .setIn(['loginForm', action.k], action.v);
	  }
    default: {
      return state;
    }
  }
};
