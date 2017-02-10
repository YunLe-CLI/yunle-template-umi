import React, { Component, PropTypes, cloneElement } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router';
import { Scrollbars } from 'react-custom-scrollbars';
import './assets/style.less';

class Home extends Component {
  static propTypes = {
    routing: PropTypes.object,
    state: PropTypes.object,
    actions: PropTypes.object
  };
  render() {
    const { children, actions, state, routing  } = this.props;
    const test = state.test.toJS();
    return (
      <div id="components-layout-demo-side">
        <Button onClick={() => actions.testClick('saga')} type="primary">{test.text}</Button>
        {JSON.stringify(test.data)}
      </div>
    );
  }
}

export default Home;
