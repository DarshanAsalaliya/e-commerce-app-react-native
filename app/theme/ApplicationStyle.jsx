import { StyleSheet } from 'react-native';
import { moderateScale } from './Metrics';

// common style file
const applicationStyle = StyleSheet.create({
  centerAlign: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  screen: {
    flex: 1,
  },
  textLabel: {
    fontSize: moderateScale(14),
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default applicationStyle;
