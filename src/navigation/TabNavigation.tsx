import React from 'react';
import {
  BottomTabBarProps,
  BottomTabHeaderProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HeaderAuthUser from 'src/components/Headers';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {useAppSelector} from 'src/redux/hooks';
import ProfilePage from 'src/screens/Profile';
import BusketPage from 'src/screens/Busket';
import FavoritesPage from 'src/screens/Favorites';
import TabBar from 'src/components/TabBar';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const userEmail = useAppSelector(state => state.userData.email);

  const tabBarReturn = (props: BottomTabBarProps) => {
    return <TabBar {...props} />;
  };
  const headerReturn = (props: BottomTabHeaderProps) => {
    return <HeaderAuthUser {...props} />;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        header: headerReturn,
      }}
      tabBar={tabBarReturn}>
      <Tab.Screen name="Home" component={AppStack} />
      <Tab.Screen
        name={userEmail ? 'Profile' : 'Auth'}
        component={userEmail ? ProfilePage : AuthStack}
      />
      {userEmail && <Tab.Screen name="Favorites" component={FavoritesPage} />}
      {userEmail && <Tab.Screen name="Busket" component={BusketPage} />}
    </Tab.Navigator>
  );
};

export default TabNavigation;
