import React from 'react';
import RootStack from 'src/navigation/Navigation';
import store from 'src/redux/store';
import {Provider} from 'react-redux';
import {NotifierWrapper} from 'react-native-notifier';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {PermissionsAndroid} from 'react-native';

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={styles.flex}>
      <NotifierWrapper>
        <Provider store={store}>
          <RootStack />
        </Provider>
      </NotifierWrapper>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1},
});

export default App;
