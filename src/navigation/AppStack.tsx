import React from 'react';
import CatalogPage from '../screens/Catalog/Catalog';
import HeaderRegUser from '../screens/ui/Headers/HeaderRegUser';
import {createStackNavigator} from '@react-navigation/stack';
import ProfilePage from '../screens/Profile/Profile';

type AppStackParamList = {
  Catalog: undefined;
  Profile: undefined;
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
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppStack;
