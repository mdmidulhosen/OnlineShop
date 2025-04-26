import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import {SvgXml} from 'react-native-svg';
import {
  IconAccount,
  IconActiveAccount,
  IconActiveHome,
  IconActiveOrders,
  IconActiveRewards,
  IconActiveSearch,
  IconHome,
  IconOrders,
  IconRewards,
  IconSearch,
} from '../assets/icons/Icons';
import Rewards from '../screens/rewards/Rewards';
import Search from '../screens/search/Search';
import Orders from '../screens/orders/Orders';
import Account from '../screens/account/Account';
import {styles} from './styles';

const BottomRoutes = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'active',
        tabBarInactiveTintColor: 'inactive',
        tabBarLabelStyle: styles.label,
        tabBarStyle: styles.tabBarBody,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: '#43c462',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => (
            <SvgXml
              xml={color === 'inactive' ? IconHome : IconActiveHome}
              height={32}
              width={32}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarActiveTintColor: '#43c462',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => (
            <SvgXml
              xml={color === 'inactive' ? IconRewards : IconActiveRewards}
              height={32}
              width={32}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarActiveTintColor: '#43c462',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => (
            <SvgXml
              xml={color === 'inactive' ? IconSearch : IconActiveSearch}
              height={32}
              width={32}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarActiveTintColor: '#43c462',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => (
            <SvgXml
              xml={color === 'inactive' ? IconOrders : IconActiveOrders}
              height={32}
              width={32}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarActiveTintColor: '#43c462',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => (
            <SvgXml
              xml={color === 'inactive' ? IconAccount : IconActiveAccount}
              height={24}
              width={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomRoutes;
