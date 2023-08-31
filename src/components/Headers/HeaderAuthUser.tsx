import * as React from 'react';
import {View, Image} from 'react-native';
import Input from 'src/components/Input';
import {getStyle} from './Header.styles';
import CustomTheme from 'src/theme';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {useAppSelector} from 'src/redux/hooks';
import Toggler from '../Toggler/Toggler';

const HeaderAuthUser: React.FC<BottomTabHeaderProps> = (
  _props: BottomTabHeaderProps,
) => {
  const theme = useAppSelector(state => state.appData.theme);
  const styles = getStyle({theme});

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={
            theme === 'light'
              ? require('src/assets/img/logo.png')
              : require('src/assets/img/logo_white.png')
          }
        />
        <Toggler />
      </View>
      <Input
        image={require('src/assets/img/Search.png')}
        placeholder={'Search'}
        hintColor={CustomTheme.colors[theme].dark_grey}
        upPlaceholder={true}
        textStyle={{color: CustomTheme.colors[theme].dark_blue}}
        containerStyle={styles.input}
        onBlur={() => {
          //Написать логику поиска книги или автора
        }}
      />
    </View>
  );
};

export default HeaderAuthUser;
