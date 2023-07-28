import { StyleSheet } from 'react-native';
import { moderateScale, width } from '../../../../theme';

// empty category style
const styles = StyleSheet.create({
  container: {
    padding: moderateScale(10),
    width: width,
  },
  text: {
    alignSelf: 'center',
  },
});

export default styles;
