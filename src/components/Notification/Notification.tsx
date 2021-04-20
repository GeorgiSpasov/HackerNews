import React from 'react';
import {Modal, TouchableOpacity, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {BlurView} from '@react-native-community/blur';
import NOTIFICATION from '../../constants/notification';
import {RootState} from '../../store/store';
import {clearNotification} from '../../store/notification/notificationActions';
import styles from './NotificationStyle';

const Notification = () => {
  const dispatch = useDispatch();
  const {isOpen, message, notificationType} = useSelector(
    (store: RootState) => store.notification,
  );
  const isError = notificationType === NOTIFICATION.ERROR;

  return (
    <Modal transparent visible={isOpen}>
      <View style={styles.modalContentContainer}>
        <BlurView
          style={styles.blurLayer}
          blurType="light"
          blurAmount={12}
          reducedTransparencyFallbackColor="white"
        />
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>
            {isError ? 'An error has occurred!' : message}
          </Text>
          {isError && (
            <Text style={styles.errorText}>
              {message
                ? message
                : 'Something unexpected happened, try to reload to fix it'}
            </Text>
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(clearNotification())}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Notification;
