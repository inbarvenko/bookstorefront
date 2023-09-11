import {StyleSheet} from 'react-native';
import CustomTheme from 'src/theme';
import {Theme} from 'src/types/theme';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    default: {
      fontFamily: 'Poppins400',
      fontSize: 14,
      color: CustomTheme.colors[theme.theme].dark_blue,
    },
  });
