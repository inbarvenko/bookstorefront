import React from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from './NotifierModal.styles';
import Button from '../Button/Button';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from 'src/navigation/AppStack';

type Props = {
  title: string;
  description: string;
  params?: string;
  foreground?: boolean;
  isVisible: boolean;
  toClose: () => void;
};

export const NotifierModal: React.FC<Props> = ({
  title,
  description,
  params,
  isVisible,
  toClose,
}: Props) => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const onContinue = () => {
    navigation.navigate('Book', {bookId: params!});
    toClose();
  };

  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      onBackdropPress={toClose}
      hideModalContentWhileAnimating>
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
