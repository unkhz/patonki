// @flow

export const RUN_EXAMPLE = 'RUN_EXAMPLE';

export function runExample(): ActionType {
  return {
    type: RUN_EXAMPLE,
    payload: {},
    error: {},
  };
}
