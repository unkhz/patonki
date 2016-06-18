import rootReducer from './index';

const initAction = {
  type: '@@redux/INIT'
};

describe('rootReducer', () => {

  it('initializes root state', () => {
    const state = rootReducer({}, initAction);
    assert.isObject(state);
  });

  it('initializes example', () => {
    const state = rootReducer({}, initAction);
    assert.isObject(state.example);
  });

});
