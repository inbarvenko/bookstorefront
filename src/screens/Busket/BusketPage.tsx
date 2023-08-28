import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {styles} from './Busket.module';
import Button from '../ui/Button/Button';
import CustomTheme from '../../theme';

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
}

const BusketPage: React.FC<Props> = ({navigation}: Props) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'rgba(255, 255, 255, 1)'}}>
      <View style={styles.screenContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.textTitle}>Your cart is empty</Text>
          <Text style={styles.text}>
            Add items to cart to make a purchase. Go to the catalogue now.
          </Text>
          <Button onPress={() => navigation.navigate('Home')} title="Go to catalog" colorText={CustomTheme.colors.light} />
        </View>
        <Image style={styles.img} source={require('../../../assets/img/books.png')}></Image>
      </View>
    </ScrollView>
  );
};

export default BusketPage;
