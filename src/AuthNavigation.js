import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screen/Login';
import Register from './screen/Register';
import MyTabs from './screen/bottomNav';

const Stack = createStackNavigator();
function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="bottom"
        component={MyTabs}
        screenOptions={{headerShown: false}}
        // options={{title: 'Overview'}}
      />
    </Stack.Navigator>
  );
}
export default AuthNavigation;
