import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserSetting from './UserSetting';
import Cart from './Cart';
import UserPanel from './UserPanel';
import icons from '../constant/icon';

const Tab = createBottomTabNavigator();

const UserTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        style: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="UserPanel"
        component={UserPanel}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.User}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'green' : 'silver',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.Cart}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'green' : 'silver',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="UserSetting"
        component={UserSetting}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.Settings}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'green' : 'silver',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default UserTab;
