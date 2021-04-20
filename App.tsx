import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store/store';
import StoryListScreen from './src/screens/StoryList/StoryListScreen';
import Loader from './src/components/Loader/Loader';
import Notification from './src/components/Notification/Notification';
import GlobalStyles from './src/GlobalStyles';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={GlobalStyles.accentColor} />
      <StoryListScreen />
      <Loader />
      <Notification />
    </Provider>
  );
};

export default App;
