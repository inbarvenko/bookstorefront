import * as React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Input from '../Input/Input';
import {styles} from './Header.module';
import CustomTheme from '../../../theme';
import {useRoute} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

interface Props {
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
  
}

const HeaderAuthUser: React.FC<Props> = ({navigation}: Props) => {
  const route = useRoute();

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../../assets/img/logo.png')}
        />
        <Text
          style={styles.catalog}
          onPress={() => navigation.navigate('Catalog')}>
          Catalog
        </Text>
        <View style={styles.rightButtons}>
          <TouchableOpacity>
            <Image
              source={require('../../../../assets/img/button_cart.png')}
              style={[styles.button, {height: 35, width: 35}]}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../../../../assets/img/button_save.png')}
              style={styles.button}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('../../../../assets/img/button_user_profile.png')}
              style={styles.button}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Input
        image={require('../../../../assets/img/Search.png')}
        placeholder={'Search'}
        containerStyle = {styles.input}
        hintColor={CustomTheme.colors.dark_grey}
        textStyle={{color: CustomTheme.colors.dark_blue}}
        onBlur={() => {}}
      />
    </View>
  );
};

export default HeaderAuthUser;
