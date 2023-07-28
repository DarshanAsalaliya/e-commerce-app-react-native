import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  light,
  moderateScale,
  verticalScale,
} from '../../theme';

// order screen style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: light.offWhite,
  },
  flatListView: {
    paddingHorizontal: horizontalScale(16),
    marginBottom: verticalScale(10),
  },
  myCartText: {
    fontSize: moderateScale(20),
    color: light.black,
    fontWeight: '500',
    letterSpacing: 1,
    paddingTop: verticalScale(20),
    marginBottom: verticalScale(10),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  emptyView: {
    height: verticalScale(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: moderateScale(18),
  },
  horizontalSpace: {
    width: horizontalScale(10),
  },
});

export default styles;
