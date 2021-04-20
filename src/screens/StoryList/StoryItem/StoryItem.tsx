import React, {FC} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import moment from 'moment';
import {Story} from '../../../store/story/storyTypes';

import styles from './StoryItemStyle';

type StoryItemProps = {
  item: Story;
  index: number;
  viewStory: (url: string) => void;
};

const StoryItem: FC<StoryItemProps> = props => {
  const {item, index, viewStory} = props;

  return (
    <TouchableOpacity
      style={styles.storyContainer}
      onPress={() => viewStory(item.url)}>
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
    </TouchableOpacity>
  );
};

export default StoryItem;
