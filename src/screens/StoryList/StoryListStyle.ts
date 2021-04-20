import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5ee',
  },
  body: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    paddingRight: width / 32,
    paddingLeft: width / 48,
  },
});

export default styles;
