import React, {useEffect, useState} from 'react';
import {
  StackHeaderProps,
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import BookScreen from 'src/screens/Book/Book';
import messaging from '@react-native-firebase/messaging';
import TabNavigation from './TabNavigation';
import HeaderAuthUser from 'src/components/Headers/HeaderAuthUser';
import {cannotGetData, notification} from 'src/utils/notifications';
import {useNavigation} from '@react-navigation/native';
import {getBooksRequest} from 'src/api/bookApi';
import {setBooks} from 'src/redux/slices/booksReducer';
import {useAppDispatch} from 'src/redux/hooks';
import NotifierModal from 'src/components/NotifierModal/NotifierModal';
import analytics from '@react-native-firebase/analytics';

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

type StateParams = {
  name: keyof AppStackParamList | undefined;
  bookId: string | undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

const AppStack: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  const [initialRoute, setInitialRoute] = useState<StateParams>({
    name: 'Tab',
    bookId: undefined,
  });

  const [modal, setModal] = useState({
    title: '',
    description: '',
    params: '',
  });

  useEffect(() => {
    //foreground
    messaging().onMessage(async remoteMessage => {
      await analytics().logEvent('notifications_foreground', {
        title: remoteMessage.notification!.title,
      });

      setModal({
        ...modal,
        title: remoteMessage.notification!.title!,
        description: remoteMessage.notification!.body!,
        params: remoteMessage.data!.bookId,
      });

      return notification(
        remoteMessage.notification!.title!,
        remoteMessage.notification!.body!,
        () => navigation.navigate('Modal', {foreground: true}),
      );
    });

    messaging().onNotificationOpenedApp(async remoteMessage => {
      await analytics().logEvent('background_state');

      setModal({
        ...modal,
        title: remoteMessage.notification!.title!,
        description: remoteMessage.notification!.body!,
        params: remoteMessage.data!.bookId,
      });

      navigation.navigate('Modal');
    });

    messaging()
      .getInitialNotification()
      .then(async remoteMessage => {
        await analytics().logEvent('app_opened_from_quit_state');

        if (remoteMessage) {
          const books = await getBooksRequest({page: 1});
          if (!books) {
            cannotGetData('books');
          }
          dispatch(setBooks(books!));

          setInitialRoute({name: 'Book', bookId: remoteMessage.data!.bookId});
        }
        setLoading(false);
      });
  }, [initialRoute, navigation, dispatch, modal]);

  const headerReturn = (props: StackHeaderProps) => {
    return <HeaderAuthUser {...props} />;
  };

  if (loading) {
    return null;
  }

  return (
    <Stack.Navigator
      initialRouteName={initialRoute.name}
      screenOptions={{header: headerReturn}}>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name="Modal"
          initialParams={{
            title: modal.title,
            description: modal.description,
            params: modal.params,
          }}
          component={NotifierModal}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="Book"
          initialParams={{bookId: initialRoute.bookId}}
          component={BookScreen}
        />
        <Stack.Screen name="Tab" component={TabNavigation} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppStack;
