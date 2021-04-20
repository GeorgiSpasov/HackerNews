import React from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';
import {Story} from '../../../store/story/storyTypes';

import styles from './StoryItemStyle';

const StoryItem = ({item}: {item: Story}) => {
  return (
    <View style={styles.storyContainer}>
      <Text style={styles.storyTitle}>{item.title}</Text>
      <Text style={styles.storyUrl}>({item.url})</Text>
      <Text style={styles.storyData}>
        {`${item.score} points by ${item.authorId} [${
          item.user.karma
        } karma] ${moment(item.timestamp).format('MMM D, YYYY')}`}
      </Text>
    </View>
  );
};

export default StoryItem;
