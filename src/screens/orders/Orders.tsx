import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {SvgXml} from 'react-native-svg';
import {IconCartBag} from '../../assets/icons/Icons';
import {styles} from './styles';

const Orders = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <SvgXml xml={IconCartBag} />

        <Text style={styles.title}>
          You haven’t placed any orders yet. Let’s {'\n'}change that—start
          exploring now!
        </Text>
      </View>
    </View>
  );
};

export default Orders;
