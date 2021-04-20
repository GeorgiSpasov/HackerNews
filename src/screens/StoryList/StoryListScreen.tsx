import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {WebView} from 'react-native-webview';
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
  const [modalVisible, setModalVisible] = useState(false);
  const [storyUrl, setStoryUrl] = useState('');

  useEffect(() => {
    dispatch(loadStories(10));
  }, [dispatch]);

  const viewStory = (url: string) => {
    setStoryUrl(url);
    setModalVisible(true);
  };

  const renderStoryItem = ({item, index}: {item: Story; index: number}) => {
    return <StoryItem item={item} index={index} viewStory={viewStory} />;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <View style={styles.listContainer}>
          <FlatList
            data={stories}
            keyExtractor={item => item.id.toString()}
            renderItem={renderStoryItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <Modal
          style={styles.container}
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
            setStoryUrl('');
          }}>
          <SafeAreaView style={styles.container}>
            <TouchableOpacity
              style={styles.placeHolder}
              onPress={() => setModalVisible(false)}
            />
            <View style={styles.separator} />
            <View style={styles.modalContent}>
              <WebView source={{uri: storyUrl}} />
            </View>
          </SafeAreaView>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default StoryListScreen;
