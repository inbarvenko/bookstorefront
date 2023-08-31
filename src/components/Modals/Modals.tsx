import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from './Modals.styles';
import Camera from 'src/assets/icons/Camera.svg';
import Picture from 'src/assets/icons/Image.svg';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useAppDispatch} from 'src/redux/hooks';
import {sentUserPhoto} from 'src/api/userApi';
import {setPhoto} from 'src/redux/slices/userReducer';

type Props = {title: string; isVisible: boolean; toClose: () => void};

export const Modals: React.FC<Props> = ({title, isVisible, toClose}: Props) => {
  const dispatch = useAppDispatch();

  const openCamera = () => {
    launchCamera({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker from camera');
      } else if (response.errorCode) {
        console.log(
          'ImagePicker Error: ',
          response.errorCode,
          response.errorMessage,
        );
      } else {
        console.log('Image taken: ', response.assets![0].fileName);

        try {
          sentUserPhoto(response.assets![0].uri!).then(data => {
            if (!data) {
              throw 'Cannot get photo from camera';
            }
            dispatch(setPhoto(response.assets![0].uri!));
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const openGallery = () => {
    launchImageLibrary({mediaType: 'photo', includeBase64: false}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker from gallery');
      } else if (response.errorCode) {
        console.log(
          'ImagePicker Error: ',
          response.errorCode,
          response.errorMessage,
        );
      } else {
        console.log('Image taken: ', response.assets![0].uri);

        try {
          sentUserPhoto(response.assets![0].uri!).then(data => {
            if (!data) {
              throw 'Cannot get photo from gallery';
            }
            dispatch(setPhoto(response.assets![0].uri!));
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={toClose}
      hideModalContentWhileAnimating={true}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={openCamera} style={styles.circle}>
            <Camera width={35} height={35} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openGallery} style={styles.circle}>
            <Picture width={35} height={35} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Modals;
