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