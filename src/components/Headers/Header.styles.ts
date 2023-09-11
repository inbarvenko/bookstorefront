import {StyleSheet} from 'react-native';
import CustomTheme from 'src/theme';

import {Theme} from 'src/types/theme';

export const getStyle = (props: Theme) =>
  StyleSheet.create({
    header: {
      paddingTop: 20,
      paddingHorizontal: 15,
      width: '100%',
      height: 120,

      backgroundColor: CustomTheme.colors[props.theme].background,
    },
    container: {
      width: '100%',
      paddingBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',

      alignItems: 'center',
    },
    logo: {
      width: 62,
      height: 31,
    },
    catalog: {
      fontFamily: 'Poppins500',
      lineHeight: 21,
      color: 'rgba(0, 0, 0, 1)',
    },
    button: {
      height: 32,
      width: 32,
    },
    rightButtons: {
      height: 33,
      width: 135,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    input: {
      height: 64,
    },
    buttonBig: {height: 35, width: 35},
  });
