import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  navigation: any
}

const HomePage: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomePage;