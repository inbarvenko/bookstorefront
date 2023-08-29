import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAppSelector} from '@/redux/hooks';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import 'react-native-gesture-handler';

const RootStackComponent: React.FC = () => {
  const userEmail = useAppSelector(state => state.userData.email);

  return (
    <NavigationContainer>
      {userEmail ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootStackComponent;
