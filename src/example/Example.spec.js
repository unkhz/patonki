import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import Example from './Example';

describe('example/Example', () => {

  it('renders without props', () => {
    const wrapper = shallow(<Example />);
    assert.equal(wrapper.find('.example').length, 1);
  });

  it('renders prop value as the text content', () => {
    const props = {
      value: 'something'
    };
    const wrapper = shallow(<Example {...props} />);
    assert.equal(wrapper.find('.example').text(), 'something');
  });

});
