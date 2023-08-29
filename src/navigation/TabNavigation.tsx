import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HeaderAuthUser from '../screens/ui/Headers/HeaderAuthUser';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {useAppSelector} from '../redux/hooks';
import ProfilePage from '../screens/Profile/Profile';
import BusketPage from '../screens/Busket/Busket';
import FavoritesPage from '../screens/Favorites/Favorites';
import TabBar from '../screens/ui/TabBar/TabBar';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const userEmail = useAppSelector(state => state.userData.email);
  return (
    <Tab.Navigator
      screenOptions={{
        header: ({navigation}) => <HeaderAuthUser navigation={navigation} />,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={AppStack} />
      <Tab.Screen name={userEmail ? 'Profile' : "Auth"} component={userEmail ? ProfilePage : AuthStack} />
      {userEmail && <Tab.Screen name="Favorites" component={FavoritesPage} />}
      {userEmail && <Tab.Screen name="Busket" component={BusketPage} />}
    </Tab.Navigator>
  );
};

export default TabNavigation;
