import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconCart, IconLocation} from '../assets/icons/Icons';
import {globalStyles} from '../styles/global';
import {headerStyle} from './styles/headerStyle';
import {IS_TABLET} from '../utils/device';

const Header = () => {
  return (
    <View style={headerStyle.container}>
      <View>
        <Text style={globalStyles.headerTitle}>Orders</Text>
      </View>
      <View style={headerStyle.headerRight}>
        <TouchableOpacity>
          <SvgXml xml={IconLocation} height={IS_TABLET ? 56 : 44} width={IS_TABLET ? 56 : 44} />
        </TouchableOpacity>
        <TouchableOpacity>
          <SvgXml xml={IconCart} height={IS_TABLET ? 56 : 44} width={IS_TABLET ? 56 : 44} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
