import * as React from 'react';
import {View, Image, Text} from 'react-native';
import Button from '../Button/Button';
import Input from '../Input/Input';
import {styles} from './Header.module';
import CustomTheme from '../../../theme';
import {useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import {useAppSelector} from '../../../redux/hooks';

interface Props {
  navigation:
    | NativeStackNavigationProp<ParamListBase, string, undefined>
    | BottomTabNavigationProp<ParamListBase, string, undefined>
    | StackNavigationProp<ParamListBase, string, undefined>;
}

const HeaderAuthUser: React.FC<Props> = ({navigation}: Props) => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../../assets/img/logo.png')}
        />
      </View>
      <Input
        image={require('../../../../assets/img/Search.png')}
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
