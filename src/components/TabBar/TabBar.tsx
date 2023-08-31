import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {getStyle} from './TabBar.styles';
import {useAppSelector} from 'src/redux/hooks';
import CustomTheme from 'src/theme';

import Home from 'src/assets/icons/dark/home.svg';
import Heart from 'src/assets/icons/dark/Heart.svg';
import UserProfile from 'src/assets/icons/dark/UserProfile.svg';
import Cart from 'src/assets/icons/dark/Cart.svg';
import Home_light from 'src/assets/icons/light/Home_light.svg';
import Heart_light from 'src/assets/icons/light/Heart_light.svg';
import UserProfile_light from 'src/assets/icons/light/UserProfile_light.svg';
import Cart_light from 'src/assets/icons/light/Cart_light.svg';

const TabBar = ({state, navigation}: BottomTabBarProps) => {
  const index = state.index;
  const userEmail = useAppSelector(state => state.userData.email);
  const theme = useAppSelector(state => state.appData.theme);
  const styles = getStyle({theme});

  return (
    <View style={styles.back}>
      <TouchableOpacity
        style={styles.opasity}
        accessibilityRole="button"
        accessibilityState={index === 1 ? {selected: true} : {}}
        onPress={() => navigation.navigate('Catalog')}>
        {theme === 'light' ? (
          <Home
            width={27}
            height={27}
            stroke={CustomTheme.colors[theme].dark_blue}
            fill={
              index === 1
                ? CustomTheme.colors[theme].dark_blue
                : CustomTheme.colors[theme].light
            }
          />
        ) : (
          <Home_light
            width={27}
            height={27}
            stroke={CustomTheme.colors[theme].dark_blue}
            fill={
              index === 1
                ? CustomTheme.colors[theme].dark_blue
                : CustomTheme.colors[theme].light
            }
          />
        )}
      </TouchableOpacity>
      {userEmail && (
        <TouchableOpacity
          style={styles.opasity}
          accessibilityRole="button"
          accessibilityState={index === 3 ? {selected: true} : {}}
          onPress={() => navigation.navigate('Busket')}>
          {theme === 'light' ? (
            <Heart
              width={28}
              height={28}
              fill={
                index === 3
                  ? CustomTheme.colors[theme].dark_blue
                  : CustomTheme.colors[theme].light
              }
            />
          ) : (
            <Heart_light
              width={28}
              height={28}
              fill={
                index === 3
                  ? CustomTheme.colors[theme].dark_blue
                  : CustomTheme.colors[theme].light
              }
            />
          )}
        </TouchableOpacity>
      )}

      {userEmail && (
        <TouchableOpacity
          style={styles.opasity}
          accessibilityRole="button"
          accessibilityState={index === 2 ? {selected: true} : {}}
          onPress={() => navigation.navigate('Favorites')}>
          {theme === 'light' ? (
            <Cart
              width={28}
              height={28}
              fill={
                index === 2
                  ? CustomTheme.colors[theme].dark_blue
                  : CustomTheme.colors[theme].light
              }
            />
          ) : (
            <Cart_light
              width={28}
              height={28}
              fill={
                index === 2
                  ? CustomTheme.colors[theme].dark_blue
                  : CustomTheme.colors[theme].light
              }
            />
          )}
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.opasity}
        accessibilityRole="button"
        accessibilityState={index === 0 ? {selected: true} : {}}
        onPress={() => navigation.navigate(userEmail ? 'Profile' : 'Auth')}>
        {theme === 'light' ? (
          <UserProfile
            width={28}
            height={28}
            fill={
              index === 0
                ? CustomTheme.colors[theme].dark_blue
                : CustomTheme.colors[theme].light
            }
          />
        ) : (
          <UserProfile_light
            width={28}
            height={28}
            fill={
              index === 0
                ? CustomTheme.colors[theme].dark_blue
                : CustomTheme.colors[theme].light
            }
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;
