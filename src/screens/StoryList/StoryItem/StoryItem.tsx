import React from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';
import {Story} from '../../../store/story/storyTypes';

import styles from './StoryItemStyle';

const StoryItem = ({item, index}: {item: Story; index: number}) => {
  return (
    <View style={styles.storyContainer}>
      <View style={styles.indexContainer}>
        <Text style={styles.indexText}>{index + 1}.</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.storyTitle}>{item.title}</Text>
        <Text style={styles.storyUrl}>({item.url})</Text>
        <Text style={styles.storyData}>
          {`${item.score} points by ${item.authorId} [${
            item.user.karma
          } karma] ${moment(item.timestamp).format('MMM D, YYYY')}`}
        </Text>
      </View>
    </View>
  );
};

export default StoryItem;
