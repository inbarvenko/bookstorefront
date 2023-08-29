import React from 'react';
import * as nativeStack from '@react-navigation/native-stack';
import SignIn from '@/screens/SignIn/SignIn';
import SignUp from '@/screens/SignUp/SignUp';
import CatalogPage from '@/screens/Catalog/Catalog';
import BookScreen from '@/screens/Book/Book';

const Stack = nativeStack.createNativeStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Group>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Catalog" component={CatalogPage} />
        <Stack.Screen name="Book" component={BookScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
