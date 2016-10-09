import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {shallow} from 'enzyme';
import {assert} from 'chai';
import {spy} from 'sinon';

import {App} from './App';
import Example from 'src/example';

describe('app/App', () => {

  it('renders without props', () => {
    const wrapper = shallow(<App />);
    assert.equal(wrapper.find('.app').length, 1);
  });

  it('renders an Example', () => {
    const wrapper = shallow(<App />);
    assert.isTrue(wrapper.contains(<Example />));
  });

});
