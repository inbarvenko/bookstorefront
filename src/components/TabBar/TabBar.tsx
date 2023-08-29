import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './TabBar.module';
import {useAppSelector} from 'src/redux/hooks';
import Home from 'src/assets/icons/home.svg';
import Heart from 'src/assets/icons/Heart.svg';
import UserProfile from 'src/assets/icons/UserProfile.svg';
import Cart from 'src/assets/icons/Cart.svg';
import CustomTheme from 'src/theme';

const TabBar = ({state, navigation}: BottomTabBarProps) => {
  const index = state.index;
  const userEmail = useAppSelector(state => state.userData.email);

  return (
    <View style={styles.back}>
      <TouchableOpacity
        style={styles.opasity}
        accessibilityRole="button"
        accessibilityState={index === 0 ? {selected: true} : {}}
        onPress={() => navigation.navigate('Catalog')}>
        <Home
          width={27}
          height={27}
          fill={
            index === 0
              ? CustomTheme.colors.dark_blue
              : CustomTheme.colors.light
          }
        />
      </TouchableOpacity>
      {userEmail && (
        <TouchableOpacity
          style={styles.opasity}
          accessibilityRole="button"
          accessibilityState={index === 3 ? {selected: true} : {}}
          onPress={() => navigation.navigate('Busket')}>
          <Heart
            width={28}
            height={28}
            fill={
              index === 3
                ? CustomTheme.colors.dark_blue
                : CustomTheme.colors.light
            }
          />
        </TouchableOpacity>
      )}

      {userEmail && (
        <TouchableOpacity
          style={styles.opasity}
          accessibilityRole="button"
          accessibilityState={index === 2 ? {selected: true} : {}}
          onPress={() => navigation.navigate('Favorites')}>
          <Cart
            width={28}
            height={28}
            fill={
              index === 2
                ? CustomTheme.colors.dark_blue
                : CustomTheme.colors.light
            }
          />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.opasity}
        accessibilityRole="button"
        accessibilityState={index === 1 ? {selected: true} : {}}
        onPress={() => navigation.navigate(userEmail ? 'Profile' : 'Auth')}>
        <UserProfile
          width={28}
          height={28}
          fill={
            index === 1
              ? CustomTheme.colors.dark_blue
              : CustomTheme.colors.light
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;
