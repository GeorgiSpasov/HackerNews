import {Dispatch} from 'redux';
import {StoryActionTypes, storyTypes, Story} from './storyTypes';
import NOTIFICATION from '../../constants/notification';
import {NotificationActionTypes} from '../notification/notificationTypes';
import {triggerNotificationAction} from '../notification/notificationActions';
import {LoaderActionTypes} from '../loader/loaderTypes';
import {showLoaderAction, hideLoaderAction} from '../loader/loaderActions';
import storyService from '../../services/storyService';

export function setStoriesAction(stories: Story[]): StoryActionTypes {
  return {
    type: storyTypes.SET_STORIES,
    payload: stories,
  };
}

export const loadStories = (count: number) => async (
  dispatch: Dispatch<
    StoryActionTypes | LoaderActionTypes | NotificationActionTypes
  >,
) => {
  try {
    dispatch(showLoaderAction());
    const randomStories = await storyService.loadTopStories(count);
    dispatch(setStoriesAction(randomStories));
  } catch (err) {
    dispatch(
      triggerNotificationAction({
        message: err.message,
        notificationType: NOTIFICATION.ERROR,
      }),
    );
  } finally {
    dispatch(hideLoaderAction());
  }
};
