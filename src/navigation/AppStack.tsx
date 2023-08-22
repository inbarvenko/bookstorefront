import React from 'react';
import * as nativeStack from '@react-navigation/native-stack';
import HomePage from '../screens/Home/Home';
import { createStackNavigator } from '@react-navigation/stack';

type AppStackParamList = {
  Home: undefined;
  Profile: { userID: string };
};

const Stack = createStackNavigator<AppStackParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: 'lightblue',
            },
            headerBackVisible: false,
            // headerTitle: () => <HeaderTitle title={'main page'} />,
            // headerRight: () => <HeaderButtons navigation={navigation} />,
          })}
        />
        {/* <Stack.Screen
          name="Profile"
          component={ProfilePage}
          initialParams={{ userId: user.id }}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: 'lightblue',
            },
            headerBackVisible: false,
            // headerTitle: () => <HeaderTitle title={'todos'} />,
            // headerRight: () => <HeaderButtons navigation={navigation} />,
          })} */}
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppStack;
