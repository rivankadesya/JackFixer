import HomePage from './home';

const Tab = createBottomTabNavigator();

function MyTabs(params) {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomePage">
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={
          {
            //   tabBarLabel: 'Signupmarlin',
          }
        }
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
