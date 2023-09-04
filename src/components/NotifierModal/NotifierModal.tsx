import React from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from './NotifierModal.styles';
import Button from '../Button/Button';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from 'src/navigation/AppStack';

type ParamList = {
  Detail: {
    title: string;
    description: string;
    params?: string;
    foreground?: boolean;
  };
};

export const NotifierModal: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const route = useRoute<RouteProp<ParamList, 'Detail'>>();

  const {title, description, params, foreground} = route.params!;

  const onContinue = () => {
    navigation.navigate('Book', {bookId: params!});
  };

  const toClose = () => {
    if (foreground) {
      navigation.goBack();
    } else {
      navigation.navigate('Tab');
    }
  };

  return (
    <Modal
      style={styles.modal}
      isVisible={true}
      onBackdropPress={toClose}
      hideModalContentWhileAnimating={true}>
      <View style={[styles.container, styles.modal]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        {params && (
          <View style={styles.buttons}>
            <Button width={60} title="Close" onPress={toClose} />
            <Button width={60} title="Open" onPress={onContinue} />
          </View>
        )}
      </View>
    </Modal>
  );
};

export default NotifierModal;
