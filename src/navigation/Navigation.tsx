import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import TabNavigation from './TabNavigation';
import BootSplash from 'react-native-bootsplash';

const RootStackComponent: React.FC = () => {
  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default RootStackComponent;
