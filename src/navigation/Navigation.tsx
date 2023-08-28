import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAppSelector} from '../redux/hooks';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import 'react-native-gesture-handler';
import TabNavigation from './TabNavigation';

const RootStackComponent: React.FC = () => {
  const userEmail = useAppSelector(state => state.userData.email);

  return (
    <NavigationContainer>
      {/* {userEmail ? <AppStack /> : <AuthStack />} */}
      <TabNavigation />
    </NavigationContainer>
  );
};

export default RootStackComponent;
