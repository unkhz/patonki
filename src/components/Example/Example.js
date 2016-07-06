// @flow
import React, {Component} from 'react';
import './Example.scss';

export default class Example extends Component {

  render(): React.Element<any> {
    const {value} = this.props;
    return (
      <div className="example">{value}</div>
    );
  }

}
