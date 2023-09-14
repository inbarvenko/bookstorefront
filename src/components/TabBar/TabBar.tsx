import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity, useWindowDimensions} from 'react-native';
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
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';

const TabBar = ({state, navigation}: BottomTabBarProps) => {
  const theme = useAppSelector(state => state.appData.theme);

  const {width} = useWindowDimensions();
  const TABBAR_WIDTH = width - 2 * 15;
  const TAB_WIDTH = TABBAR_WIDTH / state.routes.length - 2;

  const styles = getStyle({
    theme: {theme},
    tabBarWidth: TABBAR_WIDTH,
    tabWidth: TAB_WIDTH,
  });

  const translateAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(TAB_WIDTH * state.index, {
            mass: 2,
            damping: 20,
            stiffness: 126,
            overshootClamping: false,
            restDisplacementThreshold: 5.43,
            restSpeedThreshold: 2,
          }),
        },
      ],
    };
  });

  const choosePicture = (route: string, focus: boolean) => {
    const svgProps = {
      width: 27,
      height: 27,
      fill: focus
        ? CustomTheme.colors[theme].blob
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
    <View style={[styles.back]}>
      <Animated.View style={[styles.slidingTab, translateAnimation]}>
        <View style={styles.circle} />
      </Animated.View>
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
