import React, { Component, PropTypes, cloneElement } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import { Spin } from 'antd';
import AppActions from './actions';
import './assets/style.less';

class App extends Component {
  state = {
    __data__: fromJS({}),
  };
  static propTypes = {
    state: PropTypes.object,
    actions: PropTypes.object
  };
  componentWillMount() {
    const { transactions, actions } = this.props;
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
    const { children, actions, state } = this.props;
    const { loading, loadingTxt, globalModal } = state.get('app').toJS();
    return (
      <div className="viewport">
        <Spin
          spinning={loading}
          size="large"
          className="viewport" tip={ loadingTxt || 'Loading...'}>
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
