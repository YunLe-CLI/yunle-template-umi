import React, { Component, PropTypes } from 'react';
import { is, fromJS } from 'immutable';
import { Card, Alert, Input, Button } from 'antd';

import './assets/style.less';

export default class Login extends Component {
  state = {
    __data__: fromJS({}),
  };
  static propTypes = {
    routing: PropTypes.object,
    actions: PropTypes.object
  };
  constructor(props) {
  	super(props);
	  this.changeIpt = this.changeIpt.bind(this);
	  this.handleLogin = this.handleLogin.bind(this);
	  this.handleLogout = this.handleLogout.bind(this);
  }
  shouldComponentUpdate(nextProps = {}, nextState = {}) {
    const thisProps = this.props || {}, thisState = this.state || {};
    if (!is(thisProps.state, nextProps.state)) {
      return true;
    }
    if (!is(thisState.__data__, nextState.__data__)) {
      return true;
    }
    return false;
  }
  render() {
  	const { loginForm, loginUser } = this.props.state.get('login').toJS();
    return (
      <div id="components-form-demo-normal-login">
	      {
	      	loginUser.name ? (
	      		<div className="success">
				      <Alert message="登录成功！" type="success" showIcon />
				      <Card className="box" style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
					      <div className="custom-image">
						      <img style={{minHeight: 100}} alt="example" width="100%" src={loginUser.avatar} />
					      </div>
					      <div className="custom-card">
						      <h3 className="custom-title">
							      昵称：{loginUser.name}
							      <Button
								      className="custom-btn"
								      loading={loginForm.isFetching}
								      type="danger"
								      onClick={this.handleLogout}>退出</Button>
						      </h3>
						      <p>https://github.com/hexiao-o</p>
					      </div>
				      </Card>
			      </div>
		      ) : (
			      <div className="form-wrap">
				      <div className="form-ipt">
					      <Input
						      onChange={(e) => this.changeIpt(e.target.value, 'name')}
						      size="large" placeholder="name"
					      />
				      </div>
				      <div className="form-ipt">
					      <Input
						      onChange={(e) => this.changeIpt(e.target.value, 'pwd')}
						      size="large" placeholder="password"
					      />
				      </div>
				      <div className="form-ipt">
					      <Button
						      loading={loginForm.isFetching}
						      onClick={this.handleLogin}>test</Button>
				      </div>
			      </div>
		      )
	      }
      </div>
    );
  }
	changeIpt(v, k) {
		const {
			actions: { setIptLogin },
		} = this.props;
		setIptLogin({
			v,
			k,
		});
	}
  handleLogin() {
  	const {
  		state,
  		actions: { handleLogin },
	  } = this.props;
	  const { loginForm } = state.get('login').toJS();
	  handleLogin(loginForm);
  }
	handleLogout() {
		const {
			state,
			actions: { handleLogout },
		} = this.props;
		const { loginForm } = state.get('login').toJS();
		handleLogout(loginForm);
	}
}
