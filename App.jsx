import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Intro from './screens/Intro';
import Login from './screens/Login';
import Register from './screens/Register';
import UserPanel from './screens/UserPanel';
import AdminPanel from './screens/AdminPanel';
import UserTab from './screens/UserTab';
import AdminTab from './screens/AdminTab';
import {Context} from './screens/CartContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Context>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={'Intro'}>
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="UserTab" component={UserTab} />
          <Stack.Screen name="AdminTab" component={AdminTab} />
          {/* <Stack.Screen name="UserPanel" component={UserPanel} /> */}
          {/* <Stack.Screen name="AdminPanel" component={AdminPanel} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Context>
  );
};

export default App;
