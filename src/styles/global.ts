import {StyleSheet} from 'react-native';
import {IS_TABLET} from '../utils/device';

export const globalStyles = StyleSheet.create({
  primaryTitle: {
    color: '#43c462',
    fontSize: IS_TABLET ? 44 : 36,
    fontFamily: 'Montserrat-SemiBold',
  },
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '4%',
  },
  headerTitle: {
    fontSize: IS_TABLET ? 44 : 36,
    fontFamily: 'Montserrat-SemiBold',
    color: '#000000',
  },
});
