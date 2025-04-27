import {View, Text, Image} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {styles} from '../styles';
import {IS_TABLET} from '../../../utils/device';
import Header from '../../../components/Header';

interface layout1Props {
  desc: string;
  textColor: string;
  imageUrl: string;
  IconBag: string;
  headerTitle: string;
  IconRight: string;
  IconLeft: string;
}

const Layout1 = ({data}: {data: layout1Props}) => {
  return (
    <View style={styles.container}>
      <Header
        title={data?.headerTitle}
        IconLeft={data?.IconLeft}
        IconRight={data?.IconRight}
      />
      <View style={styles.body}>
        {data?.imageUrl ? (
          <Image
            source={{uri: data?.imageUrl}}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: IS_TABLET ? 280 : 203,
              height: IS_TABLET ? 210 : 161,
              marginTop: IS_TABLET ? 20 : 10,
            }}
          />
        ) : (
          <SvgXml
            xml={data?.IconBag}
            width={IS_TABLET ? 280 : 203}
            height={IS_TABLET ? 210 : 161}
          />
        )}

        <Text style={[styles.title, {color: data?.textColor}]}>
          {data?.desc}
        </Text>
      </View>
    </View>
  );
};

export default Layout1;
