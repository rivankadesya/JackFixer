import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screen/Login';
import Register from './screen/Register';
import MyTabs from './screen/bottomnav';

const Stack = createStackNavigator();
function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="mainmenu" component={MyTabs} />
    </Stack.Navigator>
  );
}
export default AuthNavigation;
