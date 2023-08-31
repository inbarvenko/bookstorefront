import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import BootSplash from 'react-native-bootsplash';
import AppStack from './AppStack';

const RootStackComponent: React.FC = () => {
  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <AppStack />
    </NavigationContainer>
  );
};

export default RootStackComponent;
