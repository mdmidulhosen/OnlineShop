import {View, Text} from 'react-native';
import React from 'react';
import {globalStyles} from '../../styles/global';

const Home = () => {
  return (
    <View style={[globalStyles.container]}>
      <Text style={globalStyles.primaryTitle}>Home</Text>
    </View>
  );
};

export default Home;
