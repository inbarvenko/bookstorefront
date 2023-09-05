import React, {useContext, useEffect, useState} from 'react';
import {
  StackHeaderProps,
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import BookScreen from 'src/screens/Book/Book';
import messaging from '@react-native-firebase/messaging';
import TabNavigation from './TabNavigation';
import HeaderAuthUser from 'src/components/Headers/HeaderAuthUser';
import {useNavigation} from '@react-navigation/native';
import analytics from '@react-native-firebase/analytics';
import {useAppDispatch} from 'src/redux/hooks';
import {setNotification} from 'src/redux/slices/appReducer';
import {InitialParamsContext} from 'src/core/Core';

export type AppStackParamList = {
  Book: {bookId: string} | undefined;
  Tab: undefined;
  Modal:
    | {
        title?: string;
        description?: string;
        params?: string;
        foreground?: boolean;
      }
    | undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

const AppStack: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(true);

  const bookIdContext = useContext(InitialParamsContext);
  const [bookId, setBookId] = useState('');

  useEffect(() => {
    setBookId(bookIdContext);
    messaging()
      .getInitialNotification()
      .then(async remoteMessage => {
        await analytics().logEvent('app_opened_from_quit_state');

        if (remoteMessage) {
          setBookId(remoteMessage.data!.bookId);
          dispatch(setNotification(true));
        }
        setLoading(false);
      });
  }, [navigation, dispatch, bookIdContext]);

  const headerReturn = (props: StackHeaderProps) => {
    return <HeaderAuthUser {...props} />;
  };

  if (loading) {
    return null;
  }

  return (
    <Stack.Navigator
      initialRouteName={'Tab'}
      screenOptions={{header: headerReturn}}>
      <Stack.Group>
        <Stack.Screen
          name="Book"
          initialParams={{bookId: bookId}}
          component={BookScreen}
        />
        <Stack.Screen name="Tab" component={TabNavigation} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppStack;
