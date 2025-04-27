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
import {IS_TABLET} from '../utils/device';

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
        tabBarLabelPosition: 'below-icon',
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
              height={IS_TABLET ? 38 : 32}
              width={IS_TABLET ? 38 : 32}
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
              height={IS_TABLET ? 38 : 32}
              width={IS_TABLET ? 38 : 32}
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
              height={IS_TABLET ? 38 : 32}
              width={IS_TABLET ? 38 : 32}
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
              height={IS_TABLET ? 38 : 32}
              width={IS_TABLET ? 38 : 32}
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
              height={IS_TABLET ? 30 : 24}
              width={IS_TABLET ? 30 : 24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomRoutes;
