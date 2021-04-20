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
    paddingHorizontal: width / 24,
  },
});

export default styles;
