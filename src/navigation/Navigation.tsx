import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import BootSplash from 'react-native-bootsplash';
import messaging from '@react-native-firebase/messaging';
import AppStack from './AppStack';
import {useAppDispatch} from 'src/redux/hooks';
import {setToken} from 'src/redux/slices/appReducer';

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
        BootSplash.hide();
      }}>
      <AppStack />
    </NavigationContainer>
  );
};

export default RootStackComponent;
