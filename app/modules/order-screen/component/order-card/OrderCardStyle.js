import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  light,
  moderateScale,
  verticalScale,
} from '../../../../theme';

// order card style
const styles = StyleSheet.create({
  container: {
    backgroundColor: light.white,
    marginBottom: verticalScale(8),
    paddingVertical: verticalScale(8),
    borderColor: light.lightGrey,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(4),
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(8),
  },
  productText: {
    fontSize: moderateScale(14),
    flex: 0.8,
    color: light.dark,
  },
  productPriceText: {
    fontSize: moderateScale(14),
    color: light.dark,
    alignSelf: 'flex-end',
  },
  orderText: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: light.dark,
    marginBottom: verticalScale(4),
  },
  detailText: {
    fontSize: moderateScale(14),
  },
  status: {
    fontSize: moderateScale(14),
    color: light.green,
  },
});

export default styles;
