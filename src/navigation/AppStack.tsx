import React from 'react';
import CatalogPage from 'src/screens/Catalog';
import {StackHeaderProps, createStackNavigator} from '@react-navigation/stack';
import BookScreen from 'src/screens/Book/Book';
import TabNavigation from './TabNavigation';
import HeaderAuthUser from 'src/components/Headers/HeaderAuthUser';

export type AppStackParamList = {
  Book: {bookId: string} | undefined;
  Tab: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

const AppStack: React.FC = () => {
  const headerReturn = (props: StackHeaderProps) => {
    return <HeaderAuthUser {...props} />;
  };

  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{header: headerReturn}}>
      <Stack.Group>
        <Stack.Screen name="Book" component={BookScreen} />
        <Stack.Screen name="Tab" component={TabNavigation} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppStack;
