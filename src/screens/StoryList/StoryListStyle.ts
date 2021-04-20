import {Dimensions, StyleSheet} from 'react-native';
import GlobalStyles from '../../GlobalStyles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5ee',
  },
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    paddingRight: width / 32,
    paddingLeft: width / 48,
  },
  placeHolder: {
    flex: 1,
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: width / 56,
    backgroundColor: GlobalStyles.accentColor,
  },
  menuIcon: {
    fontSize: width / 20,
  },
  modalContent: {
    flex: 1,
  },
  modalText: {
    fontSize: width / 3,
  },
});

export default styles;
