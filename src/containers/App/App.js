// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as actions from 'actions/Actions';
import Example from 'components/Example';
import { connect } from 'react-redux';
import './App.scss';


export class App extends Component {

  static defaultProps = {
  };

  render(): React.Element<any> {
    const { example } = this.props;
    return (
      <div className="app">
        <Example {...example} />
      </div>
    );
  }
}

function mapStateToProps(state: Object): Object {
  return state;
}

function mapDispatchToProps(dispatch: Function): Object {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
