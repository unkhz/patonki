import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils, {Simulate} from 'react-addons-test-utils';
import Example from 'components/Example';

function getNode(element: React.Element): Node {
  const node = TestUtils.renderIntoDocument(
    element
  );
  return ReactDOM.findDOMNode(node);
}

describe('Example', () => {

  it('renders', () => {
    const props = {
      value: 1
    };
    const node = getNode(<Example {...props} />);
    assert.equal(node.className, 'example');
  });

});
