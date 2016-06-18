import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils, {Simulate} from 'react-addons-test-utils';
import ConnectedApp, {App} from 'containers/App';
import {createWithMiddleware} from 'store';
import {Provider} from 'react-redux';
import {assert} from 'chai';
import {spy} from 'sinon';

function getNode(element: React.Element): Node {
  const node = TestUtils.renderIntoDocument(
    element
  );
  return ReactDOM.findDOMNode(node);
}

describe('App', () => {

  it('renders without props', () => {
    const node = getNode(<App />);
    assert.equal(node.nodeType, 1);
  });

});
