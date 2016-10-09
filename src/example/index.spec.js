import * as pi from './index';

describe('example/index', () => {

  it('exports the main component in the public interface', () => {
    assert.isFunction(pi.default);
  });

  it('exports the main reducer in the public interface', () => {
    assert.isFunction(pi.reducer);
    assert.isObject(pi.reducer({}, {type: 'init'}));
  });

  it('exports actions in the public interface', () => {
    assert.isObject(pi.actions);
  });

});
