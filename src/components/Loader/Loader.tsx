import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import {useSelector} from 'react-redux';
import {BlurView} from '@react-native-community/blur';
import {RootState} from 'src/store/store';
import GlobalStyles from '../../GlobalStyles';
import styles from './LoaderStyle';

const Loader = () => {
  const isLoading = useSelector((store: RootState) => store.loader.isLoading);

  return (
    <Modal transparent visible={isLoading}>
      <View style={styles.modalContentContainer}>
        <BlurView
          style={styles.blurLayer}
          blurType="light"
          blurAmount={12}
          reducedTransparencyFallbackColor="white"
        />
        <ActivityIndicator size="large" color={GlobalStyles.accentColor} />
      </View>
    </Modal>
  );
};

export default Loader;
