// @flow

export const UPDATE_EXAMPLE_CONTENT = 'UPDATE_EXAMPLE_CONTENT';

export function updateExampleContent(content: string): ActionType {
  return {
    type: UPDATE_EXAMPLE_CONTENT,
    payload: {
      content,
    },
    error: {},
  };
}
