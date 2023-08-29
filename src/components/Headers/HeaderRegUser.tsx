import * as React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Input from '@/components/Input/Input';
import {styles} from './Header.styles';
import CustomTheme from '@/theme';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Catalog: undefined;
  Profile: undefined;
};

const HeaderAuthUser: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('+/logo.png')} />
        <Text
          style={styles.catalog}
          onPress={() => navigation.navigate('Catalog')}>
          Catalog
        </Text>
        <View style={styles.rightButtons}>
          <TouchableOpacity>
            <Image
              source={require('+/button_cart.png')}
              style={[styles.button, styles.buttonBig]}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('+/button_save.png')}
              style={styles.button}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require('+/button_user_profile.png')}
              style={styles.button}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Input
        image={require('+/Search.png')}
        placeholder={'Search'}
        upPlaceholder={true}
        containerStyle={styles.input}
        hintColor={CustomTheme.colors.dark_grey}
        textStyle={{color: CustomTheme.colors.dark_blue}}
        onBlur={() => {}}
      />
    </View>
  );
};

export default HeaderAuthUser;
