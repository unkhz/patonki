// @flow
import React, {Component} from 'react';
import './Example.scss';

export default class Example extends Component {

  render(): React.Element<any> {
    const {content} = this.props;
    return (
      <div className="example">{content}</div>
    );
  }

}
