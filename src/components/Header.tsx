import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {globalStyles} from '../styles/global';
import {headerStyle} from './styles/headerStyle';
import {IS_TABLET} from '../utils/device';

const Header = ({
  title,
  IconLeft,
  IconRight,
}: {
  title: string;
  IconLeft: string;
  IconRight: string;
}) => {
  return (
    <View style={headerStyle.container}>
      <View>
        <Text style={globalStyles.headerTitle}>{title}</Text>
      </View>
      <View style={headerStyle.headerRight}>
        <TouchableOpacity>
          <SvgXml
            xml={IconLeft}
            height={IS_TABLET ? 56 : 44}
            width={IS_TABLET ? 56 : 44}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <SvgXml
            xml={IconRight}
            height={IS_TABLET ? 56 : 44}
            width={IS_TABLET ? 56 : 44}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
