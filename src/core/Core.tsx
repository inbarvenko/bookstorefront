import React, {createContext, useEffect, useState} from 'react';
import RootStack from 'src/navigation/Navigation';
import store from 'src/redux/store';
import {Provider} from 'react-redux';
import {NotifierWrapper} from 'react-native-notifier';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import analytics from '@react-native-firebase/analytics';
import {notificationReact} from 'src/utils/notifications';
import messaging from '@react-native-firebase/messaging';
import NotifierModal from 'src/components/NotifierModal/NotifierModal';

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

export const InitialParamsContext = createContext('1123');

function App(): JSX.Element {
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
    <GestureHandlerRootView style={styles.flex}>
      <NotifierWrapper>
        <Provider store={store}>
          <InitialParamsContext.Provider value={modal.params}>
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
            <RootStack />
          </InitialParamsContext.Provider>
        </Provider>
      </NotifierWrapper>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1},
});

export default App;
