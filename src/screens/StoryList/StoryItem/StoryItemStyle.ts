import {Dimensions, StyleSheet} from 'react-native';
import GlobalStyles from '../../../GlobalStyles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  storyContainer: {
    paddingVertical: width / 56,
  },
  storyTitle: {
    fontSize: width / 22,
    fontWeight: '400',
  },
  storyUrl: {
    fontSize: width / 28,
    color: GlobalStyles.secondaryTextColor,
    paddingVertical: 2,
  },
  storyData: {
    fontSize: width / 26,
    color: GlobalStyles.secondaryTextColor,
    fontWeight: '400',
  },
});

export default styles;
