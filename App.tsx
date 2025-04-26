import {SafeAreaView} from 'react-native';
import React from 'react';
import AppRoutes from './src/routes/AppRoutes';
import tw from './src/lib/tailwind';

const App = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <AppRoutes />
    </SafeAreaView>
  );
};

export default App;
