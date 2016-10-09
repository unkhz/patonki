import * as actions from './exampleActions';

describe('example/actions', () => {

  describe('updateExampleContent', () => {
    assert.deepEqual(actions.updateExampleContent('some content'), {
      type: actions.UPDATE_EXAMPLE_CONTENT,
      payload: {
        content: 'some content'
      },
      error: {},
    });
  });

});
