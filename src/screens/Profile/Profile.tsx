import React from 'react';
import {Text, View} from 'react-native';
import Photo from '../ui/Photo/Photo';
import Button from '../ui/Button/Button';
import {signOut} from '../../api/userApi';

interface Props {
  navigation: any;
}

const ProfilePage: React.FC<Props> = ({navigation}: Props) => {
  return (
    <View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {/* <Photo /> */}
        <Text>Profile Screen</Text>
        <Button title="Sign Out" onPress={() => signOut()} />
      </View>
    </View>
  );
};

export default ProfilePage;
