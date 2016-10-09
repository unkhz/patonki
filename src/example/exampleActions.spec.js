import * as actions from './exampleActions';

describe('example/actions', () => {

  describe('runExample', () => {
    assert.deepEqual(actions.runExample(), {
      type: actions.RUN_EXAMPLE,
      payload: {},
      error: {},
    });
  });

});
