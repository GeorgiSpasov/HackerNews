import {Dimensions, StyleSheet} from 'react-native';
import GlobalStyles from '../../GlobalStyles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: GlobalStyles.accentColor,
    padding: 2,
  },
  logoContainer: {
    width: width / 12,
    height: width / 12,
  },
  headerText: {
    fontSize: width / 22,
    fontWeight: 'bold',
    color: GlobalStyles.primaryTextColor,
    alignSelf: 'center',
  },
  subText: {
    fontSize: width / 32,
    color: GlobalStyles.primaryTextColor,
  },
});

export default styles;
