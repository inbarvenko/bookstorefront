import React from 'react';
import CatalogPage from '../screens/Catalog/Catalog';
import {createStackNavigator} from '@react-navigation/stack';
import BookScreen from '../screens/Book/Book';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import HeaderAuthUser from '../screens/ui/Headers/HeaderAuthUser';

type AppStackParamList = {
  Catalog: {
    navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
  };
  Book: {
    navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
  };
};

const Stack = createStackNavigator<AppStackParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Catalog"
      screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="Catalog" component={CatalogPage} />
        <Stack.Screen name="Book" component={BookScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppStack;
