import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {getStyle} from './TabBar.styles';
import {useAppSelector} from 'src/redux/hooks';
import CustomTheme from 'src/theme';

import Home from 'src/assets/icons/dark/home.svg';
import Favorites from 'src/assets/icons/dark/Heart.svg';
import UserProfile from 'src/assets/icons/dark/UserProfile.svg';
import Busket from 'src/assets/icons/dark/Cart.svg';
import HomeLight from 'src/assets/icons/light/Home_light.svg';
import FavoritesLight from 'src/assets/icons/light/Heart_light.svg';
import UserProfileLight from 'src/assets/icons/light/UserProfile_light.svg';
import BusketLight from 'src/assets/icons/light/Busket_light.svg';

const TabBar = ({state, navigation}: BottomTabBarProps) => {
  const theme = useAppSelector(state => state.appData.theme);
  const styles = getStyle({theme});

  const choosePicture = (route: string, focus: boolean) => {
    const svgProps = {
      width: 27,
      height: 27,
      fill: focus
        ? CustomTheme.colors[theme].dark_blue
        : CustomTheme.colors[theme].light,
    };

    if (theme === 'light') {
      switch (route) {
        case 'Catalog':
          return <Home {...svgProps} />;
        case 'Busket':
          return <Busket {...svgProps} />;
        case 'Favorites':
          return <Favorites {...svgProps} />;

        case 'Profile':
          return <UserProfile {...svgProps} />;

        case 'Auth':
          return <UserProfile {...svgProps} />;
      }
    } else {
      switch (route) {
        case 'Catalog':
          return <HomeLight {...svgProps} />;
        case 'Busket':
          return <BusketLight {...svgProps} />;

        case 'Favorites':
          return <FavoritesLight {...svgProps} />;

        case 'Auth':
          return <UserProfileLight {...svgProps} />;

        case 'Profile':
          return <UserProfileLight {...svgProps} />;
      }
    }
  };

  return (
    <View style={styles.back}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name);
        };

        return (
          <TouchableOpacity
            key={'button' + Math.random()}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            onPress={onPress}
            style={styles.opasity}>
            {choosePicture(route.name, isFocused)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
