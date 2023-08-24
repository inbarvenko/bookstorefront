import React from 'react';
import * as nativeStack from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';
import HeaderAuthUser from '../screens/ui/Headers/HeaderAuthUser';
import CatalogPage from '../screens/Catalog/Catalog';

const Stack = nativeStack.createNativeStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Group>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={({navigation}) => ({
            header: () => <HeaderAuthUser navigation={navigation}/>
          })}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={({navigation}) => ({
            header: () => <HeaderAuthUser navigation={navigation}/>
          })}
        />
        <Stack.Screen
          name="Catalog"
          component={CatalogPage}
          options={({navigation}) => ({
            header: () => <HeaderAuthUser navigation={navigation}/>
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
