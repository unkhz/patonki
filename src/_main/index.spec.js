import {mount, unmount, createRootReducer} from './index';

describe('_main/index', () => {

  it('mounts App to DOM', () => {
    const rootNode = document.createElement('div');
    mount(rootNode);
    assert.equal(rootNode.firstChild.nodeType, 1);
  });

  it('unmounts App from DOM', () => {
    const rootNode = document.createElement('div');
    mount(rootNode);
    unmount(rootNode);
    assert.equal(rootNode.firstChild, undefined);
  });

  describe('createRootReducer', () => {

    const initAction = {
      type: '@@redux/INIT'
    };

    it('creates a reducer', () => {
      const reducer = createRootReducer();
      assert.isFunction(reducer);
      assert.isObject(reducer({}, initAction));
    });

    it('creates a reducer which initializes root state', () => {
      const state = createRootReducer()({}, initAction);
      assert.isObject(state);
    });

    it('creates a reducer which initializes example reducer', () => {
      const state = createRootReducer()({}, initAction);
      assert.isObject(state.example);
    });

  });

});
