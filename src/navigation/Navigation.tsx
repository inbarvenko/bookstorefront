import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import AppStack from './AppStack';
import {useAppDispatch} from 'src/redux/hooks';
import {setToken} from 'src/redux/slices/appReducer';
import AnimatedBootSplash from 'src/animated/AnimatedBootSplash';

const RootStackComponent: React.FC = () => {
  const dispatch = useAppDispatch();

  const getToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    dispatch(setToken(token));
  };

  return (
    <NavigationContainer
      onReady={() => {
        getToken();
      }}>
      <AnimatedBootSplash />
      <AppStack />
    </NavigationContainer>
  );
};

export default RootStackComponent;
