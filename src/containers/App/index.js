import React, { Component, PropTypes, cloneElement } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import AppActions from './actions';

import './assets/style.less';

class App extends Component {
  static propTypes = {
    state: PropTypes.object,
    actions: PropTypes.object
  };
  componentWillMount() {
    const { transactions, actions } = this.props;
  }

  render() {
    const { children, actions, state } = this.props;
    return (
      <div className="viewport">
        <Spin
          spinning={state.app.toJS().loading}
          size="large"
          className="viewport" tip="Loading...">
          { children ? cloneElement(children, { state, actions }) :
            null
          }
        </Spin>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
