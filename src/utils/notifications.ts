import {Vibration} from 'react-native';
import {Notifier, Easing} from 'react-native-notifier';

export const cannotGetData = (title: string) => {
  return Notifier.showNotification({
    title: `Cannot get ${title}`,
    description: `Reload to try to get ${title} again`,
    duration: 0,
    showAnimationDuration: 800,
    showEasing: Easing.bounce,
    hideOnPress: true,
  });
};

export const cannotSendData = (title: string) => {
  return Notifier.showNotification({
    title: `Cannot send your ${title}`,
    description: `Reload screen to send your ${title} again`,
    duration: 0,
    showAnimationDuration: 800,
    showEasing: Easing.bounce,
    hideOnPress: true,
  });
};

export const notificationReact = (
  title: string,
  body: string,
  openModal: () => void,
) => {
  return Notifier.showNotification({
    title,
    description: body,
    duration: 0,
    onShown: () => Vibration.vibrate(300),
    showAnimationDuration: 800,
    showEasing: Easing.bounce,
    onPress: openModal,
  });
};
