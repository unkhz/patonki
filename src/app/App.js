// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.scss';

import Example, { actions } from 'src/example';

const {
  updateExampleContent,
} = actions;

export class App extends Component {

  static defaultProps = {
    updateExampleContent: (): any => undefined,
  };

  componentDidMount() {
    this.props.updateExampleContent('Hello world!');
  }

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

export default connect(
  mapStateToProps, { updateExampleContent },
)(App);
