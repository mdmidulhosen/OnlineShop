import {View, Text} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {styles} from '../styles';
import {IconCartBag} from '../../../assets/icons/Icons';
import {IS_TABLET} from '../../../utils/device';
import Header from '../../../components/Header';

const Layout1 = () => {
  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.body}>
      <SvgXml
        xml={IconCartBag}
        width={IS_TABLET ? 280 : 203}
        height={IS_TABLET ? 210 : 161}
      />

      <Text style={styles.title}>
        You haven’t placed any orders yet. Let’s {'\n'}change that—start
        exploring now!
      </Text>
    </View>
    </View>
  );
};

export default Layout1;
