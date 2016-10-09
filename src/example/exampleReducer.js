// @flow
import {
  UPDATE_EXAMPLE_CONTENT,
} from './exampleActions';

export type ExampleType = {
  content: string
};

const initialState = {
  content: undefined
};

export default function example(state: ExampleType = initialState, action: ActionType): ExampleType {
  switch(action.type) {

    case UPDATE_EXAMPLE_CONTENT: {
      return {
        ...state,
        content: action.payload.content,
      };
    }

  };

  return state;
}
