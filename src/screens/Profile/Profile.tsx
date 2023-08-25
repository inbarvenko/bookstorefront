import React from 'react';
import {Text, View} from 'react-native';
import Photo from '../ui/Photo/Photo';
import Button from '../ui/Button/Button';
import {signOut} from '../../api/userApi';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import Footer from '../ui/Footer/Footer';


interface Props {
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
  
}

const ProfilePage: React.FC<Props> = ({navigation}: Props) => {
  return (
    <View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {/* <Photo /> */}
        <Text>Profile Screen</Text>
        <Button title="Sign Out" onPress={() => signOut()} />
      </View>
      <Footer navigation={navigation}/>
    </View>
  );
};

export default ProfilePage;
