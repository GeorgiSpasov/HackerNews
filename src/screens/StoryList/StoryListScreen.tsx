import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store/store';
import {loadStories} from '../../store/story/storyActions';
import {Story} from '../../store/story/storyTypes';
import Header from '../../components/Header/Header';
import StoryItem from './StoryItem/StoryItem';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

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

  const openInBrowser = async () => {
    await Linking.openURL(storyUrl);
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
            setModalVisible(!modalVisible);
            setStoryUrl('');
          }}>
          <SafeAreaView style={styles.container}>
            <TouchableOpacity
              style={styles.placeHolder}
              onPress={() => setModalVisible(!modalVisible)}
            />
            <View style={styles.separator}>
              <MaterialIcon
                name="open-in-browser"
                style={styles.menuIcon}
                onPress={openInBrowser}
              />
              <AntDesignIcon
                name="closesquareo"
                style={styles.menuIcon}
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
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
