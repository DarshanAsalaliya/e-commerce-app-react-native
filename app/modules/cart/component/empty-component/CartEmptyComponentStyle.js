import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../../../theme';

// cart empty component style
const styles = StyleSheet.create({
  emptyView: {
    height: verticalScale(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: moderateScale(18),
  },
});

export default styles;
