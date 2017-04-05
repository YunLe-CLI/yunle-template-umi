import React, { Component, PropTypes, cloneElement } from 'react';
import { is, fromJS } from 'immutable';
import { Link } from 'react-router';

import './assets/style.less';
import { Card, Col, Row } from 'antd';

export default class NotFindPage extends Component {
  state = {
    __data__: fromJS({}),
    collapsed: false,
  };
  static propTypes = {
    routing: PropTypes.object,
    actions: PropTypes.object
  };
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
    return (
      <div className="NotFindPage">
	      <div className="n" />
        <Link to="/">返回首页</Link>
      </div>
    );
  }
}
