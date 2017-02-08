import React, { Component, PropTypes, cloneElement } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AppActions from 'actions';
import './style.less';

class App extends Component {
  static propTypes = {
    routing: PropTypes.object,
    actions: PropTypes.object
  };
  componentWillMount() {
    const { transactions, actions } = this.props;
  }

  render() {
    return (
      <div className="viewport">
        { cloneElement(this.props.children, this.props) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { routing, test } = state;
  return {
    test,
    routing,
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
