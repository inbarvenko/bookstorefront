import React from 'react';
import {Text, View} from 'react-native';
import Button from '@/components/Button/Button';
import {signOut} from '@/api/userApi';

const ProfilePage: React.FC = () => {
  return (
    <View>
      <View>
        <Text>Profile Screen</Text>
        <Button title="Sign Out" onPress={() => signOut()} />
      </View>
    </View>
  );
};

export default ProfilePage;
