import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconCart, IconLocation} from '../assets/icons/Icons';
import {globalStyles} from '../styles/global';
import {headerStyle} from './styles/headerStyle';

const Header = () => {
  return (
    <View style={headerStyle.container}>
      <View>
        <Text style={globalStyles.headerTitle}>Orders</Text>
      </View>
      <View style={headerStyle.headerRight}>
        <TouchableOpacity>
          <SvgXml xml={IconLocation} height={44} width={44} />
        </TouchableOpacity>
        <TouchableOpacity>
          <SvgXml xml={IconCart} height={44} width={44} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
