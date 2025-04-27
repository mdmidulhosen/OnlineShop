import {StyleSheet} from 'react-native';
import {IS_TABLET} from '../../utils/device';

export const headerStyle = StyleSheet.create({
  container: {
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: '100%',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: IS_TABLET ? 16 : 8,
  },
});
