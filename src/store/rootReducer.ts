import {combineReducers} from 'redux';
import {storyReducer} from './story/storyReducer';
import {loaderReducer} from './loader/loaderReducer';
import {notificationReducer} from './notification/notificationReducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
  notification: notificationReducer,
  story: storyReducer,
});

export default rootReducer;
