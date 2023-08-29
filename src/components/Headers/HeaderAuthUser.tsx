import * as React from 'react';
import {View, Image} from 'react-native';
import Input from 'src/components/Input';
import {styles} from './Header.styles';
import CustomTheme from 'src/theme';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';

const HeaderAuthUser: React.FC<BottomTabHeaderProps> = (
  _props: BottomTabHeaderProps,
) => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('src/assets/img/logo.png')}
        />
      </View>
      <Input
        image={require('src/assets/img/Search.png')}
        placeholder={'Search'}
        hintColor={CustomTheme.colors.dark_grey}
        upPlaceholder={true}
        textStyle={{color: CustomTheme.colors.dark_blue}}
        containerStyle={styles.input}
        onBlur={() => {
          //Написать логику поиска книги или автора
        }}
      />
    </View>
  );
};

export default HeaderAuthUser;
