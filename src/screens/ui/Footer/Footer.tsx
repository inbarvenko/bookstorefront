import {Image, Text, View} from 'react-native';
import {styles} from './Footer.module';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../../assets/img/logo_white.png')} />
      <View style={styles.contact}>
        <Text style={styles.text}>tranthuy.nute@gmail.com</Text>
        <Text style={styles.text}>(480) 555-0103</Text>
      </View>
      <View style={styles.navigation}>
        <Text style={styles.text}>Home Page</Text>
        <Text style={styles.text}>Catalog</Text>
        <Text style={styles.text}>My Account</Text>
        <Text style={styles.text}>Cart</Text>
      </View>

      <View style={styles.container_map}>
        <Text style={styles.text}>6391 Elgin St. Celina, Delaware 10299</Text>
        <Image style={styles.map_image} source={require('../../../../assets/img/map.png')} />
      </View>
    </View>
  );
};

export default Footer;
