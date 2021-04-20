import React from 'react';
import {View, Text} from 'react-native';
import HackerNewsIcon from '../../assets/HackerNewsIcon';

import styles from './HeaderStyle';

const Notification = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <HackerNewsIcon />
      </View>
      <Text style={styles.headerText}>Hacker News</Text>
      <Text style={styles.subText}>Top 10 Random</Text>
    </View>
  );
};

export default Notification;
