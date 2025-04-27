import {StyleSheet} from 'react-native';
import { IS_TABLET } from '../../utils/device';

export const styles = StyleSheet.create({
  title: {
    color: '#667085',
    fontSize: IS_TABLET ? 24 : 18,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    marginTop: IS_TABLET ? 20 : 10,
  },
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingHorizontal: '4%',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
