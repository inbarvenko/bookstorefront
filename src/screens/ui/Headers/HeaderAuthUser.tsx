import * as React from 'react';
import {View, Image, Text} from 'react-native';
import Button from '../Button/Button';
import Input from '../Input/Input';
import {styles} from './Header.module';
import CustomTheme from '../../../theme';
import {useRoute} from '@react-navigation/native';

interface Props {
  navigation: any;
}

const HeaderAuthUser: React.FC<Props> = ({navigation}) => {
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
          onPress={() => navigation.navigate('Home')}>
          Catalog
        </Text>
        <Button
          title="Log In/ Sign Up"
          colorText={CustomTheme.colors.light}
          fontSize={12}
          height={38}
          width={135}
          onPress={() => navigation.navigate((route.name === 'SignIn') ? 'SignUp' : 'SignIn')}
        />
      </View>
      <Input
        image={require('../../../../assets/img/Search.png')}
        placeholder={'Search'}
        hintColor={CustomTheme.colors.dark_grey}
        textStyle={{color: CustomTheme.colors.dark_blue}}
        onBlur={() => {}}
      />
    </View>
  );
};

export default HeaderAuthUser;
