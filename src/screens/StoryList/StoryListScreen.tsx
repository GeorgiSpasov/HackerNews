import React, {useEffect} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store/store';
import {loadStories} from '../../store/story/storyActions';
import {Story} from '../../store/story/storyTypes';
import Header from '../../components/Header/Header';
import StoryItem from './StoryItem/StoryItem';

import styles from './StoryListStyle';

const StoryListScreen = () => {
  const dispatch = useDispatch();
  const stories = useSelector((store: RootState) => store.story.stories);

  useEffect(() => {
    dispatch(loadStories(10));
  }, [dispatch]);

  const renderStoryItem = ({item, index}: {item: Story; index: number}) => {
    return <StoryItem item={item} index={index} />;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.body}>
        <Header />
        <View style={styles.listContainer}>
          <FlatList
            data={stories}
            keyExtractor={item => item.id.toString()}
            renderItem={renderStoryItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StoryListScreen;
