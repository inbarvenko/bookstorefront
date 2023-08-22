import React from 'react';
import * as nativeStack from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';

const Stack = nativeStack.createNativeStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Group>
        <Stack.Screen
          name="SignIn"
          options={{headerShown: false}}
          component={SignIn}
        />
        <Stack.Screen
          name="SignUp"
          options={{headerShown: false}}
          component={SignUp}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
