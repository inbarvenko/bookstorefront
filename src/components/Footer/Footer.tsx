import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './Footer.styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {useAppSelector} from '@/redux/hooks';
import {useNavigation} from '@react-navigation/native';

type RootStackParamList = {
  Catalog: undefined;
  SignIn: undefined;
  Profile: undefined;
};

const Footer: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const userEmail = useAppSelector(state => state.userData.email);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('+/logo_white.png')} />
      <View style={styles.contact}>
        <Text style={styles.text}>tranthuy.nute@gmail.com</Text>
        <Text style={styles.text}>(480) 555-0103</Text>
      </View>
      <View style={styles.navigation}>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('Catalog')}>
          Home Page
        </Text>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('Catalog')}>
          Catalog
        </Text>
        <Text
          style={styles.text}
          onPress={() => {
            if (!userEmail) {
              navigation.navigate('SignIn');
              return;
            }
            navigation.navigate('Profile');
          }}>
          My Account
        </Text>
      </View>

      <View style={styles.container_map}>
        <Text style={styles.text}>6391 Elgin St. Celina, Delaware 10299</Text>
        <Image style={styles.map_image} source={require('+/map.png')} />
      </View>
    </View>
  );
};

export default Footer;
