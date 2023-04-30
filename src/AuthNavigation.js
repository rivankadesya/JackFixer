import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screen/Login';
import Register from './screen/Register';

const Stack = createStackNavigator();
function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
export default AuthNavigation;
