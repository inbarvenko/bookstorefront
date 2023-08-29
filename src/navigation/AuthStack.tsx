import React from 'react';
import * as nativeStack from '@react-navigation/native-stack';
import SignIn from 'src/screens/SignIn/SignIn';
import SignUp from 'src/screens/SignUp/SignUp';

const Stack = nativeStack.createNativeStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SignIn">
      <Stack.Group>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
