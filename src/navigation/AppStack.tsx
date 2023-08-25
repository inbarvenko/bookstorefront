import React from 'react';
import CatalogPage from '../screens/Catalog/Catalog';
import HeaderRegUser from '../screens/ui/Headers/HeaderRegUser';
import {createStackNavigator} from '@react-navigation/stack';
import ProfilePage from '../screens/Profile/Profile';
import BookScreen from '../screens/Book/Book';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';

type AppStackParamList = {
  Catalog: {
    navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
  };
  Profile: {
    navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
  };
  Book: {
    navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
  };
};

const Stack = createStackNavigator<AppStackParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Catalog">
      <Stack.Group>
        <Stack.Screen
          name="Catalog"
          component={CatalogPage}
          options={({navigation}) => ({
            header: () => <HeaderRegUser navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          options={({navigation}) => ({
            header: () => <HeaderRegUser navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Book"
          component={BookScreen}
          options={({navigation}) => ({
            header: () => <HeaderRegUser navigation={navigation} />,
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppStack;
