import * as React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import {styles} from './Photo.module'

export interface IAppProps {
  user_photo?: Image | ImageSourcePropType;
}

const Photo = (props: IAppProps) => {
  return (
    <View>
      <Image
      style={styles.photo_user}
        source={
          props.user_photo
            ? props.user_photo
            : require('../../../../assets/img/userlogo.png')
        }
      />
      <Image 
      style={styles.photo_icon}
      source={require('../../../../assets/img/button_photo.png')}
      />
    </View>
  );
};

export default Photo;
