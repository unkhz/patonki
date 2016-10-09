// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.scss';

import Example from 'src/example';

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
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
