export enum storyTypes {
  SET_STORIES = 'SET_STORIES',
}

export interface User {
  id: string;
  karma: number;
}

export interface Story {
  id: string;
  title: string;
  url: string;
  timestamp: number;
  score: number;
  authorId: string;
  user: User;
}

export interface StoryState {
  stories: Story[];
}

interface SetStoriesAction {
  type: typeof storyTypes.SET_STORIES;
  payload: Story[];
}

export type StoryActionTypes = SetStoriesAction;
