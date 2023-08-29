import * as React from 'react';
import {View, Image, Text} from 'react-native';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import {styles} from './Header.styles';
import CustomTheme from '@/theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Catalog: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

const HeaderAuthUser: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute();

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('+/logo.png')} />
        <Text
          style={styles.catalog}
          onPress={() => navigation.navigate('Catalog')}>
          Catalog
        </Text>
        <Button
          title="Log In/ Sign Up"
          colorText={CustomTheme.colors.light}
          fontSize={12}
          height={38}
          width={135}
          onPress={() =>
            navigation.navigate(route.name === 'SignIn' ? 'SignUp' : 'SignIn')
          }
        />
      </View>
      <Input
        image={require('+/Search.png')}
        placeholder={'Search'}
        hintColor={CustomTheme.colors.dark_grey}
        upPlaceholder={true}
        textStyle={{color: CustomTheme.colors.dark_blue}}
        containerStyle={styles.input}
        onBlur={() => {}}
      />
    </View>
  );
};

export default HeaderAuthUser;
