import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-vector-icons/icon';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
import * as React from 'react';
const Tab = createBottomTabNavigator();

function MyTabs(params) {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}
export default MyTabs;
