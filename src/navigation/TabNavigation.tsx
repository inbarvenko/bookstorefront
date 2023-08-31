import React from 'react';
import {
  BottomTabBarProps,
  BottomTabHeaderProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HeaderAuthUser from 'src/components/Headers';
import AuthStack from './AuthStack';
import {useAppSelector} from 'src/redux/hooks';
import ProfilePage from 'src/screens/Profile';
import BusketPage from 'src/screens/Busket';
import FavoritesPage from 'src/screens/Favorites';
import TabBar from 'src/components/TabBar';
import CatalogPage from 'src/screens/Catalog/Catalog';

export type TabParamList = {
  Profile: undefined;
  Auth: undefined;
  Favorites: undefined;
  Busket: undefined;
  Catalog: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigation = () => {
  const userEmail = useAppSelector(state => state.userData.email);

  const tabBarReturn = (props: BottomTabBarProps) => {
    return <TabBar {...props} />;
  };

  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={tabBarReturn}>
      <Tab.Screen
        name={userEmail ? 'Profile' : 'Auth'}
        component={userEmail ? ProfilePage : AuthStack}
      />
      <Tab.Screen name="Catalog" component={CatalogPage} />

      {userEmail && <Tab.Screen name="Favorites" component={FavoritesPage} />}
      {userEmail && <Tab.Screen name="Busket" component={BusketPage} />}
    </Tab.Navigator>
  );
};

export default TabNavigation;
