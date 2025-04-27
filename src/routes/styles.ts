import {StyleSheet} from 'react-native';
import {IS_TABLET} from '../utils/device';

export const styles = StyleSheet.create({
  label: {
    fontSize: IS_TABLET ? 16 : 12,
    fontFamily: 'Montserrat-Regular',
    marginTop: IS_TABLET ? 8 : 6,
  },
  tabBarBody: {
    paddingTop: IS_TABLET ? 10 : 6,
    borderTopColor: '#d0d5dd',
    backgroundColor: '#ffffff',
    borderTopWidth: 0.4,
    height: IS_TABLET ? 75 : 70,
  },
});
