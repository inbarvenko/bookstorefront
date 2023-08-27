import {Image, Text, View} from 'react-native';
import {styles} from './Footer.module';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {useAppSelector} from '../../../redux/hooks';

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
};

const Footer = ({navigation}: Props) => {
  const userEmail = useAppSelector(state => state.userData.email);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../../assets/img/logo_white.png')}
      />
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
        <Image
          style={styles.map_image}
          source={require('../../../../assets/img/map.png')}
        />
      </View>
    </View>
  );
};

export default Footer;