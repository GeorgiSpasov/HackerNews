import {StoryState, StoryActionTypes, storyTypes} from './storyTypes';

const initialState: StoryState = {
  stories: [],
};

export function storyReducer(
  state = initialState,
  action: StoryActionTypes,
): StoryState {
  switch (action.type) {
    case storyTypes.SET_STORIES: {
      return {
        ...state,
        stories: action.payload,
      };
    }
    default:
      return state;
  }
}
