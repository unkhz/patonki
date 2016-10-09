import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TestUtils, {Simulate} from 'react-addons-test-utils';
import {assert} from 'chai';
import {spy} from 'sinon';

import ConnectedApp, {App} from './App';

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
