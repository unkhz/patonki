// @flow
export type ExampleType = {
  value: string
};

const initialState = {
  value: 'Hello world!'
};

export default function example(state: ExampleType = initialState, action: ActionType): ExampleType {
  return state;
}
