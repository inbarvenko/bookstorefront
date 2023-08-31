import * as React from 'react';
import {View, Image} from 'react-native';
import Input from 'src/components/Input';
import {getStyle} from './Header.styles';
import CustomTheme from 'src/theme';
import {useAppSelector} from 'src/redux/hooks';
import Toggler from '../Toggler/Toggler';
import Logo from 'src/assets/icons/logo.svg';
import {images} from 'src/constants/images';
import {StackHeaderProps} from '@react-navigation/stack';

const HeaderAuthUser: React.FC<StackHeaderProps> = (
  _props: StackHeaderProps,
) => {
  const theme = useAppSelector(state => state.appData.theme);
  const styles = getStyle({theme});

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        {theme !== 'light' ? (
          <Image style={styles.logo} source={images.logo_white} />
        ) : (
          <Logo width={62} height={31} />
        )}
        <Toggler />
      </View>
      <Input
        image={images.search_icon}
        placeholder={'Search'}
        hintColor={CustomTheme.colors[theme].dark_grey}
        upPlaceholder={true}
        textStyle={{color: CustomTheme.colors[theme].dark_blue}}
        containerStyle={styles.input}
        onBlur={() => {
          //TODO: Написать логику поиска книги или автора
        }}
      />
    </View>
  );
};

export default HeaderAuthUser;
