import {Dimensions, StyleSheet} from 'react-native';
import GlobalStyles from '../../GlobalStyles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurLayer: {
    position: 'absolute',
    bottom: 0,
    height: '100%',
    width: width,
  },
  contentContainer: {
    width: width / 1.2,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  titleText: {
    marginVertical: width / 24,
    fontSize: width / 18,
    textAlign: 'center',
    color: GlobalStyles.primaryTextColor,
  },
  errorText: {
    fontSize: width / 24,
    textAlign: 'center',
    color: GlobalStyles.primaryTextColor,
  },
  button: {
    marginVertical: width / 12,
    height: width / 10,
    width: width / 4,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 6,
    backgroundColor: GlobalStyles.primaryTextColor,
  },
  buttonText: {
    fontSize: width / 28,
    color: 'white',
    textTransform: 'uppercase',
  },
});

export default styles;
