import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomRoutes from './BottomRoutes';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const AppRoutes = () => {
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}>
        <SafeAreaView
          // eslint-disable-next-line react-native/no-inline-styles
          style={{flex: 1}}
          edges={['top', 'right', 'left', 'bottom']}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="BottomRoutes" component={BottomRoutes} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default AppRoutes;
