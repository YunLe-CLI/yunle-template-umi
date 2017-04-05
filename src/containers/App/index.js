import React, { Component, PropTypes, cloneElement } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import { Spin } from 'antd';
import AppActions from './actions';
import GlobalModal from '../../components/GlobalModal';
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
	      <GlobalModal
		      info={globalModal}
		      gModalShowApp={actions.gModalShowApp}
		      gModalHideApp={actions.gModalHideApp}
	      />
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
	const actions = {};
	for (let i in AppActions) {
		actions[i] = bindActionCreators({ ...AppActions[i] }, dispatch);
	}
  return {
    actions,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
