import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Layout1 from './components/Layout1';

const Orders = () => {
  return (
    <View style={styles.container}>
      {/* Layout 1 */}
      <Layout1 />
    </View>
  );
};

export default Orders;
