import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {getStyle} from './TabBar.styles';
import {useAppSelector} from 'src/redux/hooks';
import CustomTheme from 'src/theme';
import {icons} from 'src/constants/icons';

const TabBar = ({state, navigation}: BottomTabBarProps) => {
  const theme = useAppSelector(state => state.appData.theme);
  const styles = getStyle({theme});

  return (
    <View style={styles.back}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name);
        };

        const svg_props = {
          width: 27,
          height: 27,
          fill: isFocused
            ? CustomTheme.colors[theme].dark_blue
            : CustomTheme.colors[theme].light,
        };

        let svg_icon = <icons.Home {...svg_props} />;

        if (theme === 'light') {
          switch (route.name) {
            case 'Busket':
              svg_icon = <icons.Busket {...svg_props} />;
              break;
            case 'Favorites':
              svg_icon = <icons.Favorites {...svg_props} />;
              break;
            case 'Profile':
              svg_icon = <icons.UserProfile {...svg_props} />;
              break;
            case 'Auth':
              svg_icon = <icons.UserProfile {...svg_props} />;
              break;
          }
        } else {
          svg_icon = <icons.Home_light {...svg_props} />;
          switch (route.name) {
            case 'Busket':
              svg_icon = <icons.Busket_light {...svg_props} />;
              break;
            case 'Favorites':
              svg_icon = <icons.Favorites_light {...svg_props} />;
              break;
            case 'Auth':
              svg_icon = <icons.UserProfile_light {...svg_props} />;
              break;
            case 'Profile':
              svg_icon = <icons.UserProfile_light {...svg_props} />;
              break;
          }
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            onPress={onPress}
            style={styles.opasity}>
            {svg_icon}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
