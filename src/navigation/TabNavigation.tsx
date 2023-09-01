import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import AuthStack from './AuthStack';
import {useAppSelector} from 'src/redux/hooks';
import ProfilePage from 'src/screens/Profile';
import BusketPage from 'src/screens/Busket';
import FavoritesPage from 'src/screens/Favorites';
import TabBar from 'src/components/TabBar';
import CatalogPage from 'src/screens/Catalog/Catalog';

export type TabParamListLog = {
  Catalog: undefined;
  Favorites: undefined;
  Busket: undefined;
  Profile: undefined;
  Auth: undefined;
};

export type TabParamListAuth = {
  Catalog: undefined;
};

const Tab = createBottomTabNavigator<TabParamListLog>();

const TabNavigation = () => {
  const userEmail = useAppSelector(state => state.userData.email);

  const tabBarReturn = (props: BottomTabBarProps) => {
    return <TabBar {...props} />;
  };

  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={tabBarReturn}>
      <Tab.Screen name="Catalog" component={CatalogPage} />

      {userEmail && <Tab.Screen name="Favorites" component={FavoritesPage} />}
      {userEmail && <Tab.Screen name="Busket" component={BusketPage} />}
      <Tab.Screen
        name={userEmail ? 'Profile' : 'Auth'}
        component={userEmail ? ProfilePage : AuthStack}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
