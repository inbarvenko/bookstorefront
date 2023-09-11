import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from './NotifierModal.styles';
import Button from '../Button/Button';
import {setNotification} from 'src/redux/slices/appReducer';
import {useAppDispatch} from 'src/redux/hooks';
import PoppinsText from '../PoppinsText/PoppinsText';

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
  const dispatch = useAppDispatch();

  const onContinue = () => {
    dispatch(setNotification(true));

    toClose();
  };

  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      onBackdropPress={toClose}
      hideModalContentWhileAnimating>
      <View style={[styles.container, styles.modal]}>
        <PoppinsText style={styles.title}>{title}</PoppinsText>
        <PoppinsText style={styles.description}>{description}</PoppinsText>
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
