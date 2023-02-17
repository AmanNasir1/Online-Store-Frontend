import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AdminSetting from './AdminSetting';
import AddItem from './Additem';
import AdminPanel from './AdminPanel';
import icons from '../constant/icon';

const Tab = createBottomTabNavigator();

const AdminTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        style: {
          backgroundColor: 'black',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="AdminPanel"
        component={AdminPanel}
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
        name="AddItem"
        component={AddItem}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.AddItem}
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
        name="AdminSetting"
        component={AdminSetting}
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

export default AdminTab;
