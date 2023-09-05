import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import BootSplash from 'react-native-bootsplash';
import messaging from '@react-native-firebase/messaging';
import AppStack from './AppStack';
import analytics from '@react-native-firebase/analytics';
import {useAppDispatch} from 'src/redux/hooks';
import {setToken} from 'src/redux/slices/appReducer';
import {notificationReact} from 'src/utils/notifications';

import NotifierModal from 'src/components/NotifierModal/NotifierModal';

const RootStackComponent: React.FC = () => {
  const dispatch = useAppDispatch();

  const getToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    dispatch(setToken(token));
  };

  const [modal, setModal] = useState({
    title: '',
    description: '',
    params: '',
    isVisible: false,
  });

  useEffect(() => {
    //foreground
    messaging().onMessage(async remoteMessage => {
      await analytics().logEvent('notifications_foreground', {
        title: remoteMessage.notification!.title,
      });

      return notificationReact(
        remoteMessage.notification!.title!,
        remoteMessage.notification!.body!,
        () => {
          setModal({
            title: remoteMessage.notification!.title!,
            description: remoteMessage.notification!.body!,
            params: remoteMessage.data!.bookId,
            isVisible: true,
          });
        },
      );
    });

    messaging().onNotificationOpenedApp(async remoteMessage => {
      await analytics().logEvent('background_state');

      setModal({
        title: remoteMessage.notification!.title!,
        description: remoteMessage.notification!.body!,
        params: remoteMessage.data!.bookId,
        isVisible: true,
      });
    });
  }, [modal.title, modal]);

  return (
    <NavigationContainer
      onReady={() => {
        getToken();
        BootSplash.hide();
      }}>
      {modal.isVisible && (
        <NotifierModal
          title={modal.title}
          description={modal.description}
          params={modal.params}
          isVisible={modal.isVisible}
          toClose={() => {
            setModal({...modal, isVisible: false});
          }}
        />
      )}
      <AppStack />
    </NavigationContainer>
  );
};

export default RootStackComponent;
